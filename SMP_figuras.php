<?php

$radio = $lado = "";
$errores = [];
$resultados = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $radio = trim($_POST['radio'] ?? "");
    $lado  = trim($_POST['lado']  ?? "");

    if ($radio === "" || !is_numeric($radio) || $radio <= 0) {
        $errores['radio'] = "Ingresa un radio válido (> 0).";
    }
    if ($lado === "" || !is_numeric($lado) || $lado <= 0) {
        $errores['lado'] = "Ingresa un lado válido (> 0).";
    }

    if (!$errores) {
        $r = (float)$radio;
        $a = (float)$lado;

        $areaCirculo = pi() * $r * $r; 
        $volumenCubo = $a * $a * $a;   

        $resultados['area'] = number_format($areaCirculo, 4, '.', '');
        $resultados['vol']  = number_format($volumenCubo, 4, '.', '');
    }
}

function h($s) { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
?>
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Calculadora área: círculo y cubo</title>
<style>
    body { 
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0; 
        padding: 30px 15px; 
        background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        min-height: 100vh;
    }
    .contenedor { 
        max-width: 580px; 
        margin: 0 auto; 
        background: white;
        border-radius: 8px; 
        padding: 35px 30px; 
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    h1 { 
        margin: 0 0 10px 0; 
        font-size: 26px; 
        color: #2c3e50;
        border-bottom: 3px solid #3498db;
        padding-bottom: 12px;
    }
    .descripcion {
        color: #7f8c8d;
        font-size: 15px;
        margin-bottom: 25px;
        line-height: 1.5;
    }
    .fila { 
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
    }
    .campo { flex: 1; }
    label { 
        display: block; 
        margin-bottom: 8px; 
        font-weight: 600;
        color: #34495e;
        font-size: 14px;
    }
    input[type=number] { 
        width: 100%; 
        padding: 12px 15px; 
        border-radius: 4px; 
        border: 2px solid #dfe6e9;
        font-size: 15px;
        box-sizing: border-box;
        transition: border-color 0.2s;
    }
    input[type=number]:focus {
        outline: none;
        border-color: #3498db;
    }
    .mensaje-error { 
        color: #e74c3c; 
        font-size: 13px; 
        margin-top: 6px;
        font-weight: 500;
    }
    .boton { 
        margin-top: 10px; 
        padding: 14px 28px; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer; 
        background: #3498db;
        color: white; 
        font-weight: 600;
        font-size: 15px;
        transition: background 0.2s;
    }
    .boton:hover {
        background: #2980b9;
    }
    .caja-resultados { 
        margin-top: 30px; 
        background: #ecf0f1;
        border-left: 4px solid #27ae60;
        padding: 20px; 
        border-radius: 4px;
    }
    .caja-resultados p:first-child {
        margin-top: 0;
        font-weight: 600;
        color: #2c3e50;
        font-size: 16px;
    }
    .caja-resultados ul {
        list-style: none;
        padding: 0;
        margin: 15px 0;
    }
    .caja-resultados li {
        padding: 8px 0;
        color: #34495e;
        font-size: 15px;
    }
    .nota { 
        color: #95a5a6; 
        font-size: 13px;
        margin-bottom: 0;
        font-style: italic;
    }
</style>
</head>
<body>
<div class="contenedor">
    <h1>Calculadora de Figuras Geométricas</h1>
    <p class="descripcion">Calcula el área de un círculo y el volumen de un cubo ingresando sus medidas.</p>

    <form method="post" novalidate>
        <div class="fila">
            <div class="campo">
                <label for="radio">Radio del círculo</label>
                <input type="number" step="any" min="0" id="radio" name="radio" value="<?=h($radio)?>" placeholder="Ej. 3.5">
                <?php if (isset($errores['radio'])): ?><div class="mensaje-error"><?=$errores['radio']?></div><?php endif; ?>
            </div>
            <div class="campo">
                <label for="lado">Lado del cubo</label>
                <input type="number" step="any" min="0" id="lado" name="lado" value="<?=h($lado)?>" placeholder="Ej. 2">
                <?php if (isset($errores['lado'])): ?><div class="mensaje-error"><?=$errores['lado']?></div><?php endif; ?>
            </div>
        </div>

        <button class="boton" type="submit">Calcular</button>
    </form>

    <?php if ($resultados): ?>
        <div class="caja-resultados">
            <p>Resultados:</p>
            <ul>
                <li>Área del círculo (π·r²): <strong><?=h($resultados['area'])?></strong> unidades²</li>
                <li>Volumen del cubo (a³): <strong><?=h($resultados['vol'])?></strong> unidades³</li>
            </ul>
            <p class="nota">* Las unidades dependen de las medidas ingresadas (cm, m, etc.)</p>
        </div>
    <?php endif; ?>
</div>
</body>
</html>