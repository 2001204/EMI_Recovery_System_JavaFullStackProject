import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
const app = express();

app.listen(8081, ()=> {
    console.log("Connected to server")

})