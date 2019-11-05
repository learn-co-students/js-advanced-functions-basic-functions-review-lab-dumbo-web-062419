// Your code here
function saturdayFun(activity="roller-skate") {
	return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity="go to the office") {
	return `This Monday, I will ${activity}.`;
}

let wrapAdjective = function (flair="*") {

	return function(adj="special"){
		return `You are ${flair}${adj}${flair}!`
	}
}

const Calculator = {

	add: function (a, b) {

		return a + b;
	},

	subtract: function(a, b) {

		return a - b;
	},
	multiply: function(a, b) {

		return a * b;
	},
	divide: function(a, b) {

		return a / b;
	}
}

function actionApplyer(starting, funkArray) {

	if (funkArray.length == 0)
		return starting;
	else {
		let result = starting;
		for (var i = 0; i < funkArray.length; i ++) {

			result = funkArray[i](result);
		}
		return result;
	}
} 