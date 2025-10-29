<table border="1" cellspacing=1 cellpadding=2 style="font-size: 8pt">
    <tr>
        <td><font face="verdana"><b>Id Cliente</b></font></td>
        <td><font face="verdana"><b>Nombre Cliente</b></font></td>
        <td><font face="verdana"><b>Apellido Cliente</b></font></td>
    </tr>
    <?php
    $connex = mysqli_connect("localhost", "root", "","taller1")
    or die ("Error al conectar a la base de datos.");

    $query = "SELECT id_cliente, nom_cliente, ap_cliente FROM cliente";
    $result = mysqli_query($connex, $query);
    $numero = 0;
    while ($row = mysqli_fetch_array($result)) {
        echo "<tr><td width=\"25%\"><font face=\"verdana\">" . $row['id_cliente'] . "</font></td>";
        echo "<tr><td width=\"25%\"><font face=\"verdana\">" . $row['nom_cliente'] . "</font></td>";
        echo "<tr><td width=\"25%\"><font face=\"verdana\">" . $row['ap_cliente'] . "</font></td>";
        $numero++;
    }
    echo "<tr><td colspan=\"15\"><font face=\"verdana\"><b>Total de clientes: " . $numero . "</b></font></td></tr>";
    mysqli_close($connex);
    ?>
</table>