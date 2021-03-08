import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const { DATABASE_URL, PORT } = process.env;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log('SUCCESSFULLY CONNECTED TO THE DATABASE');
    } catch (error) {
        console.log('ERROR WHILE TRYING TO CONNECT TO DATABASE...');
        process.exit();
    }
}

const connectToPort = (application) => {
    application.listen(PORT, () => {
        console.log("SERVER IS RUNNING ON PORT: " + PORT);
    });
}

export default {
    connectToDatabase,
    connectToPort
}