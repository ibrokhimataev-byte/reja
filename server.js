console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/users.json", "utf-8",(err, data)=>{
    if(err){
        console.log("Error", err);
    }   else{
        user = JSON.parse(data);
}       
});

// 1 - Krish code: Bosqichda expressga krib kelayotgan malunotlarga bogliq bolgan kodlarmz nomi.

app.use(express.static("public"));                                  // har qanday brauzerdan krib kelayotgan zaproslar uchun public folder ochiq, faqat public folder koroladi degan manoni anglatadi.
app.use(express.json());                                           // json formatdagi datalarni object xolatiga bizlarga ogrib beradi.
app.use(express.urlencoded( {extended: true}));                   //htmldan traditional request forum shakildan express qabul qlib oladi agar codni yozmasak ignore qiladi.





// 2 sessionga bogliq express codelari



// 3 views code
app.set("views", "views");
app.set("view engine", "ejs"); // htnml frontendni yasaymiz backandni ichida


// 4 Routing code
app.post("/create-item", function(req, res) {
    console.log(req.body);
    res.json( {test: "success"} );
});

app.get("/author", (req, res) => {
    res.render("author", {user: user} );
});

app.get("/", function(req, res){
    res.render("harid");
});




const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on port: ${PORT}`);
});