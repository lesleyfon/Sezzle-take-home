const allNumbers = document.querySelectorAll("[data-integer]");
const operand = document.querySelectorAll("[data-operand]");
const clearAll = document.querySelector("[data-clear]");
const equal = document.querySelector("[data-equals]");
const integerSign = document.querySelectorAll("[data-int-sign]");

class Calculator {
	constructor() {
		this.firstInt = null;
		this.secondInt = null;
		this.total = null;
		this.topDisplay = document.getElementById("top-display");
		this.bottomDisplay = document.getElementById("bottom-display");
		this.operationSign = "";
	}

	clearTop() {
		this.topDisplay.innerText = "";
	}
	clearBottom() {
		this.bottomDisplay.innerText = "";
	}
	clearAll() {
		this.clearTop();
		this.clearBottom();
	}
	updateDisplay(number) {
		this.bottomDisplay.innerText += String(number);
	}
}

// Clear all field

const calculator = new Calculator();

clearAll.addEventListener("click", () => {
	calculator.clearAll();
});

allNumbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		calculator.updateDisplay(event.target.innerText);
	});
});
