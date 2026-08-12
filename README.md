# Java Journey ☕

Plataforma educativa interactiva para aprender Java paso a paso. Diseñada para estudiantes de 2do BT Tecnologías de la Información – UTU.

**URL:** https://java-journey-beta.vercel.app

---

## Características

- 31 temas de Java organizados en acordeón
- Lecciones con editor de código y verificación de salida en el servidor
- Quiz de opción múltiple al final de cada tema
- Sistema de progreso por estudiante (persistido en base de datos)
- Panel docente para gestión de temas, estudiantes y progreso del grupo
- **Seguridad:** respuestas correctas y salidas esperadas nunca se envían al cliente

---

## Arquitectura

```
java-journey/
├── index.html              # Página principal (UI completa)
├── java-journey-oc.js      # Lógica del cliente (JS vanilla)
├── vercel.json             # Configuración Vercel
├── package.json            # Dependencias Node.js
├── api/
│   ├── config.js           # GET  /api/config
│   ├── verify.js           # POST /api/verify
│   ├── auth/
│   │   ├── student.js      # POST /api/auth/student
│   │   └── teacher.js      # POST /api/auth/teacher
│   ├── student/
│   │   └── progress.js     # GET  /api/student/progress
│   ├── quiz/
│   │   ├── questions.js    # GET  /api/quiz/questions
│   │   ├── answer.js       # POST /api/quiz/answer
│   │   └── complete.js     # POST /api/quiz/complete
│   └── teacher/
│       ├── topics.js       # PUT  /api/teacher/topics
│       └── students/
│           ├── index.js    # GET + POST /api/teacher/students
│           └── [id].js     # DELETE + PUT /api/teacher/students/:id
├── lib/
│   ├── db.js               # Conexión Neon (singleton)
│   ├── auth.js             # JWT helpers, hashPassword
│   ├── quizzes.js          # ⚠ Datos de quizzes (solo servidor)
│   └── expected-outputs.js # ⚠ Salidas esperadas (solo servidor)
└── db/
    └── schema.sql          # Esquema PostgreSQL
```

---

## Variables de entorno

Configurar en Vercel → Settings → Environment Variables:

| Variable | Descripción |
|---|---|
| `DATABASE_URL` | Connection string de Neon PostgreSQL |
| `JWT_SECRET` | Clave secreta para firmar tokens JWT (larga y aleatoria) |
| `TEACHER_PASSWORD_HASH` | SHA-256 de la contraseña docente (ver abajo) |

### Obtener el hash de la contraseña docente

```powershell
# En PowerShell:
$pass = "tu_contraseña_aqui"
$bytes = [System.Text.Encoding]::UTF8.GetBytes($pass)
$sha256 = [System.Security.Cryptography.SHA256]::Create()
$hash = $sha256.ComputeHash($bytes)
($hash | ForEach-Object { $_.ToString("x2") }) -join ""
```

---

## Base de datos

Ejecutar `db/schema.sql` en la consola SQL de Neon:

```sql
CREATE TABLE IF NOT EXISTS students (
  id            SERIAL PRIMARY KEY,
  nombre        VARCHAR(100) NOT NULL,
  apellido      VARCHAR(100) NOT NULL,
  grupo         VARCHAR(50)  NOT NULL,
  password_hash VARCHAR(64)  NOT NULL,
  created_at    TIMESTAMP DEFAULT NOW(),
  last_access   TIMESTAMP,
  UNIQUE(nombre, apellido)
);

CREATE TABLE IF NOT EXISTS lesson_progress (
  student_id   INT REFERENCES students(id) ON DELETE CASCADE,
  lesson_id    INT NOT NULL,
  completed_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (student_id, lesson_id)
);

CREATE TABLE IF NOT EXISTS quiz_progress (
  student_id   INT REFERENCES students(id) ON DELETE CASCADE,
  topic_id     INT NOT NULL,
  score        INT,
  completed_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (student_id, topic_id)
);

CREATE TABLE IF NOT EXISTS config (
  key   VARCHAR(50) PRIMARY KEY,
  value JSONB
);

INSERT INTO config (key, value)
VALUES ('enabled_topics', '[1]')
ON CONFLICT (key) DO NOTHING;
```

---

## Flujo de uso

### Para el estudiante

1. Ingresar a https://java-journey-beta.vercel.app
2. Completar el formulario de login (Nombre / Apellido / Contraseña)
3. Navegar por los temas habilitados por la docente
4. En cada lección: leer el contenido, ejecutar el código en el editor externo, ingresar la salida y verificar
5. Al completar todas las lecciones de un tema: rendir el quiz
6. El progreso queda guardado automáticamente

### Para la docente

1. Hacer **triple clic** en el ícono ☕ del encabezado
2. Ingresar la contraseña docente
3. El panel tiene tres pestañas:
   - **Temas:** habilitar/deshabilitar temas para el grupo
   - **Estudiantes:** crear cuentas, resetear contraseñas, eliminar estudiantes
   - **Progreso:** tabla con lecciones completadas, quizzes y puntaje promedio por estudiante; filtrable por grupo

---

## API

Todos los endpoints retornan JSON. Los que requieren autenticación usan `Authorization: Bearer <token>`.

| Método | Endpoint | Auth | Descripción |
|---|---|---|---|
| GET | `/api/config` | — | Temas habilitados |
| POST | `/api/auth/student` | — | Login estudiante → token JWT (7 días) |
| POST | `/api/auth/teacher` | — | Login docente → token JWT (8 horas) |
| GET | `/api/student/progress` | Estudiante | Lecciones y quizzes completados |
| POST | `/api/verify` | Estudiante | Verificar salida de lección |
| GET | `/api/quiz/questions?topicId=N` | Estudiante | Preguntas del quiz (sin respuestas) |
| POST | `/api/quiz/answer` | Estudiante | Verificar respuesta en servidor |
| POST | `/api/quiz/complete` | Estudiante | Guardar puntaje final del quiz |
| GET | `/api/teacher/students` | Docente | Listar estudiantes con progreso |
| POST | `/api/teacher/students` | Docente | Crear estudiante |
| DELETE | `/api/teacher/students/:id` | Docente | Eliminar estudiante |
| PUT | `/api/teacher/students/:id` | Docente | Resetear contraseña |
| PUT | `/api/teacher/topics` | Docente | Actualizar temas habilitados |

---

## Seguridad

- Las contraseñas se almacenan como SHA-256 (nunca en texto plano)
- Los tokens JWT expiran: estudiantes 7 días, docente 8 horas
- Las respuestas correctas de los quizzes **nunca se envían al cliente** — la verificación ocurre en el servidor (`api/quiz/answer.js`)
- Las salidas esperadas de las lecciones tampoco se exponen al cliente (`lib/expected-outputs.js`)
- Los headers incluyen `Cache-Control: no-store` donde corresponde para evitar caché de datos sensibles

---

## Stack técnico

- **Frontend:** HTML + JavaScript vanilla + Tailwind CSS (CDN)
- **Backend:** Vercel Serverless Functions (Node.js, CommonJS)
- **Base de datos:** Neon PostgreSQL (`@neondatabase/serverless`)
- **Autenticación:** JWT (`jsonwebtoken`)
- **Deploy:** GitHub → Vercel (automático en cada push a `main`)

---

## Créditos

Diseñada por Prof. Elizabeth Izquierdo con asistencia de Claude — [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
