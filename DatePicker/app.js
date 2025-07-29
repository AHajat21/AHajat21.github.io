const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const today = new Date();

const prevMonths = document.getElementById("prevMonth");
const nextMonths = document.getElementById("nextMonth");

let selectedFullDate = new Date();
let selectedYear = selectedFullDate.getFullYear();
let selectedMonth = selectedFullDate.getMonth();
let selectedField;

let dates = document.querySelectorAll(".item");

let monthYear = document.getElementById("MY");



updateCalendar();
prevMonths.addEventListener("click", () => {
	if (selectedMonth === 0) {
		selectedYear -= 1;
		selectedMonth = 11;
	}
	else {
		selectedMonth -= 1;
		selectedFullDate.setMonth(selectedMonth);
	}
	updateCalendar();
})

nextMonths.addEventListener("click", () => {
	if (selectedMonth === 11) {
		selectedYear += 1;
		selectedMonth = 0;
	}
	else {
		selectedMonth += 1;
		selectedFullDate.setMonth(selectedMonth);
	}
	updateCalendar();
})



function updateCalendar() {
	monthYear.innerHTML = months[selectedMonth] + " " + selectedYear.toString();
	let firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();

	dates.forEach((date, i) => {
		// Align each date with correct day
		if (i < firstDayOfMonth || i > daysInMonth[selectedMonth] + 1) {
			date.innerHTML = "";
		}
		else {
			date.innerHTML = (i - firstDayOfMonth + 1);
			date.addEventListener("click", (d) => {
				//Hilight selected date in blue
				if (selectedField != null) {
					dates[selectedField].style.color = "black";
					dates[selectedField].style.fontWeight = "normal";
				}
				d.target.style.color = "blue";
				d.target.style.fontWeight = "bold";
				selectedField = i;
			})
			// Highlight today's date in red
			if (i - firstDayOfMonth + 1 === today.getDate() && selectedMonth === today.getMonth() && selectedYear === today.getFullYear()) {
				date.style.color = "red";
				date.style.fontWeight = "bold";
			}
			else {
				date.style.color = "black";
				date.style.fontWeight = "normal";
			}
		}
	});

}


