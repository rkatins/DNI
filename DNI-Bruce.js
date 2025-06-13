// Importaciones
const dialog = require('dialog');

var letrasPosibles = 'TRWAGMYFPDXBNJZSQVHLCKE'

var numeroIntroducido_STRING = dialog.prompt('Ingrese el numero DNI (Sin letra):')
println('"' + numeroIntroducido_STRING + '"')
var numeroIntroducido = parse_int(numeroIntroducido_STRING)

var moduloLetra = numeroIntroducido % 23;
var letraDNI = letrasPosibles.charAt(moduloLetra);

if (numeroIntroducido_STRING === null || numeroIntroducido_STRING === undefined) {
    println('numeroIntroducido_STRING -> nul')
} else if (numeroIntroducido_STRING === '') {
    println('numeroIntroducido_STRING -> Vacio')
} else if (isNaN(numeroIntroducido)) {
	println('numeroIntroducido -> NaN')
} else if (isNaN(moduloLetra)) {
	println('moduloLetra -> NaN')
} else {
	println('Letra -> ' + letraDNI)
}

delay(8000)