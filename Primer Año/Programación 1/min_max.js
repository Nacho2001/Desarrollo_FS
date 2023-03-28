let min = 9999999
let max = -9999999

let array = [2,4,6,2,7,1,9]

array.forEach(element => {
    if (element < $min) {
        min=element
    }
});

document.write(min)