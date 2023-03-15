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
            let db = getConnection()
            db.data.users.push(this)
            db.write()
        } catch(e){
            console.log(`cannot save the user into the db`, e)
            throw e
        }
    }
    isUserExistsInDB(){
        try{
            let db = getConnection()
            let users_db = db.data.users
            let user_existance = users_db.find(user => {
                        if(user.name == this.name &&
                        user.email == this.email &&
                        user.password == this.password){
                            return user
                        }
            })
            if(user_existance && user_existance.type != 'regular') {
                this.type = user_existance.type
            }
            return user_existance
        } catch(e){
            console.log(`user not exists ${e}`)
            throw e
        }
    }
}