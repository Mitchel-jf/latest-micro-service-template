/*
Uncomment the code below to connect to the database
Also import db.js into the index.js file
*/
// import ErrorHook from './errors/errorHook';
// import mongoose from 'mongoose'
// require('dotenv').config()
// let MongoString = process.env.NODE_ENV !== 'production' ? 'mongodb://' : 'mongodb+srv://';

// export default async () => {
//     try {
//         mongoose.connect(`${MongoString}${process.env.MONGO_SERVER}/${process.env.MONGO_DATABASE}`, {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false
//         });
//         console.log('Connected to the database successfully')
//     } catch (error) {
//         ErrorHook({ error, message: 'Error connecting to the database', path: __filename });
//     }
// }