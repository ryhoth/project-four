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

var budgetData = [
	{
		consultants:{
			finance:250,
			legal: 500,
			tech: 500,
		},
		operations:{

		},
		capex:{

		},
		marketing:{

		}
	}
	];


	var revData = {
		unitA:{
			name:"A",
			projections:[0,1,2,3,4,12]
		},
		eventB:{
			name:"B",
			projections:[1,1,2,3,4,4]
		},
		mediumC:{
			name: "C",
			projections:[]
		},
		probOfB:{
					name:"P(B)",
					projections:[1,1,2,3,4,4]
				},
		percOfC: {
					name:"P(C)",
					projections:[1,1,2,3,4,4]
				},
		dollarPerPofB:{
					name:"DollarPerP(C)",
					projections:[1,1,2,3,4,4]
		``		},
		dollarPerPofC:{
					name:"DollarPerP(C)",
					projections:[1,1,2,3,4,4]
		``		},
	}


var xlFactory = {
		objOrg : function (obj) {
		var placeHolderObject = {
			expenseName : [],
			amount : []
		};
		for (var prop in obj){
			placeHolderObject["expenseName"].push(prop);
			placeHolderObject["amount"].push(obj[prop]);
		}
		console.log(placeHolderObject)
		return placeHolderObject;
	},
	// xlFactory.objOrg(budget[0]["consultants"])
	form2Table : function (arr) {
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
			return placeHolderObject;
	},
	sumRow : function (obj, key) {
		var sum = 0;
		if (typeof obj[key][0] === "number") {
			for (var i = 0; i < obj[key].length ; i++){
				sum += obj[key][i];
			}
		} else {
				console.log("please enter a number data array");
		}
		return sum;
	},
	sumColumn : function (obj, idx) {
		var sum = 0;
			for (var prop in obj){
				if (typeof obj[prop][idx] === "number") {
					sum += obj[prop][idx];
				}
			}
		return sum;
	},
	makeColumnArray : function(obj, idx){
		var columnArray = [];
		for (var prop in obj){
			columnArray.push(obj[prop][idx]);
		}
		return columnArray;
	},
	sumArray : function (arr){
		var sum = 0;
		for(var i=0; i < arr.length ; i++){
			sum += arr[i];
		}
		return sum;
	},
	addsSumToEndArray : function (arr) {
		var theSum = xlFactory.sumArray(arr);
		var placeHolderArr = arr;
		placeHolderArr.push(theSum);
		return placeHolderArr;
	},
	monthsGenerator : function (){
		var arr = [];
		for(var i = 0; i <= 12; i++){
			arr.push("Month "+i);
		}
		return arr;
	},
	spreadElements : function(RowArrayToPush, objectWithMembers, memberProp, key){
		for(var i = 0; i < objectWithMembers[memberProp].length; i++){
			var onerow =[];
			for(var j = 0; j < 12; j++){
				onerow.push(objectWithMembers[key][i]);
			}
			var completeRow = xlFactory.addsSumToEndArray(onerow);
			onerow.unshift(objectWithMembers[memberProp][i]);
			RowArrayToPush.push(onerow);
		}
	},
	sumMonthlies : function(RowArrayToPush, objectWithMembers, memberProp, key){
			var onerow =[];
			for(var j = 0; j < 12; j++){
				onerow.push(xlFactory.sumRow(objectWithMembers, key));
			}
			var completeRow = xlFactory.addsSumToEndArray(onerow);
			onerow.unshift("Monthlies");
			RowArrayToPush.push(onerow);
			return onerow;
	},
	arrOp : function (arr1, arr2, operator){
		var arrayPlaceholder = [];
		switch(operator){
			case "add":
				for(var i=0; i < arr1.length; i++){
					if (typeof arr1[i] === "number" ){
						arrayPlaceholder.push(arr1[i] + arr2[i]);
					}
				}
				return arrayPlaceholder;
			case "sbutract":
				for(var j=0; j < arr1.length; j++){
					if (typeof arr1[j] === "number" ){
						arrayPlaceholder.push(arr1[j] - arr2[j]);
					}
				}
				return arrayPlaceholder;
			case "multiply":
				for(var k=0; k < arr1.length; k++){
					if (typeof arr1[k] === "number" ){
						arrayPlaceholder.push(arr1[k] * arr2[k]);
					}
				}
				return arrayPlaceholder;
			case "divide":
				for(var h = 0 ; h < arr1.length; h++){
					if (typeof arr1[h] === "number" ){
						arrayPlaceholder.push(arr1[h] * arr2[h]);
					}
				}
				return arrayPlaceholder;
		}
	},
	arrOpSingle : function (arr1, singleNum, operator){
		var arrayPlaceholder = [];
		switch(operator){
			case "add":
				for(var i=0; i < arr1.length; i++){
					if (typeof arr1[i] === "number" ){
						arrayPlaceholder.push(arr1[i] + singleNum);
					}
				}
				return arrayPlaceholder;
			case "sbutract":
				for(var j=0; j < arr1.length; j++){
					if (typeof arr1[j] === "number" ){
						arrayPlaceholder.push(arr1[j] - singleNum);
					}
				}
				return arrayPlaceholder;
			case "multiply":
				for(var k=0; k < arr1.length; k++){
					if (typeof arr1[k] === "number" ){
						arrayPlaceholder.push(arr1[k] * singleNum);
					}
				}
				return arrayPlaceholder;
			case "divide":
				for(var h = 0 ; h < arr1.length; h++){
					if (typeof arr1[h] === "number" ){
						arrayPlaceholder.push(arr1[h] * singleNum);
					}
				}
				return arrayPlaceholder;
		}
	}
};

var x = xlFactory.form2Table(arrayOfForms);
var y = xlFactory.objOrg(budget[0]["consultants"])

var headCountTable = function (objRaw) {
	var obj = xlFactory.form2Table(objRaw);
	xlFactory.spreadElements(renda, obj, "role", "salary");
	var monthlies = xlFactory.sumMonthlies(renda, obj, "role", "salary");
	var bonusPerc = 0.05;
	var bonuses = xlFactory.arrOpSingle(monthlies, bonusPerc, "multiply");
	bonuses.unshift("Bonuses");
	renda.push(bonuses);
	var totalMontliesPlusBonuses = xlFactory.arrOp(monthlies, bonuses, "add");
	renda.push(totalMontliesPlusBonuses);
	var tax = 0.11;
	var taxesAndBenefits = xlFactory.arrOpSingle(totalMontliesPlusBonuses, tax, "multiply");
	totalMontliesPlusBonuses.unshift("totalMontliesPlusBonuses");
	taxesAndBenefits.unshift("Taxes and Benefits");
	renda.push(taxesAndBenefits);
	var totalMontliesPlusBonusesPlusTaxes = xlFactory.arrOp(totalMontliesPlusBonuses, taxesAndBenefits, "add");
	totalMontliesPlusBonusesPlusTaxes.unshift("Grand Total Monthlies")
	renda.push(totalMontliesPlusBonusesPlusTaxes);
	console.log(renda);

};

var budgetTable = function(objRaw, objRaw2, objRaw3, objRaw4){
	var renda = [];
	// consultants
	var obj = xlFactory.objOrg(objRaw)
	xlFactory.spreadElements(renda, obj, "expenseName", "amount");
	var monthlies = xlFactory.sumMonthlies(renda, obj, "expenseName", "amount");
	// ops
	if(objRaw2){
		var obj2 = xlFactory.objOrg(objRaw2)
		xlFactory.spreadElements(renda, obj2, "expenseName", "amount");
		var monthlies2 = xlFactory.sumMonthlies(renda, obj2, "expenseName", "amount");
		// whatever
		if(objRaw3){
			var obj3 = xlFactory.objOrg(objRaw3)
			xlFactory.spreadElements(renda, obj3, "expenseName", "amount");
			var monthlies3 = xlFactory.sumMonthlies(renda, obj3, "expenseName", "amount");
		}
	}
	console.log(renda);
};


var revenueTable = function () {

}

budgetTable(budget[0]["consultants"], budget[0]["operations"])
headCountTable(arrayOfForms);
