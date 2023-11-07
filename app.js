//defining elements
let screen = document.querySelector('#screen')

//assigning variables
let buttons = document.querySelectorAll('.buttons')
let nums = [0]
let prevValue = 0;
let currentValueFloat = 0;
let currentValue = "";
const operationStatus = false;
let operation;
let operations = ["C", "plusMinus", "percentage", "divide", "multiply", "minus", "plus", "equal"];
let finalValue;
let buffer = 0;

for(button of buttons) {
    button.addEventListener('click', (event)=> {
        value = event.target.attributes[1].nodeValue
        // console.dir(value)
        if(operations.indexOf(value)==-1 && currentValue.length <= 14) {
            // console.log("num pressed");
            currentValue += value;
            currentValueFloat = parseFloat(currentValue)
            screen.innerText= currentValue;
        }
        else {
            // console.log("operation detected")
            switch (value) {
                case "C":
                    nums = [0];
                    prevValue = 0;
                    currentValue = "";
                    finalValue = 0;
                    currentValueFloat = 0;
                    screen.innerText = currentValue
                    break;

                case "plus":
                    operation = "+";
                    currentValue = "";
                    prevValue = currentValueFloat + prevValue
                    screen.innerText = currentValueFloat
                    break;

                case "minus":
                    operation = "-";
                    currentValue = "";
                    prevValue = currentValueFloat - prevValue;
                    break;

                case "multiply":
                    operation = "*";
                    prevValue = currentValueFloat;
                    currentValue = "";
                    break;

                case "divide":
                    operation = "/";
                    prevValue = currentValueFloat;
                    currentValue = "";
                    break;
                
                case "percentage":
                    operation = "%";
                    prevValue = currentValueFloat/100;
                    currentValue = "";
                    break;

                case "plusMinus":
                    operation = "+-";
                    prevValue = -(currentValueFloat);
                    currentValue = "";
                    break;

                case "equal":
                    switch (operation) {
                        case "+":
                            prevValue = prevValue + currentValueFloat
                            break;

                        case "-":
                            prevValue = prevValue - currentValueFloat
                            break;

                        case "*":
                            prevValue = prevValue * currentValueFloat
                            break;

                        case "/":
                            prevValue = prevValue / currentValueFloat
                            break;

                        default:
                            break;
                    }
                    break;
                

                default:
                    break;
            }
            // if(value=="C") {
            //     nums = [0];
            //     prevValue = 0;
            //     currentValue = "";
            //     screen.innerText = currentValue
            // }
            // else if (value=="plus") {
            //     operation = "+";
            //     currentValue = "";
            //     prevValue = currentValueFloat + prevValue
            //     screen.innerText = currentValueFloat
            //     // prevValue = currentValueFloat;
            // }
            // else if(value == "minus") {
            //     operation = "-";
            //     currentValue = "";
            //     prevValue = currentValueFloat - prevValue;
            // }
            // else if(value=="multiply") {
            //     operation = "*";
            //     prevValue = currentValueFloat;
            //     currentValue = "";
            // }
            // else if(value == "divide") {
            //     operation = "/";
            //     prevValue = currentValueFloat;
            //     currentValue = "";
            // }
            // else if(value == "percentage") {
            //     operation = "%";
            //     prevValue = currentValueFloat/100;
            //     currentValue = "";
            // }
            // else if(value == "plusMinus") {
            //     operation = "+-";
            //     prevValue = -(currentValueFloat);
            //     currentValue = "";
            // }
            // else if(value=="equal") {
            //     console.log(currentValue);
            //     if(operation=="+") {
            //         prevValue = prevValue + currentValueFloat
            //     }
            //     else if(operation=="-") {
            //         prevValue = prevValue - currentValueFloat
            //     }
            //     else if(operation=="*") {
            //         prevValue = prevValue * currentValueFloat
            //     }
            //     else if(operation=="/") {
            //         prevValue = prevValue / currentValueFloat
            //     }
            // }
            currentValueStr = prevValue + ""
            screen.innerText = currentValueStr.slice(0,15)
        }
    })
      
}