class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const abhi = new Teacher("abhi", "abhi@teacher.com", "123")

abhi.logMe()
const abhishek = new User("abhishek")

abhishek.logMe()

console.log(abhi instanceof User);