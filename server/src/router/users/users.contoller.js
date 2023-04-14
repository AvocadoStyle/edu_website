import { getUsers, getUser, createUser, loginUser } from '../../model/users/users.model.js'
import { getConnection } from "../../data/database.data.js"

export function httpGetUsers(req, res){
    try{
        let users = getUsers()
        return res.status(200).json(users)
    } catch(e){
        return res.status(400).json({'message': 'error occured'})
    }
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

export async function httpLoginUser(req, res){
    try{
        let { name, email, password } = req.body
        let token = await loginUser(name, email, password)       
        if(token){
            return res.status(200).json({'token': token})
        }
        else{
            return res.status(401).json({'message': 'wrong login credentials'})
        }
    } catch(e){
        return res.status(400).json({'name': e.name,
                            'error': e.message})
    }

}