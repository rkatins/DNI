# 🪪 Calculadora de Letra DNI

Este proyecto implementa el algoritmo de cálculo de la letra de control del **DNI español** en múltiples lenguajes de programación, con un par de variaciones.

> [!TIP]
> Las variaciones mostradas (con/sin Array) son interpolables a otros lenguajes, mostrando diferentes enfoques de implementación.

---

## 💻 Implementaciones por Lenguaje

### 🟡 JavaScript y HTML (Web/Frontend)

| Archivo | Descripción | Notas Adicionales |
| :--- | :--- | :--- |
| `DNI-Bruce.js` | Versión interactiva con **validación completa**. | **[!NOTE]** Solo valida en el intérprete de ficheros `.js` de [Bruce](https://github.com/pr3y/Bruce/wiki/). |
| `DNI-HTML.html` | Versión para **navegadores web** (como herramienta web). | Una forma simplificada de hacerlo con un *script* JS embebido. Se podría extrapolar a un fichero `.js` directamente. |

### ☕ Java (Backend/Consola)

| Archivo | Implementación | Descripción |
| :--- | :--- | :--- |
| `DNI-Java_Array.java` | **Con Array** | Versión para la consola de Java. Hace uso de un *array* para almacenar la lista de letras. |
| `DNI-Java_noArray.java` | **Sin Array** | Versión para la consola de Java. Similar al anterior, pero **no** usa un *array*; el cálculo se realiza dentro del método `main()`. |

### 🐘 PHP (Backend/Scripting)

| Archivo | Implementación | Descripción |
| :--- | :--- | :--- |
| `DNI-PHP_Array.php` | **Con Array** | Versión para ejecutar mediante el intérprete de PHP. Utiliza un *array* para la lista de letras. |
| `DNI-PHP_noArray.php` | **Sin Array** | Versión para ejecutar mediante el intérprete de PHP. No utiliza un *array* para las letras. |

### ⚙️ Scripts de Consola (Sistemas)

| Archivo | Sistema Operativo | Descripción |
| :--- | :--- | :--- |
| `DNI-LinuxScript.sh` | **Linux (Bash/Shell)** | Versión para la consola de Linux/Sistemas UNIX. |
| `DNI-WindowsScript.bat` | **Windows (Batch)** | Versión para la consola de Windows (CMD). |

> [!WARNING]
> **Notas sobre `DNI-WindowsScript.bat`:**
>
> 1.  Cuando se declara una variable que guarda una cadena de texto, las comillas dobles que se usan para delimitar la cadena añaden "un carácter más", por lo que es recomendable incluir entre las comillas a la propia variable.
> 2.  Evitar poner espacios antes/después de la declaración del nombre de una variable porque puede romper los cálculos aritméticos del *script*.

---

## 💡 Algoritmo

> [!TIP]
> El cálculo se basa en: `numero_dni % 23` para indexar en la cadena de letras válidas.
>
> Todas las implementaciones utilizan el mismo algoritmo matemático:

1.  **Entrada:** Número de DNI de 8 dígitos.
2.  **Cálculo:** `numero % 23` para obtener el índice.
3.  **Búsqueda:** Usar el índice en la cadena `"TRWAGMYFPDXBNJZSQVHLCKE"`.
4.  **Salida:** Número + letra de control (*solo en `DNI-Bruce.js` se realiza una validación completa*).

---
---

# 🪪 DNI Letter Calculator

This project implements the Spanish **DNI (National Identity Document)** control letter calculation algorithm in multiple programming languages, including a couple of variations.

> [!TIP]
> The variations shown (with/without Array) can be extrapolated to other languages, demonstrating different implementation approaches.

---

## 💻 Available Implementations by Language

### 🟡 JavaScript and HTML (Web/Frontend)

| File | Description | Additional Notes |
| :--- | :--- | :--- |
| `DNI-Bruce.js` | Interactive version with **full validation**. | **[!NOTE]** Only validates in the [Bruce](https://github.com/pr3y/Bruce/wiki/) `.js` file interpreter. |
| `DNI-HTML.html` | Version for **web browsers** (as a web tool). | A simplified way to do it with an embedded JS script. Could be extrapolated directly to a `.js` file. |

### ☕ Java (Backend/Console)

| File | Implementation | Description |
| :--- | :--- | :--- |
| `DNI-Java_Array.java` | **With Array** | Version for the Java console. Uses an *array* to store the list of letters. |
| `DNI-Java_noArray.java` | **Without Array** | Version for the Java console. Similar to the previous one, but **does not** use an *array*; the calculation is performed within the `main()` method. |

### 🐘 PHP (Backend/Scripting)

| File | Implementation | Description |
| :--- | :--- | :--- |
| `DNI-PHP_Array.php` | **With Array** | Version to be executed via the PHP interpreter. Uses an *array* for the list of letters. |
| `DNI-PHP_noArray.php` | **Without Array** | Version to be executed via the PHP interpreter. Does not use an *array* for the letters. |

### ⚙️ Console Scripts (Systems)

| File | Operating System | Description |
| :--- | :--- | :--- |
| `DNI-LinuxScript.sh` | **Linux (Bash/Shell)** | Version for the Linux/UNIX Systems console. |
| `DNI-WindowsScript.bat` | **Windows (Batch)** | Version for the Windows console (CMD). |

> [!WARNING]
> **Notes on `DNI-WindowsScript.bat`:**
>
> 1.  When declaring a variable to store a text string, the double quotes often used to delimit the string add "one more character," so it is advisable to include the variable itself within the quotes.
> 2.  Avoid putting spaces before/after a variable name declaration as it can break the script's arithmetic calculations or similar.

---

## 💡 Algorithm

> [!TIP]
> The calculation is based on: `dni_number % 23` to index into the string of valid letters.
>
> All implementations use the same mathematical algorithm:

1.  **Input:** 8-digit DNI number.
2.  **Calculation:** `number % 23` to get the index.
3.  **Lookup:** Use the index in the string `"TRWAGMYFPDXBNJZSQVHLCKE"`.
4.  **Output:** Number + control letter (*full validation is only performed in `DNI-Bruce.js`*).

<!--
Prompt:
Tengo la siguiente lista de archivos en un repositio de github (te paso una foto donde se ven).
Me gustaria hacer un `readme.md` que siga la siguiente estructura -> archivo `README.md`

Modificala para adaptarla a todos los archivos que te he mostrado, y categorizandola por cada tipo de lenguaje (es decir una seccion para JS, otra PHP, otra scripts, ...) a ser posible usa emojis para identificar cada secccion (en el caso de haber un emoji para la representacion del lenguaje de programacion) y añadir un divisor para incluir lo mismo pero en ingles.
A continuacion te paso la descripcion del repositorio para que tengas una ligera idea de por donde puede ir encaminado el repositorio -> Descripcion repositorio <-
-->
