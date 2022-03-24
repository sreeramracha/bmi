const express=require("express");
const bodyParser=require("body-parser")
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
});

app.post("/",function(req,res){
    var weight=Number(req.body.weight);
    var height=Number(req.body.height);
    var bmi=weight/(height*2);
    if (bmi<=18.5){
        res.send("Your BMI is "+bmi+" i.e Underweight");    
    }
    else if (bmi<=24.9 && bmi>18.5){
        res.send("Your BMI is "+bmi+" i.e Normal weight");    
    }
    else if (bmi>=25 & bmi<=29.9){
        res.send("Your BMI is "+bmi+" i.e Overweight");    
    }
    else{
        res.send("Your BMI is "+bmi+" i.e Obesity");
    }

});

app.listen(5000,function(){
    console.log("Server started at 5000");
});