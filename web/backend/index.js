const express = require('express');
const mongoose = require('mongoose');


const app = express()

const port = process.env.PORT || 5157;
require('dotenv').config()

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use('/', (req, res) =>{
        res.send("Book store server");
    })
   
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})