import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connection= async (URL)=>{
    try {
       
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
        
    } catch(error) {
        console.log('Error: ', error.message);
    }
}
export default connection;