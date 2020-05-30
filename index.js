// Your code here
function saturdayFun(activity="roller-skate") {
  
 return (`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity='go to the office'){
  
  return (`This Monday, I will ${activity}.`)
}

function wrapAdjective (flair='*') {
  return function (parameter='special'){
    return `You are ${flair}${parameter}${flair}!`
  }
}

const Calculator = {
  add: function (a,b){
    return a + b;
  },
  subtract: function(a,b){
    return a-b;
  },
  multiply: function (a,b){
    return a * b;
  },
  divide: function(a,b){
    return a / b;
  }
}

function actionApplyer (start, array) {
  let x = start;
  array.forEach(function(func){
    x = func(x);
  })
  return x;

}