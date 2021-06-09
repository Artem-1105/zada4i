const anagram = (str1, str2) => {
    let arr1 = []
    let arr2 = []
    let res = 0
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    
    for (let i=0; i<str1.length; i++) {
        if (/[a-zа-я]/.test(str1[i])) arr1.push(str1[i])
    }

    for (let i=0; i<str2.length; i++) {
        if (/[a-zа-я]/.test(str2[i])) arr2.push(str2[i])
    }

    if (arr1.length !== arr2.length || arr1.length === 0) return false

    for (let i = 0; i<arr1.length; i++) {
        for (let j = 0; j<arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr2[j] = ' '
                arr1[i] = '*'
                res = res + 1
            }
        }
    }
    return res === arr1.length && res === arr2.length ? true : false
}
console.log (anagram('дд..о.....ОО..ДД...       ff', 'f          д>>>>ОFДДОО>>>>д'))
