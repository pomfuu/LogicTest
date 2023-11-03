// 1 Reverse

const reverseNoBuilt = (sentence) => {
    let words = [];
    let word = "";
    let reversedSentence = "";

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (char === " " || i === sentence.length - 1) {
            if (i === sentence.length - 1) {
                word += char;
            }
            words.push(word);
            word = "";
        } else {
            word += char;
        }
    }

    for (let i = 0; i < words.length; i++) {
        const letters = words[i].split("");
        let reverseWord = "";

        for (let j = letters.length - 1; j >= 0; j--) {
            reverseWord += letters[j];
        }

        if (reverseWord.length > 3) {
            reversedSentence += reverseWord;
        } else {
            reversedSentence += words[i];
        }

        if (i < words.length - 1) {
            reversedSentence += " ";
        }
    }

    return reversedSentence;
}

const reversed = reverseNoBuilt("saya adalah aku");
console.log(reversed);

// W BUILT
const reverse = (sentence) => {
    const words = sentence.split(" ")
    const reversedWords = words.map((word)=>{
        return word.length > 3 ? word.split("").reverse().join("") : word
    })
    const reversedSentence = reversedWords.join(" ")
    console.log(reversedSentence)
}
reverse("saya adalah aku")
console.log("------------------------")

// 2 FizzBuzz
const fizzBuzz = (total) => {
    for( let i = 1; i <= total; i++ ){
        if( i % 3 === 0 && i % 5 === 0 ){
            console.log("FizzBuzz")
        } else if ( i % 3 === 0 ){
            console.log("Fizz")
        } else if ( i % 5 === 0){
            console.log("Buzz")
        } else console.log(i)
    }
}

fizzBuzz(50)

