// ─── TEMAS ────────────────────────────────────────────────────────────────────
const TOPICS = [
  { id: 1,  label: "Hola Mundo",                 lessons: [1, 2] },
  { id: 14, label: "Comentarios",                lessons: [27, 28] },
  { id: 2,  label: "Variables numéricas",        lessons: [3, 4] },
  { id: 4,  label: "Variables de texto",         lessons: [7, 8] },
  { id: 15, label: "Constantes",                 lessons: [29, 30] },
  { id: 16, label: "Conversión de tipos",        lessons: [31, 32] },
  { id: 5,  label: "Operaciones aritméticas",    lessons: [9, 10] },
  { id: 17, label: "Incremento y decremento",    lessons: [33, 34] },
  { id: 18, label: "Atajos aritméticos",         lessons: [35, 36] },
  { id: 19, label: "Operadores de comparación",  lessons: [37, 38] },
  { id: 20, label: "Operadores lógicos",         lessons: [39, 40] },
  { id: 3,  label: "Scanner",                    lessons: [5, 6] },
  { id: 21, label: "System.out.print",           lessons: [41, 42] },
  { id: 22, label: "Formato de salida",          lessons: [43, 44] },
  { id: 7,  label: "Condicional if / else",      lessons: [11, 12] },
  { id: 23, label: "Switch",                     lessons: [45, 46] },
  { id: 24, label: "Operador ternario",          lessons: [47, 48] },
  { id: 25, label: "Comparación de Strings",     lessons: [49, 50] },
  { id: 26, label: "Métodos de String",          lessons: [51, 52] },
  { id: 8,  label: "Bucle while",                lessons: [13, 14] },
  { id: 9,  label: "Bucle do-while",             lessons: [19, 20] },
  { id: 10, label: "Bucle for",                  lessons: [15, 16] },
  { id: 27, label: "Break y Continue",           lessons: [53, 54] },
  { id: 28, label: "Bucles anidados",            lessons: [55, 56] },
  { id: 6,  label: "Números Random",             lessons: [25, 26] },
  { id: 11, label: "Procedimientos",             lessons: [21, 22] },
  { id: 29, label: "Sobrecarga de métodos",      lessons: [57, 58] },
  { id: 12, label: "Funciones",                  lessons: [23, 24] },
  { id: 13, label: "Arrays",                     lessons: [17, 18] },
  { id: 30, label: "Proyecto Calculadora",       lessons: [59, 60] },
  { id: 31, label: "Desafíos Finales",           lessons: [61, 62] },
];

// ─── QUIZZES ─────────────────────────────────────────────────────────────────
const QUIZZES = [
  { topicId: 1, title: "Hola Mundo", questions: [
    { q: "¿Qué método imprime texto en la consola en Java?",
      opts: ["echo()", "console.log()", "System.out.println()", "print()"], correct: 2,
      exp: "System.out.println() es el método estándar para imprimir una línea en la consola Java." },
    { q: "En Java, el texto a imprimir debe estar entre comillas dobles.",
      opts: ["Verdadero", "Falso"], correct: 0,
      exp: "Los literales String usan comillas dobles. Las comillas simples están reservadas para char." },
    { q: "¿Qué imprimirá este código?", code: 'System.out.println("Java");',
      opts: ['"Java"', "Java", "Nothing is printed", 'System.out.println("Java")'], correct: 1,
      exp: "println imprime el texto sin las comillas que lo delimitan." },
    { q: 'Completa la sentencia: ___.out.println("Welcome!");',
      opts: ["Console", "Print", "System"], correct: 2,
      exp: "System es el objeto que contiene la salida estándar (out)." },
    { q: "Encuentra el error de sintaxis en la línea 3:", code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println(\'Hello World!\');\n    }\n}',
      opts: ["Falta el punto y coma", "El método se llama distinto", "Se usaron comillas simples en vez de dobles", "Falta la clase Main"], correct: 2,
      exp: "Los String deben ir entre comillas dobles. Las comillas simples son para char y solo admiten un carácter." },
  ]},
  { topicId: 2, title: "Variables numéricas", questions: [
    { q: "¿Qué almacena este código?", code: "double result = 7.5;",
      opts: ["0.0", "7", '"7.5"', "7.5"], correct: 3,
      exp: "El tipo double almacena números decimales, y 7.5 se asigna directamente a la variable." },
    { q: "¿Cuál es la declaración correcta para almacenar -15?",
      opts: ["double x = -15.0;", "int x = -15;", "number x = -15;", "INT x = -15;"], correct: 1,
      exp: "int almacena números enteros, incluyendo valores negativos como -15." },
    { q: "Una variable de tipo int puede almacenar el valor 3.14.",
      opts: ["Verdadero", "Falso"], correct: 1,
      exp: "int solo almacena enteros sin decimales. Para 3.14 se necesita double." },
    { q: "Encuentra el error de tipo en la declaración:", code: "quantity int = 10;",
      opts: ["Falta el punto y coma", "El tipo de dato debe ir antes del nombre", "int no puede almacenar 10", "Falta la palabra clave var"], correct: 1,
      exp: "La sintaxis correcta es: tipo nombre = valor; El tipo siempre va primero: int quantity = 10;" },
    { q: "¿Qué tipo se usa para declarar un precio de 49.99?",
      opts: ["Double", "int", "double", "Int"], correct: 2,
      exp: "double (en minúscula) es el tipo para números con punto decimal como precios." },
  ]},
  { topicId: 3, title: "Scanner", questions: [
    { q: "¿Qué clase de Java se usa para leer datos desde el teclado?",
      opts: ["Keyboard", "Input", "Scanner", "Reader"], correct: 2,
      exp: "Scanner es la clase del paquete java.util que permite leer la entrada estándar." },
    { q: "¿Qué import se necesita para usar Scanner?",
      opts: ["import java.io.Scanner;", "import java.util.Scanner;", "import java.Scanner;", "No necesita import"], correct: 1,
      exp: "Scanner pertenece al paquete java.util, por eso se importa con java.util.Scanner." },
    { q: "¿Qué argumento recibe new Scanner(___) para leer del teclado?",
      opts: ["System.out", "System.in", "new Keyboard()", '"teclado"'], correct: 1,
      exp: "System.in representa la entrada estándar (el teclado). System.out es la salida." },
    { q: "¿Qué método de Scanner lee una línea de texto completa?",
      opts: ["nextString()", "readLine()", "nextLine()", "getLine()"], correct: 2,
      exp: "nextLine() lee toda la línea que escribe el usuario hasta presionar Enter." },
    { q: "¿Qué método de Scanner se usa para leer un número entero?",
      opts: ["readInt()", "nextInt()", "getInt()", "scanInt()"], correct: 1,
      exp: "nextInt() lee el próximo token como entero. Para decimales se usa nextDouble()." },
  ]},
  { topicId: 4, title: "Variables de texto", questions: [
    { q: "¿Cuál declaración inicializa correctamente un String?",
      opts: ["String name = 'Hello';", 'string name = "Hello";', 'String name = "Hello";', "STRING name = Hello;"], correct: 2,
      exp: "String (con S mayúscula) usa comillas dobles. Las comillas simples son para char." },
    { q: "¿Qué tipo de dato es el valor 'b' (entre comillas simples)?",
      opts: ["boolean", "String", "char", "int"], correct: 2,
      exp: "Un solo carácter entre comillas simples representa un valor char." },
    { q: "¿Puede un char almacenar la cadena \"Hola\"?",
      opts: ["Sí, si la cadena es corta", "No, char solo contiene un carácter", "Sí, siempre", "Solo con comillas simples"], correct: 1,
      exp: "char solo puede contener exactamente un carácter. Para texto de varios caracteres se usa String." },
    { q: "¿Cuál es la declaración correcta de un char?",
      opts: ['char letra = "A";', "char letra = A;", "char letra = 'A';", "Char letra = 'A';"], correct: 2,
      exp: "char usa comillas simples y la palabra clave en minúscula: char letra = 'A';" },
    { q: "¿Qué operador se usa para concatenar Strings en Java?",
      opts: ["&", ".", "+", "*"], correct: 2,
      exp: "El operador + une (concatena) strings y variables: \"Hola, \" + nombre + \"!\"" },
  ]},
  { topicId: 5, title: "Operaciones aritméticas", questions: [
    { q: "¿Verdadero o Falso? La expresión double result = 5 + 3; almacenará 8.0.",
      opts: ["Verdadero", "Falso"], correct: 0,
      exp: "Cuando un resultado entero se asigna a una variable double, Java lo convierte automáticamente a 8.0." },
    { q: "¿Qué operador se usa para multiplicar en Java?",
      opts: ["x", "+", "*", "×"], correct: 2,
      exp: "El asterisco (*) es el operador de multiplicación en Java, no la letra x usada en matemáticas." },
    { q: "¿Qué valor tiene z?", code: "double x = 5.0;\ndouble y = 2.0;\ndouble z = x / y;",
      opts: ["2.0", "3.0", "2", "2.5"], correct: 3,
      exp: "La división entre doubles preserva los decimales: 5.0 / 2.0 = 2.5" },
    { q: "¿Cuál es el resultado de este código?", code: "int result = 10 / 4;",
      opts: ["2.5", "3", "2.0", "2"], correct: 3,
      exp: "La división entera entre int descarta los decimales: 10 / 4 = 2 (no 2.5)." },
    { q: "¿Qué devuelve el operador % (módulo)?",
      opts: ["El cociente de la división", "El porcentaje de un número", "El resto de la división", "Convierte a double"], correct: 2,
      exp: "El módulo devuelve el resto. Ejemplo: 10 % 3 = 1 (porque 10 = 3×3 + 1)." },
  ]},
  { topicId: 6, title: "Números Random", questions: [
    { q: "¿Qué import se necesita para usar la clase Random?",
      opts: ["import java.io.Random;", "import java.lang.Random;", "import java.util.Random;", "No necesita import"], correct: 2,
      exp: "Random pertenece al paquete java.util, igual que Scanner." },
    { q: "¿Qué devuelve rnd.nextInt(10)?",
      opts: ["Un entero entre 1 y 10", "Un entero entre 0 y 10", "Un entero entre 0 y 9", "Un double entre 0 y 10"], correct: 2,
      exp: "nextInt(n) devuelve un entero entre 0 y n-1. nextInt(10) da 0, 1, 2 … 9." },
    { q: "¿Qué produce este código?", code: "Random rnd = new Random();\nint dado = rnd.nextInt(6) + 1;",
      opts: ["Un entero entre 0 y 5", "Un entero entre 1 y 6", "Un entero entre 0 y 6", "Siempre el número 1"], correct: 1,
      exp: "nextInt(6) da 0–5, sumar 1 desplaza el rango a 1–6: perfecto para simular un dado." },
    { q: "¿Cuál es la fórmula para obtener un entero entre min y max (inclusive) con Random?",
      opts: ["rnd.nextInt(max) + min", "rnd.nextInt(max - min) + min", "rnd.nextInt(max - min + 1) + min", "rnd.nextInt(min) + max"], correct: 2,
      exp: "La fórmula es nextInt(max - min + 1) + min. Para 5–15: nextInt(11)+5 da 5, 6 … 15." },
    { q: "¿Qué método de Random genera un valor booleano aleatorio?",
      opts: ["nextBool()", "randomBoolean()", "nextBoolean()", "getBoolean()"], correct: 2,
      exp: "nextBoolean() devuelve true o false con igual probabilidad (50%)." },
  ]},
  { topicId: 7, title: "Condicional if / else", questions: [
    { q: "Con age=20, ¿cuál es el valor de status al terminar?", code: 'String status = "Child";\nif (age > 18) {\n    status = "Adult";\n}',
      opts: ["null", '"Child"', "Error de compilación", '"Adult"'], correct: 3,
      exp: "Como 20 > 18 es verdadero, se ejecuta el bloque y status pasa a valer \"Adult\"." },
    { q: "¿Qué ocurre cuando la condición del if evalúa a falso?",
      opts: ["El programa termina", "El bloque interno se omite y se continúa", "Se lanza un error", "El bloque se ejecuta igual"], correct: 1,
      exp: "Cuando la condición es falsa, todo el bloque dentro de las llaves se salta y el programa continúa." },
    { q: "¿Cuál es la sintaxis correcta del if?",
      opts: ["if condición { }", "IF (condición) { }", "if (condición) { }", "if [condición] { }"], correct: 2,
      exp: "La condición va entre paréntesis y el bloque entre llaves: if (condicion) { ... }" },
    { q: "El código ubicado fuera del bloque if siempre se ejecuta.",
      opts: ["Verdadero", "Falso"], correct: 0,
      exp: "El código fuera del bloque if { } corre siempre, sin importar si la condición fue verdadera o falsa." },
    { q: "Encuentra el error de sintaxis:", code: "if temp > 25 {\n    System.out.println(\"Calor\");\n}",
      opts: ["Falta punto y coma al final", "Faltan paréntesis alrededor de la condición", "El operador > es incorrecto", "Falta la palabra else"], correct: 1,
      exp: "La condición del if debe ir entre paréntesis: if (temp > 25) { ... }" },
  ]},
  { topicId: 8, title: "Bucle while", questions: [
    { q: "¿Cuándo se ejecuta el cuerpo de un bucle while?",
      opts: ["Siempre una vez como mínimo", "Mientras la condición sea verdadera", "Un número fijo de veces", "Solo si la condición es falsa"], correct: 1,
      exp: "El while verifica la condición antes de cada vuelta. Si es verdadera, ejecuta el bloque." },
    { q: "¿Qué ocurre si no se modifica la variable de control dentro del while?",
      opts: ["Se detiene a las 100 iteraciones", "Ocurre un bucle infinito", "Error de compilación", "Se ejecuta una sola vez"], correct: 1,
      exp: "Si la condición nunca pasa a falsa, el bucle se repite indefinidamente (bucle infinito)." },
    { q: "¿Cuántas veces se ejecuta este código?", code: "int i = 0;\nwhile (i < 3) {\n    i++;\n}",
      opts: ["1", "2", "4", "3"], correct: 3,
      exp: "i toma los valores 0, 1, 2. Cuando i=3 la condición i<3 es falsa y el bucle termina." },
    { q: "¿Qué imprime este código?", code: "int i = 1;\nwhile (i <= 3) {\n    System.out.println(i);\n    i++;\n}",
      opts: ["0 1 2", "1 2 3 4", "1 2 3", "0 1 2 3"], correct: 2,
      exp: "i empieza en 1 e imprime 1, 2, 3. Cuando i=4 la condición i<=3 es falsa y termina." },
    { q: "¿Cuál es la sintaxis correcta de while?",
      opts: ["while (x > 0)", "while x > 0", "while { x > 0 }", "while [x > 0]"], correct: 0,
      exp: "La condición va entre paréntesis: while (condicion) { ... }" },
  ]},
  { topicId: 9, title: "Bucle do-while", questions: [
    { q: "¿Cuál es la diferencia principal entre while y do-while?",
      opts: ["do-while es más rápido", "do-while ejecuta el cuerpo al menos una vez", "while siempre ejecuta más veces", "No hay diferencia"], correct: 1,
      exp: "El do-while verifica la condición después de ejecutar el bloque, por lo que siempre corre al menos una vez." },
    { q: "¿Dónde se escribe la condición en un do-while?",
      opts: ["Al inicio, antes del bloque", "Dentro del bloque", "Al final, después del bloque", "No lleva condición"], correct: 2,
      exp: "La sintaxis es: do { ... } while (condicion); La condición va al final con punto y coma." },
    { q: "¿Cuántas veces se ejecuta el cuerpo si la condición es falsa desde el inicio?", code: "int i = 10;\ndo {\n    System.out.println(i);\n    i++;\n} while (i < 5);",
      opts: ["0 veces", "1 vez", "Infinitas veces", "5 veces"], correct: 1,
      exp: "Aunque i=10 no cumple i<5, el do-while ejecuta el bloque una vez antes de verificar." },
    { q: "¿Qué imprime este código?", code: "int i = 1;\ndo {\n    System.out.println(i);\n    i++;\n} while (i <= 3);",
      opts: ["1 2 3 4", "0 1 2 3", "1 2 3", "2 3"], correct: 2,
      exp: "i empieza en 1 e imprime 1, 2, 3. Cuando i=4 la condición i<=3 es falsa y termina." },
    { q: "¿Cuál es la sintaxis correcta del do-while?",
      opts: ["do { } while condicion;", "do { } while (condicion)", "do { } while (condicion);", "while (condicion) do { }"], correct: 2,
      exp: "La sintaxis correcta es: do { ... } while (condicion); — con paréntesis y punto y coma al final." },
  ]},
  { topicId: 10, title: "Bucle for", questions: [
    { q: "¿Qué error tiene este for?", code: "for (int i = 0, i < 5, i++) {\n    System.out.println(i);\n}",
      opts: ["La variable i no está declarada", "Las comas deben ser punto y coma", "La condición debería usar <=", "Faltan llaves"], correct: 1,
      exp: "Las tres partes del encabezado del for se separan con punto y coma: for (int i=0; i<5; i++)" },
    { q: "¿Qué imprime este bucle?", code: "for (int i = 2; i < 5; i++) {\n    System.out.println(i);\n}",
      opts: ["0 1 2 3 4", "2 3 4 5", "1 2 3 4", "2 3 4"], correct: 3,
      exp: "i empieza en 2 y la condición i<5 excluye el 5. Se imprime 2, 3, 4." },
    { q: "¿Cuántas veces se ejecuta este bucle?", code: "for (int i = 0; i < 5; i++) {\n    System.out.println(\"Hola\");\n}",
      opts: ["4", "6", "5", "3"], correct: 2,
      exp: "i toma los valores 0, 1, 2, 3, 4 — cinco valores en total antes de que i<5 sea falso." },
    { q: "La expresión de actualización (i++) se ejecuta después de cada iteración del cuerpo.",
      opts: ["Verdadero", "Falso"], correct: 0,
      exp: "i++ se ejecuta al final de cada vuelta, antes de volver a verificar la condición." },
    { q: "¿Qué valores completan este for para iterar del 1 al 10 incluyendo el 10?", code: "for (int i = ___; i ___ 10; i++) { }",
      opts: ["i=0 y i<10", "i=1 y i<=10", "i=1 y i<10", "i=0 y i<=10"], correct: 1,
      exp: "Para incluir el 10 se usa <= con inicio en 1. Con i<10 solo llegaría hasta 9." },
  ]},
  { topicId: 11, title: "Procedimientos", questions: [
    { q: "¿Qué palabra clave indica que un método no devuelve ningún valor?",
      opts: ["return", "null", "void", "empty"], correct: 2,
      exp: "void significa que el método realiza una tarea pero no retorna ningún valor al código que lo llamó." },
    { q: "¿Cuál es la sintaxis correcta para declarar un procedimiento sin parámetros?",
      opts: ["void static saludar() { }", "static void saludar() { }", "static saludar void() { }", "void saludar static() { }"], correct: 1,
      exp: "El orden correcto es: static void nombreMetodo() { ... }" },
    { q: "¿Cuántas veces se puede llamar a un procedimiento desde main?",
      opts: ["Solo una vez", "Máximo dos veces", "Las veces que sea necesario", "Depende del tipo de retorno"], correct: 2,
      exp: "Una de las ventajas de los procedimientos es que se pueden llamar múltiples veces sin repetir el código." },
    { q: "¿Qué hace este código?", code: "static void linea() {\n    System.out.println(\"-----\");\n}\n// en main:\nlinea();\nlinea();",
      opts: ["Imprime ----- una sola vez", "Genera un error porque se llama dos veces", "Imprime ----- dos veces", "No imprime nada"], correct: 2,
      exp: "Cada llamada a linea() ejecuta el cuerpo completo del procedimiento, imprimiendo ----- una vez por llamada." },
    { q: "¿Qué son los parámetros de un procedimiento?",
      opts: ["Variables que se declaran dentro del procedimiento", "Datos que se pasan al procedimiento cuando se lo llama", "El valor que retorna el procedimiento", "Los nombres de las clases que usa el procedimiento"], correct: 1,
      exp: "Los parámetros son los datos de entrada que recibe el procedimiento para trabajar con ellos." },
  ]},
  { topicId: 12, title: "Funciones", questions: [
    { q: "¿En qué se diferencia una función de un procedimiento?",
      opts: ["Una función usa static y un procedimiento no", "Una función devuelve un valor y un procedimiento no", "Una función puede tener parámetros y un procedimiento no", "No hay diferencia"], correct: 1,
      exp: "La diferencia clave es el valor de retorno: las funciones usan return para devolver un resultado; los procedimientos usan void." },
    { q: "¿Qué palabra clave se usa para devolver un valor desde una función?",
      opts: ["send", "output", "give", "return"], correct: 3,
      exp: "return envía el valor de vuelta al código que llamó a la función y termina la ejecución del método." },
    { q: "¿Cuál declara correctamente una función que retorna un entero?",
      opts: ["static void sumar(int a, int b) { }", "static int sumar(int a, int b) { }", "int static sumar(int a, int b) { }", "static sumar int(int a, int b) { }"], correct: 1,
      exp: "El tipo de retorno va después de static y antes del nombre: static int nombreFuncion(...) { }" },
    { q: "¿Qué almacena la variable resultado?", code: "static int doble(int n) {\n    return n * 2;\n}\nint resultado = doble(5);",
      opts: ["5", "2", "52", "10"], correct: 3,
      exp: "La función retorna n * 2, y como se la llama con 5, devuelve 10. Ese valor se guarda en resultado." },
    { q: "¿Qué ocurre si una función declarada como int no tiene ningún return?",
      opts: ["Retorna 0 automáticamente", "Error de compilación", "Retorna null", "El programa se detiene en tiempo de ejecución"], correct: 1,
      exp: "Java exige que todos los caminos de ejecución de una función lleguen a un return del tipo declarado; si no, el compilador da error." },
  ]},
  { topicId: 13, title: "Arrays", questions: [
    { q: "¿Qué delimitadores se usan para inicializar un array con valores?", code: 'String[] names = ___"Alice", "Bob", "Charlie"___;',
      opts: ["( y )", "[ y ]", "{ y }", "< y >"], correct: 2,
      exp: "Las llaves { } se usan para inicializar un array con valores directos al declararlo." },
    { q: "¿Verdadero o Falso? numbers.length() devuelve el número de elementos del array.",
      opts: ["Verdadero", "Falso"], correct: 1,
      exp: "Es numbers.length sin paréntesis. length es un campo (atributo), no un método." },
    { q: "¿Qué valor almacena size?", code: "int[] scores = {10, 20, 30, 40};\nint size = scores.length;",
      opts: ["40", "3", "0", "4"], correct: 3,
      exp: "length devuelve la cantidad de elementos del array. scores tiene 4 elementos." },
    { q: "¿Qué imprime este código?", code: "int[] n = new int[3];\nSystem.out.println(n[0]);",
      opts: ["null", "Error de compilación", "3", "0"], correct: 3,
      exp: "Los arrays de int se inicializan con 0 por defecto cuando se crean con new int[size]." },
    { q: "¿Qué índice tiene el ÚLTIMO elemento de un array de 5 elementos?",
      opts: ["5", "4", "1", "0"], correct: 1,
      exp: "Los índices van de 0 a length-1. En un array de 5 elementos el último tiene índice 4." },
  ]},
  { topicId: 14, title: "Comentarios", questions: [
    { q: "¿Qué símbolo se usa para iniciar un comentario de una sola línea en Java?",
      opts: ["//", "/*", "#", "<!--"], correct: 0,
      exp: "// indica un comentario de una línea. Todo lo que sigue en esa línea es ignorado por el compilador." },
    { q: "Los comentarios afectan la ejecución del programa.",
      opts: ["Verdadero", "Falso"], correct: 1,
      exp: "Los comentarios son ignorados por el compilador. No generan código ni afectan el comportamiento del programa." },
    { q: "¿Qué delimitadores forman un comentario de bloque en Java?",
      opts: ["// y //", "/* y */", "<!-- y -->", "# y #"], correct: 1,
      exp: "Los comentarios de bloque comienzan con /* y terminan con */. Pueden abarcar múltiples líneas." },
    { q: "¿Cuál de estos es un comentario válido en Java?",
      opts: ["# Este es un comentario", "// Este es un comentario", "-- Este es un comentario", "** Este es un comentario"], correct: 1,
      exp: "Java usa // para comentarios de una línea y /* ... */ para bloques. No usa # ni --." },
    { q: "¿Para qué sirven principalmente los comentarios?",
      opts: ["Para ejecutar código alternativo", "Para documentar y explicar el código", "Para aumentar la velocidad del programa", "Para declarar variables"], correct: 1,
      exp: "Los comentarios sirven para documentar el código: explicar qué hace, por qué se tomó una decisión, o dejar notas para otros programadores." },
  ]},
  { topicId: 15, title: "Constantes", questions: [
    { q: "¿Qué palabra clave se usa en Java para declarar una constante?",
      opts: ["const", "constant", "final", "static"], correct: 2,
      exp: "final indica que el valor no puede cambiar después de ser asignado. Es la forma estándar de declarar constantes en Java." },
    { q: "¿Qué ocurre si se intenta reasignar el valor de una constante?",
      opts: ["El nuevo valor se ignora silenciosamente", "El programa continúa con el valor original", "Error de compilación", "Error en tiempo de ejecución"], correct: 2,
      exp: "Java no compila un programa que intente modificar una variable declarada con final. El error aparece en tiempo de compilación." },
    { q: "¿Cuál es la convención de nombres para constantes en Java?",
      opts: ["camelCase como las variables", "PascalCase como las clases", "MAYÚSCULAS_CON_GUIÓN_BAJO", "minúsculas con puntos"], correct: 2,
      exp: "Por convención, las constantes se escriben en MAYÚSCULAS con guiones bajos entre palabras: MAX_SIZE, TASA_IVA, PI." },
    { q: "¿Cuál es la declaración correcta de una constante entera?",
      opts: ["const int MAX = 100;", "int final MAX = 100;", "final int MAX = 100;", "FINAL int MAX = 100;"], correct: 2,
      exp: "La sintaxis es: final tipo NOMBRE = valor; La palabra final va antes del tipo." },
    { q: "¿Cuál es la principal ventaja de usar constantes con nombre en lugar de valores literales?",
      opts: ["Ocupan menos memoria", "Facilitan cambios y mejoran la legibilidad", "Ejecutan más rápido", "No hay diferencia"], correct: 1,
      exp: "Las constantes con nombre expresan la intención del valor y permiten cambiarlo en un solo lugar si es necesario." },
  ]},
  { topicId: 16, title: "Conversión de tipos", questions: [
    { q: "¿Qué es la conversión implícita (widening) en Java?",
      opts: ["Convertir un tipo grande a uno pequeño", "Convertir un tipo pequeño a uno más grande automáticamente", "Convertir String a int", "Usar el operador cast"], correct: 1,
      exp: "Widening convierte automáticamente de un tipo más pequeño a uno mayor (int → double) sin pérdida de datos." },
    { q: "¿Qué produce la expresión (int) 3.9?",
      opts: ["4", "3", "Error de compilación", "3.9"], correct: 1,
      exp: "El cast (int) trunca los decimales: simplemente los descarta. 3.9 se convierte en 3 (no redondea)." },
    { q: "¿Qué tipo de conversión requiere un cast explícito?",
      opts: ["int a long", "int a double", "double a int", "int a float"], correct: 2,
      exp: "Narrowing (de double a int) requiere cast explícito: (int) valor. Puede haber pérdida de información." },
    { q: "¿Qué imprime este código?", code: "int a = 5;\ndouble b = a;\nSystem.out.println(b);",
      opts: ["5", "5.0", "Error", "0.0"], correct: 1,
      exp: "Java convierte int a double automáticamente (widening). El valor 5 se representa como 5.0." },
    { q: "¿Qué devuelve la expresión (double) 7 / 2?",
      opts: ["3", "3.0", "3.5", "Error"], correct: 2,
      exp: "(double) 7 convierte el 7 a 7.0 antes de dividir. 7.0 / 2 da 3.5 porque ya hay un double involucrado." },
  ]},
  { topicId: 17, title: "Incremento y decremento", questions: [
    { q: "¿Qué hace el operador ++ aplicado a una variable entera?",
      opts: ["La multiplica por 2", "La incrementa en 1", "La decrementa en 1", "La convierte a double"], correct: 1,
      exp: "++ incrementa la variable en 1. i++ es equivalente a escribir i = i + 1." },
    { q: "Con i = 5, ¿qué valor se asigna a x en la expresión x = i++?",
      opts: ["6", "5", "4", "Error"], correct: 1,
      exp: "Post-incremento (i++): primero se asigna el valor actual (5) a x, luego se incrementa i a 6." },
    { q: "Con i = 5, ¿qué valor se asigna a x en la expresión x = ++i?",
      opts: ["4", "5", "6", "Error"], correct: 2,
      exp: "Pre-incremento (++i): primero se incrementa i a 6, luego se asigna ese valor a x." },
    { q: "¿Cuánto vale i después de ejecutar i-- si i comenzaba en 3?",
      opts: ["4", "3", "2", "1"], correct: 2,
      exp: "-- decrementa la variable en 1: 3 - 1 = 2." },
    { q: "¿Qué operador es equivalente a i = i - 1?",
      opts: ["i++", "i--", "++i", "i+=1"], correct: 1,
      exp: "i-- decrementa i en 1, igual que escribir i = i - 1." },
  ]},
  { topicId: 18, title: "Atajos aritméticos", questions: [
    { q: "¿A qué es equivalente la expresión x += 5?",
      opts: ["x = 5", "x = x + 5", "x = x * 5", "x + 5"], correct: 1,
      exp: "+= es un atajo: x += 5 es lo mismo que x = x + 5. Suma el valor derecho al actual de x." },
    { q: "Si x = 10, ¿cuánto vale x después de x -= 3?",
      opts: ["13", "7", "3", "30"], correct: 1,
      exp: "x -= 3 es x = x - 3 = 10 - 3 = 7." },
    { q: "Si x = 4, ¿cuánto vale x después de x *= 2?",
      opts: ["2", "6", "8", "4"], correct: 2,
      exp: "x *= 2 es x = x * 2 = 4 * 2 = 8." },
    { q: "¿Cuál es el atajo para x = x / 2?",
      opts: ["x /= 2", "x div= 2", "x //= 2", "x \\= 2"], correct: 0,
      exp: "/= divide el valor actual de x por el operando derecho: x /= 2 equivale a x = x / 2." },
    { q: "Si x = 10, ¿cuánto vale x después de x %= 3?",
      opts: ["3", "10", "1", "0"], correct: 2,
      exp: "%= aplica el módulo: x %= 3 es x = 10 % 3 = 1 (el resto de dividir 10 entre 3)." },
  ]},
  { topicId: 19, title: "Operadores de comparación", questions: [
    { q: "¿Qué devuelve la expresión 5 == 5?",
      opts: ["5", "true", "false", "Error"], correct: 1,
      exp: "== compara si dos valores son iguales y devuelve un boolean: true si son iguales, false si no." },
    { q: "¿Cuál operador comprueba si dos valores son distintos?",
      opts: ["=", "==", "!=", "<>"], correct: 2,
      exp: "!= devuelve true cuando los valores son distintos. Es el opuesto de ==." },
    { q: "¿Qué devuelve la expresión 3 >= 3?",
      opts: ["false", "true", "0", "Error"], correct: 1,
      exp: ">= devuelve true si el valor izquierdo es mayor O igual al derecho. 3 >= 3 es true porque son iguales." },
    { q: "¿Cuál es el resultado de 10 < 5?",
      opts: ["true", "false", "10", "5"], correct: 1,
      exp: "10 no es menor que 5, por lo tanto 10 < 5 es false." },
    { q: "Los operadores de comparación siempre devuelven un valor de tipo...",
      opts: ["int", "String", "double", "boolean"], correct: 3,
      exp: "Los operadores de comparación (==, !=, >, <, >=, <=) siempre producen un valor boolean: true o false." },
  ]},
  { topicId: 20, title: "Operadores lógicos", questions: [
    { q: "¿Cuándo es verdadera la expresión A && B?",
      opts: ["Cuando A es true", "Cuando B es true", "Cuando A y B son ambos true", "Cuando al menos uno es true"], correct: 2,
      exp: "&& (AND) solo devuelve true cuando AMBOS operandos son true. Si cualquiera es false, el resultado es false." },
    { q: "¿Cuándo es verdadera la expresión A || B?",
      opts: ["Solo cuando ambos son true", "Cuando al menos uno es true", "Solo cuando ambos son false", "Nunca"], correct: 1,
      exp: "|| (OR) devuelve true cuando AL MENOS UNO de los operandos es true. Solo es false cuando ambos son false." },
    { q: "¿Qué devuelve !true?",
      opts: ["true", "1", "false", "0"], correct: 2,
      exp: "! (NOT) invierte el valor booleano: !true es false, !false es true." },
    { q: "Con a = true y b = false, ¿qué devuelve a && b?",
      opts: ["true", "false", "null", "Error"], correct: 1,
      exp: "a && b requiere que ambos sean true. Como b es false, el resultado es false." },
    { q: "Con a = true y b = false, ¿qué devuelve a || b?",
      opts: ["false", "true", "null", "Error"], correct: 1,
      exp: "a || b requiere que al menos uno sea true. Como a es true, el resultado es true." },
  ]},
  { topicId: 21, title: "System.out.print", questions: [
    { q: "¿Cuál es la diferencia entre System.out.print() y System.out.println()?",
      opts: ["print imprime en rojo, println en negro", "println agrega un salto de línea al final, print no", "print es más rápido que println", "No hay diferencia"], correct: 1,
      exp: "println (print line) agrega automáticamente un salto de línea al final. print imprime sin avanzar al siguiente renglón." },
    { q: "¿Qué produce la secuencia de escape \\n dentro de un String?",
      opts: ["Imprime la letra n", "Una tabulación", "Un salto de línea", "Un espacio en blanco"], correct: 2,
      exp: "\\n es la secuencia de escape para salto de línea. Permite insertar saltos dentro de un solo String." },
    { q: "¿Qué produce la secuencia de escape \\t dentro de un String?",
      opts: ["Un salto de línea", "Una tabulación horizontal", "La letra t", "El carácter de retroceso"], correct: 1,
      exp: "\\t inserta una tabulación horizontal, equivalente a presionar Tab en el teclado." },
    { q: "¿Cómo se imprime una comilla doble dentro de un String?",
      opts: ["Usando comillas simples dentro", "Usando la secuencia \\\"", "No es posible", "Usando doble comilla \"\""], correct: 1,
      exp: "\\\" es la secuencia de escape para una comilla doble dentro de un String delimitado por comillas dobles." },
    { q: "¿Qué imprime este código?", code: 'System.out.print("A");\nSystem.out.print("B");',
      opts: ["A B", "A\\nB", "AB", "A y luego B en línea nueva"], correct: 2,
      exp: "print no agrega salto de línea, por lo que ambas impresiones quedan en la misma línea: AB." },
  ]},
  { topicId: 22, title: "Formato de salida", questions: [
    { q: "¿Qué método permite imprimir con formato usando especificadores como %d y %s?",
      opts: ["System.out.println()", "System.out.format()", "System.out.printf()", "String.print()"], correct: 2,
      exp: "printf permite controlar el formato de la salida usando especificadores como %d (entero), %s (String), %f (decimal)." },
    { q: "¿Qué especificador de formato se usa para imprimir un número entero?",
      opts: ["%s", "%f", "%d", "%i"], correct: 2,
      exp: "%d formatea un número entero (int, long). Ejemplo: printf(\"%d\", 42) imprime 42." },
    { q: "¿Qué especificador de formato se usa para imprimir un String?",
      opts: ["%d", "%s", "%c", "%f"], correct: 1,
      exp: "%s formatea un String. Ejemplo: printf(\"Hola, %s!\", nombre) inserta el valor de nombre." },
    { q: "¿Qué hace el especificador %.2f?",
      opts: ["Muestra 2 dígitos en total", "Muestra exactamente 2 decimales", "Muestra el número en base 2", "Muestra 2 enteros y decimales libres"], correct: 1,
      exp: "%.2f formatea un número de punto flotante con exactamente 2 decimales. 3.14159 se muestra como 3.14." },
    { q: "¿Qué imprime printf(\"%.1f\", 3.456)?",
      opts: ["3", "3.4", "3.5", "3.456"], correct: 2,
      exp: "%.1f muestra 1 decimal y redondea. 3.456 redondeado a 1 decimal es 3.5." },
  ]},
  { topicId: 23, title: "Switch", questions: [
    { q: "¿Qué sentencia se usa al final de cada case para evitar que la ejecución continúe al siguiente?",
      opts: ["return", "stop", "break", "end"], correct: 2,
      exp: "break detiene la ejecución del switch y salta al código que sigue. Sin break, se ejecutan todos los case siguientes (fall-through)." },
    { q: "¿Cuándo se ejecuta el bloque default en un switch?",
      opts: ["Siempre, antes de los case", "Siempre, después de los case", "Cuando ningún case coincide con el valor", "Nunca es ejecutado"], correct: 2,
      exp: "default es el caso por defecto: se ejecuta cuando ningún case coincide con el valor evaluado." },
    { q: "¿Cuáles de estos tipos puede evaluar un switch en Java?",
      opts: ["Solo int", "int, String y char", "Solo String", "double y float"], correct: 1,
      exp: "Switch puede evaluar int, char, String y tipos discretos. No puede evaluar double ni float." },
    { q: "¿Es obligatorio incluir un bloque default en un switch?",
      opts: ["Sí, siempre es obligatorio", "No, es opcional", "Solo si hay más de 3 casos", "Solo cuando se evalúan Strings"], correct: 1,
      exp: "default es opcional. El programa compila y ejecuta correctamente sin él, pero es buena práctica incluirlo." },
    { q: "¿Qué ocurre si un case no tiene break?", code: 'int x = 1;\nswitch (x) {\n    case 1: System.out.println("Uno");\n    case 2: System.out.println("Dos");\n    default: System.out.println("Otro");\n}',
      opts: ["Solo imprime Uno", "Imprime Uno y se detiene", "Imprime Uno, Dos y Otro", "Error de compilación"], correct: 2,
      exp: "Sin break ocurre fall-through: una vez que coincide un case, se ejecutan todos los bloques siguientes hasta el final del switch." },
  ]},
  { topicId: 24, title: "Operador ternario", questions: [
    { q: "¿Cuál es la sintaxis correcta del operador ternario?",
      opts: ["condicion : valorSi ? valorNo", "condicion ? valorSi : valorNo", "if condicion ? valorSi : valorNo", "condicion ?? valorSi : valorNo"], correct: 1,
      exp: "La sintaxis es: condicion ? expresionSiVerdadero : expresionSiFalso. Es como un if/else compacto en una expresión." },
    { q: "¿Qué devuelve la expresión (5 > 3) ? \"mayor\" : \"menor\"?",
      opts: ['"menor"', '"true"', '"mayor"', '"5 > 3"'], correct: 2,
      exp: "5 > 3 es true, por lo tanto se evalúa y devuelve la expresión del lado del ?: \"mayor\"." },
    { q: "¿Cuántos valores produce un operador ternario en cada evaluación?",
      opts: ["Cero o uno", "Siempre exactamente uno", "Uno o dos", "Depende de la condición"], correct: 1,
      exp: "El ternario siempre produce exactamente un valor: el de la expresión verdadera o el de la falsa, según la condición." },
    { q: "Un operador ternario puede reemplazar a un if/else simple.",
      opts: ["Verdadero", "Falso"], correct: 0,
      exp: "Verdadero. String r = (nota >= 60) ? \"Aprobado\" : \"Reprobado\"; es equivalente a un if/else que asigna a r." },
    { q: "Con x = 0, ¿qué devuelve: (x > 0) ? \"positivo\" : \"no positivo\"?",
      opts: ['"positivo"', '"no positivo"', '"true"', '"false"'], correct: 1,
      exp: "0 > 0 es false, por lo que se evalúa la expresión del lado del :: \"no positivo\"." },
  ]},
  { topicId: 25, title: "Comparación de Strings", questions: [
    { q: "¿Por qué no se recomienda usar == para comparar el contenido de dos Strings?",
      opts: ["Porque == no funciona con Strings", "Porque == compara las referencias en memoria, no el contenido", "Porque == es más lento", "Porque Java no tiene =="], correct: 1,
      exp: "== compara si dos variables apuntan al mismo objeto en memoria. Dos String con el mismo texto pueden ser objetos distintos, así que == podría devolver false aunque el contenido sea igual." },
    { q: "¿Qué método compara el contenido de dos Strings ignorando mayúsculas y minúsculas?",
      opts: ["equals()", "compareTo()", "equalsIgnoreCase()", "compareIgnoreCase()"], correct: 2,
      exp: "equalsIgnoreCase() compara el contenido sin distinguir entre mayúsculas y minúsculas: \"Hola\".equalsIgnoreCase(\"hola\") devuelve true." },
    { q: "¿Qué devuelve \"hola\".equals(\"hola\")?",
      opts: ["false", "null", "true", "0"], correct: 2,
      exp: "equals() compara el contenido carácter a carácter. Como ambos Strings contienen \"hola\", devuelve true." },
    { q: "¿Qué devuelve \"abc\".equals(\"ABC\")?",
      opts: ["true", "false", "null", "Error"], correct: 1,
      exp: "equals() distingue mayúsculas de minúsculas. \"abc\" y \"ABC\" tienen contenido diferente, por lo que devuelve false." },
    { q: "¿Cuál es la forma correcta de comparar si dos variables String tienen el mismo contenido?",
      opts: ["s1 == s2", "s1.equals(s2)", "s1 = s2", "equals(s1, s2)"], correct: 1,
      exp: "s1.equals(s2) es la forma correcta: llama al método equals() sobre uno de los Strings pasando el otro como argumento." },
  ]},
  { topicId: 26, title: "Métodos de String", questions: [
    { q: "¿Qué devuelve \"Hola\".length()?",
      opts: ["3", "4", "5", "Error"], correct: 1,
      exp: "length() devuelve la cantidad de caracteres del String. \"Hola\" tiene 4 caracteres: H-o-l-a." },
    { q: "¿Qué devuelve \"Java\".charAt(0)?",
      opts: ["'a'", "'J'", "'v'", "\"Java\""], correct: 1,
      exp: "charAt(n) devuelve el carácter en la posición n. Los índices empiezan en 0, por lo que charAt(0) devuelve 'J'." },
    { q: "¿Qué devuelve \"Mundo\".substring(0, 3)?",
      opts: ['"Mun"', '"und"', '"Mund"', '"Mundo"'], correct: 0,
      exp: "substring(inicio, fin) extrae desde inicio (inclusive) hasta fin (exclusive). Posiciones 0, 1, 2 → \"Mun\"." },
    { q: "¿Qué hace el método toUpperCase()?",
      opts: ["Convierte el primer carácter a mayúscula", "Convierte todos los caracteres a mayúscula", "Convierte a minúsculas", "Elimina los espacios"], correct: 1,
      exp: "toUpperCase() devuelve un nuevo String con todos los caracteres convertidos a mayúsculas. Ejemplo: \"hola\".toUpperCase() → \"HOLA\"." },
    { q: "¿Qué devuelve \"hola mundo\".contains(\"mundo\")?",
      opts: ["false", "null", "true", "Error"], correct: 2,
      exp: "contains() devuelve true si el String contiene la secuencia de caracteres especificada. \"hola mundo\" sí contiene \"mundo\"." },
  ]},
  { topicId: 27, title: "Break y Continue", questions: [
    { q: "¿Qué hace la sentencia break dentro de un bucle?",
      opts: ["Salta la iteración actual y continúa", "Pausa el bucle temporalmente", "Termina el bucle inmediatamente", "Reinicia el bucle desde el inicio"], correct: 2,
      exp: "break termina el bucle de inmediato. La ejecución continúa con el código que está después del cierre del bucle." },
    { q: "¿Qué hace la sentencia continue dentro de un bucle?",
      opts: ["Termina el bucle", "Salta el resto de la iteración actual y pasa a la siguiente", "Reinicia el contador a 0", "Sale del método"], correct: 1,
      exp: "continue salta el resto del cuerpo de la iteración actual y vuelve al inicio del bucle para evaluar la condición nuevamente." },
    { q: "¿En cuál de estas estructuras también funciona la sentencia break?",
      opts: ["Métodos", "Switch", "Clases", "Variables"], correct: 1,
      exp: "break funciona en bucles (for, while, do-while) y también en la sentencia switch para evitar el fall-through." },
    { q: "¿Qué imprime este código?", code: "for (int i = 1; i <= 5; i++) {\n    if (i == 3) break;\n    System.out.println(i);\n}",
      opts: ["1 2 3", "1 2", "3 4 5", "1 2 3 4 5"], correct: 1,
      exp: "Cuando i vale 3, break termina el bucle. Solo se imprimen los valores 1 y 2." },
    { q: "¿Qué imprime este código?", code: "for (int i = 1; i <= 5; i++) {\n    if (i == 3) continue;\n    System.out.println(i);\n}",
      opts: ["1 2 3 4 5", "1 2 4 5", "3", "1 2"], correct: 1,
      exp: "Cuando i vale 3, continue salta el println. Se imprimen todos los valores excepto el 3: 1, 2, 4, 5." },
  ]},
  { topicId: 28, title: "Bucles anidados", questions: [
    { q: "¿Cuántas veces se ejecuta el cuerpo del bucle interno en este código?", code: "for (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        // cuerpo\n    }\n}",
      opts: ["3", "6", "9", "12"], correct: 2,
      exp: "El bucle externo se ejecuta 3 veces y por cada vuelta el interno se ejecuta 3 veces. Total: 3 × 3 = 9." },
    { q: "¿Por qué es importante usar variables de control distintas en bucles anidados?",
      opts: ["Por una restricción del compilador", "Para que cada bucle controle su propia iteración sin interferir", "Porque es más rápido", "No es necesario"], correct: 1,
      exp: "Si ambos bucles usaran la misma variable, se pisarían entre sí y el comportamiento sería incorrecto." },
    { q: "¿Para qué situación son más útiles los bucles anidados?",
      opts: ["Para sumar una lista de números", "Para trabajar con estructuras bidimensionales como tablas o matrices", "Para leer datos del usuario", "Para declarar variables"], correct: 1,
      exp: "Los bucles anidados son ideales para recorrer estructuras de dos dimensiones: tablas, matrices, o para generar patrones de filas y columnas." },
    { q: "Con for i de 0 a 1 y for j de 0 a 2, ¿cuántas iteraciones totales ejecuta el cuerpo interno?",
      opts: ["2", "3", "5", "6"], correct: 3,
      exp: "El externo da 2 vueltas (i: 0, 1), el interno da 3 vueltas (j: 0, 1, 2). Total: 2 × 3 = 6 iteraciones." },
    { q: "¿Qué imprime este código?", code: "for (int i = 1; i <= 2; i++) {\n    for (int j = 1; j <= 2; j++) {\n        System.out.print(i + \"\" + j + \" \");\n    }\n}",
      opts: ["11 12 21 22", "1 2 1 2", "11 22", "12 12"], correct: 0,
      exp: "El bucle externo controla i (1, 2) y el interno j (1, 2). Se imprime la combinación para cada par: 11 12 21 22." },
  ]},
  { topicId: 29, title: "Sobrecarga de métodos", questions: [
    { q: "¿Qué es la sobrecarga de métodos (method overloading)?",
      opts: ["Llamar a un método más de una vez", "Tener varios métodos con el mismo nombre pero distintos parámetros", "Heredar un método de otra clase", "Usar static en un método"], correct: 1,
      exp: "La sobrecarga permite definir varios métodos con el mismo nombre siempre que difieran en el número o tipo de parámetros." },
    { q: "¿Pueden existir dos métodos con el mismo nombre y parámetros pero distinto tipo de retorno?",
      opts: ["Sí, siempre", "No, el compilador no lo permite", "Sí, si uno es static", "Depende del compilador"], correct: 1,
      exp: "No es posible. El compilador identifica un método por su nombre y sus parámetros (firma). El tipo de retorno no forma parte de la firma." },
    { q: "¿Cuál par de declaraciones es una sobrecarga válida?",
      opts: ["static void f(int x) y static void f(int y)", "static void f(int x) y static void f(double x)", "static int f(int x) y static void f(int x)", "Ninguna"], correct: 1,
      exp: "Cambiar el tipo de parámetro (int vs double) sí constituye sobrecarga válida. Cambiar solo el nombre del parámetro o el tipo de retorno no." },
    { q: "¿En qué momento decide Java qué versión sobrecargada de un método llamar?",
      opts: ["En tiempo de ejecución", "En tiempo de compilación", "Cuando se importa la clase", "Cuando se crea el objeto"], correct: 1,
      exp: "La resolución de sobrecarga ocurre en tiempo de compilación: el compilador analiza los argumentos y elige la versión del método que mejor coincide." },
    { q: "¿Cuántas versiones sobrecargadas puede tener un método en Java?",
      opts: ["Máximo 3", "Máximo 10", "Solo 2", "Sin límite fijo"], correct: 3,
      exp: "No hay un límite de cuántas versiones sobrecargadas puede tener un método, siempre que cada una tenga una firma diferente." },
  ]},
  { topicId: 30, title: "Proyecto Calculadora", questions: [
    { q: "¿Cuál es la forma correcta de leer un número decimal con Scanner?",
      opts: ["sc.nextDecimal()", "sc.nextDouble()", "sc.nextFloat()", "sc.readDouble()"], correct: 1,
      exp: "nextDouble() es el método de Scanner para leer un número con punto decimal (double)." },
    { q: "¿Qué estructura de control es más adecuada para elegir una operación según un carácter (+, -, *, /)?",
      opts: ["while", "for", "switch", "do-while"], correct: 2,
      exp: "switch con un char o String de operador es la estructura más clara para elegir entre un conjunto fijo de opciones." },
    { q: "¿Qué verificación se debe hacer antes de dividir para evitar un error?",
      opts: ["Verificar que el dividendo no sea 0", "Verificar que el divisor no sea 0", "Usar try-catch obligatoriamente", "No es necesario verificar"], correct: 1,
      exp: "Dividir por cero lanza una ArithmeticException. Se debe verificar que el divisor != 0 antes de realizar la división." },
    { q: "¿Qué imprime printf(\"Resultado: %.2f\", 10.0 / 3)?",
      opts: ["Resultado: 3", "Resultado: 3.33", "Resultado: 3.3333", "Resultado: 3.333333"], correct: 1,
      exp: "%.2f formatea con 2 decimales. 10.0 / 3 = 3.333... → se muestra como 3.33." },
    { q: "¿Cuál es el tipo de retorno correcto para un método que calcula el promedio de dos enteros?",
      opts: ["int", "void", "double", "String"], correct: 2,
      exp: "El promedio puede ser decimal, así que double es el tipo de retorno adecuado para no perder precisión." },
  ]},
  { topicId: 31, title: "Desafíos Finales", questions: [
    { q: "¿Qué estructura se usa para imprimir un triángulo de asteriscos de n filas?",
      opts: ["Un solo bucle for", "Bucles anidados (for dentro de for)", "Un bucle while con acumulador", "Un array de Strings"], correct: 1,
      exp: "Para imprimir un patrón bidimensional se necesitan bucles anidados: el externo controla las filas, el interno los asteriscos por fila." },
    { q: "Para calcular el promedio de notas en un array, ¿qué se necesita?",
      opts: ["Ordenar el array primero", "Sumar todos los elementos y dividir por la cantidad", "Usar Arrays.sort()", "Convertir las notas a String"], correct: 1,
      exp: "El promedio es la suma de todos los valores dividida por la cantidad. Se acumula recorriendo el array y se divide por array.length." },
    { q: "¿Qué operador se usa para verificar si un número es par?",
      opts: ["/ 2 == 0", "% 2 == 0", "* 2 == 0", "// 2 == 0"], correct: 1,
      exp: "n % 2 == 0 es la forma estándar: si el resto de dividir por 2 es 0, el número es par." },
    { q: "Para contar cuántos valores en un array son mayores a 60, ¿qué se necesita?",
      opts: ["Arrays.sort() y buscar desde el final", "Un bucle con un if y un contador", "Dos bucles anidados", "Convertir el array a String"], correct: 1,
      exp: "Se recorre el array con un bucle for-each, y dentro se verifica con if si el elemento > 60; en ese caso se incrementa un contador." },
    { q: "¿Qué método de la clase Math devuelve el mayor de dos enteros?",
      opts: ["Math.max(a, b)", "Math.min(a, b)", "Math.abs(a)", "Math.pow(a, b)"], correct: 0,
      exp: "Math.max(a, b) devuelve el mayor de los dos valores. Está disponible sin import porque Math pertenece a java.lang." },
  ]},
];

// ─── LECCIONES ────────────────────────────────────────────────────────────────
const LESSONS = [

  // ══ TEMA 1: Hola Mundo ═══════════════════════════════════════════════════
  { id: 1, title: "Hola Mundo", subtitle: "Tu primer programa",
    explanation: `
<h2 class="text-base font-bold mb-3">Tu primer programa en Java</h2>
<p class="text-slate-300 text-sm mb-4">Todo programa Java tiene una <strong>clase</strong> y un método <code class="text-indigo-400">main</code> — el punto de entrada. La JVM siempre empieza por ahí.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">public class</span> <span class="text-yellow-300">Main</span> {<br>
&nbsp;&nbsp;<span class="text-purple-400">public static void</span> <span class="text-blue-300">main</span>(<span class="text-green-300">String</span>[] args) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Hola Mundo"</span>);<br>
&nbsp;&nbsp;}<br>
}
</div>
<p class="text-slate-400 text-sm mb-3"><code class="text-green-400">System.out.println()</code> imprime una línea en la consola.</p>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Escribir un programa que imprima en la consola un saludo que diga "Hola, Java!" — con coma y signo de exclamación.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Escribir el código aquí\n\n    }\n}`,
    hint: 'Usar System.out.println() con el texto entre comillas dobles, exactamente como se pide.',
  },

  { id: 2, title: "Múltiples líneas", subtitle: "Imprimir varias líneas",
    explanation: `
<h2 class="text-base font-bold mb-3">Imprimir varias líneas</h2>
<p class="text-slate-300 text-sm mb-4">Cada llamada a <code class="text-indigo-400">System.out.println()</code> imprime una línea y baja al renglón siguiente. Para imprimir varias líneas se usa varias veces.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Línea 1"</span>);<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Línea 2"</span>);<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Línea 3"</span>);
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Imprimir tres líneas con los datos de un estudiante: nombre (Ana), edad (17) y curso (2do BT). Cada dato en su propia línea con el formato <em>Campo: valor</em>.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Imprimir las tres líneas\n\n    }\n}`,
    hint: 'Usar println tres veces, una por cada dato. El texto va entre comillas dobles en cada llamada.',
  },

  // ══ TEMA 2: Variables numéricas ══════════════════════════════════════════
  { id: 3, title: "Variables enteras", subtitle: "El tipo int",
    explanation: `
<h2 class="text-base font-bold mb-3">Variables de tipo int</h2>
<p class="text-slate-300 text-sm mb-4">Una <strong>variable</strong> es un espacio con nombre donde se guarda un valor. Para números enteros se usa <code class="text-indigo-400">int</code>.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> edad = <span class="text-orange-300">25</span>;<br>
<span class="text-purple-400">int</span> temperatura = <span class="text-orange-300">-5</span>;<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Edad: "</span> + edad);
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Declarar <code class="text-indigo-300">cantidad = 5</code> y <code class="text-indigo-300">precio = 200</code>. Imprimir cada variable en su propia línea con el formato <em>NombreVariable: valor</em>.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Declarar las variables e imprimirlas\n\n    }\n}`,
    hint: 'Declarar cada variable con int, asignarle el valor y luego usar println combinando texto con la variable usando +.',
  },

  { id: 4, title: "Variables decimales", subtitle: "El tipo double",
    explanation: `
<h2 class="text-base font-bold mb-3">Variables de tipo double</h2>
<p class="text-slate-300 text-sm mb-4">Para números con decimales se usa <code class="text-indigo-400">double</code>. El punto es el separador decimal en Java (no la coma).</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">double</span> precio = <span class="text-orange-300">99.99</span>;<br>
<span class="text-purple-400">double</span> pi = <span class="text-orange-300">3.14159</span>;<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Precio: "</span> + precio);
</div>
<div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">
  ⚠️ <strong>int</strong> no puede guardar decimales. Si se necesita 3.14, usar <strong>double</strong>.
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Usando <code class="text-indigo-300">precioUnitario = 24.99</code> y <code class="text-indigo-300">cantidad = 3</code>, calcular el total (precio × cantidad) e imprimirlo con el formato <em>Total: valor</em>.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        double precioUnitario = 24.99;\n        int cantidad = 3;\n        // Calcular el total e imprimirlo\n\n    }\n}`,
    hint: 'Multiplicar precioUnitario por cantidad y guardar el resultado en una variable double. Luego imprimir con el texto "Total: " concatenado.',
  },

  // ══ TEMA 3: Scanner ═══════════════════════════════════════════════════════
  { id: 5, title: "Scanner — leer texto", subtitle: "Entrada del usuario",
    explanation: `
<h2 class="text-base font-bold mb-3">Leer datos con Scanner</h2>
<p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">Scanner</code> permite leer lo que el usuario escribe. Se importa de <code class="text-green-400">java.util.Scanner</code> y se conecta a <code class="text-green-400">System.in</code> (el teclado).</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">import</span> java.util.Scanner;<br><br>
<span class="text-yellow-300">Scanner</span> sc = <span class="text-purple-400">new</span> <span class="text-yellow-300">Scanner</span>(System.in);<br>
<span class="text-green-300">String</span> nombre = sc.<span class="text-blue-300">nextLine</span>();<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Hola, "</span> + nombre + <span class="text-orange-300">"!"</span>);
</div>
<div class="bg-slate-700/40 rounded-lg p-3 text-sm text-slate-300 mb-3">
  💡 En OneCompiler: hacer clic en la pestaña <strong>I/O</strong> para escribir el dato de entrada antes de presionar Run.
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Leer un nombre con <code class="text-yellow-300">nextLine()</code> e imprimir:<br>
  <code class="text-yellow-300">Bienvenido, [nombre]!</code>
</div>`,
    starterCode: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Leer el nombre e imprimir el saludo\n\n    }\n}`,
    hint: 'Usar sc.nextLine() para leer una línea de texto y guardarlo en un String. Luego construir el mensaje con +.',
  },

  { id: 6, title: "Scanner — leer números", subtitle: "nextInt y nextDouble",
    explanation: `
<h2 class="text-base font-bold mb-3">Leer números con Scanner</h2>
<p class="text-slate-300 text-sm mb-4">Para leer números enteros se usa <code class="text-indigo-400">nextInt()</code> y para decimales <code class="text-indigo-400">nextDouble()</code>.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-yellow-300">Scanner</span> sc = <span class="text-purple-400">new</span> <span class="text-yellow-300">Scanner</span>(System.in);<br>
<span class="text-purple-400">int</span> edad = sc.<span class="text-blue-300">nextInt</span>();<br>
<span class="text-purple-400">double</span> altura = sc.<span class="text-blue-300">nextDouble</span>();<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Edad: "</span> + edad);<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Altura: "</span> + altura);
</div>
<div class="bg-slate-700/40 rounded-lg p-3 text-sm text-slate-300 mb-3">
  💡 En la pestaña <strong>I/O</strong> escribir un número por línea: primero el entero, luego el decimal.
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Leer dos números enteros e imprimir su suma:<br>
  <code class="text-yellow-300">Suma: [resultado]</code>
</div>`,
    starterCode: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Leer dos enteros, sumarlos e imprimir el resultado\n\n    }\n}`,
    hint: 'Usar nextInt() dos veces para leer los dos números. Guardarlos en variables int y luego imprimir la suma.',
  },

  // ══ TEMA 4: Variables de texto ════════════════════════════════════════════
  { id: 7, title: "Variables String", subtitle: "Texto en Java",
    explanation: `
<h2 class="text-base font-bold mb-3">Cadenas de texto — String</h2>
<p class="text-slate-300 text-sm mb-4">Un <code class="text-indigo-400">String</code> guarda texto. Siempre va entre <strong>comillas dobles</strong>. String se escribe con mayúscula.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-green-300">String</span> nombre = <span class="text-orange-300">"Ana"</span>;<br>
<span class="text-green-300">String</span> saludo = <span class="text-orange-300">"Hola, "</span> + nombre + <span class="text-orange-300">"!"</span>;<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(saludo); <span class="text-slate-500">// Hola, Ana!</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Declarar dos variables <code class="text-indigo-300">String</code>: una con la ciudad <em>Montevideo</em> y otra con el país <em>Uruguay</em>. Imprimirlas combinadas en una sola línea con el formato <em>Ciudad: valor, País: valor</em>.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String ciudad = "Montevideo";\n        String pais = "Uruguay";\n        // Imprimir el mensaje combinando las variables\n\n    }\n}`,
    hint: 'Combinar texto fijo y variables con el operador +. El texto fijo va entre comillas dobles.',
  },

  { id: 8, title: "boolean y char", subtitle: "Otros tipos primitivos",
    explanation: `
<h2 class="text-base font-bold mb-3">boolean y char</h2>
<p class="text-slate-300 text-sm mb-3"><code class="text-indigo-400">boolean</code> solo tiene dos valores posibles: <code class="text-green-400">true</code> o <code class="text-green-400">false</code>.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-3 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">boolean</span> esMayor = <span class="text-purple-400">true</span>;<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Mayor de edad: "</span> + esMayor);
</div>
<p class="text-slate-300 text-sm mb-3"><code class="text-indigo-400">char</code> guarda un <strong>solo carácter</strong> entre <strong>comillas simples</strong>.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">char</span> inicial = <span class="text-orange-300">'A'</span>;<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Inicial: "</span> + inicial);
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Declarar <code class="text-indigo-300">boolean aprobado = true</code> y <code class="text-indigo-300">char calificacion = 'B'</code>. Imprimir cada variable en su propia línea con el formato <em>NombreVariable: valor</em>.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Declarar las variables e imprimirlas\n\n    }\n}`,
    hint: 'boolean usa true/false sin comillas. char usa comillas simples para un solo carácter. Luego imprimir con println.',
  },

  // ══ TEMA 5: Operaciones aritméticas ══════════════════════════════════════
  { id: 9, title: "Suma, resta y producto", subtitle: "Operadores +  −  *",
    explanation: `
<h2 class="text-base font-bold mb-3">Operaciones aritméticas básicas</h2>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> a = <span class="text-orange-300">10</span>, b = <span class="text-orange-300">3</span>;<br>
a + b  <span class="text-slate-500">// 13  — suma</span><br>
a - b  <span class="text-slate-500">// 7   — resta</span><br>
a * b  <span class="text-slate-500">// 30  — multiplicación</span>
</div>
<p class="text-slate-400 text-sm mb-3">Al mezclar una operación con texto en println, poner la operación entre paréntesis: <code class="text-yellow-300">"Suma: " + (a + b)</code></p>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">a = 8</code> y <code class="text-indigo-300">b = 5</code>, calcular la suma, la resta y el producto. Imprimir cada resultado en su propia línea con el formato <em>Operación: valor</em>.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int a = 8;\n        int b = 5;\n        // Imprimir suma, resta y producto\n\n    }\n}`,
    hint: 'Usar println tres veces. Poner cada operación entre paréntesis dentro del mensaje: "Suma: " + (a + b).',
  },

  { id: 10, title: "División y módulo", subtitle: "Operadores  /  y  %",
    explanation: `
<h2 class="text-base font-bold mb-3">División y resto</h2>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> a = <span class="text-orange-300">10</span>, b = <span class="text-orange-300">3</span>;<br>
a / b  <span class="text-slate-500">// 3  — división entera (descarta decimales)</span><br>
a % b  <span class="text-slate-500">// 1  — resto de la división</span>
</div>
<p class="text-slate-400 text-sm mb-3">La división entre enteros da un resultado entero. Para obtener decimales, al menos uno debe ser <code class="text-yellow-300">double</code>.</p>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Un salón tiene 30 estudiantes que forman grupos de 7. Calcular cuántos grupos completos se forman y cuántos estudiantes sobran. Imprimir cada dato en su propia línea.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int estudiantes = 30;\n        int porGrupo = 7;\n        // Calcular grupos completos y sobrantes\n\n    }\n}`,
    hint: 'La división entera (/) da los grupos completos. El módulo (%) da el resto, es decir, los que sobran.',
  },

  // ══ TEMA 6: Números Random ═══════════════════════════════════════════════
  { id: 25, title: "Clase Random", subtitle: "Generar números aleatorios",
    explanation: `
<h2 class="text-base font-bold mb-3">Números aleatorios con la clase Random</h2>
<p class="text-slate-300 text-sm mb-4">La clase <code class="text-indigo-400">Random</code> del paquete <code class="text-indigo-400">java.util</code> permite generar valores aleatorios de distintos tipos. Primero se importa y luego se crea un objeto.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">import</span> java.util.<span class="text-green-300">Random</span>;<br><br>
<span class="text-green-300">Random</span> rnd = <span class="text-purple-400">new</span> <span class="text-green-300">Random</span>();<br><br>
<span class="text-slate-500">// entero entre 0 y 9</span><br>
<span class="text-purple-400">int</span> n = rnd.<span class="text-blue-300">nextInt</span>(<span class="text-orange-300">10</span>);<br><br>
<span class="text-slate-500">// entero entre 1 y 6 (dado)</span><br>
<span class="text-purple-400">int</span> dado = rnd.<span class="text-blue-300">nextInt</span>(<span class="text-orange-300">6</span>) + <span class="text-orange-300">1</span>;<br><br>
<span class="text-slate-500">// boolean aleatorio</span><br>
<span class="text-purple-400">boolean</span> cara = rnd.<span class="text-blue-300">nextBoolean</span>();
</div>
<div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">
  💡 <code>nextInt(n)</code> devuelve un entero entre <strong>0 y n-1</strong>.<br>
  Para rango min–max: <code>rnd.nextInt(max - min + 1) + min</code>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Simular el lanzamiento de un dado de 6 caras e imprimir:<br>
  <code class="text-yellow-300">Resultado del dado: 4</code> (el número varía cada ejecución)
</div>`,
    starterCode: `import java.util.Random;\n\npublic class Main {\n    public static void main(String[] args) {\n        Random rnd = new Random();\n        // Generar un entero entre 1 y 6\n\n        System.out.println("Resultado del dado: " + dado);\n    }\n}`,
    hint: 'nextInt(6) da un entero entre 0 y 5. Sumar 1 desplaza el rango a 1–6: rnd.nextInt(6) + 1',
  },

  { id: 26, title: "Clase Random", subtitle: "Rangos personalizados",
    explanation: `
<h2 class="text-base font-bold mb-3">La clase Random</h2>
<p class="text-slate-300 text-sm mb-4">La clase <code class="text-indigo-400">Random</code> del paquete <code class="text-indigo-400">java.util</code> ofrece métodos más claros para generar distintos tipos de valores aleatorios.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">import</span> java.util.<span class="text-green-300">Random</span>;<br><br>
<span class="text-green-300">Random</span> rnd = <span class="text-purple-400">new</span> <span class="text-green-300">Random</span>();<br><br>
<span class="text-purple-400">int</span> n = rnd.<span class="text-blue-300">nextInt</span>(<span class="text-orange-300">10</span>);     <span class="text-slate-500">// 0 a 9</span><br>
<span class="text-purple-400">int</span> m = rnd.<span class="text-blue-300">nextInt</span>(<span class="text-orange-300">10</span>) + <span class="text-orange-300">1</span>; <span class="text-slate-500">// 1 a 10</span><br>
<span class="text-purple-400">double</span> d = rnd.<span class="text-blue-300">nextDouble</span>();   <span class="text-slate-500">// 0.0 a 1.0</span><br>
<span class="text-purple-400">boolean</span> b = rnd.<span class="text-blue-300">nextBoolean</span>(); <span class="text-slate-500">// true o false</span>
</div>
<div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">
  💡 <code>nextInt(n)</code> genera entre <strong>0 y n-1</strong>. Para rango min–max:<br>
  <code>rnd.nextInt(max - min + 1) + min</code>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Usando la clase Random, generar e imprimir:<br>
  — Un número entero entre 50 y 100<br>
  — Un booleano aleatorio<br>
  <code class="text-yellow-300">Número: 73</code><br>
  <code class="text-yellow-300">Cara: true</code>
</div>`,
    starterCode: `import java.util.Random;\n\npublic class Main {\n    public static void main(String[] args) {\n        Random rnd = new Random();\n        // Entero entre 50 y 100\n        int numero = rnd.nextInt(51) + 50;\n        // Booleano aleatorio\n        boolean cara = rnd.nextBoolean();\n        System.out.println("Número: " + numero);\n        System.out.println("Cara: " + cara);\n    }\n}`,
    hint: 'Para un rango [50, 100] usar nextInt(51) + 50: nextInt(51) da 0–50, sumando 50 da 50–100. nextBoolean() devuelve true o false al azar.',
  },

  // ══ TEMA 7: Condicional if / else ═════════════════════════════════════════
  { id: 11, title: "Condicional if / else", subtitle: "Tomar decisiones",
    explanation: `
<h2 class="text-base font-bold mb-3">if / else</h2>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">if</span> (edad >= <span class="text-orange-300">18</span>) {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Mayor de edad"</span>);<br>
} <span class="text-purple-400">else</span> {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Menor de edad"</span>);<br>
}
</div>
<p class="text-slate-400 text-sm mb-3">Operadores: <code class="text-yellow-300">==</code> igual &nbsp; <code class="text-yellow-300">!=</code> distinto &nbsp; <code class="text-yellow-300">&gt;</code> <code class="text-yellow-300">&lt;</code> <code class="text-yellow-300">&gt;=</code> <code class="text-yellow-300">&lt;=</code></p>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">temperatura = 35</code>: si es mayor a 30, imprimir un mensaje de calor; si no, un mensaje de temperatura normal.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int temperatura = 35;\n        // Escribir el if / else\n\n    }\n}`,
    hint: 'Escribir if (condición) { ... } else { ... }. Pensar qué operador de comparación corresponde para "mayor a 30".',
  },

  { id: 12, title: "if / else anidado", subtitle: "Varias condiciones",
    explanation: `
<h2 class="text-base font-bold mb-3">if / else if / else</h2>
<p class="text-slate-300 text-sm mb-4">Para evaluar más de dos casos se encadenan condiciones con <code class="text-indigo-400">else if</code>.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">if</span> (nota >= <span class="text-orange-300">90</span>) {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Sobresaliente"</span>);<br>
} <span class="text-purple-400">else if</span> (nota >= <span class="text-orange-300">60</span>) {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Aprobado"</span>);<br>
} <span class="text-purple-400">else</span> {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Reprobado"</span>);<br>
}
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">int hora = 14</code>: usar if/else if/else para imprimir el saludo correspondiente a la hora (mañana, tarde o noche).
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int hora = 14;\n        // Escribir if / else if / else\n\n    }\n}`,
    hint: 'Usar if para la primera condición, else if para la segunda y else para el caso restante. Las condiciones se evalúan en orden: la primera que sea verdadera se ejecuta.',
  },

  // ══ TEMA 7: Bucle while ═══════════════════════════════════════════════════
  { id: 13, title: "Bucle while", subtitle: "Repetir mientras...",
    explanation: `
<h2 class="text-base font-bold mb-3">El bucle while</h2>
<p class="text-slate-300 text-sm mb-4">Repite un bloque <strong>mientras</strong> la condición sea verdadera. Es importante modificar algo dentro del bucle para que la condición eventualmente sea falsa.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>;<br>
<span class="text-purple-400">while</span> (i <= <span class="text-orange-300">3</span>) {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Vuelta "</span> + i);<br>
&nbsp;&nbsp;i++; <span class="text-slate-500">// i = i + 1</span><br>
}
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Usar un while para imprimir los números del 1 al 5, uno por línea.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int i = 1;\n        // Completar el while\n\n    }\n}`,
    hint: 'El while necesita una condición (¿hasta qué valor llega i?) y dentro del cuerpo algo que incremente i para que el bucle termine.',
  },

  { id: 14, title: "Acumulador con while", subtitle: "Sumar con un bucle",
    explanation: `
<h2 class="text-base font-bold mb-3">Acumulador</h2>
<p class="text-slate-300 text-sm mb-4">Un <strong>acumulador</strong> es una variable que va sumando valores en cada vuelta del bucle.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> suma = <span class="text-orange-300">0</span>;<br>
<span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>;<br>
<span class="text-purple-400">while</span> (i <= <span class="text-orange-300">5</span>) {<br>
&nbsp;&nbsp;suma = suma + i; <span class="text-slate-500">// acumula</span><br>
&nbsp;&nbsp;i++;<br>
}<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Suma: "</span> + suma); <span class="text-slate-500">// 15</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Calcular la suma de los números pares del 2 al 10 (2+4+6+8+10) usando while e imprimir el resultado con el formato <em>Suma de pares: valor</em>.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int suma = 0;\n        int i = 2;\n        // Completar el while sumando los pares\n\n        System.out.println("Suma de pares: " + suma);\n    }\n}`,
    hint: 'Iniciar i en 2 y sumar de 2 en 2 (i += 2) hasta llegar a 10. En cada vuelta acumular i en suma.',
  },

  // ══ TEMA 8: Bucle do-while ═══════════════════════════════════════════════
  { id: 19, title: "Bucle do-while", subtitle: "Ejecutar al menos una vez",
    explanation: `
<h2 class="text-base font-bold mb-3">El bucle do-while</h2>
<p class="text-slate-300 text-sm mb-4">A diferencia del <code class="text-indigo-400">while</code>, el <code class="text-indigo-400">do-while</code> ejecuta el bloque <strong>al menos una vez</strong> antes de verificar la condición.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>;<br>
<span class="text-purple-400">do</span> {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Vuelta "</span> + i);<br>
&nbsp;&nbsp;i++;<br>
} <span class="text-purple-400">while</span> (i <= <span class="text-orange-300">3</span>);<br>
<span class="text-slate-500">// Imprime: Vuelta 1 / Vuelta 2 / Vuelta 3</span>
</div>
<div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">
  💡 Diferencia clave: si la condición es falsa desde el inicio, <strong>while</strong> no ejecuta nada, pero <strong>do-while</strong> ejecuta el bloque una vez igual.
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Usar un do-while para imprimir los números del 1 al 4, uno por línea. La condición debe ir al final del bloque.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int i = 1;\n        // Completar el do-while\n\n    }\n}`,
    hint: 'El do-while tiene la condición al final: do { ... } while (condicion); El cuerpo se ejecuta primero y luego se verifica si continuar.',
  },

  { id: 20, title: "do-while con acumulador", subtitle: "Sumar con do-while",
    explanation: `
<h2 class="text-base font-bold mb-3">do-while con acumulador</h2>
<p class="text-slate-300 text-sm mb-4">El do-while es útil cuando se necesita ejecutar el cuerpo al menos una vez antes de decidir si continuar. Combinado con un acumulador permite calcular sumas.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> suma = <span class="text-orange-300">0</span>;<br>
<span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>;<br>
<span class="text-purple-400">do</span> {<br>
&nbsp;&nbsp;suma += i;<br>
&nbsp;&nbsp;i++;<br>
} <span class="text-purple-400">while</span> (i <= <span class="text-orange-300">5</span>);<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Suma: "</span> + suma); <span class="text-slate-500">// 15</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Usando do-while, calcular la suma de los números impares del 1 al 9 (1+3+5+7+9) e imprimir el resultado con el formato <em>Suma de impares: valor</em>.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int suma = 0;\n        int i = 1;\n        // Completar el do-while sumando impares\n\n        System.out.println("Suma de impares: " + suma);\n    }\n}`,
    hint: 'Iniciar i en 1 e incrementar de 2 en 2 (i += 2) para recorrer solo los impares: 1, 3, 5, 7, 9. La condición al final verifica si i todavía es <= 9.',
  },

  // ══ TEMA 10: Procedimientos ══════════════════════════════════════════════
  { id: 21, title: "Procedimientos", subtitle: "Métodos sin retorno",
    explanation: `
<h2 class="text-base font-bold mb-3">Procedimientos — static void</h2>
<p class="text-slate-300 text-sm mb-4">Un <strong>procedimiento</strong> es un bloque de código con nombre que realiza una tarea pero <strong>no devuelve ningún valor</strong>. En Java se declara con <code class="text-indigo-400">static void</code>.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">static void</span> <span class="text-blue-300">saludar</span>() {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Hola desde el procedimiento"</span>);<br>
}<br><br>
<span class="text-purple-400">public static void</span> <span class="text-blue-300">main</span>(<span class="text-green-300">String</span>[] args) {<br>
&nbsp;&nbsp;<span class="text-blue-300">saludar</span>(); <span class="text-slate-500">// llamada al procedimiento</span><br>
&nbsp;&nbsp;<span class="text-blue-300">saludar</span>(); <span class="text-slate-500">// se puede llamar múltiples veces</span><br>
}
</div>
<p class="text-slate-400 text-sm mb-3">Los procedimientos permiten <strong>reutilizar código</strong>: se escribe una vez y se llama cuantas veces sea necesario.</p>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Crear un procedimiento <code class="text-yellow-300">static void mostrarLinea()</code> que imprima <code class="text-yellow-300">----------</code> y llamarlo 3 veces desde <code class="text-yellow-300">main</code>.
</div>`,
    starterCode: `public class Main {\n\n    static void mostrarLinea() {\n        // Imprimir diez guiones\n\n    }\n\n    public static void main(String[] args) {\n        // Llamar a mostrarLinea tres veces\n\n    }\n}`,
    hint: 'Dentro del procedimiento usar println con el texto de guiones. En main, llamar al procedimiento por su nombre con paréntesis: mostrarLinea();',
  },

  { id: 22, title: "Procedimientos con parámetros", subtitle: "Pasar datos a un método",
    explanation: `
<h2 class="text-base font-bold mb-3">Procedimientos con parámetros</h2>
<p class="text-slate-300 text-sm mb-4">Los parámetros permiten que un procedimiento reciba datos para trabajar con ellos. Se declaran entre los paréntesis con su tipo y nombre.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">static void</span> <span class="text-blue-300">saludar</span>(<span class="text-green-300">String</span> nombre) {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Hola, "</span> + nombre + <span class="text-orange-300">"!"</span>);<br>
}<br><br>
<span class="text-blue-300">saludar</span>(<span class="text-orange-300">"Ana"</span>);  <span class="text-slate-500">// Hola, Ana!</span><br>
<span class="text-blue-300">saludar</span>(<span class="text-orange-300">"Luis"</span>); <span class="text-slate-500">// Hola, Luis!</span>
</div>
<p class="text-slate-400 text-sm mb-3">El mismo procedimiento produce resultados distintos según el argumento que recibe.</p>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Crear <code class="text-indigo-300">static void mostrarProducto(String nombre, double precio)</code> que imprima los datos de cada producto con el formato <em>Producto: nombre — Precio: $valor</em>. Llamarlo con tres productos: Arroz ($45.5), Aceite ($120.0) y Azúcar ($38.75).
</div>`,
    starterCode: `public class Main {\n\n    static void mostrarProducto(String nombre, double precio) {\n        // Imprimir el nombre y el precio\n\n    }\n\n    public static void main(String[] args) {\n        mostrarProducto("Arroz", 45.5);\n        mostrarProducto("Aceite", 120.0);\n        mostrarProducto("Azúcar", 38.75);\n    }\n}`,
    hint: 'Dentro del procedimiento usar println combinando el texto fijo con los parámetros nombre y precio usando el operador +.',
  },

  // ══ TEMA 11: Funciones ════════════════════════════════════════════════════
  { id: 23, title: "Funciones", subtitle: "Métodos que devuelven un valor",
    explanation: `
<h2 class="text-base font-bold mb-3">Funciones — métodos con return</h2>
<p class="text-slate-300 text-sm mb-4">Una <strong>función</strong> es un método que <strong>devuelve un valor</strong> al código que la llamó. En lugar de <code class="text-indigo-400">void</code>, se escribe el tipo del valor que retorna.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">static int</span> <span class="text-blue-300">sumar</span>(<span class="text-purple-400">int</span> a, <span class="text-purple-400">int</span> b) {<br>
&nbsp;&nbsp;<span class="text-purple-400">return</span> a + b; <span class="text-slate-500">// devuelve el resultado</span><br>
}<br><br>
<span class="text-purple-400">int</span> resultado = <span class="text-blue-300">sumar</span>(<span class="text-orange-300">4</span>, <span class="text-orange-300">7</span>);<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Resultado: "</span> + resultado); <span class="text-slate-500">// 11</span>
</div>
<div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">
  💡 <strong>void</strong> = no devuelve nada &nbsp;|&nbsp; <strong>int / double / String</strong> = devuelve ese tipo
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Crear <code class="text-indigo-300">static double calcularArea(double base, double altura)</code> que retorne el área de un triángulo (base × altura / 2). Llamarla con base=6 y altura=4 e imprimir el resultado.
</div>`,
    starterCode: `public class Main {\n\n    static double calcularArea(double base, double altura) {\n        // Calcular y retornar el área\n\n    }\n\n    public static void main(String[] args) {\n        double area = calcularArea(6, 4);\n        System.out.println("Área: " + area);\n    }\n}`,
    hint: 'La función debe usar return para devolver el cálculo: return base * altura / 2; El tipo de retorno declarado es double.',
  },

  { id: 24, title: "Funciones con String", subtitle: "Retornar texto",
    explanation: `
<h2 class="text-base font-bold mb-3">Funciones que retornan String</h2>
<p class="text-slate-300 text-sm mb-4">Una función puede retornar cualquier tipo, incluyendo <code class="text-indigo-400">String</code>. Es útil para construir mensajes o transformar texto.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">static</span> <span class="text-green-300">String</span> <span class="text-blue-300">crearSaludo</span>(<span class="text-green-300">String</span> nombre, <span class="text-purple-400">int</span> edad) {<br>
&nbsp;&nbsp;<span class="text-purple-400">return</span> <span class="text-orange-300">"Hola "</span> + nombre + <span class="text-orange-300">", tenés "</span> + edad + <span class="text-orange-300">" años."</span>;<br>
}<br><br>
<span class="text-green-300">String</span> msg = <span class="text-blue-300">crearSaludo</span>(<span class="text-orange-300">"María"</span>, <span class="text-orange-300">17</span>);<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(msg);
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Crear <code class="text-indigo-300">static String clasificar(int nota)</code> que retorne una categoría según la nota: la más alta (≥ 90), la media (≥ 60) y la más baja. Probar con notas 95, 75 y 40 e imprimir cada resultado.
</div>`,
    starterCode: `public class Main {\n\n    static String clasificar(int nota) {\n        // Retornar la clasificación según la nota\n\n    }\n\n    public static void main(String[] args) {\n        System.out.println(clasificar(95));\n        System.out.println(clasificar(75));\n        System.out.println(clasificar(40));\n    }\n}`,
    hint: 'Usar if / else if / else dentro de la función y retornar el String correspondiente en cada caso. Recordar que todas las ramas deben tener return.',
  },

  // ══ TEMA 9: Bucle for ═════════════════════════════════════════════════════
  { id: 15, title: "Bucle for", subtitle: "Repetir un número fijo de veces",
    explanation: `
<h2 class="text-base font-bold mb-3">El bucle for</h2>
<p class="text-slate-300 text-sm mb-4">El <code class="text-indigo-400">for</code> agrupa en una línea: valor inicial, condición e incremento. Es el más usado cuando se conoce cuántas veces repetir.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>; i <= <span class="text-orange-300">3</span>; i++) {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Vuelta "</span> + i);<br>
}<br>
<span class="text-slate-500">// Vuelta 1 / Vuelta 2 / Vuelta 3</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Usar un for para imprimir la tabla de multiplicar del 3 del 3×1 al 3×5, una línea por resultado con el formato <em>3 x N = resultado</em>.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Escribir el for del 1 al 5\n\n    }\n}`,
    hint: 'El for va del 1 al 5 (i <= 5). Dentro armar el mensaje: "3 x " + i + " = " + (3 * i). Los paréntesis fuerzan que la multiplicación se calcule antes.',
  },

  { id: 16, title: "for con acumulador", subtitle: "Calcular con un bucle",
    explanation: `
<h2 class="text-base font-bold mb-3">for con acumulador</h2>
<p class="text-slate-300 text-sm mb-4">El for también sirve para acumular valores. La variable acumuladora se declara <strong>antes</strong> del bucle y se imprime <strong>después</strong>.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> suma = <span class="text-orange-300">0</span>;<br>
<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>; i <= <span class="text-orange-300">5</span>; i++) {<br>
&nbsp;&nbsp;suma += i; <span class="text-slate-500">// suma = suma + i</span><br>
}<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Total: "</span> + suma); <span class="text-slate-500">// 15</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Calcular el factorial de 5 (5×4×3×2×1) usando un for e imprimir el resultado con el formato <em>5! = valor</em>.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int factorial = 1;\n        // Completar el for multiplicando\n\n        System.out.println("5! = " + factorial);\n    }\n}`,
    hint: 'En lugar de sumar, multiplicar en cada vuelta: factorial *= i (equivale a factorial = factorial * i). El for va del 1 al 5.',
  },

  // ══ TEMA 9: Arrays ════════════════════════════════════════════════════════
  { id: 17, title: "Arrays — declarar y acceder", subtitle: "Listas de valores",
    explanation: `
<h2 class="text-base font-bold mb-3">Arrays</h2>
<p class="text-slate-300 text-sm mb-4">Un array guarda múltiples valores del mismo tipo. Los índices empiezan en <strong>0</strong>.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span>[] notas = {<span class="text-orange-300">85</span>, <span class="text-orange-300">90</span>, <span class="text-orange-300">78</span>};<br>
notas[<span class="text-orange-300">0</span>]  <span class="text-slate-500">// 85 — primer elemento</span><br>
notas[<span class="text-orange-300">2</span>]  <span class="text-slate-500">// 78 — tercer elemento</span><br>
notas.length  <span class="text-slate-500">// 3 — cantidad de elementos</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con el array <code class="text-indigo-300">String[] materias = {"Matemática", "Inglés", "Programación"}</code>, imprimir en líneas separadas: la primera materia, la última y el total de elementos.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String[] materias = {"Matemática", "Inglés", "Programación"};\n        // Imprimir primera, última y total\n\n    }\n}`,
    hint: 'El primer elemento tiene índice 0. El último tiene índice length-1. Usar .length para obtener la cantidad total.',
  },

  { id: 18, title: "Recorrer un array", subtitle: "for con array",
    explanation: `
<h2 class="text-base font-bold mb-3">Recorrer un array con for</h2>
<p class="text-slate-300 text-sm mb-4">El for-each es la forma más sencilla de recorrer todos los elementos de un array:</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span>[] notas = {<span class="text-orange-300">85</span>, <span class="text-orange-300">90</span>, <span class="text-orange-300">78</span>};<br>
<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> n : notas) {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(n);<br>
}
</div>
<p class="text-slate-400 text-sm mb-3">También se puede usar un for clásico con índice para acceder a la posición.</p>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Dado el array <code class="text-indigo-300">int[] precios = {100, 250, 80, 320, 150}</code>, recorrer el array con un for, acumular la suma de todos los precios e imprimir el total.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] precios = {100, 250, 80, 320, 150};\n        int total = 0;\n        // Recorrer el array y acumular en total\n\n        System.out.println("Total: " + total);\n    }\n}`,
    hint: 'Usar un for-each (for (int p : precios)) y en cada vuelta sumar p al acumulador total. El resultado se imprime después del bucle.',
  },

  // ══ TEMA 14: Comentarios ═════════════════════════════════════════════════════
  { id: 27, title: "Comentarios de una línea", subtitle: "El símbolo //",
    explanation: `
<h2 class="text-base font-bold mb-3">Comentarios en Java</h2>
<p class="text-slate-300 text-sm mb-4">Un <strong>comentario</strong> es texto que el compilador ignora por completo. Sirve para documentar el código y explicar qué hace cada parte.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-slate-500">// Esto es un comentario de una línea</span><br>
<span class="text-purple-400">int</span> edad = <span class="text-orange-300">17</span>; <span class="text-slate-500">// también al final de una línea</span><br><br>
<span class="text-slate-500">/* Esto es un comentario</span><br>
<span class="text-slate-500">&nbsp;&nbsp; de bloque, puede abarcar</span><br>
<span class="text-slate-500">&nbsp;&nbsp; varias líneas */</span>
</div>
<div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">
  💡 Los comentarios no se ejecutan ni afectan el programa. Son solo para los programadores.
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Agregar un comentario de una línea antes de cada instrucción del código explicando qué hace. Luego ejecutar el programa para verificar que los comentarios no afectan la salida.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Agrega un comentario antes de cada línea explicando qué hace\n        String nombre = "Lucía";\n        int edad = 17;\n        System.out.println("Nombre: " + nombre);\n        System.out.println("Edad: " + edad);\n    }\n}`,
    hint: 'Los comentarios de una línea comienzan con //. Escribirlos antes de la declaración de la variable y antes de cada println.',
  },

  { id: 28, title: "Comentarios de bloque", subtitle: "/* ... */ y buenas prácticas",
    explanation: `
<h2 class="text-base font-bold mb-3">Comentarios de bloque</h2>
<p class="text-slate-300 text-sm mb-4">Para comentarios largos que abarcan varias líneas se usan <code class="text-indigo-400">/* ... */</code>. Son útiles para describir la lógica de un bloque completo.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-slate-500">/*</span><br>
<span class="text-slate-500">&nbsp; Calcula el área de un rectángulo.</span><br>
<span class="text-slate-500">&nbsp; base y altura deben ser positivos.</span><br>
<span class="text-slate-500">*/</span><br>
<span class="text-purple-400">double</span> area = base * altura;
</div>
<p class="text-slate-400 text-sm mb-3">Un buen comentario explica el <strong>por qué</strong>, no solo el qué. "Suma 1 a i" es innecesario; "Contamos desde 1 porque el índice 0 está reservado" agrega valor.</p>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Agregar un comentario de bloque (<code class="text-indigo-300">/* ... */</code>) al inicio del método main describiendo qué calcula el programa. Luego ejecutar para verificar que el comentario no afecta el resultado.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        /* Agrega aquí un comentario de bloque\n           describiendo qué calcula este programa */\n        double base = 6.0;\n        double altura = 4.0;\n        double area = base * altura;\n        System.out.println("Área: " + area);\n    }\n}`,
    hint: 'El comentario de bloque ya tiene la estructura /* ... */. Completar el texto descriptivo y ejecutar para ver la salida.',
  },

  // ══ TEMA 15: Constantes ══════════════════════════════════════════════════════
  { id: 29, title: "La palabra clave final", subtitle: "Valores que no cambian",
    explanation: `
<h2 class="text-base font-bold mb-3">Constantes con final</h2>
<p class="text-slate-300 text-sm mb-4">Una <strong>constante</strong> es una variable cuyo valor no puede cambiar después de asignarse. Se declara con la palabra clave <code class="text-indigo-400">final</code>. Por convención, el nombre va en <strong>MAYÚSCULAS</strong>.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">final double</span> TASA_IVA = <span class="text-orange-300">0.22</span>;<br>
<span class="text-purple-400">final int</span> MAX_INTENTOS = <span class="text-orange-300">3</span>;<br><br>
<span class="text-slate-500">// Error: no se puede reasignar una constante</span><br>
<span class="text-slate-500">// TASA_IVA = 0.10; ← Error de compilación</span>
</div>
<div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">
  💡 Usar constantes hace el código más legible y facilita los cambios: si la tasa del IVA cambia, solo se modifica en un lugar.
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Declarar <code class="text-indigo-300">final double PRECIO_BASE = 1000.0</code> y <code class="text-indigo-300">final double DESCUENTO = 0.15</code>. Calcular el precio con descuento (PRECIO_BASE − PRECIO_BASE × DESCUENTO) e imprimirlo.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        final double PRECIO_BASE = 1000.0;\n        final double DESCUENTO = 0.15;\n        // Calcular precio final: PRECIO_BASE - (PRECIO_BASE * DESCUENTO)\n\n    }\n}`,
    hint: 'El precio final es PRECIO_BASE menos el descuento. El descuento es PRECIO_BASE * DESCUENTO. Guardar en una variable double e imprimir.',
  },

  { id: 30, title: "Constantes en práctica", subtitle: "Uso en cálculos reales",
    explanation: `
<h2 class="text-base font-bold mb-3">Constantes en cálculos</h2>
<p class="text-slate-300 text-sm mb-4">Las constantes son especialmente útiles para valores físicos, reglas de negocio o límites del sistema que no deben cambiar durante la ejecución.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">final double</span> PI = <span class="text-orange-300">3.14159</span>;<br>
<span class="text-purple-400">final int</span> NOTA_MINIMA = <span class="text-orange-300">60</span>;<br><br>
<span class="text-purple-400">double</span> radio = <span class="text-orange-300">5.0</span>;<br>
<span class="text-purple-400">double</span> area = PI * radio * radio;<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Área: "</span> + area);
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Usando <code class="text-indigo-300">final int HORAS_DIA = 24</code> y <code class="text-indigo-300">final int DIAS_SEMANA = 7</code>, calcular el producto de ambas constantes e imprimir el total de horas en una semana.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        final int HORAS_DIA = 24;\n        final int DIAS_SEMANA = 7;\n        // Calcular e imprimir las horas en una semana\n\n    }\n}`,
    hint: 'Multiplicar HORAS_DIA por DIAS_SEMANA y guardar el resultado en una variable int. Luego imprimir con el texto correspondiente.',
  },

  // ══ TEMA 16: Conversión de tipos ═════════════════════════════════════════════
  { id: 31, title: "Widening — conversión implícita", subtitle: "De menor a mayor tipo",
    explanation: `
<h2 class="text-base font-bold mb-3">Conversión implícita (widening)</h2>
<p class="text-slate-300 text-sm mb-4">Java convierte automáticamente un tipo de dato <strong>más pequeño</strong> a uno <strong>más grande</strong> sin necesidad de indicarlo. No hay pérdida de información.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> entero = <span class="text-orange-300">42</span>;<br>
<span class="text-purple-400">double</span> decimal = entero; <span class="text-slate-500">// 42 → 42.0 automáticamente</span><br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(decimal); <span class="text-slate-500">// 42.0</span><br><br>
<span class="text-slate-500">// Orden: byte → short → int → long → float → double</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Declarar <code class="text-indigo-300">int cantidad = 7</code> y asignarla a una variable <code class="text-indigo-300">double resultado</code>. Dividir resultado entre 2 e imprimir el valor obtenido.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int cantidad = 7;\n        // Asignar cantidad a una variable double\n        double resultado = cantidad;\n        // Dividir resultado entre 2 e imprimir\n\n    }\n}`,
    hint: 'resultado ya es double (7.0). Dividir resultado / 2 dará 3.5. Imprimir con "Resultado: " + (resultado / 2).',
  },

  { id: 32, title: "Narrowing — cast explícito", subtitle: "De mayor a menor tipo",
    explanation: `
<h2 class="text-base font-bold mb-3">Conversión explícita (narrowing)</h2>
<p class="text-slate-300 text-sm mb-4">Cuando se convierte de un tipo <strong>mayor a uno menor</strong> (por ejemplo de <code class="text-indigo-400">double</code> a <code class="text-indigo-400">int</code>), se debe indicar explícitamente con un <strong>cast</strong>. Se pueden perder decimales.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">double</span> precio = <span class="text-orange-300">99.99</span>;<br>
<span class="text-purple-400">int</span> entero = (<span class="text-purple-400">int</span>) precio; <span class="text-slate-500">// 99 (trunca, no redondea)</span><br><br>
<span class="text-purple-400">double</span> promedio = <span class="text-orange-300">7.8</span>;<br>
<span class="text-purple-400">int</span> nota = (<span class="text-purple-400">int</span>) promedio; <span class="text-slate-500">// 7</span>
</div>
<div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">
  ⚠️ El cast <strong>trunca</strong> los decimales (los descarta). 7.9 se convierte en 7, no en 8.
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Dividir 10 entre 3 de dos formas: división entera y con cast. Imprimir:<br>
  <code class="text-yellow-300">División entera: 3<br>Con cast: 3</code>
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // División entera directa\n        int divEntera = 10 / 3;\n        System.out.println("División entera: " + divEntera);\n        // Obtener resultado decimal y luego castear a int\n        double decimal = 10.0 / 3;\n        int conCast = (int) decimal;\n        System.out.println("Con cast: " + conCast);\n    }\n}`,
    hint: 'El código ya está completo. Ejecutar y observar cómo ambas formas producen el mismo entero 3, pero por caminos distintos.',
  },

  // ══ TEMA 17: Incremento y decremento ═════════════════════════════════════════
  { id: 33, title: "Operadores ++ y --", subtitle: "Incrementar y decrementar",
    explanation: `
<h2 class="text-base font-bold mb-3">Incremento y decremento</h2>
<p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">++</code> aumenta una variable en 1 y <code class="text-indigo-400">--</code> la disminuye en 1. Son atajos muy usados en bucles y contadores.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> contador = <span class="text-orange-300">5</span>;<br>
contador++; <span class="text-slate-500">// ahora vale 6 (igual que contador = contador + 1)</span><br>
contador--; <span class="text-slate-500">// ahora vale 5 nuevamente</span><br><br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(contador); <span class="text-slate-500">// 5</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Empezar con <code class="text-indigo-300">int vidas = 3</code>. Incrementar una vez e imprimir el valor. Luego decrementar dos veces e imprimir el nuevo valor. Cada impresión con el formato <em>Vidas: valor</em>.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int vidas = 3;\n        // Incrementar e imprimir\n\n        // Decrementar dos veces e imprimir\n\n    }\n}`,
    hint: 'Usar vidas++ para incrementar y vidas-- para decrementar. Imprimir con println después de cada operación.',
  },

  { id: 34, title: "Pre vs Post incremento", subtitle: "++i vs i++",
    explanation: `
<h2 class="text-base font-bold mb-3">Pre-incremento vs Post-incremento</h2>
<p class="text-slate-300 text-sm mb-4">La posición del <code class="text-indigo-400">++</code> importa cuando se usa dentro de una expresión:</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> i = <span class="text-orange-300">5</span>;<br><br>
<span class="text-slate-500">// Post-incremento: primero usa el valor, luego incrementa</span><br>
<span class="text-purple-400">int</span> a = i++; <span class="text-slate-500">// a = 5, luego i = 6</span><br><br>
<span class="text-purple-400">int</span> j = <span class="text-orange-300">5</span>;<br>
<span class="text-slate-500">// Pre-incremento: primero incrementa, luego usa el valor</span><br>
<span class="text-purple-400">int</span> b = ++j; <span class="text-slate-500">// j = 6, luego b = 6</span>
</div>
<div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">
  💡 En una línea sola (<code>i++;</code>) no hay diferencia. La diferencia solo aparece cuando el resultado se usa en una expresión.
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> El código ya está escrito. Predecir los valores e imprimir para comprobar:<br>
  <code class="text-yellow-300">a: 5 — i: 6<br>b: 6 — j: 6</code>
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int i = 5;\n        int a = i++;\n        System.out.println("a: " + a + " — i: " + i);\n\n        int j = 5;\n        int b = ++j;\n        System.out.println("b: " + b + " — j: " + j);\n    }\n}`,
    hint: 'El código ya está completo. Ejecutar y observar la diferencia entre post-incremento (i++) y pre-incremento (++j).',
  },

  // ══ TEMA 18: Atajos aritméticos ══════════════════════════════════════════════
  { id: 35, title: "Operadores de asignación compuesta", subtitle: "+=  -=  *=  /=",
    explanation: `
<h2 class="text-base font-bold mb-3">Atajos aritméticos</h2>
<p class="text-slate-300 text-sm mb-4">Los operadores de asignación compuesta combinan una operación aritmética con la asignación. Son atajos que hacen el código más conciso.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> x = <span class="text-orange-300">10</span>;<br>
x += <span class="text-orange-300">5</span>;  <span class="text-slate-500">// x = x + 5 → 15</span><br>
x -= <span class="text-orange-300">3</span>;  <span class="text-slate-500">// x = x - 3 → 12</span><br>
x *= <span class="text-orange-300">2</span>;  <span class="text-slate-500">// x = x * 2 → 24</span><br>
x /= <span class="text-orange-300">4</span>;  <span class="text-slate-500">// x = x / 4 → 6</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Empezar con <code class="text-indigo-300">int puntos = 100</code>. Aplicar en orden: sumar 50, restar 30, multiplicar por 2 usando +=, -= y *=. Imprimir el valor final de puntos.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int puntos = 100;\n        // Sumar 50\n\n        // Restar 30\n\n        // Multiplicar por 2\n\n        System.out.println("Puntos: " + puntos);\n    }\n}`,
    hint: 'Usar puntos += 50; luego puntos -= 30; luego puntos *= 2; Cada operación modifica el valor acumulado de puntos.',
  },

  { id: 36, title: "Operador %=", subtitle: "Módulo con atajo",
    explanation: `
<h2 class="text-base font-bold mb-3">El atajo %=</h2>
<p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">%=</code> aplica el módulo y reasigna: <code class="text-indigo-400">x %= n</code> es lo mismo que <code class="text-indigo-400">x = x % n</code>.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> x = <span class="text-orange-300">17</span>;<br>
x %= <span class="text-orange-300">5</span>; <span class="text-slate-500">// x = 17 % 5 → 2 (resto de 17/5)</span><br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(x); <span class="text-slate-500">// 2</span>
</div>
<p class="text-slate-400 text-sm mb-3">Recordar que todos los atajos funcionan igual con variables de tipo <code class="text-yellow-300">double</code>.</p>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Hay 23 estudiantes para distribuir en mesas de 4. Usando <code class="text-yellow-300">%=</code>, calcular cuántos estudiantes no tienen mesa completa e imprimir:<br>
  <code class="text-yellow-300">Estudiantes sin mesa completa: 3</code>
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int estudiantes = 23;\n        estudiantes %= 4;\n        System.out.println("Estudiantes sin mesa completa: " + estudiantes);\n    }\n}`,
    hint: 'El código ya está escrito. 23 % 4 = 3 porque 4×5=20 y sobran 3. Ejecutar para verificar.',
  },

  // ══ TEMA 19: Operadores de comparación ════════════════════════════════════════
  { id: 37, title: "Operadores de comparación", subtitle: "== != > < >= <=",
    explanation: `
<h2 class="text-base font-bold mb-3">Operadores de comparación</h2>
<p class="text-slate-300 text-sm mb-4">Los operadores de comparación evalúan una condición y devuelven un valor <code class="text-indigo-400">boolean</code> (<code class="text-green-400">true</code> o <code class="text-green-400">false</code>).</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> a = <span class="text-orange-300">10</span>, b = <span class="text-orange-300">7</span>;<br>
a == b  <span class="text-slate-500">// false  — ¿son iguales?</span><br>
a != b  <span class="text-slate-500">// true   — ¿son distintos?</span><br>
a &gt;  b  <span class="text-slate-500">// true   — ¿a mayor que b?</span><br>
a &lt;  b  <span class="text-slate-500">// false  — ¿a menor que b?</span><br>
a &gt;= b  <span class="text-slate-500">// true   — ¿a mayor o igual?</span><br>
a &lt;= b  <span class="text-slate-500">// false  — ¿a menor o igual?</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-yellow-300">int nota = 75</code>, imprimir el resultado de comparar si la nota es mayor o igual a 60 e imprimir:<br>
  <code class="text-yellow-300">¿Aprobado? true</code>
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int nota = 75;\n        boolean aprobado = nota >= 60;\n        System.out.println("¿Aprobado? " + aprobado);\n    }\n}`,
    hint: 'El código ya está completo. Ejecutar y observar que la comparación nota >= 60 produce un boolean que se puede guardar en una variable.',
  },

  { id: 38, title: "Comparaciones en condiciones", subtitle: "Usar == y != con if",
    explanation: `
<h2 class="text-base font-bold mb-3">Comparaciones con if</h2>
<p class="text-slate-300 text-sm mb-4">Los operadores de comparación se usan directamente en las condiciones de <code class="text-indigo-400">if</code>, <code class="text-indigo-400">while</code> y <code class="text-indigo-400">for</code>.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> edad = <span class="text-orange-300">20</span>;<br>
<span class="text-purple-400">if</span> (edad >= <span class="text-orange-300">18</span>) {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Mayor de edad"</span>);<br>
}<br><br>
<span class="text-purple-400">int</span> dia = <span class="text-orange-300">7</span>;<br>
<span class="text-purple-400">if</span> (dia != <span class="text-orange-300">0</span>) {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Día válido"</span>);<br>
}
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">int temperatura = 38</code>: usar if/else if/else para imprimir un diagnóstico según la temperatura: un caso para fiebre (> 37), uno para temperatura normal (== 37) y uno para hipotermia.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int temperatura = 38;\n        // Escribir el if / else if / else usando operadores de comparación\n\n    }\n}`,
    hint: 'Usar if (temperatura > 37) para fiebre, else if (temperatura == 37) para normal, y else para el último caso.',
  },

  // ══ TEMA 20: Operadores lógicos ══════════════════════════════════════════════
  { id: 39, title: "AND y OR — && y ||", subtitle: "Combinar condiciones",
    explanation: `
<h2 class="text-base font-bold mb-3">Operadores lógicos && y ||</h2>
<p class="text-slate-300 text-sm mb-4">Los operadores lógicos permiten combinar varias condiciones en una sola expresión.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-slate-500">// && (AND): verdadero solo si AMBAS condiciones son true</span><br>
<span class="text-purple-400">if</span> (edad >= <span class="text-orange-300">18</span> && edad &lt;= <span class="text-orange-300">65</span>) {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"En edad laboral"</span>);<br>
}<br><br>
<span class="text-slate-500">// || (OR): verdadero si AL MENOS UNA condición es true</span><br>
<span class="text-purple-400">if</span> (dia == <span class="text-orange-300">6</span> || dia == <span class="text-orange-300">7</span>) {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Fin de semana"</span>);<br>
}
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">int nota = 75</code> y <code class="text-indigo-300">boolean entrego = true</code>: si la nota es mayor o igual a 60 Y entregó la tarea, imprimir un mensaje de aprobado; si no, uno de reprobado.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int nota = 75;\n        boolean entrego = true;\n        // Combinar ambas condiciones con &&\n\n    }\n}`,
    hint: 'Usar if (nota >= 60 && entrego) { ... } else { ... }. Ambas condiciones deben ser true para aprobar.',
  },

  { id: 40, title: "NOT — el operador !", subtitle: "Invertir una condición",
    explanation: `
<h2 class="text-base font-bold mb-3">Operador lógico !</h2>
<p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">!</code> (NOT) invierte el valor de un booleano: convierte <code class="text-green-400">true</code> en <code class="text-green-400">false</code> y viceversa.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">boolean</span> conectado = <span class="text-purple-400">false</span>;<br>
<span class="text-purple-400">if</span> (!conectado) {<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Sin conexión"</span>);<br>
}<br><br>
<span class="text-slate-500">// !true = false</span><br>
<span class="text-slate-500">// !false = true</span>
</div>
<p class="text-slate-400 text-sm mb-3"><code>!condicion</code> es una forma más clara de escribir <code>condicion == false</code>.</p>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">boolean pagado = false</code>: si NO está pagado, imprimir un mensaje de pago pendiente; si está pagado, un mensaje de pago registrado.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        boolean pagado = false;\n        // Usar ! para verificar si NO está pagado\n\n    }\n}`,
    hint: 'Escribir if (!pagado) { ... } else { ... }. !pagado es true cuando pagado es false.',
  },

  // ══ TEMA 21: System.out.print ════════════════════════════════════════════════
  { id: 41, title: "print vs println", subtitle: "Salida sin salto de línea",
    explanation: `
<h2 class="text-base font-bold mb-3">print vs println</h2>
<p class="text-slate-300 text-sm mb-3"><code class="text-indigo-400">println</code> imprime y baja al renglón siguiente. <code class="text-indigo-400">print</code> imprime sin moverse al siguiente renglón.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-green-300">System</span>.out.<span class="text-blue-300">print</span>(<span class="text-orange-300">"Hola "</span>);<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">print</span>(<span class="text-orange-300">"mundo"</span>);<br>
<span class="text-slate-500">// Salida: Hola mundo (en una sola línea)</span><br><br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Línea 1"</span>);<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Línea 2"</span>);<br>
<span class="text-slate-500">// Salida: Línea 1 / Línea 2 (en líneas distintas)</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Usando solo <code class="text-indigo-300">System.out.print</code>, imprimir los números del 1 al 5 separados por espacios, todos en una sola línea.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Imprimir 1 2 3 4 5 en una sola línea usando print\n        System.out.print(1 + " ");\n        // Continuar con los demás números\n\n    }\n}`,
    hint: 'Usar System.out.print() cinco veces, una por número. Cada llamada imprime el número seguido de un espacio, sin saltar de línea.',
  },

  { id: 42, title: "Secuencias de escape", subtitle: "\\n  \\t  \\\"  \\\\",
    explanation: `
<h2 class="text-base font-bold mb-3">Secuencias de escape</h2>
<p class="text-slate-300 text-sm mb-4">Algunas caracteres especiales dentro de un String se escriben con una barra invertida <code class="text-indigo-400">\\</code> seguida de una letra:</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-orange-300">"\\n"</span>  <span class="text-slate-500">→ salto de línea</span><br>
<span class="text-orange-300">"\\t"</span>  <span class="text-slate-500">→ tabulación (Tab)</span><br>
<span class="text-orange-300">"\\""</span>  <span class="text-slate-500">→ comilla doble</span><br>
<span class="text-orange-300">"\\\\"</span> <span class="text-slate-500">→ barra invertida</span><br><br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Nombre:\\tAna\\nEdad:\\t17"</span>);
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con un solo <code class="text-yellow-300">println</code>, imprimir usando secuencias de escape:<br>
  <code class="text-yellow-300">Producto:&nbsp;&nbsp;&nbsp;&nbsp;Yerba<br>Precio:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$85.50</code>
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Usar \\t para la tabulación y \\n para el salto de línea\n        System.out.println("Producto:\\tYerba\\nPrecio:\\t$85.50");\n    }\n}`,
    hint: 'El código ya está escrito. Ejecutar y observar cómo \\t crea una tabulación y \\n salta de línea, todo dentro de un solo String.',
  },

  // ══ TEMA 22: Formato de salida ═══════════════════════════════════════════════
  { id: 43, title: "printf y especificadores", subtitle: "%d  %s  %f",
    explanation: `
<h2 class="text-base font-bold mb-3">Salida formateada con printf</h2>
<p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">System.out.printf()</code> permite controlar exactamente cómo se muestra cada valor usando <strong>especificadores de formato</strong>.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-green-300">System</span>.out.<span class="text-blue-300">printf</span>(<span class="text-orange-300">"%s tiene %d años\\n"</span>, <span class="text-orange-300">"Ana"</span>, <span class="text-orange-300">17</span>);<br>
<span class="text-slate-500">// Ana tiene 17 años</span><br><br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">printf</span>(<span class="text-orange-300">"Precio: $%.2f\\n"</span>, <span class="text-orange-300">89.5</span>);<br>
<span class="text-slate-500">// Precio: $89.50</span>
</div>
<div class="bg-slate-700/40 rounded-lg p-3 text-sm text-slate-300 mb-3">
  📌 <strong>%d</strong> = entero &nbsp;|&nbsp; <strong>%s</strong> = String &nbsp;|&nbsp; <strong>%f</strong> = decimal &nbsp;|&nbsp; <strong>%.2f</strong> = 2 decimales
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Usando printf, imprimir tres líneas con los datos de un producto: nombre con %s, precio con %.2f y stock con %d. Cada dato en su propia línea.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String nombre = "Aceite";\n        double precio = 125.0;\n        int stock = 48;\n        // Usar printf con %s, %.2f y %d\n\n    }\n}`,
    hint: 'Usar printf tres veces o combinar todo en uno: printf("Producto: %s\\nPrecio: $%.2f\\nStock: %d unidades\\n", nombre, precio, stock);',
  },

  { id: 44, title: "String.format", subtitle: "Formato en variables",
    explanation: `
<h2 class="text-base font-bold mb-3">String.format</h2>
<p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">String.format()</code> crea un String formateado sin imprimirlo de inmediato. Es útil para construir mensajes antes de mostrarlos.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-green-300">String</span> msg = <span class="text-green-300">String</span>.<span class="text-blue-300">format</span>(<span class="text-orange-300">"Hola, %s! Nota: %.1f"</span>, <span class="text-orange-300">"Luis"</span>, <span class="text-orange-300">8.75</span>);<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(msg);<br>
<span class="text-slate-500">// Hola, Luis! Nota: 8.8</span>
</div>
<p class="text-slate-400 text-sm mb-3">Los mismos especificadores de printf funcionan en String.format.</p>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Construir un String formateado con los datos de un estudiante e imprimirlo:<br>
  <code class="text-yellow-300">Estudiante: Valentina — Promedio: 8.75</code>
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String nombre = "Valentina";\n        double promedio = 8.75;\n        // Usar String.format para construir el mensaje\n        String reporte = String.format("Estudiante: %s — Promedio: %.2f", nombre, promedio);\n        System.out.println(reporte);\n    }\n}`,
    hint: 'El código ya está completo. Ejecutar y observar que %.2f muestra el promedio con exactamente 2 decimales.',
  },

  // ══ TEMA 23: Switch ════════════════════════════════════════════════════════════
  { id: 45, title: "Sentencia switch", subtitle: "Múltiples casos",
    explanation: `
<h2 class="text-base font-bold mb-3">La sentencia switch</h2>
<p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">switch</code> evalúa una variable y ejecuta el bloque del <code class="text-indigo-400">case</code> que coincida con su valor. Es una alternativa más clara al encadenamiento de <code class="text-indigo-400">else if</code> cuando se comparan valores fijos.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">switch</span> (dia) {<br>
&nbsp;&nbsp;<span class="text-purple-400">case</span> <span class="text-orange-300">1</span>: <span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Lunes"</span>); <span class="text-purple-400">break</span>;<br>
&nbsp;&nbsp;<span class="text-purple-400">case</span> <span class="text-orange-300">2</span>: <span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Martes"</span>); <span class="text-purple-400">break</span>;<br>
&nbsp;&nbsp;<span class="text-purple-400">default</span>: <span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Otro día"</span>);<br>
}
</div>
<div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">
  ⚠️ Sin <code>break</code> ocurre <strong>fall-through</strong>: se ejecutan todos los case siguientes hasta el final.
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">int mes = 3</code>, agregar el case faltante al switch para que imprima el nombre del mes correspondiente.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int mes = 3;\n        switch (mes) {\n            case 1: System.out.println("Enero"); break;\n            case 2: System.out.println("Febrero"); break;\n            // Agregar case 3 y default\n\n        }\n    }\n}`,
    hint: 'Agregar case 3: System.out.println("Marzo"); break; y un default que imprima "Mes no válido".',
  },

  { id: 46, title: "Switch con String", subtitle: "Evaluar texto",
    explanation: `
<h2 class="text-base font-bold mb-3">Switch con String</h2>
<p class="text-slate-300 text-sm mb-4">Desde Java 7, switch también puede evaluar <code class="text-indigo-400">String</code>. La comparación es sensible a mayúsculas.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-green-300">String</span> color = <span class="text-orange-300">"rojo"</span>;<br>
<span class="text-purple-400">switch</span> (color) {<br>
&nbsp;&nbsp;<span class="text-purple-400">case</span> <span class="text-orange-300">"rojo"</span>:   <span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"🔴"</span>); <span class="text-purple-400">break</span>;<br>
&nbsp;&nbsp;<span class="text-purple-400">case</span> <span class="text-orange-300">"verde"</span>:  <span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"🟢"</span>); <span class="text-purple-400">break</span>;<br>
&nbsp;&nbsp;<span class="text-purple-400">case</span> <span class="text-orange-300">"azul"</span>:   <span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"🔵"</span>); <span class="text-purple-400">break</span>;<br>
&nbsp;&nbsp;<span class="text-purple-400">default</span>: <span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"Color desconocido"</span>);<br>
}
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-indigo-300">String turno = "tarde"</code>, agregar los cases faltantes al switch para imprimir el saludo correspondiente al turno.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String turno = "tarde";\n        switch (turno) {\n            case "mañana": System.out.println("Buenos días"); break;\n            // Agregar case "tarde" y case "noche"\n\n            default: System.out.println("Turno no válido");\n        }\n    }\n}`,
    hint: 'Agregar case "tarde": System.out.println("Buenas tardes"); break; y case "noche": System.out.println("Buenas noches"); break;',
  },

  // ══ TEMA 24: Operador ternario ════════════════════════════════════════════════
  { id: 47, title: "Operador ternario", subtitle: "condicion ? si : no",
    explanation: `
<h2 class="text-base font-bold mb-3">El operador ternario</h2>
<p class="text-slate-300 text-sm mb-4">El operador ternario es una forma compacta de escribir un <code class="text-indigo-400">if/else</code> que produce un valor. Su sintaxis es:<br><code class="text-yellow-300">condicion ? valorSiVerdadero : valorSiFalso</code></p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">int</span> edad = <span class="text-orange-300">20</span>;<br>
<span class="text-green-300">String</span> estado = (edad >= <span class="text-orange-300">18</span>) ? <span class="text-orange-300">"Mayor"</span> : <span class="text-orange-300">"Menor"</span>;<br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(estado); <span class="text-slate-500">// Mayor</span><br><br>
<span class="text-slate-500">// Equivale a:</span><br>
<span class="text-purple-400">if</span> (edad >= <span class="text-orange-300">18</span>) estado = <span class="text-orange-300">"Mayor"</span>;<br>
<span class="text-purple-400">else</span> estado = <span class="text-orange-300">"Menor"</span>;
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-yellow-300">int numero = -7</code>, usar el ternario para determinar si es positivo o no positivo e imprimir:<br>
  <code class="text-yellow-300">-7 es: no positivo</code>
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int numero = -7;\n        // Usar el operador ternario para clasificar el número\n        String tipo = (numero > 0) ? "positivo" : "no positivo";\n        System.out.println(numero + " es: " + tipo);\n    }\n}`,
    hint: 'El código ya está completo. Ejecutar y observar cómo el ternario decide el String según la condición numero > 0.',
  },

  { id: 48, title: "Ternario en práctica", subtitle: "Simplificar decisiones",
    explanation: `
<h2 class="text-base font-bold mb-3">Ternario en situaciones reales</h2>
<p class="text-slate-300 text-sm mb-4">El operador ternario es especialmente útil para asignar valores en una línea o directamente dentro de un <code class="text-indigo-400">println</code>.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-slate-500">// Dentro de println directamente</span><br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(<span class="text-orange-300">"¿Par? "</span> + (n % <span class="text-orange-300">2</span> == <span class="text-orange-300">0</span> ? <span class="text-orange-300">"Sí"</span> : <span class="text-orange-300">"No"</span>));<br><br>
<span class="text-slate-500">// Para calcular el mayor de dos valores</span><br>
<span class="text-purple-400">int</span> mayor = (a > b) ? a : b;
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-yellow-300">int a = 15</code> y <code class="text-yellow-300">int b = 28</code>, usar el ternario para encontrar el mayor e imprimir:<br>
  <code class="text-yellow-300">El mayor es: 28</code>
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int a = 15;\n        int b = 28;\n        // Usar el ternario para obtener el mayor\n        int mayor = (a > b) ? a : b;\n        System.out.println("El mayor es: " + mayor);\n    }\n}`,
    hint: 'El código ya está completo. El ternario (a > b) ? a : b devuelve a si es mayor, o b si no lo es.',
  },

  // ══ TEMA 25: Comparación de Strings ══════════════════════════════════════════
  { id: 49, title: "equals() vs ==", subtitle: "Comparar contenido de texto",
    explanation: `
<h2 class="text-base font-bold mb-3">Comparar Strings correctamente</h2>
<p class="text-slate-300 text-sm mb-4">Para comparar el <strong>contenido</strong> de dos Strings se usa <code class="text-indigo-400">.equals()</code>. El operador <code class="text-indigo-400">==</code> compara las <strong>referencias</strong> en memoria, no el texto.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-green-300">String</span> a = <span class="text-orange-300">"hola"</span>;<br>
<span class="text-green-300">String</span> b = <span class="text-orange-300">"hola"</span>;<br><br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(a.equals(b));   <span class="text-slate-500">// true ✓</span><br>
<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(a.equalsIgnoreCase(<span class="text-orange-300">"HOLA"</span>)); <span class="text-slate-500">// true</span>
</div>
<div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">
  ⚠️ Nunca usar <code>==</code> para comparar el contenido de Strings. Usar siempre <code>.equals()</code>.
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-yellow-300">String clave = "Java2025"</code> y un intento de acceso, verificar si coincide e imprimir:<br>
  <code class="text-yellow-300">Acceso concedido</code> o <code class="text-yellow-300">Acceso denegado</code>
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String clave = "Java2025";\n        String intento = "Java2025";\n        // Comparar usando .equals()\n        if (clave.equals(intento)) {\n            System.out.println("Acceso concedido");\n        } else {\n            System.out.println("Acceso denegado");\n        }\n    }\n}`,
    hint: 'El código ya usa .equals() correctamente. Probar cambiando el valor de intento para ver "Acceso denegado".',
  },

  { id: 50, title: "equalsIgnoreCase y compareTo", subtitle: "Comparaciones avanzadas",
    explanation: `
<h2 class="text-base font-bold mb-3">Métodos de comparación de Strings</h2>
<p class="text-slate-300 text-sm mb-3"><code class="text-indigo-400">equalsIgnoreCase()</code> compara ignorando mayúsculas y minúsculas.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-3 mono text-sm text-slate-300 leading-7">
<span class="text-orange-300">"Uruguay"</span>.equalsIgnoreCase(<span class="text-orange-300">"URUGUAY"</span>) <span class="text-slate-500">// true</span>
</div>
<p class="text-slate-300 text-sm mb-3"><code class="text-indigo-400">compareTo()</code> compara lexicográficamente: devuelve 0 si son iguales, negativo si el primero va antes alfabéticamente, positivo si va después.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-orange-300">"Ana"</span>.compareTo(<span class="text-orange-300">"Ana"</span>)  <span class="text-slate-500">// 0 — son iguales</span><br>
<span class="text-orange-300">"Ana"</span>.compareTo(<span class="text-orange-300">"Luis"</span>) <span class="text-slate-500">// negativo — Ana va antes</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-yellow-300">String pais = "uruguay"</code>, verificar con <code class="text-yellow-300">equalsIgnoreCase</code> si coincide con "Uruguay" e imprimir:<br>
  <code class="text-yellow-300">País verificado: true</code>
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String pais = "uruguay";\n        boolean coincide = pais.equalsIgnoreCase("Uruguay");\n        System.out.println("País verificado: " + coincide);\n    }\n}`,
    hint: 'El código ya está completo. equalsIgnoreCase ignora si "uruguay" o "Uruguay" están en distintas capitalización.',
  },

  // ══ TEMA 26: Métodos de String ════════════════════════════════════════════════
  { id: 51, title: "length, charAt, substring", subtitle: "Manipular texto",
    explanation: `
<h2 class="text-base font-bold mb-3">Métodos básicos de String</h2>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-green-300">String</span> s = <span class="text-orange-300">"Montevideo"</span>;<br><br>
s.<span class="text-blue-300">length</span>()        <span class="text-slate-500">// 10 — cantidad de caracteres</span><br>
s.<span class="text-blue-300">charAt</span>(<span class="text-orange-300">0</span>)       <span class="text-slate-500">// 'M' — carácter en posición 0</span><br>
s.<span class="text-blue-300">substring</span>(<span class="text-orange-300">0</span>, <span class="text-orange-300">5</span>) <span class="text-slate-500">// "Monte" — posiciones 0 a 4</span><br>
s.<span class="text-blue-300">indexOf</span>(<span class="text-orange-300">"video"</span>) <span class="text-slate-500">// 5 — posición donde empieza</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-yellow-300">String ciudad = "Montevideo"</code>, imprimir:<br>
  <code class="text-yellow-300">Largo: 10<br>Primera letra: M<br>Primeras 5 letras: Monte</code>
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String ciudad = "Montevideo";\n        // Usar length(), charAt(0) y substring(0, 5)\n        System.out.println("Largo: " + ciudad.length());\n        System.out.println("Primera letra: " + ciudad.charAt(0));\n        System.out.println("Primeras 5 letras: " + ciudad.substring(0, 5));\n    }\n}`,
    hint: 'El código ya está completo. Ejecutar para ver cómo length(), charAt() y substring() trabajan sobre el String.',
  },

  { id: 52, title: "toUpperCase, contains, replace", subtitle: "Transformar texto",
    explanation: `
<h2 class="text-base font-bold mb-3">Más métodos de String</h2>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-green-300">String</span> s = <span class="text-orange-300">"hola mundo"</span>;<br><br>
s.<span class="text-blue-300">toUpperCase</span>()           <span class="text-slate-500">// "HOLA MUNDO"</span><br>
s.<span class="text-blue-300">toLowerCase</span>()           <span class="text-slate-500">// "hola mundo" (ya en minúsculas)</span><br>
s.<span class="text-blue-300">contains</span>(<span class="text-orange-300">"mundo"</span>)       <span class="text-slate-500">// true</span><br>
s.<span class="text-blue-300">replace</span>(<span class="text-orange-300">"mundo"</span>, <span class="text-orange-300">"Java"</span>) <span class="text-slate-500">// "hola Java"</span><br>
s.<span class="text-blue-300">trim</span>()                   <span class="text-slate-500">// elimina espacios al inicio y fin</span>
</div>
<div class="bg-amber-900/30 border border-amber-700/40 rounded-lg p-3 text-sm text-amber-200 mb-3">
  💡 Los Strings son <strong>inmutables</strong>: estos métodos devuelven un nuevo String, no modifican el original.
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Con <code class="text-yellow-300">String frase = "java es genial"</code>, imprimir la frase en mayúsculas y luego reemplazar "genial" por "poderoso":<br>
  <code class="text-yellow-300">JAVA ES GENIAL<br>java es poderoso</code>
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        String frase = "java es genial";\n        // Imprimir en mayúsculas\n        System.out.println(frase.toUpperCase());\n        // Reemplazar "genial" por "poderoso" e imprimir\n        System.out.println(frase.replace("genial", "poderoso"));\n    }\n}`,
    hint: 'El código ya está completo. Observar que frase.toUpperCase() y frase.replace() devuelven nuevos Strings sin modificar la variable frase.',
  },

  // ══ TEMA 27: Break y Continue ═════════════════════════════════════════════════
  { id: 53, title: "Sentencia break", subtitle: "Salir de un bucle",
    explanation: `
<h2 class="text-base font-bold mb-3">La sentencia break</h2>
<p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">break</code> termina inmediatamente el bucle en el que se encuentra. La ejecución continúa con el código que está después del cierre del bucle.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>; i <= <span class="text-orange-300">10</span>; i++) {<br>
&nbsp;&nbsp;<span class="text-purple-400">if</span> (i == <span class="text-orange-300">5</span>) <span class="text-purple-400">break</span>; <span class="text-slate-500">// sale al llegar a 5</span><br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(i);<br>
}<br>
<span class="text-slate-500">// Imprime: 1 2 3 4</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Buscar el primer número divisible por 7 entre 1 y 50 e imprimir cuál es:<br>
  <code class="text-yellow-300">Primer múltiplo de 7: 7</code>
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 50; i++) {\n            if (i % 7 == 0) {\n                System.out.println("Primer múltiplo de 7: " + i);\n                break; // Salir después de encontrarlo\n            }\n        }\n    }\n}`,
    hint: 'El código ya está completo. break sale del bucle en cuanto encuentra el primer múltiplo de 7.',
  },

  { id: 54, title: "Sentencia continue", subtitle: "Saltar una iteración",
    explanation: `
<h2 class="text-base font-bold mb-3">La sentencia continue</h2>
<p class="text-slate-300 text-sm mb-4"><code class="text-indigo-400">continue</code> salta el resto del cuerpo de la iteración actual y pasa directamente a la siguiente. No termina el bucle, solo omite una vuelta.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>; i <= <span class="text-orange-300">5</span>; i++) {<br>
&nbsp;&nbsp;<span class="text-purple-400">if</span> (i == <span class="text-orange-300">3</span>) <span class="text-purple-400">continue</span>; <span class="text-slate-500">// salta el 3</span><br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>(i);<br>
}<br>
<span class="text-slate-500">// Imprime: 1 2 4 5</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Imprimir los números del 1 al 10 en una sola línea, saltando los múltiplos de 3 con continue.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            // Si i es múltiplo de 3, saltar con continue\n\n            System.out.print(i + " ");\n        }\n    }\n}`,
    hint: 'Agregar if (i % 3 == 0) continue; antes del println. Eso saltará la impresión cuando i sea 3, 6 o 9.',
  },

  // ══ TEMA 28: Bucles anidados ══════════════════════════════════════════════════
  { id: 55, title: "Bucles anidados", subtitle: "for dentro de for",
    explanation: `
<h2 class="text-base font-bold mb-3">Bucles anidados</h2>
<p class="text-slate-300 text-sm mb-4">Un bucle anidado es un bucle dentro de otro. El bucle <strong>interno</strong> se ejecuta completamente por cada iteración del bucle <strong>externo</strong>.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> fila = <span class="text-orange-300">1</span>; fila <= <span class="text-orange-300">3</span>; fila++) {<br>
&nbsp;&nbsp;<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> col = <span class="text-orange-300">1</span>; col <= <span class="text-orange-300">3</span>; col++) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">print</span>(fila + <span class="text-orange-300">","</span> + col + <span class="text-orange-300">" "</span>);<br>
&nbsp;&nbsp;}<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>();<br>
}<span class="text-slate-500"> // 1,1 1,2 1,3 / 2,1 2,2 2,3 / 3,1 3,2 3,3</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Imprimir las tablas de multiplicar del 2 y del 3 (del ×1 al ×5):<br>
  <code class="text-yellow-300">2 x 1 = 2  ...  2 x 5 = 10<br>3 x 1 = 3  ...  3 x 5 = 15</code>
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Bucle externo: tabla (2 y 3)\n        for (int tabla = 2; tabla <= 3; tabla++) {\n            // Bucle interno: multiplicadores del 1 al 5\n            for (int i = 1; i <= 5; i++) {\n                System.out.println(tabla + " x " + i + " = " + (tabla * i));\n            }\n        }\n    }\n}`,
    hint: 'El código ya está completo. El bucle externo recorre las tablas (2 y 3) y el interno los multiplicadores (1 a 5).',
  },

  { id: 56, title: "Patrón de asteriscos", subtitle: "Triángulo con bucles anidados",
    explanation: `
<h2 class="text-base font-bold mb-3">Patrones con bucles anidados</h2>
<p class="text-slate-300 text-sm mb-4">Los bucles anidados son la herramienta estándar para imprimir patrones de filas y columnas. El bucle externo controla las filas y el interno la cantidad de caracteres en cada fila.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> i = <span class="text-orange-300">1</span>; i <= <span class="text-orange-300">4</span>; i++) {<br>
&nbsp;&nbsp;<span class="text-purple-400">for</span> (<span class="text-purple-400">int</span> j = <span class="text-orange-300">1</span>; j <= i; j++) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">print</span>(<span class="text-orange-300">"* "</span>);<br>
&nbsp;&nbsp;}<br>
&nbsp;&nbsp;<span class="text-green-300">System</span>.out.<span class="text-blue-300">println</span>();<br>
}<br>
<span class="text-slate-500">// *<br>// * *<br>// * * *<br>// * * * *</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Imprimir un triángulo de asteriscos de 5 filas: la fila 1 tiene 1 asterisco, la fila 2 tiene 2, y así sucesivamente hasta la fila 5. Cada asterisco separado por un espacio.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Bucle externo: 5 filas\n        for (int i = 1; i <= 5; i++) {\n            // Bucle interno: i asteriscos por fila\n\n            System.out.println(); // salto de línea al terminar cada fila\n        }\n    }\n}`,
    hint: 'El bucle interno va de j=1 hasta j<=i: en la fila 1 imprime 1 *, en la fila 2 imprime 2 *, etc. Usar print("* ") dentro del bucle interno.',
  },

  // ══ TEMA 29: Sobrecarga de métodos ═══════════════════════════════════════════
  { id: 57, title: "Sobrecarga de métodos", subtitle: "Mismo nombre, distintos parámetros",
    explanation: `
<h2 class="text-base font-bold mb-3">Sobrecarga de métodos</h2>
<p class="text-slate-300 text-sm mb-4">La <strong>sobrecarga</strong> permite tener varios métodos con el <strong>mismo nombre</strong> siempre que difieran en el número o tipo de sus parámetros. Java decide cuál usar según los argumentos de la llamada.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">static int</span> <span class="text-blue-300">sumar</span>(<span class="text-purple-400">int</span> a, <span class="text-purple-400">int</span> b) {<br>
&nbsp;&nbsp;<span class="text-purple-400">return</span> a + b;<br>
}<br>
<span class="text-purple-400">static double</span> <span class="text-blue-300">sumar</span>(<span class="text-purple-400">double</span> a, <span class="text-purple-400">double</span> b) {<br>
&nbsp;&nbsp;<span class="text-purple-400">return</span> a + b;<br>
}<br>
<span class="text-slate-500">// sumar(3, 4)      → usa la versión int → 7</span><br>
<span class="text-slate-500">// sumar(3.5, 2.1)  → usa la versión double → 5.6</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> El código ya tiene dos versiones de <code class="text-yellow-300">describir</code>. Ejecutar y ver cómo Java elige cuál usar:<br>
  <code class="text-yellow-300">Número: 42<br>Texto: Hola</code>
</div>`,
    starterCode: `public class Main {\n\n    static void describir(int n) {\n        System.out.println("Número: " + n);\n    }\n\n    static void describir(String s) {\n        System.out.println("Texto: " + s);\n    }\n\n    public static void main(String[] args) {\n        describir(42);     // llama a la versión int\n        describir("Hola"); // llama a la versión String\n    }\n}`,
    hint: 'El código ya está completo. Ejecutar y observar cómo Java selecciona automáticamente la versión correcta según el tipo del argumento.',
  },

  { id: 58, title: "Sobrecarga con distintos parámetros", subtitle: "Flexibilidad en métodos",
    explanation: `
<h2 class="text-base font-bold mb-3">Sobrecarga con distinta cantidad de parámetros</h2>
<p class="text-slate-300 text-sm mb-4">También se puede sobrecargar cambiando la <strong>cantidad</strong> de parámetros. Esto es útil para métodos que pueden funcionar con más o menos datos.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-purple-400">static double</span> <span class="text-blue-300">promedio</span>(<span class="text-purple-400">double</span> a, <span class="text-purple-400">double</span> b) {<br>
&nbsp;&nbsp;<span class="text-purple-400">return</span> (a + b) / <span class="text-orange-300">2</span>;<br>
}<br>
<span class="text-purple-400">static double</span> <span class="text-blue-300">promedio</span>(<span class="text-purple-400">double</span> a, <span class="text-purple-400">double</span> b, <span class="text-purple-400">double</span> c) {<br>
&nbsp;&nbsp;<span class="text-purple-400">return</span> (a + b + c) / <span class="text-orange-300">3</span>;<br>
}
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Calcular el promedio de 2 notas y de 3 notas usando el mismo nombre de método e imprimir:<br>
  <code class="text-yellow-300">Promedio de 2: 7.5<br>Promedio de 3: 8.0</code>
</div>`,
    starterCode: `public class Main {\n\n    static double promedio(double a, double b) {\n        return (a + b) / 2;\n    }\n\n    static double promedio(double a, double b, double c) {\n        return (a + b + c) / 3;\n    }\n\n    public static void main(String[] args) {\n        System.out.println("Promedio de 2: " + promedio(6, 9));\n        System.out.println("Promedio de 3: " + promedio(7, 8, 9));\n    }\n}`,
    hint: 'El código ya está completo. Ejecutar y observar cómo se llama al mismo nombre promedio con 2 o 3 argumentos y Java elige la versión correcta.',
  },

  // ══ TEMA 30: Proyecto Calculadora ════════════════════════════════════════════
  { id: 59, title: "Calculadora básica", subtitle: "Scanner + operaciones",
    explanation: `
<h2 class="text-base font-bold mb-3">Proyecto: Calculadora básica</h2>
<p class="text-slate-300 text-sm mb-4">Integrar Scanner, variables, operaciones aritméticas y salida formateada para construir una calculadora simple de dos números.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-slate-500">// Flujo del programa:</span><br>
<span class="text-slate-500">// 1. Leer dos números</span><br>
<span class="text-slate-500">// 2. Calcular suma, resta, producto, cociente</span><br>
<span class="text-slate-500">// 3. Imprimir resultados formateados</span>
</div>
<div class="bg-slate-700/40 rounded-lg p-3 text-sm text-slate-300 mb-3">
  💡 En la pestaña <strong>I/O</strong> de OneCompiler ingresar dos números, uno por línea: <code>10</code> y <code>4</code>.
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Completar el programa para que imprima con los datos 10 y 4:<br>
  <code class="text-yellow-300">Suma: 14<br>Resta: 6<br>Producto: 40<br>Cociente: 2.50</code>
</div>`,
    starterCode: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double a = sc.nextDouble();\n        double b = sc.nextDouble();\n        System.out.println("Suma: " + (int)(a + b));\n        System.out.println("Resta: " + (int)(a - b));\n        System.out.println("Producto: " + (int)(a * b));\n        System.out.printf("Cociente: %.2f%n", a / b);\n    }\n}`,
    hint: 'El código ya está casi completo. Ingresar 10 y 4 en la pestaña I/O. El cociente usa printf con %.2f para mostrar 2 decimales.',
  },

  { id: 60, title: "Calculadora con switch", subtitle: "Elegir operación",
    explanation: `
<h2 class="text-base font-bold mb-3">Calculadora con menú de operación</h2>
<p class="text-slate-300 text-sm mb-4">Una calculadora más completa permite al usuario elegir la operación. Se leen dos números y un operador, y se usa <code class="text-indigo-400">switch</code> para ejecutar la operación correspondiente.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-slate-500">// Entrada (pestaña I/O):</span><br>
<span class="text-slate-500">// 15</span><br>
<span class="text-slate-500">// 4</span><br>
<span class="text-slate-500">// *</span><br><br>
<span class="text-slate-500">// Salida esperada: 15.0 * 4.0 = 60.00</span>
</div>
<div class="bg-slate-700/40 rounded-lg p-3 text-sm text-slate-300 mb-3">
  💡 En la pestaña <strong>I/O</strong> ingresar: primer número, segundo número, operador (cada uno en una línea).
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Completar el case de multiplicación y el de división (con verificación de divisor cero).
</div>`,
    starterCode: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double a = sc.nextDouble();\n        double b = sc.nextDouble();\n        String op = sc.next();\n        double resultado = 0;\n        switch (op) {\n            case "+": resultado = a + b; break;\n            case "-": resultado = a - b; break;\n            case "*": resultado = a * b; break; // completado\n            case "/":\n                if (b != 0) resultado = a / b;\n                else { System.out.println("Error: división por cero"); return; }\n                break;\n            default: System.out.println("Operador no válido"); return;\n        }\n        System.out.printf("%.1f %s %.1f = %.2f%n", a, op, b, resultado);\n    }\n}`,
    hint: 'El código ya está completo. Probar con distintas combinaciones: 10 4 + / 15 3 * / 7 0 / (para ver el error de división por cero).',
  },

  // ══ TEMA 31: Desafíos Finales ═════════════════════════════════════════════════
  { id: 61, title: "Patrón de números", subtitle: "Triángulo numérico",
    explanation: `
<h2 class="text-base font-bold mb-3">Desafío: Patrón de números</h2>
<p class="text-slate-300 text-sm mb-4">Usar bucles anidados para imprimir un triángulo donde cada fila muestra los números del 1 hasta el número de la fila.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-slate-500">// Salida esperada:</span><br>
<span class="text-orange-300">1</span><br>
<span class="text-orange-300">1 2</span><br>
<span class="text-orange-300">1 2 3</span><br>
<span class="text-orange-300">1 2 3 4</span><br>
<span class="text-orange-300">1 2 3 4 5</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> Imprimir el triángulo numérico de 5 filas. En cada fila los números van de 1 hasta el número de fila.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        // Bucle externo: filas del 1 al 5\n        for (int fila = 1; fila <= 5; fila++) {\n            // Bucle interno: números del 1 al número de fila\n            for (int j = 1; j <= fila; j++) {\n                System.out.print(j + " ");\n            }\n            System.out.println();\n        }\n    }\n}`,
    hint: 'El código ya está completo. El bucle interno va de j=1 hasta j<=fila, imprimiendo el valor de j en cada iteración.',
  },

  { id: 62, title: "Calculadora de notas", subtitle: "Promedio y clasificación",
    explanation: `
<h2 class="text-base font-bold mb-3">Desafío: Calculadora de notas</h2>
<p class="text-slate-300 text-sm mb-4">Integrar arrays, bucles, cálculo de promedio y clasificación con if/else para construir un sistema de evaluación simple.</p>
<div class="bg-slate-800/60 rounded-lg p-4 mb-4 mono text-sm text-slate-300 leading-7">
<span class="text-slate-500">// Dados 5 notas, calcular el promedio</span><br>
<span class="text-slate-500">// y clasificar: Destacado / Logrado / En proceso</span><br><br>
<span class="text-purple-400">int</span>[] notas = {<span class="text-orange-300">85</span>, <span class="text-orange-300">92</span>, <span class="text-orange-300">78</span>, <span class="text-orange-300">90</span>, <span class="text-orange-300">88</span>};<br>
<span class="text-slate-500">// Promedio: 86.6 → Destacado</span>
</div>
<div class="bg-indigo-900/30 border border-indigo-700/40 rounded-lg p-3 text-sm text-indigo-200">
  <span class="font-bold">🎯 Tarea:</span> El código ya está completo. Ejecutar y verificar que calcula correctamente el promedio de las 5 notas y la clasificación correspondiente.
</div>`,
    starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] notas = {85, 92, 78, 90, 88};\n        int suma = 0;\n        // Sumar todas las notas con for-each\n        for (int n : notas) {\n            suma += n;\n        }\n        double promedio = (double) suma / notas.length;\n        System.out.printf("Promedio: %.2f%n", promedio);\n        // Clasificar según el promedio\n        String clasificacion;\n        if (promedio >= 90) clasificacion = "Destacado";\n        else if (promedio >= 70) clasificacion = "Logrado";\n        else clasificacion = "En proceso";\n        System.out.println("Clasificación: " + clasificacion);\n    }\n}`,
    hint: 'El código ya está completo. El cast (double) antes de suma fuerza la división decimal. Probar cambiando las notas para ver cómo cambia la clasificación.',
  },

];

// ─── OUTPUTS ESPERADOS ───────────────────────────────────────────────────────
// Lessons con Scanner o Random no tienen expectedOutput (el panel no aparece).
const EXPECTED_OUTPUTS = {
  1:  "Hola, Java!",
  2:  "Nombre: Ana\nEdad: 17\nCurso: 2do BT",
  3:  "Cantidad: 5\nPrecio: 200",
  4:  "Total: 74.97",
  7:  "Ciudad: Montevideo, País: Uruguay",
  8:  "Aprobado: true\nCalificación: B",
  9:  "Suma: 13\nResta: 3\nProducto: 40",
  10: "Grupos: 4\nSobran: 2",
  11: "Hace calor",
  12: "Buenas tardes",
  13: "1\n2\n3\n4\n5",
  14: "Suma de pares: 30",
  15: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15",
  16: "5! = 120",
  17: "Primera: Matemática\nÚltima: Programación\nTotal: 3",
  18: "Total: 900",
  19: "1\n2\n3\n4",
  20: "Suma de impares: 25",
  21: "----------\n----------\n----------",
  22: "Producto: Arroz — Precio: $45.5\nProducto: Aceite — Precio: $120.0\nProducto: Azúcar — Precio: $38.75",
  23: "Área: 12.0",
  24: "Destacado\nLogrado\nEn proceso",
  27: "Nombre: Lucía\nEdad: 17",
  28: "Área: 24.0",
  29: "Precio final: 850.0",
  30: "Horas en una semana: 168",
  31: "Resultado: 3.5",
  32: "División entera: 3\nCon cast: 3",
  33: "Vidas: 4\nVidas: 2",
  34: "a: 5 — i: 6\nb: 6 — j: 6",
  35: "Puntos: 240",
  36: "Estudiantes sin mesa completa: 3",
  37: "¿Aprobado? true",
  38: "Fiebre",
  39: "Aprobado",
  40: "Pago pendiente",
  41: "1 2 3 4 5",
  42: "Producto:\tYerba\nPrecio:\t$85.50",
  43: "Producto: Aceite\nPrecio: $125.00\nStock: 48 unidades",
  44: "Estudiante: Valentina — Promedio: 8.75",
  45: "Marzo",
  46: "Buenas tardes",
  47: "-7 es: no positivo",
  48: "El mayor es: 28",
  49: "Acceso concedido",
  50: "País verificado: true",
  51: "Largo: 10\nPrimera letra: M\nPrimeras 5 letras: Monte",
  52: "JAVA ES GENIAL\njava es poderoso",
  53: "Primer múltiplo de 7: 7",
  54: "1 2 4 5 7 8 10",
  55: "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15",
  56: "*\n* *\n* * *\n* * * *\n* * * * *",
  57: "Número: 42\nTexto: Hola",
  58: "Promedio de 2: 7.5\nPromedio de 3: 8.0",
  61: "1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5",
  62: "Promedio: 86.60\nClasificación: Destacado",
};

// ─── STATE ────────────────────────────────────────────────────────────────────
let currentLesson = null;
let ocReady = false;
let pendingCode = null;

// quiz state
let currentQuiz = null;
let currentQIndex = 0;
let quizScore = 0;
let quizAnswered = false;
const quizDone = new Set();

// accordion & enable state (persisted in localStorage)
const expandedTopics = new Set(JSON.parse(localStorage.getItem('jj-expanded') || '[]'));
const enabledTopics  = new Set(JSON.parse(localStorage.getItem('jj-enabled')  || JSON.stringify(TOPICS.map(t => t.id))));

// ─── INIT ─────────────────────────────────────────────────────────────────────
function init() {
  renderSidebar();
  selectLesson(LESSONS[0].id);
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────
function saveAccordionState() {
  localStorage.setItem('jj-expanded', JSON.stringify([...expandedTopics]));
  localStorage.setItem('jj-enabled',  JSON.stringify([...enabledTopics]));
}

function toggleExpand(topicId) {
  if (expandedTopics.has(topicId)) expandedTopics.delete(topicId);
  else expandedTopics.add(topicId);
  saveAccordionState();
  renderSidebar();
}

// ─── TEACHER PANEL ────────────────────────────────────────────────────────────
const DEFAULT_PASS_HASH = 'ea1a37adfd7675332cd064a92f94ce09ae421750f0a308f2bce80db6f5e8f192'; // profe2025

async function hashPassword(pw) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pw));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function openTeacherLogin() {
  document.getElementById('teacher-login').style.display = 'flex';
  document.getElementById('teacher-pw-error').style.display = 'none';
  document.getElementById('teacher-pw-input').value = '';
  setTimeout(() => document.getElementById('teacher-pw-input').focus(), 50);
}

async function submitTeacherLogin() {
  const pw = document.getElementById('teacher-pw-input').value;
  const hash = await hashPassword(pw);
  const stored = localStorage.getItem('jj-passhash') || DEFAULT_PASS_HASH;
  if (hash === stored) {
    document.getElementById('teacher-login').style.display = 'none';
    openTeacherPanel();
  } else {
    document.getElementById('teacher-pw-error').style.display = 'block';
  }
}

function openTeacherPanel() {
  renderTeacherPanel();
  document.getElementById('teacher-panel').style.display = 'flex';
}

function renderTeacherPanel() {
  const list = document.getElementById('tp-topic-list');
  list.innerHTML = '';
  TOPICS.forEach((topic, topicIdx) => {
    const enabled = enabledTopics.has(topic.id);
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid #1e2535;';
    row.innerHTML = `
      <span style="font-size:13px;color:${enabled ? '#e2e8f0' : '#4a5568'};">${topicIdx + 1}. ${topic.label}</span>
      <button onclick="toggleTopicFromPanel(${topic.id})" style="
        width:42px;height:24px;border-radius:12px;border:none;cursor:pointer;
        background:${enabled ? '#4f6ef7' : '#2d3748'};position:relative;transition:background .2s;flex-shrink:0;">
        <span style="position:absolute;top:4px;${enabled ? 'right:4px' : 'left:4px'};
          width:16px;height:16px;background:#fff;border-radius:50%;transition:all .2s;"></span>
      </button>`;
    list.appendChild(row);
  });
}

function toggleTopicFromPanel(topicId) {
  if (enabledTopics.has(topicId)) enabledTopics.delete(topicId);
  else enabledTopics.add(topicId);
  saveAccordionState();
  renderTeacherPanel();
  renderSidebar();
}

function enableAllTopics() {
  TOPICS.forEach(t => enabledTopics.add(t.id));
  saveAccordionState();
  renderTeacherPanel();
  renderSidebar();
}

function disableAllTopics() {
  enabledTopics.clear();
  saveAccordionState();
  renderTeacherPanel();
  renderSidebar();
}

async function changeTeacherPassword() {
  const pw = document.getElementById('tp-new-pw').value.trim();
  if (pw.length < 4) { alert('La contraseña debe tener al menos 4 caracteres.'); return; }
  const hash = await hashPassword(pw);
  localStorage.setItem('jj-passhash', hash);
  document.getElementById('tp-new-pw').value = '';
  const saved = document.getElementById('tp-pw-saved');
  saved.style.display = 'block';
  setTimeout(() => { saved.style.display = 'none'; }, 2500);
}

function closeTeacherPanel() {
  document.getElementById('teacher-panel').style.display = 'none';
}

// Triple clic en el logo ☕ abre el panel docente
let _logoClicks = 0, _logoTimer = null;
document.getElementById('logo-icon').addEventListener('click', () => {
  _logoClicks++;
  clearTimeout(_logoTimer);
  _logoTimer = setTimeout(() => { _logoClicks = 0; }, 600);
  if (_logoClicks >= 3) { _logoClicks = 0; openTeacherLogin(); }
});

function renderSidebar() {
  const nav = document.getElementById('lesson-list');
  nav.innerHTML = '';

  TOPICS.forEach((topic, topicIdx) => {
    const isOpen    = expandedTopics.has(topic.id);
    const isEnabled = enabledTopics.has(topic.id);

    // ── Topic header ──────────────────────────────────────────
    const header = document.createElement('div');
    header.className = `topic-header${isEnabled ? '' : ' disabled'}`;
    header.innerHTML = `
      <span class="topic-arrow${isOpen ? ' open' : ''}">▶</span>
      <span class="topic-label">${topicIdx + 1}. ${topic.label}</span>
      ${!isEnabled ? '<span style="font-size:11px;color:#4a5568;margin-left:auto;">🔒</span>' : ''}`;
    header.onclick = () => { if (isEnabled) toggleExpand(topic.id); };
    nav.appendChild(header);

    // ── Collapsible content ───────────────────────────────────
    const content = document.createElement('div');
    content.className = `topic-content${isOpen ? '' : ' closed'}`;
    // measure height after insert
    if (isOpen) content.style.maxHeight = '9999px';

    // Lessons
    topic.lessons.forEach(lid => {
      const l = LESSONS.find(x => x.id === lid);
      if (!l) return;
      const isActive = currentLesson === l.id;
      const locked   = !isEnabled;
      const div = document.createElement('div');
      div.className = `lesson-item${isActive ? ' active' : ''}${locked ? ' locked' : ''}`;
      div.style.paddingLeft = '28px';
      div.innerHTML = `
        <div class="lesson-num">${l.id}</div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium truncate">${l.title}</div>
          <div class="text-xs text-slate-500 truncate">${l.subtitle}</div>
        </div>`;
      if (!locked) div.onclick = () => selectLesson(l.id);
      content.appendChild(div);
    });

    // Quiz
    const quiz = QUIZZES.find(q => q.topicId === topic.id);
    if (quiz) {
      const done   = quizDone.has(topic.id);
      const locked = !isEnabled;
      const qDiv   = document.createElement('div');
      qDiv.className = `quiz-item${done ? ' done' : ''}${locked ? ' locked' : ''}`;
      qDiv.innerHTML = `
        <div class="quiz-icon">${done ? '✅' : '📝'}</div>
        <div class="flex-1 min-w-0">
          <div class="text-sm font-medium text-emerald-400 truncate">Quiz del tema</div>
          <div class="text-xs text-slate-500 truncate">${quiz.questions.length} preguntas</div>
        </div>`;
      if (!locked) qDiv.onclick = () => openQuiz(topic.id);
      content.appendChild(qDiv);
    }

    nav.appendChild(content);
  });

  const enabled = TOPICS.filter(t => enabledTopics.has(t.id)).length;
  document.getElementById('lessons-label').textContent =
    `${enabled} / ${TOPICS.length} temas habilitados`;
}

// ─── SELECT LESSON ────────────────────────────────────────────────────────────
const OC_PARAMS = 'hideTitle=true&hideNew=true&hideLanguages=true&theme=dark';

function selectLesson(id) {
  const lesson = LESSONS.find(l => l.id === id);
  if (!lesson) return;
  currentLesson = id;
  document.getElementById('explanation-panel').innerHTML = lesson.explanation;
  renderSidebar();

  const iframe = document.getElementById('oc-iframe');
  if (lesson.snippetId) {
    // Cambiar la URL del iframe al snippet guardado en OneCompiler
    ocReady = false;
    pendingCode = null;
    iframe.src = `https://onecompiler.com/java/${lesson.snippetId}?${OC_PARAMS}`;
  } else {
    // Enviar código vía postMessage
    const code = lesson.starterCode;
    if (ocReady) {
      postToOC(code);
    } else {
      pendingCode = code;
    }
  }
  // Mostrar u ocultar el panel de verificación
  const verifyPanel = document.getElementById('verify-panel');
  const verifyResult = document.getElementById('verify-result');
  const outputInput = document.getElementById('output-input');
  if (EXPECTED_OUTPUTS[id] !== undefined) {
    verifyPanel.style.display = 'block';
  } else {
    verifyPanel.style.display = 'none';
  }
  if (verifyResult) { verifyResult.className = 'mt-2 text-sm hidden'; verifyResult.textContent = ''; }
  if (outputInput) outputInput.value = '';
}

// ─── ONECOMPILER ──────────────────────────────────────────────────────────────
function ocLoaded() {
  if (pendingCode !== null) {
    // Lección con starterCode: enviamos en varios intentos para ganarle
    // la carrera a la restauración propia del localStorage de OneCompiler.
    [800, 1500, 2500].forEach((delay, i) => {
      setTimeout(() => {
        if (pendingCode !== null) postToOC(pendingCode);
        if (i === 2) { ocReady = true; pendingCode = null; }
      }, delay);
    });
  } else {
    // Lección con snippetId: el iframe ya cargó el código correcto.
    setTimeout(() => { ocReady = true; }, 500);
  }
}

function postToOC(code) {
  document.getElementById('oc-iframe').contentWindow.postMessage({
    eventType: 'populateCode',
    language: 'java',
    files: [{ name: 'Main.java', content: code }]
  }, '*');
}

// ─── DIAGNÓSTICO: capturar eventos de OneCompiler ────────────────────────────
// Escuchar TODOS los mensajes del iframe para ver qué emite OneCompiler
window.addEventListener('message', (e) => {
  const iframe = document.getElementById('oc-iframe');
  // Solo mensajes que vienen del iframe de OneCompiler
  if (iframe && e.source === iframe.contentWindow) {
    console.log('[OC EVENT]', JSON.stringify(e.data));
  }
});

// ─── SHARE ────────────────────────────────────────────────────────────────────
function showShare() {
  const lesson = LESSONS.find(l => l.id === currentLesson);
  if (!lesson) return;
  document.getElementById('share-oc-input').value = '';
  updateShareMessage();
  document.getElementById('share-modal').style.display = 'flex';
}

function extractTaskText(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  const taskDiv = div.querySelector('.bg-indigo-900\\/30');
  return taskDiv ? taskDiv.textContent.trim() : '';
}

function updateShareMessage() {
  const lesson = LESSONS.find(l => l.id === currentLesson);
  if (!lesson) return;
  const titulo = `Lección ${lesson.id} — ${lesson.title}`;
  const tarea = extractTaskText(lesson.explanation).replace(/^🎯\s*Tarea:\s*/i, '');
  const salida = (document.getElementById('output-input')?.value || '').trim();
  const link = (document.getElementById('share-oc-input')?.value || '').trim();
  let msg = `📚 ${titulo}\n\n🎯 Tarea: ${tarea}`;
  if (salida) msg += `\n\n📤 Salida del programa:\n${salida}`;
  if (link)   msg += `\n\n🔗 Código: ${link}`;
  document.getElementById('share-message').value = msg;
}

function copyShareMessage() {
  const text = document.getElementById('share-message').value;
  const btn = document.getElementById('share-copy-btn');
  const ok = () => {
    btn.textContent = '✓ Copiado';
    btn.style.background = '#16a34a';
    setTimeout(() => { btn.textContent = 'Copiar mensaje'; btn.style.background = ''; }, 1800);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(ok).catch(() => fallbackCopy(text, ok));
  } else {
    fallbackCopy(text, ok);
  }
}

function fallbackCopy(text, cb) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  if (cb) cb();
}

// ─── HINT / SOLUTION ──────────────────────────────────────────────────────────
function showHint() {
  const lesson = LESSONS.find(l => l.id === currentLesson);
  if (!lesson) return;
  openModal('💡', 'Pista', lesson.hint);
}

function showSolution() {
  const lesson = LESSONS.find(l => l.id === currentLesson);
  if (!lesson) return;
  postToOC(lesson.solution);
}

// ─── VERIFICACIÓN DE SALIDA ──────────────────────────────────────────────────
function normalizeOutput(s) {
  return s.split('\n').map(l => l.trim()).filter(l => l.length > 0).join('\n');
}

function verifyOutput() {
  const expected = EXPECTED_OUTPUTS[currentLesson];
  if (expected === undefined) return;
  const input = (document.getElementById('output-input').value || '').replace(/\r\n/g, '\n');
  const result = document.getElementById('verify-result');
  result.classList.remove('hidden');

  const normInput    = normalizeOutput(input);
  const normExpected = normalizeOutput(expected);

  if (normInput === normExpected) {
    result.className = 'mt-2 text-sm rounded-lg px-3 py-2 bg-emerald-900/40 border border-emerald-700/50 text-emerald-300';
    result.innerHTML = '✅ <strong>¡Correcto!</strong> La salida coincide exactamente con lo esperado.';
  } else {
    result.className = 'mt-2 text-sm rounded-lg px-3 py-2 bg-red-900/40 border border-red-700/50 text-red-300';
    const escapedExp = normExpected.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\t/g,'→ ');
    result.innerHTML = `❌ <strong>No coincide.</strong> Salida esperada:<br><code class="text-yellow-300 whitespace-pre-wrap text-xs">${escapedExp}</code>`;
  }
}

function openModal(icon, title, body) {
  document.getElementById('modal-icon').textContent = icon;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').textContent = body;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// ─── QUIZ ────────────────────────────────────────────────────────────────────
function openQuiz(topicId) {
  currentQuiz = QUIZZES.find(q => q.topicId === topicId);
  if (!currentQuiz) return;
  currentQIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  document.getElementById('qz-topic').textContent = currentQuiz.title;
  document.getElementById('qz-score').style.display = 'none';
  document.getElementById('quiz-modal').style.display = 'flex';
  showQuestion();
}

function showQuestion() {
  const q = currentQuiz.questions[currentQIndex];
  const total = currentQuiz.questions.length;
  document.getElementById('qz-counter').textContent = `${currentQIndex + 1} / ${total}`;
  document.getElementById('qz-progress').style.width = `${(currentQIndex / total) * 100}%`;
  document.getElementById('qz-question').textContent = q.q;
  const codeEl = document.getElementById('qz-code');
  if (q.code) { codeEl.textContent = q.code; codeEl.style.display = 'block'; }
  else { codeEl.style.display = 'none'; }
  document.getElementById('qz-feedback').style.display = 'none';
  document.getElementById('qz-next').style.display = 'none';
  quizAnswered = false;
  // render options
  const container = document.getElementById('qz-options');
  container.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.style.cssText = 'text-align:left;padding:10px 14px;border-radius:8px;border:1px solid #2d3748;background:#1a1f2e;color:#cbd5e1;font-size:13px;cursor:pointer;transition:all .15s;';
    btn.onmouseover = () => { if (!quizAnswered) btn.style.borderColor = '#4f6ef7'; };
    btn.onmouseout  = () => { if (!quizAnswered) btn.style.borderColor = '#2d3748'; };
    btn.onclick = () => selectAnswer(i);
    container.appendChild(btn);
  });
}

function selectAnswer(idx) {
  if (quizAnswered) return;
  quizAnswered = true;
  const q = currentQuiz.questions[currentQIndex];
  const correct = q.correct;
  const btns = document.getElementById('qz-options').children;
  // color buttons
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.cursor = 'default';
    if (i === correct) {
      btns[i].style.background = '#14532d';
      btns[i].style.borderColor = '#22c55e';
      btns[i].style.color = '#86efac';
    } else if (i === idx && idx !== correct) {
      btns[i].style.background = '#450a0a';
      btns[i].style.borderColor = '#ef4444';
      btns[i].style.color = '#fca5a5';
    }
  }
  if (idx === correct) quizScore++;
  // feedback
  const fb = document.getElementById('qz-feedback');
  fb.style.display = 'block';
  fb.style.background = idx === correct ? '#14532d33' : '#450a0a33';
  fb.style.border = `1px solid ${idx === correct ? '#22c55e55' : '#ef444455'}`;
  fb.style.color = idx === correct ? '#86efac' : '#fca5a5';
  fb.textContent = (idx === correct ? '✓ Correcto. ' : '✗ Incorrecto. ') + q.exp;
  // next or finish
  const nextBtn = document.getElementById('qz-next');
  const isLast = currentQIndex === currentQuiz.questions.length - 1;
  nextBtn.textContent = isLast ? 'Ver resultado' : 'Siguiente →';
  nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
  const isLast = currentQIndex === currentQuiz.questions.length - 1;
  if (isLast) {
    showScore();
  } else {
    currentQIndex++;
    showQuestion();
  }
}

function showScore() {
  const total = currentQuiz.questions.length;
  const pct = Math.round((quizScore / total) * 100);
  document.getElementById('qz-options').innerHTML = '';
  document.getElementById('qz-question').textContent = '';
  document.getElementById('qz-code').style.display = 'none';
  document.getElementById('qz-feedback').style.display = 'none';
  document.getElementById('qz-next').style.display = 'none';
  document.getElementById('qz-progress').style.width = '100%';
  document.getElementById('qz-counter').textContent = `${total} / ${total}`;
  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚';
  const msg   = pct >= 80 ? '¡Excelente!' : pct >= 60 ? 'Bien hecho' : 'Seguir practicando';
  document.getElementById('qz-score-emoji').textContent = emoji;
  document.getElementById('qz-score-text').textContent = `${msg} — ${quizScore} / ${total} correctas`;
  document.getElementById('qz-score-sub').textContent = `${pct}% de respuestas correctas`;
  document.getElementById('qz-score').style.display = 'block';
  quizDone.add(currentQuiz.topicId);
  renderSidebar();
}

function restartQuiz() {
  document.getElementById('qz-score').style.display = 'none';
  currentQIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  showQuestion();
}

function closeQuiz() {
  document.getElementById('quiz-modal').style.display = 'none';
}

// ─── KEYBOARD ─────────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal(); closeQuiz();
    document.getElementById('teacher-login').style.display = 'none';
    document.getElementById('teacher-panel').style.display = 'none';
  }
});

// ─── START ────────────────────────────────────────────────────────────────────
init();