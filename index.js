const fibonacci = num => {

    if (num === 1) return 0
    if (num === 2) return 1 
    let res = fibonacci(num - 1) + fibonacci(num - 2)
    return res
}
console.log(fibonacci(23))