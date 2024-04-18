class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}abhishek`
    }

    set password(value){
        this._password = value
    }
}

const abhishek = new User("a@abhi.ai", "abc")
console.log(abhishek.email);