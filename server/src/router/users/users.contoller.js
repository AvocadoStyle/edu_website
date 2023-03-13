import { getUsers, getUser, createUser } from '../../model/users/users.model.js'
import { getConnection } from "../../data/database.data.js"

export function httpGetUsers(req, res){

}
 

export function httpGetUser(req, res){

}

export function httpUpdateUser(req, res){

}

export function httpDeleteUser(req, res){

}

export async function httpCreateUser(req, res){
    try{
        let { name, email, password, type} = req.body
        let user_obj = await createUser(name, email, password, type)
        return res.status(200).json(user_obj)
    } catch(e){
        return res.status(400).json(e)
    }
}