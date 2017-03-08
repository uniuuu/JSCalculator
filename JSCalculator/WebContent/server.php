<?php
include("MathHelp_jmd.php");

if($_POST){
	
	if(isset($_POST["calc"])){
		$numbers = $_POST["calc"];
		$result = MathHelp_jmd::calculate_str($numbers);
		if($result=="NaN"){
			echo false;
		}else {
			echo $result;
		}
		
	}
}
