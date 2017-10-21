import * as $ from 'jquery';

export class Quote{
    text: string
}

export class Player {
    name: string = "Linkle";
    quotes:  Quote[] = [];
    score: number = 0;
    drawQuotes(){
        $("#my-quotes").html(this.quotes.map(x=> `<li class="list-group-item">${x.text}</li>`).join(""))
    }
}

export class Room {
    players: Player[] = [new Player(), new Player()];
    dealer: Player;
    picture: string = "http://www.zelda.com/assets/images/centerstage/hyrule-warriors-legends/hyrule-warriors-legends-characters.png";
    quotes: Quote[] = [];
    drawPicture(){
        $("#picture").attr("src", this.picture);
    }
    drawQuotes(){
        $("#played-quotes").html(this.quotes.map(x=> `<li class="list-group-item">${x.text}</li>`).join(""))
    }
    drawPlayers(){
        $("#players").html(this.players.map(x=> `<li class="list-group-item">${x.name}</li>`).join(""))
    }
}

export class Game {
    players: Player[] = [];
    pictures: string[] = [
        "http://vignette1.wikia.nocookie.net/vsbattles/images/6/6a/The-Legend-Of-Zelda-Aniversary-HD.jpg/revision/latest?cb=20151220021950",
        "http://www.dan-dare.org/FreeFun/Images/ZeldaWallpaper800.jpg",
        "http://www.zelda.com/assets/images/centerstage/hyrule-warriors-legends/hyrule-warriors-legends-characters.png"
    ];
    quotes: Quote[] = [
        {text: "When you wake up and want to destroy the world!"},
        {text: "When you just can't give less of a fudge"},
        {text: "I always win at losing"},
        {text: "Nice Approach"}
    ];
}

//controller

const game = new Game();
const room = new Room();
const me = new Player();

let i = 0;
room.picture = game.pictures[i];
room.drawPicture();
room.drawQuotes();
room.drawPlayers();

me.quotes = game.quotes;
me.drawQuotes();

$("#cmd-flip").click(function(e){
    e.preventDefault();
    i++;
    room.picture = game.pictures[i];
    room.drawPicture();
})