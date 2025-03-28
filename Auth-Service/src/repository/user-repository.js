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
}
module.exports=UserRepository;