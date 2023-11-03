// Assignment 1
const checkPalindrom = (data) =>{
    data = data.toLowerCase()
    data = data.replace(/[^a-zA-Z0-9]/g, '')
    let reverse = data.split('').reverse().join('')
    if(data === reverse){
        return true
    }
    else return false
}

console.log(checkPalindrom("kasur rusak"))
console.log(checkPalindrom("saya makan"))

// Assignment 2
const catMouse = (n,arr) => {
    let res = []
    for(let i = 0 ; i < n ; i++){
        // arr[row][col]
        let AtoC = Math.abs(arr[i][2] - arr[i][0])
        let BtoC = Math.abs(arr[i][2] - arr[i][1])
        if(AtoC === BtoC){
            res.push('Mouse C')
        }
        else if(AtoC < BtoC){
            res.push('Cat A')
        }
        else res.push('Cat B')
    }
    return console.log(res)
}

catMouse(2,[[1,2,3], [1,3,2]])

// Assignment 3
const timeFormat = (time) =>{
    const ampm = time.slice(8)
    const [times, modifier] = time.split(ampm)
    let [hour, minutes, second] = times.split(":")

    let hour24 = parseInt(hour)
    if(hour === '12'){
        hour = '00'
    }

    if(ampm === 'PM'){
        // 10 ini buat bikin jam jadi bilangan basis 10
        hour = parseInt(hour,10) + 12
    }
    let res = `${hour}:${minutes}:${second}`
    return res
}

console.log(timeFormat("12:01:00AM"))
console.log(timeFormat("12:01:00PM"))
console.log(timeFormat("05:21:00PM"))

