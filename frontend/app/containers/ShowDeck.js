import React, { Component } from 'react';
import AddEditDeck from './AddEditDeck';
// import math from '../../utils/math';

const DeckContent = React.createClass({


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
  	// this.objOrg(budget[0]["consultants"])
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
  		var theSum = this.sumArray(arr);
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
  			var completeRow = this.addsSumToEndArray(onerow);
  			onerow.unshift(objectWithMembers[memberProp][i]);
  			RowArrayToPush.push(onerow);
  		}
  	},
  	sumMonthlies : function(RowArrayToPush, objectWithMembers, memberProp, key){
  			var onerow =[];
  			for(var j = 0; j < 12; j++){
  				onerow.push(this.sumRow(objectWithMembers, key));
  			}
  			var completeRow = this.addsSumToEndArray(onerow);
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
  	},
  	headCountTable : function (objRaw) {
      var renda =[];
  		var obj = this.form2Table(objRaw);
  		this.spreadElements(renda, obj, "employeePosition", "employeeSalary");
  		var monthlies = this.sumMonthlies(renda, obj, "employeePosition", "employeeSalary");
  		var bonusPerc = 0.05;
  		var bonuses = this.arrOpSingle(monthlies, bonusPerc, "multiply");
  		bonuses.unshift("Bonuses");
  		renda.push(bonuses);
  		var totalMontliesPlusBonuses = this.arrOp(monthlies, bonuses, "add");
  		renda.push(totalMontliesPlusBonuses);
  		var tax = 0.11;
  		var taxesAndBenefits = this.arrOpSingle(totalMontliesPlusBonuses, tax, "multiply");
  		totalMontliesPlusBonuses.unshift("totalMontliesPlusBonuses");
  		taxesAndBenefits.unshift("Taxes and Benefits");
  		renda.push(taxesAndBenefits);
  		var totalMontliesPlusBonusesPlusTaxes = this.arrOp(totalMontliesPlusBonuses, taxesAndBenefits, "add");
  		totalMontliesPlusBonusesPlusTaxes.unshift("Grand Total Monthlies")
  		renda.push(totalMontliesPlusBonusesPlusTaxes);
  		console.log(renda);
  	},
  	budgetTable : function(objRaw, objRaw2, objRaw3, objRaw4){
  		var renda = [];
  		// consultants
  		var obj = this.objOrg(objRaw)
  		this.spreadElements(renda, obj, "expenseName", "amount");
  		var monthlies = this.sumMonthlies(renda, obj, "expenseName", "amount");
  		// ops
  		if(objRaw2){
  			var obj2 = this.objOrg(objRaw2)
  			this.spreadElements(renda, obj2, "expenseName", "amount");
  			var monthlies2 = this.sumMonthlies(renda, obj2, "expenseName", "amount");
  			// whatever
  			if(objRaw3){
  				var obj3 = this.objOrg(objRaw3)
  				this.spreadElements(renda, obj3, "expenseName", "amount");
  				var monthlies3 = this.sumMonthlies(renda, obj3, "expenseName", "amount");
  			}
  		}
  		console.log(renda);
  	},
  	test: function(testLog){
  		console.log("hey man, I'm here", testLog)
  	},
    test2: function(){
    this.test()
    },

  render: function() {
    console.log("We're in Deck Content");
    // console.log("show deck employee data",this.props.employeeData);
    this.test2();
    this.headCountTable(this.props.employeeData);
    return (
      <div>
        <p>Show Deck</p>
      </div>
    );
  }
});

export default DeckContent;



// var x = this.form2Table(arrayOfForms);
// var y = this.objOrg(budget[0]["consultants"])
// this.budgetTable(budget[0]["consultants"], budget[0]["operations"])
// this.headCountTable(arrayOfForms);
