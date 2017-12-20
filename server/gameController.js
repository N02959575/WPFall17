const express = require("express");
const game = require("./gameObject");

const router = express.Router();

router
    .get("/pictures", (req, res) => res.send(game.pictures))
    .get("/quote", (req, res) => res.send(game.getNextQuote()))
    .get("/quotes", (req, res) => res.send( Array(7).fill().map( () => game.getNextQuote() )))
    .get("/room", (req, res) => res.send(game.room))
    .get("/myRoom", (req, res) => res.send(game.myRoom))
    .post("/quotes", (req, res) => res.send( Array(7).fill().map( () => game.getNextQuote() )))
    .post("/room/picture",(req, res) => {
        game.room.picture = game.getNextPicture();
        game.room.quotes = [];
        res.status(201).send(game.room.picture);
    })
    .post("/player/myExercises",(req, res) => {
        game.room.myExercises.push(req.body);
        res.status(201).send(game.getNextQuote());
    })
    .post("/myRoom/quotes",(req, res) => {
        game.myRoom.quotes.push(req.body);
        res.status(201).send(game.getNextQuote());
    })
    .post("/room/quotes",(req, res) => {
        game.room.quotes.push(req.body);
        res.status(201).send(game.getNextQuote());
    })
    .post("/room/removedQuotes",(req) => {
        game.room.removedQuotes.push(req.body);
        res.status(201).send(game.removeQuote());
    })
    .post("/room/quotes/choose",(req, res) => {
        const chosen = game.room.quotes[req.body.i];
        chosen.chosen = true;
        game.room.dealer = (game.room.dealer + 1) % game.room.players.length;
        res.status(201).send(chosen);
    })
    .post("/room/players",(req, res) => {
        if(req.body.password == "password"){
            let player = game.room.players.find(x=> x.fbid == req.body.fbid);
            if(!player){
                player = { name: req.body.name, id: game.room.players.length, fbid: req.body.fbid, picture: req.body.picture };
                game.room.players.push(player);                
            }
            res.status(201).send(player);
        }else{
            res.status(403).send("Invalid Password");
        }
    })

    .post("/myRoom/players",(req, res) => {
        if(req.body.password == "password"){
            let player = game.myRoom.players.find(x=> x.fbid == req.body.fbid);
            if(!player){
                player = { name: req.body.name, id: game.myRoom.players.length, fbid: req.body.fbid, picture: req.body.picture };
                game.myRoom.players.push(player);                
            }
            res.status(201).send(player);
        }else{
            res.status(403).send("Invalid Password");
        }
    })


module.exports.router = router;