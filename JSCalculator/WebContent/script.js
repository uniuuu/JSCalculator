


function calc(){

	var num1, num2;

	var sign = "+";

	var result;

	function getNum1(){
		num1 = document.getElementById('num1').value;
		return num1;	
	}

	function getNum2(){
		num2 = document.getElementById('num2').value;
		return num2;	
	}

	function getSign(){
		sign = document.getElementById('sign').value;
		return sign;	
	}


	function setResult(){
		document.getElementById('result').value = result;
	}

	function doCalc(){

		var num1 = getNum1();
		var num2 = getNum2();

		if(getSign() == "*"){
			result = num1 * num2;
		}else if (getSign() == "/"){
			result = num1 / num2;
		}else if (getSign() == "-"){
			result = num1 - num2;
		}else{
			result = num1 + num2;
		}

		setResult();


	}


	doCalc();

}