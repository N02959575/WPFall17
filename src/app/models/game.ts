import * as $ from 'jquery';

export class Exercise{
    text: string
}

export class User {
    name: string = "Linkle";
    exercise:  Exercise[] = [];
    completed: number = 0;
    drawExercise(){
        $("#my-exercises").html(this.exercise.map(x=> `<a href="#" class="list-group-item list-group-item-action">${x.text}</a>`).join(""))
    }
}

export class exerciseRoom {
    players: User[] = [new User(), new User()];
    picture: string = "http://www.zelda.com/assets/images/centerstage/hyrule-warriors-legends/hyrule-warriors-legends-characters.png";
    exercise: Exercise[] = [
        {text: "Sit ups"},
        {text: "Push ups"}
    ];
    drawPicture(){
        $("#picture").attr("src", this.picture);
    }
    drawExercise(){
        $("#completed-exercises").html(this.exercise.map(x=> `<li class="list-group-item">${x.text}</li>`).join(""))
    }

    addExercise(ex:string){
        var exer;
        exer = new Exercise();
        exer.text = ex;
        this.exercise.push(exer);
        room.drawExercise();

    }
}

export class Game {
    user: User[] = [];
    pictures: string[] = [
        "http://vignette1.wikia.nocookie.net/vsbattles/images/6/6a/The-Legend-Of-Zelda-Aniversary-HD.jpg/revision/latest?cb=20151220021950",
        "http://www.dan-dare.org/FreeFun/Images/ZeldaWallpaper800.jpg",
        "http://www.zelda.com/assets/images/centerstage/hyrule-warriors-legends/hyrule-warriors-legends-characters.png"
    ];
    exercise: Exercise[] = [
        {text: "Jogging"},
        {text: "Arms"},
        {text: "Legs"},
        {text: "Weights"}
    ];
}

export class Quote {
    text: string;
    chosen: boolean = false;
    player: string;
}

export class Player {
    id: number;
    name: string = "Linkle";
    quotes: Quote[] = [];
    score: number = 0;
    myExercises: Quote[] = []; 
    exercise:  Exercise[] = [];
    drawExercise(){
        $("#my-exercises").html(this.exercise.map(x=> `<a href="#" class="list-group-item list-group-item-action">${x.text}</a>`).join(""))
    }
}

export class Room {
    players: Player[] = [new Player(), new Player()];
    dealer: number;
    picture: string;
    quotes: Quote[] = [];
    removedQuotes: Quote[] = [];
    myExercises: Quote[] = []; 
    exercise: Quote[] = [];



    drawExercise(){
        $("#completed-exercises").html(this.exercise.map(x=> `<li class="list-group-item">${x.text}</li>`).join(""))
    }

    addExercise(ex:string){
        var exer;
        exer = new Quote();
        exer.text = ex;
        this.exercise.push(exer);
        room.drawExercise();

    }
}

//controller

const game = new Game();
const room = new exerciseRoom();
const me = new User();

room.drawExercise();
//room.addExercise("holamundo");
//room.drawExercise();

me.exercise = game.exercise;
me.drawExercise();

//TODO When a selection is clicked get the index
// obtain the object from that index and get the "text" exercise[0].text
//call Room.addExercise(exercise[0].text) to add the new object to the array
// redraw the completed exercise list

$("#my-exercises a").click(function(e){
    e.preventDefault();
    room.addExercise($(this).text());
    room.drawExercise();
})