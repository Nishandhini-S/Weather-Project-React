const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());

app.get("/weather/:type/:value", async (req,res)=>{

  const {type,value} = req.params;

  try{
    const response = await fetch(
      `https://indianapi.in/weather-api/${type}/${value}`
    );

    const data = await response.json();
    res.json(data);

  }catch(err){
    res.status(500).json({error:"API Failed"});
  }
});

app.listen(5000,()=>{
  console.log("Proxy Server Running on Port 5000");
});