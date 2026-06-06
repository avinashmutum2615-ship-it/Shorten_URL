import express from 'express'
import mongoose from 'mongoose';
import {shortUrl, getOriginalUrl} from './controllers/url.js'

const app = express();
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://kamandomutum2615_db_user:N80k902lzmbxxPzn@cluster0.rqmefon.mongodb.net/",
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

const port = 3000;
app.listen(port, ()=>console.log(`server is running on port ${port}`))