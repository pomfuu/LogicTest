// 1
function charCount(word){
    let result = []
    word = word.toLowerCase()
    for(let value of word){
        if(result[value]){
            result[value]++
        } else result[value] = 1
    }
    return result
}

console.log(charCount("Dibimbing di"))
console.log(charCount("Software"))
console.log(charCount("Frontend"))

// 2
function sockMerchant(word){
    let result = 0
    let count = {} // buat itung jumlah pair
    for(let value of word){
        // jika angka (si value) didalam pair udh ketemu
        // maka dia nambah pairnya
        // terus kita init lagi ke 0 kalo dia udah jadi pair
        if(count[value]){
           result++
           count[value] = 0
           // nandain kita dah nemu angka di array (yg muncul pertama)
        } else count[value] = 1
    }
    return result
}

console.log(sockMerchant([1, 1, 3, 3, 5, 5, 5, 5]))
console.log(sockMerchant([1, 8, 3, 3, 5, 5, 5]))