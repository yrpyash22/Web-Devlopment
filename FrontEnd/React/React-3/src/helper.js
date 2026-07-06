function genTicket(n) {
    let arr = new Array(n);
    for(let i = 0; i<n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function checkWin(arr, n,winningSum) {
    let sum = 0;
    for(let i = 0; i<n; i++) {
        sum += arr[i];
    }
    return sum == winningSum;
}

function sum(arr, n) {
    let sum = 0;
    for(let i = 0; i<n; i++) {
        sum += arr[i];
    }
    return sum;
}

export {genTicket, checkWin, sum};