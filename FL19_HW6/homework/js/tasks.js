/* eslint-disable no-magic-numbers */
/* eslint-disable no-dupe-else-if */
// write your code here

//First task
const getMaxEvenElement = (arr) => {
    return arr.filter(el => el%2===0).sort((a, b) => b-a)[0]
}
console.log(getMaxEvenElement(['1','3','4','2', '5']))

//Second task
const swapElements = (a, b) => {
    [a, b] = [b, a]
    return `First element - ${a}
Second element - ${b}`
}
console.log(swapElements(5, 4))

//Third task
const getValue = (value) => {
    if (value) {
        return value
    } else {
        return `-`
    }
}
console.log(getValue(0))

//Fourth task
const arrayOfArrays = [
    ['name', 'den'],
    ['age', '21'],
    ['city', 'lviv']
]
const getObjFromArray = (arr) => {
    return Object.fromEntries(arr)
}
console.log(getObjFromArray(arrayOfArrays))

//Fifth task
const obj1 = {name: 'nick'}
const addUniqueId = (obj) => {
    return {...obj, id: Symbol()}
}
console.log(addUniqueId(obj1))

//Sixth task
const oldObj = {name: 'willow', details: {id:1, age: 47, university: 'LNU'}}
const getRegroupedObject = (old) => {
    const {name} = old
    const {id, age, university} = old.details
    const firstName= name
    return {university, user: {age, firstName, id}}
}
console.log(getRegroupedObject(oldObj))

//Seventh task
const getArrayWithUniqueElements = (arr) => {
    return Array.from(new Set(arr))
}
console.log(getArrayWithUniqueElements([2,3,4,2,4,'a','c','a']))

//Eighth task
const phoneNumber = '0123456789'
const hideNumber = (number) => {
    return `${number}`.slice(-4).padStart(10, '*')
}
console.log(hideNumber(phoneNumber))

//Ninth task
const add = (a, b) => {
    try {
        if (!a) {
            throw Error('a is required!')
        } else if (!b) {
            throw Error('b is required!')
        } else if (!a && !b) {
            throw Error('a and b are required!')
        } else {
            return a+b
        }
    } catch(e) {
        return e
    }
}
console.log(add(4))

//Ninth task

function* generateIterableSequence(obj) {
    for (let i of obj) {
        yield i
    }
}
const generatorObject = generateIterableSequence({first: 1, second: 'wow', third: ':('})