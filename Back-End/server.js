const express = require('express')
const cors = require('cors')

//Routes
const nameRouter = require("./routes/index.js")
const app = express()

app.use(cors())
app.use(express.json())

//Routage 
app.use("/",nameRouter)

app.listen(3000);