import express from 'express'
import mongoose from 'mongoose';
import {shortUrl, getOriginalUrl} from './controllers/url.js'
import { config } from 'dotenv'

const app = express();
app.use(express.urlencoded({extended:true}));

config({path:".env"})

mongoose.connect(process.env.MONGO_URL,
    {
        dbName: "NodeJs_Course",
    }
).then(()=>console.log("MongoDb connected...!")).catch((err)=>console.log(err))

app.get('/', (req,res)=>{
    res.render('index.ejs', {shortUrl : null})
})

app.post('/short', shortUrl);

//dynamic routing
app.get("/:shortCode", getOriginalUrl)

const port = process.env.PORT;
app.listen(port, ()=>console.log(`server is running on port ${port}`))