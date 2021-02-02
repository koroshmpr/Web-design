//fibonacci function without recursive function

function fib(n) {
    let arr = [0, 1, 1];
    // in fibonacci first 3 element is static number
    for (let i = 3; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n]
}
console.log(fib(5))