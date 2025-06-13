// "Importaciones"
const dialog = require('dialog')


var letrasPosibles= 'TRWAGMYFPDXBNJZSQVHLCKE'

var numeroIntroducido_STRING = dialog.prompt('Ingrese el numero DNI (Sin letra):')
var numeroIntroducido = parse_int(numeroIntroducido_STRING )

var moduloLetra= numeroIntroducido % 23;

var letraDNI= letrasPosibles.charAt(moduloLetra);

println('Letra -> ' + letraDNI)
delay(2000)


