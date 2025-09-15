@ECHO OFF
SETLOCAL EnableDelayedExpansion

@REM Cuando se declara una variable que guarde una cadena de texto, las comillas dobles que se suelen usar para delimitar la cadena de texto añaden "un caracter más" a la cadena de texto que hemos escrito, por lo que es recomendable incluir entre las comillas a la propia variable
SET "letra=TRWAGMYFPDXBNJZSQVHLCKE"

ECHO Ingrese el numero de DNI sin letra: 
SET /P numero=

SET /A num23=numero %% 23

@REM  La linea 2 se desctiva al poner `%` despues de usar `!`
SET caracter_extraido=!letra:~%num23%,1!

ECHO.
ECHO letra: !caracter_extraido!
PAUSE

@REM Consejo antes de salir, evitar poner espacios antes/depues de la declaracion del nombre de una variable porque puede romper los calculos aritmeticos del script o similares
EXIT
CLS