const primeWorker = new Worker('./worker.js');

primeWorker.addEventListener('message', messageReceived)

let message1 = {operation: 'prime', numberToReach: 200000};
let message2 = {operation: 'sum', numberToReach: 100000};
//primeWorker.postMessage(1000000);
primeWorker.postMessage(message1);
let loader = document.getElementById('loader');
loader.style.display = 'inline-block';

function messageReceived(event) {
    loader.style.display = 'none';
    if (event.data.operation === 'prime') {
        let primeToNumber = event.data.result;
        let par = document.getElementById('prime-numbers');
        for (const prime of primeToNumber) {
            const node = document.createTextNode(prime + ' ');
            par.appendChild(node);
        }
        console.log('messaggio ricevuto dal worker: ' + event.data.result);
    } else {
        let sumToNumber = event.data.result;
        let par = document.getElementById('prime-numbers');
        const node = document.createTextNode(sumToNumber);
        par.appendChild(node);
        console.log('messaggio ricevuto dal worker: ' + event.data.result);
    }
}