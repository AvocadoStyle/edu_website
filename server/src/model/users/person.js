import { nanoid } from "nanoid"
import { getConnection } from "../../data/database.data.js"

export default class Person {
    constructor(name){
        this.id = this.createId()
        this.name = name
        // this.checkValidData()
    }
    checkValidData(){
        if(typeof this.name != 'string' && this.name.length > 55){
            throw new Error("input not valid")
        }
    }
    createId(){
        let user_id = nanoid()
        let db = getConnection()
        let users_db = db.data.users
        while(users_db.find(user => user.id == user_id)){
            user_id = nanoid()
        }
        return user_id
    }
}

