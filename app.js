function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        if (display.value.includes('%')) {
            const parts = display.value.split('%');
            const base = parseFloat(parts[0]);
            const percentage = parseFloat(parts[1]);
            if (!isNaN(base) && !isNaN(percentage)) {
                display.value = (base * (percentage / 100)).toString();
            } else {
                display.value = "HATA!";
            }
        } else {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "HATA!";
    }
}

function calculateSquareRoot() {
    const display = document.getElementById("display");
    display.value = Math.sqrt(eval(display.value));
}

function toggleTheme() {
    const calculator = document.querySelector('.calculator');
    const themeToggleBtn = document.querySelector('.theme-toggle');
    const body = document.body;

    if (calculator.classList.contains('dark')) {
        calculator.classList.remove('dark');
        calculator.classList.add('light');
        body.classList.remove('dark');
        body.classList.add('light');
        themeToggleBtn.textContent = "🌞";
    } else {
        calculator.classList.remove('light');
        calculator.classList.add('dark');
        body.classList.remove('light');
        body.classList.add('dark');
        themeToggleBtn.textContent = "🌙";
    }
}


document.addEventListener("keydown", function(event) {
    const key = event.key;
    const display = document.getElementById("display");

    if (!isNaN(key)) {
        appendToDisplay(key);
    } else if (key === "+" || key === "-" || key === "/" || key === "*") {
        appendToDisplay(key);
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
        clearDisplay();
    } else if (key === "Enter") {
        calculateResult();
    }
});

function addToHistory(result) {
    const history = document.getElementById("history");
    const display = document.getElementById("display");
    const newEntry = document.createElement("div");
    newEntry.textContent = `${display.value} = ${result}`;
    history.appendChild(newEntry);
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);
        addToHistory(result); 
        display.value = result;
    } catch (error) {
        display.value = "HATA!";
    }
}

function calculateExponent(base, exponent) {
    return Math.pow(base, exponent);
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        if (display.value.includes('^')) {
            const parts = display.value.split('^');
            const base = parseFloat(parts[0]);
            const exponent = parseFloat(parts[1]);
            if (!isNaN(base) && !isNaN(exponent)) {
                display.value = calculateExponent(base, exponent);
            } else {
                display.value = "HATA!";
            }
        } else if (display.value.includes('%')) {
            const parts = display.value.split('%');
            const base = parseFloat(parts[0]);
            const percentage = parseFloat(parts[1]);
            if (!isNaN(base) && !isNaN(percentage)) {
                display.value = (base * (percentage / 100)).toString();
            } else {
                display.value = "HATA!";
            }
        } else {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "HATA!";
    }
}



