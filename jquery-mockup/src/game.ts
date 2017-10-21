import * as $ from 'jquery';

export class Exercise{
    text: string
}

export class User {
    name: string = "Linkle";
    exercise:  Exercise[] = [];
    completed: number = 0;
    drawExercise(){
        $("#my-exercises").html(this.exercise.map(x=> `<li class="list-group-item">${x.text}</li>`).join(""))
    }
}

export class Room {
    players: User[] = [new User(), new User()];
    picture: string = "http://www.zelda.com/assets/images/centerstage/hyrule-warriors-legends/hyrule-warriors-legends-characters.png";
    exercise: Exercise[] = [];
    drawPicture(){
        $("#picture").attr("src", this.picture);
    }
    drawExercise(){
        $("#completed-exercises").html(this.exercise.map(x=> `<li class="list-group-item">${x.text}</li>`).join(""))
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
        {text: "When you wake up and want to destroy the world!"},
        {text: "When you just can't give less of a fudge"},
        {text: "I always win at losing"},
        {text: "Nice Approach"}
    ];
}

//controller

const game = new Game();
const room = new Room();
const me = new User();

room.drawExercise();

me.exercise = game.exercise;
me.drawExercise();