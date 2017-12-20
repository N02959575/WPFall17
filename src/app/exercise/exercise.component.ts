import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Room, Player, Quote } from '../models/game';
import { GameService } from '../models/game.service';
import { Router } from '@angular/router';
import { Image } from '../widgets/picture-chooser/picture-chooser.component'
import { Text } from '@angular/compiler';

declare const FB: any;

const EXERCISES = [
  {text: "Jogging"},
  {text: "Arms"},
  {text: "Legs"},
  {text: "Rowing"},
  {text: "Swimming"},
  {text: "Walking"},
  {text: "Push Ups"},
  {text: "Sit Ups"},
  {text: "Jumping"}
];

const COMPLETEDEXERCISES = [{}];

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})

export class ExerciseComponent implements OnInit {

  room = new Room();
  me: Player;
  exercises = EXERCISES;
  completedExercises = COMPLETEDEXERCISES;
  
  constructor(private http: Http, public game: GameService, private router: Router) { }

  ngOnInit() {
    this.http.get(this.game.apiRoot + "/game/quotes").subscribe( data =>{
      this.me.quotes = data.json();
    });
    this.me = this.game.me;
    setInterval(()=> this.update(), 1000)
}

update(){
    this.http.get(this.game.apiRoot + "/game/room").subscribe( data =>{
        this.room = data.json();
    });
}


submitExercise(e: MouseEvent, ex: string, i: number){
  e.preventDefault();
  this.completedExercises.push(ex);            
}

removeExercise(e: MouseEvent, i: number){
  this.completedExercises.splice(i, 1);
  //this.room.quotes.pop;            

} 



}
