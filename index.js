/** @format */

let outputScreen = document.querySelector("#output");

function display(num) {
	outputScreen.value += num;
}
function calculate() {
	try {
		outputScreen.value = eval(outputScreen.value);
	} catch (e) {
		alert("invalid");
	}
}
function Clear() {
	outputScreen.value = "";
}
function del() {
	outputScreen.value = outputScreen.value.slice(0, -1);
}
