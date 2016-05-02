var arrayOfForms = [
	{name: "ryan",
	role:"killa",
	salary: 2000,
	bonus: 10,
	bonues_percentage: 0.05
	},
	{name: "travis",
	role: "thug",
	salary: 1000,
	bonus: 30,
	bonues_percentage: 0.05
	},
	{name: "pooja",
	role: "pimp",
	salary: 5000,
	bonus: 20,
	bonues_percentage: 0.05
	}
];

var form2Table = function (arr) {
	// creates a place holder object
	var placeHolderObject = {};
	// fills that object with arrays from one sample form
		for (var prop in arr[0]){
			placeHolderObject[prop] = [];
		}
	// pushes those arrays with values
		for (var i=0; i<arr.length; i++){
			for (var propi in arr[i]) {
				placeHolderObject[propi].push(arr[i][propi]);
			}
		}
			console.log(placeHolderObject);
			return placeHolderObject;
};

var x = form2Table(arrayOfForms);

var sumRow = function (obj, key) {
	var sum = 0;
	if (typeof obj[key][0] === "number") {
		for (var i = 0; i < obj[key].length ; i++){
			sum += obj[key][i];
		}
	} else {
		console.log("please enter a number data array");
	}
	return sum;
};

var sumColumn = function (obj, idx) {
	var sum = 0;
		for (var prop in obj){
			if (typeof obj[prop][idx] === "number") {
				sum += obj[prop][idx];
			}
		}
	return sum;
};

var calcPercentExpenseOnRow = function (arr, perc){
	var placeHolderArr = [];
	for (var i= 0; i<arr.length; i++){
		placeHolderArr.push(arr[i] * (perc));
	}
	return placeHolderArr;
};

var applyPercentExpenseOnRow = function (arr, perc){
	var placeHolderArr = [];
	for (var i= 0; i<arr.length; i++){
		placeHolderArr.push(arr[i] * (1 + perc));
	}
	return placeHolderArr;
};


var makeColumnArray = function(obj, idx){
	var columnArray = [];
	for (var prop in obj){
			columnArray.push(obj[prop][idx]);
		}
	console.log(columnArray);
	return columnArray;
};

// makeColumnArray(x, 0);

var sumArray = function (arr){
	var sum = 0;
	for(var i=0; i < arr.length ; i++){
		sum += arr[i];
	}
	return sum;
};

var headCountTable = function (obj, employeesObj) {

	var ArrayOfRowsBeforeBonus = [];
	var renderArrayOfRows = [];

	// this will be a row of month i

	// these will be employee rows
	for(var i = 0; i < obj.role.length; i++){
		var onerow =[];

		//this will add the role to each row
		onerow.push(obj.role[i]);

		var yearlySalary = 0;

		//this will add the 12 monthly salaries to each row (growth can be added later)
		for(var j = 0; j < 12; j++){
			onerow.push(obj.salary[i]);
			yearlySalary += obj.salary[i];
		}

		//this will add yearly salary to each row
		onerow.push(yearlySalary);

		// this will push the row to the array of rows BEFORE BONUSes
		ArrayOfRowsBeforeBonus.push(onerow)

		// this will push the row to the array of rows
		renderArrayOfRows.push(onerow);
	}

	// yearly salary for all employees
	var yearlyAllEmployee = 0;

	// monthly expense of all salaries; BUT to Calc Bonuses
	var monthlyTotalsToCalcBonus = [];


	// this will be a row monthly expense of all salaries
	var monthlyEmployeeExpenseRow = [];
	for(var k = 1; k < 13; k++){
		yearlyAllEmployee += sumColumn(ArrayOfRowsBeforeBonus, k);
		monthlyEmployeeExpenseRow.push(sumColumn(ArrayOfRowsBeforeBonus, k));
		monthlyTotalsToCalcBonus.push(sumColumn(ArrayOfRowsBeforeBonus, k));
	}

	// this will add the yearly salary for all employees BEFORE BONUESes to the end of the row
	monthlyEmployeeExpenseRow.push(yearlyAllEmployee);
	renderArrayOfRows.push(monthlyEmployeeExpenseRow);

	var calcBPerc = calcPercentExpenseOnRow(monthlyTotalsToCalcBonus, 0.05);

	// this is yearly bonus expense
	var yearlyBonusExpense = sumArray(calcBPerc);
	calcBPerc.push(yearlyBonusExpense);

	renderArrayOfRows.push(calcBPerc);

	// applying Bonus percentages to monthly salaries
	var applyBPerc = applyPercentExpenseOnRow(monthlyTotalsToCalcBonus, 0.05);
	renderArrayOfRows.push(applyBPerc);

	console.log(renderArrayOfRows);
};

headCountTable(x);
