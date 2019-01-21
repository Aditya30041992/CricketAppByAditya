import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { Player } from 'src/app/models/player';



@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  
  constructor(public matchService:MatchService) { 
    console.log(matchService.getMatch().commentryDetailsArray.slice(0,1));
    console.log(matchService.getMatch());
    console.log(matchService.getMatch().getRundetailsOfPlayer1());
    console.log(matchService.getMatch().getTeam1().getPlayerNames().slice(0,1));
    
    
  }
  
  ngOnInit() {
  }
  
}
