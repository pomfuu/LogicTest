// 1
function wordFormatter(word){
    // pisah kalimat dengan fungsi split
    let kalimat = word.split(" ")
    // simpan resultnya terlebih dahulu
    let res = []
    for( let value of kalimat ){
        //
        value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        res.push(value)
    }
    return res.join(" ");
}

console.log(wordFormatter("SeLamAT PAGi semua halOo"));
console.log(wordFormatter("HaRI iNi adALAh HarI LibUR"));

// 2
function fibonacci(n){
    let a = 0;
    let b = 1;
    const seq = []
    for(let i=0; i<=n; i++){
        seq.push(a);
        // buat init val (yang index2) selanjutnya itu dari 2 index sebelumnya ditambah
        const nextval = a + b;
        a = b;
        b = nextval;
    }
    return console.log(seq);
}

fibonacci(20)