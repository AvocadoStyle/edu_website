import User from '../model/users/user.js'
import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { getConnection } from '../data/database.data.js'
dotenv.config();
/**
 * check if it's auth
 * @param token 
 * @returns 
 */
export const isAuth = (token) => {
    if(token){
        return true;
    } else {
        return false;
    }
}
/**
 * check Admin permissions
 * @param token 
 */

/**
 * check if it's empty or not utility
 * @param messyToken the entire token
 * @returns true if empty and false if not empty
 */
const __isEmpty = (messyToken) => {
    if(messyToken){
        return false;
    } else {
        return true;
    }
}
/**
 * gets the token without the header
 * @param messyToken 
 * @returns token without header start
 */
export const getToken = (messyToken) => {
    if(isAuth(messyToken)){
        if(__isEmpty(messyToken)){
            return false;
        }
        const split_token = messyToken?.split(" ");
        if(split_token[0] != 'Bearer')
        return split_token[0];
        else if(split_token[0] == 'Bearer')
        return split_token[1];
        else
        return false;
    }
    return false;
}

export const getAuthItems = (token, user_privilege) => {
    if(token = getToken(token)){
        const validKeys = ['id' ,'name', 'type', 'iat', 'password', 'email'];
        
        let jwtSecret = process.env.JWT_SECRET;


        return jwt.verify(token, jwtSecret, (err, data) =>{
            if(err){
                return false;
            } else if(Object.keys(data).every(key => validKeys.includes(key))){ 
                let db = getConnection()
                let users_db = db.data.users
                let user_existance = users_db.find(user => {
                            if(user.id == data.id &&
                            user.name == data.name &&
                            user.type == data.type){
                                return user
                            }
                })
                if(!user_existance)
                    return false
                let user_auth = User.authorization_types[user_existance.type]
                if(user_auth >= User.authorization_types[user_privilege])
                    return true
                return false
        }
        return false
    })    
    }
    return false
}

// export const isAdminAuth = async (token) => {
//     let adminPer;
//     adminPer = await getAuthItems(token);
//     if(!adminPer){
//         return false;
//     }
//     return adminPer['isAdmin'];
// }

export const isUserAllowed = (token, user_privilege='regular') =>{
    // if('admin')
    //     return await isAdminAuth(token, user_privilege);
    return getAuthItems(token, user_privilege);
}

