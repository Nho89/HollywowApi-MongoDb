import mongoose from 'mongoose';


export const connect = async () => {
    const DB_URI = process.env.DB_URI;
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected");
    } catch (error) {
        console.error(error);
        console.log('Error connecting to database');
    }
};
export default connect;

