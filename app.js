console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// const fs = require("fs");

// let user;
// fs.readFile("database/users.json", "utf-8",(err, data)=>{
//     if(err){
//         console.log("Error", err);
//     }   else{
//         user = JSON.parse(data);
// }       
// });



// MongoDB chaqirish
const db = require("./server").db();


// 1 - Krish code: Bosqichda expressga krib kelayotgan malunotlarga bogliq bolgan kodlarmz nomi.

app.use(express.static("public"));                                  // har qanday brauzerdan krib kelayotgan zaproslar uchun public folder ochiq, faqat public folder koroladi degan manoni anglatadi.
app.use(express.json());                                           // json formatdagi datalarni object xolatiga bizlarga ogrib beradi.
app.use(express.urlencoded( {extended: true}));                   //htmldan traditional request forum shakildan express qabul qlib oladi agar codni yozmasak ignore qiladi.





// 2 sessionga bogliq express codelari



// 3 views code
app.set("views", "views");
app.set("view engine", "ejs"); // htnml frontendni yasaymiz backandni ichida


// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja : new_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end("somenthing went wrong")
        } else {
            res.end("successfully added")
        }
    })
});
// app.get('/author', (req, res) => {
//     res.render("author",  { user: user });
// })
app.get("/", function (req ,res) { 
    console.log("user entered /")
    db.collection("plans")
    .find()
    .toArray((err,data) => {
        if(err) {
            console.log(err);
            res.end("somethning went wrong");
        } else {
            
            res.render("reja",{items: data});
        }
    })

});





module.exports = app;