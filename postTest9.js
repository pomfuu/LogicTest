// 1

const checkPalindrom = (data) =>{
    data = data.toLowerCase()
    data = data.replace(/[^a-zA-Z0-9]/g, '')
    let reverse = data.split('').reverse().join('')
    if(data === reverse){
        return true
    }
    else return false
}

console.log(checkPalindrom("kasur"))
console.log(checkPalindrom("radar"))

// CARA LOOPING
const checkPalindrom2 = (data) =>{
    data = data.toLowerCase()
    data = data.replace(/[^a-zA-Z0-9]/g, '')
    //disini kita pake spread buat akses kata di data
    //baru di reverse sama join biar dia menghindari error
    //kalau datanya ada spasi gitu
    let reverse = [...data].reverse().join('')

    for(let value of data){
        if(value !== reverse[data.indexOf(value)]){
            return false
        }
    }
    return true
}


console.log(checkPalindrom2("kasur"))
console.log(checkPalindrom2("radar"))

// 2
const number = (busStops) => {
    let result = 0
    for( let value of busStops ){
        let index1 = value[0]
        let index2 = value[1]
        result += index1 - index2
    }
    return result
}

console.log(number([[10, 0], [3, 5], [5, 8]]));
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));