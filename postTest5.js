// 1
function likes(names) {
    if(names.length === 0){
        return "no one like this"
    }
    else if(names.length === 1){
        return names[0] + " like this"
    }
    else if(names.length === 2){
        return names[0] + ' and ' + names[1] + " like this"
    }     
    else if(names.length === 3){
        return names[0] + ', ' + names[1] + ' and ' + names[2] + " like this" 
    }
    else {
        const other = names.length - 2
        return names[0] + ', ' + names[1] + ' and ' + other + " others like this"
    }
}
    
    console.log(likes([]));
    console.log(likes(["Peter"]));
    console.log(likes(["Jacob", "Alex"]));
    console.log(likes(["Max", "John", "Mark"]));
    console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// 2
function unitTest(input, output) {
    console.log(output ,input === output)
 }
 
 
 function reverse(str) {
    let result = '';
    for(let value of str){
        result = value + result
    }
    // return console.log(result[0].toUpperCase() + result.slice(1) + '.')
    return result[0].toUpperCase() + result.slice(1) + '.'
 }
 
// reverse("drow olleh"), "Hello word."
// reverse("eko atad"), "Data oke."
// reverse("gnitset tinu"), "Unit testing."

unitTest(reverse("drow olleh"), "Hello word.");
unitTest(reverse("eko atad"), "Data oke.");
unitTest(reverse("gnitset tinu"), "Unit testing.");