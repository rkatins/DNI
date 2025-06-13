// Importaciones
const dialog = require('dialog');

var letrasPosibles = 'TRWAGMYFPDXBNJZSQVHLCKE'

var numeroIntroducido_STRING = dialog.prompt('Ingrese el numero DNI (Sin letra):')

println('Entrada (STRING): ' + numeroIntroducido_STRING)

var numeroIntroducido = parse_int(numeroIntroducido_STRING)
println('Entrada convertido: ' + numeroIntroducido)

var moduloLetra = numeroIntroducido % 23;
var letraDNI = letrasPosibles.charAt(moduloLetra);

if (isNaN(numeroIntroducido_STRING)) {
    println('numeroIntroducido_STRING -> NaN')
} else if (isNaN(numeroIntroducido)) {
	println('numeroIntroducido -> NaN')
} else if (isNaN(moduloLetra)) {
	println('moduloLetra -> NaN')
} else {
	println('Letra -> ' + letraDNI)
}

delay(8000)