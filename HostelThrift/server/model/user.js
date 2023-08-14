import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

//which collection/database pr ye schema lagani hai?
//mongoose se model banaya and  collection name is user
//this schema will be applied on this user 
const user = mongoose.model('user', userSchema);

export default user;