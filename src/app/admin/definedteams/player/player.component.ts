import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;
  @Input() index: number;

  constructor() {}
  
  setPlayerName(event){
     const element:HTMLInputElement = event.target;
     this.player.setPlayerName(element.value);
   }

  ngOnInit() {
  }

}
