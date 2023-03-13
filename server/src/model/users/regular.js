import User from "./user.js";

export default class Regular extends User{
    constructor(name, email, password, type){
        super(name, email, password, type)
        // this.type = type
    }
}