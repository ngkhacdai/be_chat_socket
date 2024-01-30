const userSchema = require('../models/user.model')


exports.search = async ({ nameSearch }) => {
    try {
        const user = await userSchema.find({ username: { $regex: nameSearch } })
        if (!user) {
            return {
                message: 'Không tìm thấy người nào có tên như vậy',
            }
        }
        return {
            user
        }
    } catch (error) {
        console.log(error);
    }
}
