const fibonacci = num => {

    let res = 0

    let fibarr = [0,1]
    if (num === 1) return 0
    if (num === 2) return 1
    for (let i=2; i<num; i++) {

        res = fibarr[i-1] +fibarr[i-2]

        fibarr.push(res)
    }
    
    return res
}
console.log(fibonacci(4))