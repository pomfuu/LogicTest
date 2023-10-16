function hipHura (bilangan) {
    let i = 1;
    while(i <= bilangan){
        if (i%3===0 && i%5===0){
            console.log("Hip Hura");
        }
        else if(i%3===0){
            console.log("Hip");
        }
        else if(i%5===0){
            console.log("Hura");
        }
        else console.log(i);
        i++;
    }
    console.log("done");
    return;
}

// hilangin undefined
// console.log(hipHura(15))
hipHura(15);