let result = document.getElementById("result")
let resetBtn = document.getElementById("reset")
let deleteBtn = document.getElementById("del")
let equalBtn = document.getElementById("equal")
let dotBtn = document.getElementById("dot")
let themeValue = document.querySelector('input[name="theme-value"]:checked').value;
let root = document.querySelector(":root")
let rootStyles = getComputedStyle(root)

let firstOperator = ""
let secondOperator = ""
let operation = ""
let isFirst = true
let operations = ["plus", "minus", "slash", "times", "+", "-", "/", "*"]

for (let i = 0; i < 10; i++) {
    document.getElementById(i).addEventListener("click", function() {
        if (isFirst) {
            if (checkDecimals(firstOperator)) {
                firstOperator += i
                result.textContent = firstOperator
            }
        }
        else {
            if (checkDecimals(secondOperator)) {
                secondOperator += i
                result.textContent = secondOperator
            }
        }        
    })
}
for (let i = 0; i < 4; i++) {
    document.getElementById(operations[i]).addEventListener("click", function() {
        if (operation == "") {
            operation += operations[i+4]
            result.textContent = operation
            isFirst = false
        }
    })
}

function checkDecimals(string) {
    if (!(string.includes("."))) {
        return true
    } else if (string.substring(string.indexOf("."), string.length).length < 9) {
        return true
    } else {
        return false
    }
}

function setTheme() {
    let theme = document.querySelector('input[name="theme-value"]:checked').value
    if (theme == 'one') {
        root.style.setProperty('--main-bg', 'hsl(222, 26%, 31%)')
        root.style.setProperty('--keypad-bg', 'hsl(223, 31%, 20%)')
        root.style.setProperty('--screen-bg', 'hsl(224, 36%, 15%)')
        root.style.setProperty('--keys-bg', 'hsl(30, 25%, 89%)')
        root.style.setProperty('--keys-sh', 'hsl(28, 16%, 65%)')
        root.style.setProperty('--keys-blue', 'hsl(225, 21%, 49%)')
        root.style.setProperty('--keys-sh-blue', 'hsl(224, 28%, 35%)')
        root.style.setProperty('--keys-red', 'hsl(6, 63%, 50%)')
        root.style.setProperty('--keys-sh-red', 'hsl(6, 70%, 34%)')
        root.style.setProperty('--keypad-text', 'hsl(221, 14%, 31%)')
        root.style.setProperty('--result-text', 'white')
        root.style.setProperty('--calc-color', 'white')
    } else if (theme == 'two') {
        root.style.setProperty('--main-bg', 'hsl(0, 0%, 90%)')
        root.style.setProperty('--keypad-bg', 'hsl(0, 5%, 81%)')
        root.style.setProperty('--screen-bg', 'hsl(0, 0%, 93%)')
        root.style.setProperty('--keys-bg', 'hsl(45, 7%, 89%)')
        root.style.setProperty('--keys-sh', 'hsl(35, 11%, 61%)')
        root.style.setProperty('--keys-blue', 'hsl(185, 42%, 37%)')
        root.style.setProperty('--keys-sh-blue', 'hsl(185, 58%, 25%)')
        root.style.setProperty('--keys-red', 'hsl(25, 98%, 40%)')
        root.style.setProperty('--keys-sh-red', 'hsl(25, 99%, 27%)')
        root.style.setProperty('--keypad-text', 'hsl(60, 10%, 19%)')
        root.style.setProperty('--result-text', 'white')
        root.style.setProperty('--calc-color', 'black')
    } else {
        root.style.setProperty('--main-bg', 'hsl(268, 75%, 9%)')
        root.style.setProperty('--keypad-bg', 'hsl(268, 71%, 12%)')
        root.style.setProperty('--screen-bg', 'hsl(268, 71%, 12%)')
        root.style.setProperty('--keys-bg', 'hsl(268, 47%, 21%)')
        root.style.setProperty('--keys-sh', 'hsl(290, 70%, 36%)')
        root.style.setProperty('--keys-blue', 'hsl(281, 89%, 26%)')
        root.style.setProperty('--keys-sh-blue', 'hsl(285, 91%, 52%)')
        root.style.setProperty('--keys-red', 'hsl(176, 100%, 44%)')
        root.style.setProperty('--keys-sh-red', 'hsl(177, 92%, 70%)')
        root.style.setProperty('--keypad-text', 'hsl(52, 100%, 62%)')
        root.style.setProperty('--result-text', 'white')
        root.style.setProperty('--calc-color', 'hsl(52, 100%, 62%)')
    }
}

resetBtn.addEventListener("click", function() {
    firstOperator = ""
    secondOperator = ""
    operation = ""
    isFirst = true
    result.textContent = ""
})

deleteBtn.addEventListener("click", function() {
    if (result.textContent == firstOperator) {
        firstOperator = firstOperator.slice(0, -1)
        result.textContent = firstOperator
    } 
    else if (result.textContent == secondOperator) {
        secondOperator = secondOperator.slice(0, -1)
        result.textContent = secondOperator
    }
    else {
        operation = operation.slice(0, -1)
        result.textContent = operation
    }
})

equalBtn.addEventListener("click", function() {
    let res = firstOperator + operation + secondOperator
    firstOperator = eval(res)
    if (firstOperator % 1 == 0 || firstOperator.toString().length <= 10) {
        result.textContent = firstOperator
    } else {
        firstOperator = eval(res).toFixed(8)
        result.textContent = firstOperator
    }
    isFirst = true
    operation = ""
    secondOperator = ""
})

dotBtn.addEventListener("click", function() {
    if (isFirst && !(firstOperator.includes("."))) {
        firstOperator += "."
        result.textContent = firstOperator
    }
    if (!isFirst && !(secondOperator.includes("."))) {
        secondOperator += "."
        result.textContent = secondOperator
    }
})
