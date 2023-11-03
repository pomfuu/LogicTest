const halo = (nama) => {
    alert(`Halo, ${nama}`);
}

tampilkanPesan((nama) => {
    alert(`Halo, ${nama}`)
})

const students = [
    {
        name: "Alin",
        age: 22,
    },
    {
        name: "Kyra",
        age: 23,
    },
    {
        name: "Avip",
        age: 22,
    },
];

// console.log("mulai")
// students.map((student) => {
//     console.log(student.name)
// })


const printHi = () => {
    console.log('Hi')
}
const printHello = () => {
    console.log('Hello')
}
const printGoodbye = () => {
    console.log('Goodbye')
}

printHi()
// masuk callback queue dulu ( event loop ) baru masuk ke call stack
// async ada web API buat handle ( fetch, setinterval, settimeout )
// fetch buat nangkep API dari luar
setTimeout(printHello,10000)
printGoodbye()

const add = ( x, y, callback ) => {
    setTimeout(() => {
        callback( x + y );
    }, 2 );
};

// yang paling tepat
const add1 = ( x, y, callback ) => {
    setTimeout(() => {
        callback( x + y );
    }, 2000 );
};

const add2 = ( x, y, callback ) => {
    setTimeout(() => {
        callback( x + y, 2 );
    });
};

const add3 = ( x, y, callback ) => {
    setTimeout(() => {
        callback( x + y, 2000 );
    });
};

add(5, 5, result => {
    console.log(result);
});

add1(5, 5, result => {
    console.log(result);
});

add2(5, 5, (result, delay) => {
    console.log(result);
    console.log(`Delay: ${delay} ms`);
});

add3(5, 5, (result, delay) => {
    console.log(result);
    console.log(`Delay: ${delay} ms`);
});

const makeMeal = ( meal, callback ) => {
    alert(`preparing ${meal}`)
    callback()
}

makeMeal('lunch', () => {
    alert('Finished the meal')
})

// PROMISE
// handle async

// pending => fullfilled (berhasil dapet data) >< rejected

const datingPromise = new Promise(( resolve, reject ) => {
    // resolve('Ketemuan di bioskop')
    reject("Ga bisa")
})

datingPromise
    .then((data) => {
        console.log(data)
    }) 
    .catch((error) => {
        console.log(error)
    })

// dia bakalan jalanin error 1 ama success 4
// abis catch sesuatu dia masih bisa then sesuatu
function job(){
    return new Promise(function(resolve,reject){
        reject()
    })
}

let promise3 = job()

promise3
    .then(function(){
        console.log('s 1')
    })
    .then(function(){
        console.log('s 2')
    })
    .then(function(){
        console.log('s 3')
    })
    .catch(function(){
        console.log('e 1')
    })
    .then(function(){
        console.log('s 4')
    })

function job(state){
    return new Promise(function(resolve,reject){
        if(state){
            resolve('s')
        } else reject ('e')
    })
}

let promise2 = job(true)

promise2
    .then(function(data){
        console.log(data)
        return job(false)
    })
    .catch(function(error){
        console.log(error)
        return 'Error Caught'
    })
    .then(function(data){
        console.log(data)
        return job(true)
    })
    .catch(function(error){
        console.log(error)
    })

const coba = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Success")
    }, 2000 )
})

coba.then((value) => {
    console.log(value)
})


// kalo resolve kita ganti reject dia error uncaught
const cobaPromise = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("success")
        }, 2000 )
    })
}

const promise = cobaPromise()
promise.then(value => console.log(value))


// async awaot tu buat handle promise biar simpel
// gausah then then catch
// await bakal bikin codingan yg jalan
const asyncFunction = async () => {
    // dia await resolve si cobaPromise dlu baru ke selanjutnya
    const value = await cobaPromise()
    console.log(value)
}

asyncFunction()


const datePromise = () => {
    return new Promise((resolve,reject)=>{
        const waktu = 5000
        if(waktu < 5000){
            setTimeout(()=>{
                resolve('Jalan')
            }, waktu )
        } else {
            reject({status:false, code:400, message:"kelamaan date batal"})
        }
    })
}

const handleDateAsync = async () => {
    try {
        const value = await datePromise()
        console.log(value)
    }
    catch (error){
        console.log(error.message)
    }
}

handleDateAsync()


// Promise All
const delaySec = async (input) => {
    await new Promise((resolve)=>{
        setTimeout(resolve,1000)
    })
    return input
}

const run = async () => {
    // const result1 = await delaySec()
    // console.log(result1)

    // const result2 = await delaySec()
    // console.log(result2)

    // const result3 = await delaySec()
    // console.log(result3)

    // const result4 = await delaySec()
    // console.log(result4)

    // const result5 = await delaySec()
    // console.log(result5)

    const results = await Promise.all([delaySec(1), delaySec(2), delaySec(3)])
    console.log(results)
}

run()