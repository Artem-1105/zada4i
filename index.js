const buildCharObjects = str => {
    str = str.toLowerCase()
    let charObj = {}
    for (let i=0; i<str.length; i++) {
        if (/[a-zа-я]/.test(str[i])) charObj[str[i]] = charObj[str[i]] + 1 || 1
    }
    return charObj
}
const polindrom = (str1, str2) => {
    let aCharObj = buildCharObjects(str1)
    let bCharObj = buildCharObjects(str2)
    if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length) return false
    if (str1 === '' || str2 === '') return false
    for (let char in aCharObj) {
        if (aCharObj[char] !== bCharObj[char]) return false
    }
    return true
}
console.log(polindrom('dd.....ЖОПА...l......m','lD>>>|жопа|=\\Md'))