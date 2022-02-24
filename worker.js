addEventListener('message', messageReceived);

function messageReceived(event) {
    // let numberToReach = event.data;
    // let primeToNumber = calculatePrimeNumbersTo(numberToReach);
    // postMessage(primeToNumber);
    if (event.data.operation === 'prime') {
        let numberToReach = event.data.numberToReach;
        let primeToNumber = calculatePrimeNumbersTo(numberToReach);
        let message1 = {operation: 'prime', result: primeToNumber};
        postMessage(message1);
    } else {
        let numberToReach = event.data.numberToReach;
        let sumToNumber = sumNumbersTO(numberToReach)
        let message2 = {operation: 'sum', result: sumToNumber};
        postMessage(message2);
    }
}

function calculatePrimeNumbersTo(number) {
    let array = Array.from({length: number - 1}, (v, i) => i + 2);
    return array.reduce((p, c) => p.some(e => c % e === 0) ? p : [...p, c],[]);
}

function sumNumbersTO(number) {
    let result = 0;
    for (let i = 0; i <= number; i++) {
        result += i;
    }
    return result;
}