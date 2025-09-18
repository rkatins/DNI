<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario DNI-PHP</title>
</head>
<body>
    <!-- 
        Si el codigo `PHP` esta en el mismo archivo que el formulario `HTML`, indicar
        `<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>` en el atributo `action`
        de la etiqueta `<form>` para que se haga referencia a si mismo
    -->
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="GET">
        <input type="tel"
            id="numeroDNI"
            name="numeroDNI"
            minlength="8" 
            maxlength="8"
            pattern="[0-9]{8}"
            required
            placeholder="Ej. 12345678">

            <input type="submit" value="Averiguar letra">
    </form>
</body>
</html>

<?php
    // `isset` -> Verifica si existe
    if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET['numeroDNI'])) {
        $letra = "TRWAGMYFPDXBNJZSQVHLCKE";

        $numero = $_GET['numeroDNI'];
        
        $numero23 = $numero % 23;
    }
?>
    <script>
        alert("letra: <?php echo($letra[$numero23]) ?>");
    </script>