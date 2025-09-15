# 🪪 Calculadora de Letra DNI  
Este proyecto implementa el algoritmo de cálculo de la letra de control del DNI español en múltiples lenguajes de programación, con un par de variaciones.
> [!TIP]
> Las variaciones son interpolables a otros lenguajes, con sus variaciones, etc  
  
## 🚀 Implementaciones Disponibles  
  
- **DNI-Bruce.js**: Versión interactiva con validación completa 
> [!NOTE]
> Para el interprte de Ficheros `.js` de [Bruce](https://github.com/pr3y/Bruce/wiki/) 

- **DNI.java**: Clase varios metodos para la obtencion de la letra del DNI español
> [!NOTE]
> Hace uso de un array en el que almacenar la lista de letras

- **DNI_noArray.java**: Muy similar al caso anterior, pero en este caso se hace todo desde el método `main()`
> [!NOTE]
> No hace uso de un array en el que almacenar las letras

- **dni.html**: Herramienta web para navegador
> En resumen una forma simpleficada para hacerlo con un `script js`


### 🔧 Algoritmo
> [!TIP]
> El cálculo se basa en: `numero_dni % 23` para indexar en la cadena de letras válidas.
>
> Todas las implementaciones utilizan el mismo algoritmo matemático:

1. Entrada: Número de DNI de 8 dígitos
2. Cálculo: numero % 23 para obtener el índice
3. Búsqueda: Usar el índice en la cadena "TRWAGMYFPDXBNJZSQVHLCKE"

4. Salida: Número + letra de control (_Solo en [DNI-Bruce.js](https://github.com/rkatins/DNI/blob/main/DNI-Bruce.js)_).
