# 🪪 Calculadora de Letra DNI  
Este proyecto implementa el algoritmo de cálculo de la letra de control del DNI español en múltiples lenguajes de programación, con un par de variaciones.
> [!TIP]
> Las variaciones son interpolables a otros lenguajes, con sus variaciones, etc  
  
## 🚀 Implementaciones Disponibles  
  
- ### **`DNI-Bruce.js`**
  Versión interactiva con validación completa 
> [!NOTE]
> Solo valida en el interprete de Ficheros `.js` de [Bruce](https://github.com/pr3y/Bruce/wiki/) 

- ### **`DNI-LinuxScript.sh`**
  Version para consola de Linux
  
- ### **`DNI-WindowsScript.bat`**
  Version para consola de Windows
> [!WARNING]
> `*1`: Cuando se declara una variable que guarde una cadena de texto, las comillas dobles que se suelen usar para delimitar la cadena de texto añaden "un caracter más"
> a la cadena de texto que hemos escrito, por lo que es recomendable incluir entre las comillas a la propia variable
>
> `*2`: Consejo antes de salir, evitar poner espacios antes/depues de la declaracion del nombre de una variable porque puede romper los calculos aritmeticos del script o similares

- ### **`DNI.java`**
  Version para la consola de Java
> [!NOTE]
> Hace uso de un array en el que almacenar la lista de letras

- ### **`DNI_noArray.java`**:
  Version para la consola de Java (Muy similar al caso anterior, pero en este caso se hace todo desde el método `main()`)
> [!NOTE]
> No hace uso de un array en el que almacenar las letras

- ### **`dni.html`**:
  Version para navegadores web (como herramienta web)
> En resumen una forma simpleficada para hacerlo con un `script js`
> Se podria extrapolar a un fichero `js` directamente


## 🔧 Algoritmo
> [!TIP]
> El cálculo se basa en: `numero_dni % 23` para indexar en la cadena de letras válidas.
>
> Todas las implementaciones utilizan el mismo algoritmo matemático:

1. Entrada: Número de DNI de 8 dígitos
2. Cálculo: numero % 23 para obtener el índice
3. Búsqueda: Usar el índice en la cadena "TRWAGMYFPDXBNJZSQVHLCKE"

4. Salida: Número + letra de control (_Solo en [DNI-Bruce.js](https://github.com/rkatins/DNI/blob/main/DNI-Bruce.js)_).




