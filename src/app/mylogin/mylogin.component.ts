import { Component, OnInit } from '@angular/core';
import { GameService } from '../models/game.service';
import { Player } from '../models/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mylogin',
  templateUrl: './mylogin.component.html',
  styleUrls: ['./mylogin.component.scss']
})
export class MyloginComponent implements OnInit {

  name:string;
  password: string;


  constructor(private game: GameService, private router: Router) { }

  ngOnInit() {
  }

  mylogin(){
      this.game.login(this.name, this.password)
  }
  myloginFB(){
      this.game.loginFB();
  }


}
