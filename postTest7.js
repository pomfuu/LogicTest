//1 
function testCase(i, o){
  if(i === o) return `Test Pass: output is ${o} as expected`
  return `Test Failed: ${i} not equall to ${o}` 
}

// Jawaban:  
function sortStart(arr){
  //fungsi sorting biasa (disini saya pakai bubble sort)
  for(let i of arr){
    for(let j of arr){
      if( i.charCodeAt(0) < j.charCodeAt(0) ){
        let temp = i
        arr[arr.indexOf(i)] = j
        arr[arr.indexOf(j)] = i
      }
    }
  }
  //disini kita pisahin setiap hurufnya mulai dr index 0 pakai split terus kita isi ***
  return arr[0].split('').join('***')
}
console.log(testCase(sortStart(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' ))
console.log(testCase(sortStart(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'))
// sebenarnya aku agak bingung sama soalnya tapi karena ada note disuruh sorting jadi sorting aja hehe

//2 Anagram
const itungFreq = (word,freq) => {
    //disini kita mau itung apakah jumlah word1 sama word2 tu sama atau ngga
    //kita mau itung juga jumlah distinct alphabetnya buat cek jumlahnya juga
    //sebelum kita itung, kita harus replace semuanya selain a-z ke kosong
    const kataFinal1 = word.toLowerCase()
    const kataFinal = kataFinal1.replace(/[^a-z]/g, '')

    //itung distinct alphabet
    for(let value of kataFinal){
        freq[value] = (freq[value] || 0) + 1
    }
}

function isAnagram(word1,word2){
    let freq1 = {}
    let freq2 = {}
    itungFreq(word1, freq1)
    itungFreq(word2, freq2)
    for (let value in freq1) {
        if (freq1[value] !== freq2[value]) {
          return false
        }
      }

    return true
}
console.log(isAnagram("listen","silent")) 
console.log(isAnagram("The Eyes","They See")) 
console.log(isAnagram("sun","moon"))