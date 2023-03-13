import UserFactory from './userfactory.js';
import { getConnection } from "../../data/database.data.js"

export function getUsers(){
    try{
        let users = getConnection().get('users').value();
        let userData = users.map(u => u.user);
        return userData;
    } catch(e){
        console.log("error - couldn't get the users", e)
        throw e
    }
}

export function getUser(user_id){
    try{
        let user = getConnection().get('users').find({id: user_id}).value();
        if(user){
            return user
        } else {
            console.log(`error - couldn't get the user ${e}`)
            throw e
        }
    } catch(e) {
        console.log(e)
        throw e
    }
}

export async function createUser(name, email, password, type){
    try{
        let user_obj = await UserFactory.user(name, email, password, type)
        user_obj.createUser()
        return user_obj;
    } catch(e){
        console.log(`error - cannot create user ${e}`)
        throw e
    }
}