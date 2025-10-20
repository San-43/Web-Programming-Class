<?php
$dias = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];

shuffle($dias);
?>
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Días en orden aleatorio</title>
</head>
<body>
  <h1>Días de la semana (orden aleatorio)</h1>
  <ul>
    <?php foreach ($dias as $d): ?>
      <li><?= htmlspecialchars($d, ENT_QUOTES, 'UTF-8') ?></li>
    <?php endforeach; ?>
  </ul>
</body>
</html>
