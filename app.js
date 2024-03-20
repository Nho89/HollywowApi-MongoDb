import 'dotenv/config';
import {PORT} from "./config.js"
import {connect} from "./database/connection_db.js";
import Poster from "./models/PosterModel.js"
import express from  "express";
import PosterRouter from "./routes/PosterRouter.js";
import cors from 'cors';

export const app = express();

app.use(express.json());
app.use('/api' , PosterRouter);
app.use(cors());

connect();

 app.listen(PORT, ()=> {
    console.log(`tu app esta lista por http://localhost:${PORT}`)
})
