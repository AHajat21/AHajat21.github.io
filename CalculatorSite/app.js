//	Add code for:
//		Multiple operator errors
//		Decimal numbers
//		Keyboard support
//		operating on a negative number


buttons = document.querySelectorAll("button");
inputBox = document.getElementById("inp");
let string = "";

valuesArray = [];

buttons.forEach(button => {
	button.addEventListener("click", (e) => {
		if (button.id === "clear") {
			string = "";
			inputBox.innerText = string;
			valuesArray = [];
		}
		else if (button.id === "del") {
			//string = string.substring(0, string.length - 1);
			string = string.slice(0, -1);
		}
		else if (button.id === "reverseSign" && string != "") {
			string = (Number(string) * -1).toString();
			inputBox.innerText = string;
		}

		else if (button.className === "num" && string.length < 12) {
			string += e.target.innerText;
			inputBox.innerText = string;
		}

		else if (button.className === "operator") {
			if (!isNaN(valuesArray[valuesArray.length - 1]) || valuesArray.length === 0 || valuesArray[valuesArray.length - 1] === "-") {
				valuesArray.push(string);
				valuesArray.push(e.target.innerText);
				string = "";
			}
			else {
				valuesArray[valuesArray.length - 1] = e.target.innerText;
			}
		}

		else if (button.id === "equals") {
			valuesArray.push(string);
			string = "";
			total = 0;
			total = Number(valuesArray[0]);
			for (let i = 2; i < valuesArray.length; i+=2) {
				if (valuesArray[i - 1] === "+") {
					total += Number(valuesArray[i]);
				}
				else if (valuesArray[i - 1] === "-") {
					total -= Number(valuesArray[i]);
				}
				else if (valuesArray[i - 1] === "x") {
					total *= Number(valuesArray[i]);
				}
				else if (valuesArray[i - 1] === "/") {
					if (Number(valuesArray[i]) === 0) {
						alert("Cannot divide by zero");
						total = "Error";
					} else {
						total /= Number(valuesArray[i]);
					}
				}
			}

			if (total.toString().length > 12) {
				if (!total.toString().includes(".")) {
					total = "Too Large";
				}
				else if (total.toString().includes(".")) {
					total = total.toFixed(10);
				}
			}
			inputBox.innerText = total.toString();
			string = "";
			valuesArray = [];
		}
	})
});



