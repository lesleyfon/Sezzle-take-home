const io = require("socket.io");
console.log(io);
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
	// Updates the bottom field
	updateButtonDisplay(number) {
		this.bottomDisplay.innerText += String(number);
	}

	// assigns the sign to the sign prop, clears the bottom field
	setOperand(sign) {
		this.firstInt = this.bottomDisplay.innerText; // set what ever number we have on the bottom display to the first firstInt prop
		this.operationSign = sign === "÷" ? "/" : sign;

		this.clearBottom();

		if (!!this.firstInt || this.firstInt === 0) {
			this.topDisplay.innerText += `${this.firstInt} ${sign}`;
		}
	}
	compute() {
		this.secondInt = this.bottomDisplay.innerText;
		// check to make sure that the firstint and secondInt are stings else assign 0 to them. Also we want to remove leading zeros before performing any math on them
		this.secondInt = Number((!!this.secondInt || this.secondInt === 0) && this.secondInt);
		this.firstInt = Number((!!this.firstInt || this.firstInt === 0) && this.firstInt);

		this.total = eval(`${this.firstInt} ${this.operationSign} ${this.secondInt}`);
		this.clearAll();

		// Checking if the we happen to divide a number by Zero. Display error
		if (this.total === Infinity) {
			this.bottomDisplay.innerText = "Error";
		} else {
			this.bottomDisplay.innerText = this.total;
		}
		this.total = null;
		this.firstInt = null;
		this.secondInt = null;
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

// Compute calculation
equal.addEventListener("click", () => {
	calculator.compute();
});
