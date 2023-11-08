//defining elements
let screen = document.querySelector('#screen')
let buttons = document.querySelectorAll('.buttons')
let body = document.querySelector('body');

//assigning variables
let nums = [0]
let prevValue = 0;
let currentValueFloat = 0;
let currentValue = "";
let currentValueStr = "";
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
            currentValueStr = prevValue + ""
            screen.innerText = currentValueStr.slice(0,15)
        }
    })
      
}

body.addEventListener('keydown', (e) => {
    console.log(e.key)
    keyPressed = e.key;
    switch (keyPressed) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            currentValue += keyPressed;
            currentValueFloat = parseFloat(currentValue)
            screen.innerText= currentValue;
            break;

        case "+":
            operation = "+";
            currentValue = "";
            prevValue = currentValueFloat + prevValue
            screen.innerText = currentValueFloat
            break;

        case "-":
            operation = "-";
            currentValue = "";
            prevValue = currentValueFloat - prevValue;
            break;

        case "*":
            operation = "*";
            prevValue = currentValueFloat;
            currentValue = "";
            break;

        case "/":
            operation = "/";
            prevValue = currentValueFloat;
            currentValue = "";
            break;

        case "Enter":
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
            currentValueStr = prevValue + ""
            screen.innerText = currentValueStr.slice(0,15)
            break;
    
        default:
            break;
    }
})