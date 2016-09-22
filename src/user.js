export default class User {
    constructor (name) {
        this.name = name;
    }

    greets() {
        console.log(`Hello! Mi name is ${this.name}`);
    }
}