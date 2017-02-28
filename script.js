var num1 = "";
var num2 = "";
var operator = "";
var answer = 0;
var isSecondOperator = false;
var toOperate = "";

// Fetching the first number
function num1Func(){
		$("#data button").click(function(){
		num1 += $(this).text(); 
		$("h1").text(num1);
//		console.log("num1: " + num1);
	});
}

// Fetching the operator and performing the chain operations until "=" is pressed
function operatorFunc(){
	$("#operators button").click(function(){
		operator = $(this).text();
//		console.log("operator: " + operator);
		num2 = num1;
//		console.log("num2: " + num2)
		num1 = "";
//		console.log("num1: " + num1);

		if(!isSecondOperator){
			answer = Number(num2);
			isSecondOperator = true;
//			console.log(isSecondOperator);
		} 
		else if(isSecondOperator){
			if(toOperate === "+" && num2 != ""){
				answer = answer + Number(num2);
				$("h1").text(answer.toString().substring(0,8));		
			}

			else if(toOperate === "-" && num2 != ""){
				answer = answer - Number(num2);
				$("h1").text(answer.toString().substring(0,8));
			}

			else if(toOperate === "/" && num2 != ""){
				answer = answer / Number(num2);
				$("h1").text(answer.toString().substring(0,8));
			}

			else if(toOperate === "*" && num2 != ""){
				answer = answer * Number(num2);
				$("h1").text(answer.toString().substring(0,8));
			}
		}

		toOperate = operator;
//		console.log("toOperate: " + toOperate);
//		console.log("answer: " + answer);
	});
}
// performs the final arthmetic operation
function equals(){
	$("#equals").click(function(){
		if(operator === "+"){
			answer = answer + Number(num1);
			$("h1").text(answer.toString().substring(0,8));
			num2 = answer;
			num1 = "";
		}

		else if(operator === "-"){
			answer = answer - Number(num1);
			$("h1").text(answer.toString().substring(0,8));
			num2 = answer;
			num1 = "";
		}

		else if(operator === "/"){
			answer = answer / Number(num1);
			$("h1").text(answer.toString().substring(0,8));
			num2 = answer;
			num1 = "";
		}

		else if(operator === "*"){
			answer = answer * Number(num1);
			$("h1").text(answer.toString().substring(0,8));
			num2 = answer;
			num1 = "";
		}
//		console.log("answer: " + answer);
	});
}
//reset button
function clear(){
	$("#clear").click(function(){
		$("h1").text("0");
		num1 = "";
		num2 = "";
		answer = 0;
		operator = "";
	});
}

num1Func();
operatorFunc();
equals();
clear();

