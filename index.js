const polindrom = (str) => {

    str = str.toLowerCase()

    return str===str.split('').reverse().join('')
}
console.log(polindrom('Artem'))