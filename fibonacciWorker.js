addEventListener('message', messageReceived);

function messageReceived(event) {
    let numberToReach = event.data;
    let fibonacciToNumber = calculateFibonacciTo(numberToReach);
    postMessage(fibonacciToNumber);
}

function calculateFibonacciTo(number) {
    let results = [];
    let psx = 0;
    let pdx = 1;
    for (let i = 0; i <= number; i++) {
        results.push(psx);
        let sum = psx + pdx;
        psx = pdx;
        pdx = sum;
    }
    return results;
}