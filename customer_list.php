<html>
<?php

require ('mysqli_connect2.php');

$q ="SELECT  c.name,c.email,c.address
		 FROM kxk16830_customers c 
		
		";

$r = mysqli_query ($dbc, $q); 

if (mysqli_num_rows($r) > 0) {
    
	echo "<h2>Customer List</h2>";
	
	echo "<table border='2'> 
	<tr>
		<td>Name</td>
		<td>Address</td>
		<td>Email</td>
	</tr>";
    // output data of each row
	 while($o = mysqli_fetch_assoc($r)) {
      
        echo "<tr>
		<td>".$o['name']."</td>
		<td>".$o['address']."</td>
		<td>".$o['email']."</td>
	</tr>";
        
    }
    echo "</table>";
} else {
    echo "0 results";
}

$dbc->close();
?>

