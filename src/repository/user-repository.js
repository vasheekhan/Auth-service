const {User}=require("../models/index.js")
class UserRepository{
    async create(data){
        try {
            const user=await User.create(data);
            return user
        } catch (error) {
            console.log("something went wrong in user repo");
            throw error;
        }
    }
    async destroy(userId){
        try {
            await User.destroy({
                where:{
                    id:userId
                }
            })
            return true;
        } catch (error) {
            console.log("something went wrong in user repo");
            throw error;
        }
    }
    async getById(userId){
        try {
            const user=await User.findByPk(userId,{
                attributes:["email","id"]
            });
            return user;
        } catch (error) {
            console.log("something went wrong on repo layer");
            throw error;
        }

    }
}
module.exports=UserRepository;