const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const port=3000;

const items=["CodeForces","KickStart archive","CSES Problem set","Interview bit"];

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  var currentDay=new Date();
  var options={
    weekday:"long",
    month:"long",
    day:"numeric"
  }

  var day=currentDay.toLocaleDateString("en-US",options);

  res.render("list",{typeOfDay:day,newListItems:items});
});

app.post("/",function(req,res){
  var item=req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen(port,function(){
  console.log("Server is running on port 3000");
});
