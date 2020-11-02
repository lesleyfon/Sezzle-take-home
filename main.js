const allNumbers = document.querySelectorAll("[data-integer]");
const operands = document.querySelectorAll("[data-operand]");
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
	updateButtonDisplay(number) {
		this.bottomDisplay.innerText += String(number);
	}
	setOperand(sign) {
		this.firstInt = this.bottomDisplay.innerText;
		this.operationSign = sign;
		this.clearBottom();

		if (!!this.firstInt || this.firstInt === 0) {
			this.topDisplay.innerText = `${this.firstInt} ${sign}`;
		}
	}
}

const calculator = new Calculator();

// Clear all field
clearAll.addEventListener("click", () => {
	calculator.clearAll();
});

// Click event for numbers
allNumbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		calculator.updateButtonDisplay(event.target.innerText);
	});
});

// Click events for operands
operands.forEach((operand) => {
	operand.addEventListener("click", (event) => {
		calculator.setOperand(event.target.innerText);
	});
});
