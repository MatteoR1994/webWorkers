function calcPrime() {
    clearPar('result-prime');
    changeLoaderDisplay('loader1', 'block');
    const primeWorker = new Worker('./primeWorker.js');
    primeWorker.addEventListener('message', (event) => {
        changeLoaderDisplay('loader1', 'none');
        let primeToNumber = event.data;
        setMoreValuesPar('result-prime', primeToNumber);
    });
    primeWorker.postMessage(getInputNumberValue());
}

// ------------------------------------------------------------------------- //

function calcFactorial() {
    clearPar('result-factorial');
    changeLoaderDisplay('loader2', 'block');
    const fattorialeWorker = new Worker('./fattorialeWorker.js');
    fattorialeWorker.addEventListener('message', (event) => {
        changeLoaderDisplay('loader2', 'none');
        let fattorialeNumber = event.data;
        setOneValuesPar('result-factorial', fattorialeNumber);
    });
    fattorialeWorker.postMessage(getInputNumberValue());
}

// ------------------------------------------------------------------------- //

function calcFibonacci() {
    clearPar('result-fibonacci');
    changeLoaderDisplay('loader3', 'block');
    const fibonacciWorker = new Worker('./fibonacciWorker.js');
    fibonacciWorker.addEventListener('message', (event) => {
        changeLoaderDisplay('loader3', 'none');
        let fibonacciToNumber = event.data;
        setMoreValuesPar('result-fibonacci', fibonacciToNumber);
    });
    fibonacciWorker.postMessage(getInputNumberValue());
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

function getInputNumberValue() {
    const input = document.getElementsByName('inputNumber')[0];
    return input.value;
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