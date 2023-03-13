import Person from "./person.js";
import { getConnection } from "../../data/database.data.js";


export default class User extends Person {
    constructor(name, email, password, type){
        super(name)
        this.email = email
        this.password = password
        this.type = type
        this.checkValidData()
    }
    checkValidData(){
        super.checkValidData()
        if(typeof this.email != 'string' && this.email.length > 55 && this.password != 'string' && this.password.length > 55
        && this.type != 'string' && this.type.length > 55){
            throw new Error("input not valid")
        }
    }
    createUser(){
        try{
            // getConnection().get('users').push({
            //     id: this.id,
            //     name: this.name,
            //     email: this.email,
            //     password: this.password,
            //     type: this.type 
            // }).write()

            let db = getConnection()
            db.data.users.push(this)
            db.write()
        } catch(e){
            console.log(`cannot save the user into the db`, e)
            throw e
        }
    }
}