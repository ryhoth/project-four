var arrayOfForms = [
	{name: "ryan",
	role:"killa",
	salary: 2000,
	bonus: 10
	},
	{name: "travis",
	role: "thug",
	salary: 1000,
	bonus: 30
	},
	{name: "pooja",
	role: "pimp",
	salary: 5000,
	bonus: 20
	}
];

var form2Table = function (arr) {

	// creates a place holder object
	var placeHolderObject = {};

	// fills that object with arrays from one sample form
		for (var prop in arr[0]){
			placeHolderObject[prop] = [];
		}
				// console.log(placeHolderObject);

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

var tallyRow = function (obj, key) {
	var sumRow = 0;
	if (typeof obj[key][0] === "number") {
		for (var i = 0; i < obj[key].length ; i++){
			sumRow += obj[key][i];
		}
	} else {
		console.log("please enter a number data array");
	}
	return sumRow;
};

var tallycolumn = function (obj, idx) {
	var sumClm = 0;
		for (var prop in obj){
			if (typeof obj[prop][idx] === "number") {
				sumClm += obj[prop][idx];
			}
		}
	console.log(sumClm);
	return sumClm;
};

var applyPercentExpenseOnRow = function (arr, perc){
	for (var i= 0; i<arr.length; i++){
		arr[i] = arr[i] * (1 + perc);
	}
	console.log("calc done", arr);
	return arr;
};

// [roles],[salaries],[],[for loop call tally row each from monthly salary # of months], [for loop call tally clm each from...]

var headCountTable = function (){

}
