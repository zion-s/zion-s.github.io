function calc() {
var n1=parseFloat(document.getElementById("n1").value);
    n2=parseFloat(document.getElementById("n2").value);
    opr=document.getElementById("opr").value;

	switch (opr) {
		case "+":
		document.getElementById("result").value=n1+n2;
		break;
		case "-":
		document.getElementById("result").value=n1-n2;
		break;
		case "x":
		document.getElementById("result").value=n1*n2;
		break;
		case "/":
		document.getElementById("result").value=n1/n2;
		break;
		case "%":
		document.getElementById("result").value=n1%n2;
		break;
	}
}
