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
			// LOGIC FOR DIVIDE BY 0
			if (button.innerText === "0" && valuesArray[valuesArray.length-1] === "/") {
				alert("Maths error: can't divide by 0")
			}
			else {
				string += e.target.innerText;
				inputBox.innerText = string;
			}
		}

		else if (button.className === "operator") {
			if (!isNaN(valuesArray[valuesArray.length - 1]) || valuesArray.length === 0 || string != "") {
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

			// BIDMAS
			while (true) {
				let multiplication = valuesArray.indexOf("x")
				if (multiplication === -1) {break;}
				let result = Number(valuesArray[multiplication-1]) * Number(valuesArray[multiplication+1])
				valuesArray.splice(multiplication-1, 3, result.toString())
			}
	 		while (true) {
				let division = valuesArray.indexOf("/")
				if (division === -1) {break;}
				let result = Number(valuesArray[division-1]) / Number(valuesArray[division+1])
				valuesArray.splice(division-1, 3, result.toString())
			}

			total = Number(valuesArray[0]);
			for (let i = 1; i < valuesArray.length; i+=2) {
				if (valuesArray[i] === "+") {
					total += Number(valuesArray[i + 1]);
				}
				else if (valuesArray[i] === "-") {
					total -= Number(valuesArray[i + 1]);
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



