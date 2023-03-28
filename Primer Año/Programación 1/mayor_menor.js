array = [ 29300, 2, 5 ]
let min = 9999999
let max = -9999999

// Encuentra el mayor
for (let x of array){
    if ( x > max){
        max=x
    }
}
// Encuentra el minimo
for (let x of array){
    if (x < min){
        min=x
    }
}
