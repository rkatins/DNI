#!/bin/bash

# No se deben poner espacios en las variables tanto al definir/igualar, 
# bajo ningún concepto

clear

letra="TRWAGMYFPDXBNJZSQVHLCKE"

echo "Ingrese el numero de DNI sin letra: "
read numero
clear

numero23=(($numero % 23))

# No se requiere del caracter `$` para las varibles en el siguiente substring
caracter_extraido=${letra:numero23:1}
echo "letra: $caracter_extraido"

clear
exit