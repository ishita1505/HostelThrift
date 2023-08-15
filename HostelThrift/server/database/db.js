import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-adooyjx-shard-00-00.zv6o164.mongodb.net:27017,ac-adooyjx-shard-00-01.zv6o164.mongodb.net:27017,ac-adooyjx-shard-00-02.zv6o164.mongodb.net:27017/?ssl=true&replicaSet=atlas-x90xll-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;