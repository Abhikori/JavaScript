const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const product = {
    name: 'javascript',
    price: 250,
    isAvailable: true,

    orderproduct: function(){
        console.log("javascript order");
    }
}

console.log(Object.getOwnPropertyDescriptor(product, "name"));

Object.defineProperty(product, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(product, "name"));

for (let [key, value] of Object.entries(product)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}