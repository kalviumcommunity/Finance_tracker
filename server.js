const express = require("express"); 

const app = express(); 
const port = 5000; 

app.get("/ping", (req, res) => {
    res.send("First Page of this server")
})

app.listen(port, ()=>{
    console.log(`Server running on Port: ${port}`)
})