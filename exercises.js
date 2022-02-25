function calcPrime() {
    const number = getInputNumberValue('inputNumber');
    if (!isNaN(number)) {
        clearPar('result-prime');
        changeLoaderDisplay('loader1', 'block');
        const primeWorker = new Worker('./primeWorker.js');
        primeWorker.addEventListener('message', (event) => {
            changeLoaderDisplay('loader1', 'none');
            let primeToNumber = event.data;
            setMoreValuesPar('result-prime', primeToNumber);
        });
        primeWorker.postMessage(number);
    } else {
        setInputError('result-prime');
    }
}

// ------------------------------------------------------------------------- //

function calcFactorial() {
    const number = getInputNumberValue('inputNumber');
    if (!isNaN(number)) {
        clearPar('result-factorial');
        changeLoaderDisplay('loader2', 'block');
        const fattorialeWorker = new Worker('./fattorialeWorker.js');
        fattorialeWorker.addEventListener('message', (event) => {
            changeLoaderDisplay('loader2', 'none');
            let fattorialeNumber = event.data;
            setOneValuesPar('result-factorial', fattorialeNumber);
        });
        fattorialeWorker.postMessage(number);
    } else {
        setInputError('result-factorial');
    }
}

// ------------------------------------------------------------------------- //

function calcFibonacci() {
    const number = getInputNumberValue('inputNumber');
    if (!isNaN(number)) {
        clearPar('result-fibonacci');
        changeLoaderDisplay('loader3', 'block');
        const fibonacciWorker = new Worker('./fibonacciWorker.js');
        fibonacciWorker.addEventListener('message', (event) => {
            changeLoaderDisplay('loader3', 'none');
            let fibonacciToNumber = event.data;
            setMoreValuesPar('result-fibonacci', fibonacciToNumber);
        });
        fibonacciWorker.postMessage(number);
    } else {
        setInputError('result-fibonacci');
    }
}

// ------------------------------------------------------------------------------------------------------------- //

function clearPar(parId) {
    let par = document.getElementById(parId);
    par.innerHTML = '';
}

function changeLoaderDisplay(loaderId, state) {
    let loader = document.getElementById(loaderId);
    loader.style.display = state;
}

function getInputNumberValue(inputId) {
    const input = document.getElementById(inputId);
    if (!isNaN(input.value)) {
        const inputValue = parseInt(input.value);
        return inputValue;
    } else {
        return NaN;
    }
}

function setMoreValuesPar(parId, values) {
    let par = document.getElementById(parId);
    for (const element of values) {
        const node = document.createTextNode(element + ' ');
        par.appendChild(node);
    }
}

function setOneValuesPar(parId, text) {
    let par = document.getElementById(parId);
    const node = document.createTextNode(text);
    par.appendChild(node);
}

function setInputError(parId) {
    clearPar(parId);
    let par = document.getElementById(parId);
    const node = document.createTextNode('Il valore inserito in input non è un numero, controlla e riprova.');
    par.appendChild(node);
}