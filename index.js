// Your code here
console.log("index.js locked and loaded")

function saturdayFun(activity="roller-skate"){
    const ans = `This Saturday, I want to ${activity}!`
    // console.log(ans)
    return ans
}

// saturdayFun()
// saturdayFun("ice skate")

function mondayWork(activity="go to the office"){
    const ans = `This Monday, I will ${activity}.`
    return ans
}

function wrapAdjective(outerArg="*"){
    return function(arg="special"){
        return `You are ${outerArg}${arg}${outerArg}!`
    }
}

// const string = wrapAdjective()()
// const string2 = wrapAdjective("%")("a dedicated programmer") 
// console.log(string)
// console.log(string2)

const Calculator = {
    add: function(num1,num2){
        return num1 + num2
    },
    subtract: function(num1,num2){
        return num1 - num2
    },
    multiply: function(num1,num2){
        return num1 * num2
    },
    divide: function(num1, num2){
        return num1 / num2
    }
}

// console.log(Calculator.add(1,3))
// console.log(Calculator.subtract(1,3))
// console.log(Calculator.multiply(1,3))
// console.log(Calculator.divide(10,5))

function actionApplyer(startingInt, funcArray){
    let ans = startingInt

    for (let i = 0; i < funcArray.length; i++){
        const func = funcArray[i]
        ans = func(ans)
        console.log(ans)
    }

    return ans
}

const arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

console.log(actionApplyer(13, arrayOfTransforms))