const allNumbers = document.querySelectorAll("[data-integer]");
const operands = document.querySelectorAll("[data-operand]");
const clearAll = document.querySelector("[data-clear]");
const equal = document.querySelector("[data-equals]");
const integerSign = document.querySelectorAll("[data-int-sign]");
const percent = document.querySelector("[data-percent]");
const intSign = document.querySelector("[data-int-sign]");

// Calculator class
class Calculator {
	constructor() {
		this.firstInt = null;
		this.secondInt = null;
		this.total = null;
		this.topDisplay = document.getElementById("top-display");
		this.bottomDisplay = document.getElementById("bottom-display");
		this.operationSign = "";
		socket.on("calculate", function ({ displayText }) {
			if (typeof displayText === "string") {
				const result = document.createElement("div");
				result.className = "result-card";
				result.innerText = displayText;
				if (document.getElementById("results").childElementCount === 9) {
					let lastChild = document.getElementById("results").lastChild;
					document.getElementById("results").removeChild(lastChild);
				}

				document.getElementById("results").prepend(result);
			}
		});
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
	// Assign and remove negative signs
	posNeg() {
		if (this.bottomDisplay.innerText) {
			if (this.bottomDisplay.innerText[0] === "-") {
				this.bottomDisplay.innerText = this.bottomDisplay.innerText.slice(1);
			} else {
				this.bottomDisplay.innerText = "- " + this.bottomDisplay.innerText;
			}
		}
	}
	// Updates the bottom field
	updateButtonDisplay(number) {
		if (this.total) {
			this.total = null;
			this.bottomDisplay.innerText = String(number);
		} else {
			if (this.bottomDisplay.innerText.includes(".") && number === ".") return;
			this.bottomDisplay.innerText += String(number);
		}
	}

	// assigns the sign to the sign prop, clears the bottom field
	setOperand(sign) {
		this.firstInt = this.bottomDisplay.innerText; // set what ever number we have on the bottom display to the first firstInt prop

		this.operationSign = sign === "÷" ? "/" : sign;

		this.clearBottom();

		// Only display sign after the number if there is a number
		if (!!this.firstInt || this.firstInt === 0) {
			this.topDisplay.innerText += `${this.firstInt} ${sign}`;
		}
	}

	// Makes Calculation
	compute() {
		this.secondInt = this.bottomDisplay.innerText;

		if (!this.firstInt && !this.secondInt) return; // Do nothing if we don't have any numbers assign to the first or second number

		// check to make sure that the firstint and secondInt are stings else assign 0 to them. Also we want to remove leading zeros before performing any math on them

		this.firstInt = Number(
			(!!this.firstInt || this.firstInt === 0) && this.removeSpaceFromInt(this.firstInt)
		);
		this.secondInt = Number(
			(!!this.secondInt || this.secondInt === 0) && this.removeSpaceFromInt(this.secondInt)
		);

		this.total = eval(`${this.firstInt} ${this.operationSign} ${this.secondInt}`);
		this.total = Number(this.total.toFixed(6));
		const displayText = `${this.firstInt} ${this.operationSign} ${this.secondInt} = ${this.total}`;

		this.clearAll();

		// Checking if the we happen to divide a number by Zero. Display error
		if (this.total === Infinity) {
			this.bottomDisplay.innerText = "Error";
		} else {
			this.bottomDisplay.innerText = this.total;
		}

		socket.emit("calculate", { displayText, lastTen: this.lastTen });
		this.firstInt = null;
		this.secondInt = null;
	}

	// Removes spaces from between negative signs and string Number class is able to parse the the string
	removeSpaceFromInt(number) {
		return number.split(" ").join("");
	}
	computePercent() {}
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

// Assign positive and negative to display
intSign.addEventListener("click", () => {
	calculator.posNeg();
});
