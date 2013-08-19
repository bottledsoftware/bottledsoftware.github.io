<?php

//error_reporting(E_ALL);

$link = mysql_connect('localhost', 'inapp', 'inapp_password');

if ($link) {
	mysql_select_db('inapp', $link);
	$result = mysql_query("SELECT status, productID, count(*) AS Anzahl FROM purchases WHERE originalPurchaseDate = purchaseDate GROUP BY status, productID");
	
	echo "<h1>In-App-Purchases EM Quiz App</h1>";
	echo "<table border =\"1\">
			<tr>
				<th>Product Identifier</th>
				<th>Verkaufte Anzahl</th>
				<th>Eingenommen (netto)</th>
			</tr>";
	
	$revenueOverall = 0;
	$purchasesOverall = 0;
	
	while($row = mysql_fetch_array($result))
	  {
	  	if ($row['productID'] == "de.bottledsoftware.emquiz.category.zz_all") {
		  	$pricePerUnit = 0.97;
	  	}
	  	else {
		  	$pricePerUnit = 0.48;
	  	}
	  	$revenueOverall += intval($row['Anzahl']) * $pricePerUnit;
	  	$purchasesOverall += intval($row['Anzahl']);
	  
	  	echo "<tr>";
	  	echo "<td>" . $row['productID'] . "</td>";
	  	echo "<td>" . $row['Anzahl'] . "</td>";
	  	echo "<td>" . (intval($row['Anzahl']) * $pricePerUnit) . " EUR</td>";
	  	echo "</tr>";
	  }
	  echo "<tr>";
	  	echo "<td><strong>Gesamt</strong></td>";
	  	echo "<td><strong>" . $purchasesOverall . "</strong></td>";
	  	echo "<td><strong>" . $revenueOverall . " EUR</strong></td>";
	  	echo "</tr>";
	  
	  echo "</table>";
}

?>