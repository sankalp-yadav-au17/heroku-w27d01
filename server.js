const express = require("express")
const app = express()

app.use(express.static('projects'))


app.listen(3000,()=>{
    console.log("hi");
})
