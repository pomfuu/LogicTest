const array = [31, 9, 54, 11, 43, 6, 67]

function maxMin(array) {
    // init value min max dar index array ke 1 (buat jadi pembandingnya)
    let max = array[0];
    let min = array[0];
    // disini kita mengakses setiap elemen value dari array menggunakan of 
    // kalau menggunakan of kita gaperlu ambil indexnya manual jadi kita bandingin valuenya aja
    // kalau misalnya pakai for loop (let i) maka nanti bandinginnya array[i]
    // saya memakai of karena lebih efisien 
    for( let value of array ){
        if(value>max){
            max = value;
        }
        else if(value<min){
            min = value;
        }
    }
    return {max,min};
}

console.log(maxMin(array))