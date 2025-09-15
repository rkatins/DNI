@ECHO OFF
SETLOCAL EnableDelayedExpansion

@REM *1
SET "letra=TRWAGMYFPDXBNJZSQVHLCKE"

ECHO Ingrese el numero de DNI sin letra: 
SET /P numero=

SET /A num23=numero %% 23

@REM  La linea 2 se desctiva al poner `%` despues de usar `!`
SET caracter_extraido=!letra:~%num23%,1!

ECHO.
ECHO letra: !caracter_extraido!
PAUSE

@REM *2
EXIT
CLS