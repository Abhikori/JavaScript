const user = {
    username: "abhishek",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function userfunction(){
//     let username = "abhishek"
//     console.log(this.username);
// }

// userfunction()

// const userfunction = function () {
//     let username = "abhishek"
//     console.log(this.username);
// }

const userfunction =  () => {
    let username = "abhishek"
    console.log(this);
}


// userfunction()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "abhishek"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()