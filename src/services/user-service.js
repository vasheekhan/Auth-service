const UserRepository=require("../repository/user-repository.js")
const {JWT_KEY}=require("../config/serverConfig.js")
const jwt=require("jsonwebtoken");
const validator=require("validator")
const bcrypt=require("bcrypt");
const { response } = require("express");
class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }
    async create(data){
        try {
            console.log("data"+data.password);
           const  isEmailValid=validator.isEmail(data.email);
           const  isPasswordValid=validator.isStrongPassword(data.password);
           if(!isEmailValid || !isPasswordValid){
            throw new Error("invalid email and password");
           }
const user=await this.userRepository.create(data);
            return {
                id:user.id,
                email:user.email,
                message:"user created successfully"
            }
        } catch (error) {
           console.log("something went wrong in user service");
           throw error; 
        }
    }
    async signIn(email,plainPassword){
try {
    const user= await this.userRepository.getByEmail(email);
    if(!user){
        throw new Error("invalid credential")
    }
    const passwordMatch=this.checkPassword(plainPassword,user.password);
    if(!passwordMatch){
        console.log("password does not match");
        throw {error:"Incorrect password"}
    }
    const newJwt=this.createToken({email:user.email,id:user.id});
    return newJwt;
} catch (error) {
    console.log("something went wrong in user service");
    throw error; 
}
    }
    async isAuthenticated(token){
try {
    const isTokenVerified=this.verifyToken(token);
    if(!isTokenVerified){
        throw {error}
    }
    const user=await this.userRepository.getById(isTokenVerified.id);
    if(!user){
        throw {error:"no user with the corressponding token exists"}
    }
    return user.id;
} catch (error) {
  console.log("something went wrong in the auth process");
  throw error;  
}
    }
     createToken(user){
try {
    const result=jwt.sign(user,JWT_KEY,{expiresIn:"1h"});
    return result;
} catch (error) {
    console.log("something went wrong in token creation")
    throw error;
}
    }
    verifyToken(token){
        try {
            const response=jwt.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("something went wrong in token verification")
            throw error;
        }
            }
    checkPassword(userInputPlainPassword,encryptedPassword){
               try {
              const result=  bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
              return result;
               } catch (error) {
                console.log("something went wrong in password comparison");
                throw error;
               }
            }
 
}
module.exports=UserService;