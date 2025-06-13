// Importaciones
const dialog = require('dialog')
const keyboard = require('keyboard')
// const display = require("display")

var letrasPosibles = 'TRWAGMYFPDXBNJZSQVHLCKE'

// 135x240
// display.setCursor(0, 0)

println('Ingrese numero DNI:')

while (!keyboard.getSelPress()) {
    delay(1)
}

var numeroIntroducido_STRING = dialog.prompt()
var numeroIntroducido = parse_int(numeroIntroducido_STRING)

var moduloLetra = numeroIntroducido % 23;
var letraDNI = letrasPosibles.charAt(moduloLetra);

if (numeroIntroducido_STRING === null || numeroIntroducido_STRING === undefined) {
    println('numeroIntroducido_STRING -> null')
} else if (numeroIntroducido_STRING === '') {
    println('numeroIntroducido_STRING -> Vacio')
} else if (isNaN(numeroIntroducido)) {
    println('numeroIntroducido -> NaN')
} else if (isNaN(moduloLetra)) {
    println('moduloLetra -> NaN')
} else {
    println('Letra -> ' + letraDNI)
    delay(3000)
}