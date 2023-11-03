// 1
const uniqueInOrder = (iterable) => {
    let res = []
    for(let value of iterable){
        // meriksa value sama ngga sama element sebelumnya dalam res,
        // kalau beda maka di push
        if(!res.includes(value) || value !== res[res.length -1]){
            res.push(value)
        }
    }
    return console.log(res)
}

uniqueInOrder('AAAABBBCCDAABBB')  
uniqueInOrder('ABBCcAD')            
uniqueInOrder([1,2,2,3,3]) 

// 2
const pairsOfSum = (arr, expectedOutput) => {
    let res = []
    for(let value1 of arr){
        for(let value2 of arr){
            if( value1 + value2 === expectedOutput ){
                res.push([value1, value2]);
            }
        }
    }
    return res
}
console.log(pairsOfSum([2, 7, 11, 15, 4, 5], 9))
console.log(pairsOfSum([2, 5, 4, 3, 7, 0], 7))