addEventListener('message', messageReceived);

function messageReceived(event) {
    let numberToReach = event.data;
    let fibonacciToNumber = calculateFibonacciTo(numberToReach);
    postMessage(fibonacciToNumber);
}

function calculateFibonacciTo(number) {
    if (number === 0) {
        return 1;
    }
    if (number === 1) {
        return 1;
    }
    return number * calculateFibonacciTo(number - 1);
}