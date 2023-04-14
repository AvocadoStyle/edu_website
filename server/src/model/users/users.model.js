import UserFactory from './userfactory.js';
import { getConnection } from "../../data/database.data.js"
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express'
dotenv.config()
export function getUsers(){
    try{
        let users = getConnection().data.users
        // let userData = users.map(u => u.user);
        return users;
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

export async function loginUser(name, email, password){
    try{
        let user_obj = await UserFactory.user(name, email, password)
        let user_existance_credentials = await user_obj.isUserExistsInDB()
        
        let jwtSecret = process.env.JWT_SECRET;
        if(user_existance_credentials){
          const token = jwt.sign(
            { id: user_existance_credentials.id,
              name: user_existance_credentials.name,
              email: user_existance_credentials.email,
              password: user_existance_credentials.password,
              type: user_existance_credentials.type}, jwtSecret);
          return token
        } else {
          return null;
        }
    } catch(e){
        console.log(`error - cannot login user ${e}`)
        throw e
    }
}