// 1
const data = [
    {
        name: "Joe",
        age: 23,
        job: "Artist",
        hoby: "Drawing",
    },
    {
        name: "Michael",
        age: 21,
        job: "Engineer",
        hoby: "Fishing",
    },
    {
        name: "Jenifer",
        age: 22,
        job: "Dentist",
        hoby: "Gardening",
    },
]

const header = ["number", "name", "age", "job", "hoby"]
const table = {
    header: header.shift(),
    data: data.map((value,idx) => {
        const res = {}
        header.forEach((i) => {
            res[i] = value[i]
        })
        return res
    })
}

console.log(table.data)

// 2
const arr = [
    "this random text.",
    "He drank life before spitting it out.",
    "There's a reason that roses have thorns.",
    "He waited for the stop sign to turn to a go sign.",
    "Karen believed all."
]
// expected output berupa string :
// He waited for the stop sign to turn to a go sign

// jawaban
const longestString = (arr) => {
    let res = ''
    for( let value of arr ){
        if( value.length > res.length ){
            res = value
        }
    }
    return res
};

console.log(longestString(arr))