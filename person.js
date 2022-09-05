class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greetings(){
        console.log(`Hey ${this.name}, I see you are ${this.age}`)
    }
}

module.exports = Person