<!--   order search   ---->
<html>
	<form action="" method="get"> 
		<input type="text" name="date" placeholder="Date (yyyy-mm-dd)" value="">
		<input type="submit" value="Search">
	</form>
</html>

<?php

$where="";
if (isset ($_REQUEST['date'])){
	
	$date=$_REQUEST['date'];
	$where.=" and ( (c.name like '%$date%' or c.address like '%$date%') or date(o.stamp)='$date')"; 	

}else {
	$date="";
}

require ('mysqli_connect2.php');

$q ="SELECT  o.*,c.name,c.email,c.address
		 FROM kxk16830_orders o
		 LEFT JOIN kxk16830_customers c 
		 ON o.cid=c.cid
		where 1 $where
		";

$r = mysqli_query ($dbc, $q); 

if (mysqli_num_rows($r) > 0) {
    
	echo "<h2>Order List</h2>";
	
	echo "<table border='2'> 
	<tr>
		<td>Id</td>
		<td>Customer</td>
		<td> Icecream Serving </td>
		<td> Icecream Scoops </td>
		<td> Icecream Flavor </td>
		<td>Milk shakes Item</td>
		<td>Milk shakes Flavor</td>
		<td>Floats Scoops</td>
		<td>Floats Flavor</td>
		<td>Floats Soda</td>
		<td>Total</td>
		<td>Discount</td>
		<td>Total Amount</td>
		<td>Date</td>
		
	</tr>";
    // output data of each row
    $idx=0;
	 while($o = mysqli_fetch_assoc($r)) {
		$idx++;
        echo "<tr>
		<td>".$idx."</td>
		<td>".$o['name']."</td>
		<td>".$o['serving1']."</td>
		<td>".$o['scoops1']."</td>
		<td>".$o['flavor1']."</td>
		<td>".$o['item2']."</td>
		<td>".$o['flavor2']."</td>
		<td>".$o['scoops3']."</td>
		<td>".$o['flavor3']."</td>
		<td>".$o['soda3']."</td>
		<td>".$o['total_before']."</td>
		<td>".$o['discount']."</td>
		<td>".$o['total_amt']."</td>
		<td>".$o['stamp']."</td>
	
	</tr>";
        
    }
    echo "</table>";
} else {
    echo "0 results";
}

$dbc->close();
?>

