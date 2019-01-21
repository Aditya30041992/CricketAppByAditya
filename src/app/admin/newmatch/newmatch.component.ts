import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newmatch',
  templateUrl: './newmatch.component.html',
  styleUrls: ['./newmatch.component.css']
})
export class NewmatchComponent implements OnInit {
  teamOneName:string;
  teamTwoName:string;
  tossWinby:string;
  decision:number;
  numberOfOvers:number ;

  constructor(private matchService:MatchService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  onDefineTeamsClick() {
    if((this.tossWinby==this.teamOneName) && (this.decision==1) ){
      this.matchService.getMatch().setTeamName(this.teamOneName,this.teamTwoName);
    }
    if((this.tossWinby==this.teamTwoName) && (this.decision==1)) {
      this.matchService.getMatch().setTeamName(this.teamTwoName,this.teamOneName);
    }
    if((this.tossWinby==this.teamOneName) && (this.decision==2) ){
      this.matchService.getMatch().setTeamName(this.teamTwoName,this.teamOneName);
    }
    if((this.tossWinby==this.teamTwoName) && (this.decision==2)) {
      this.matchService.getMatch().setTeamName(this.teamOneName,this.teamTwoName);
    }

    this.matchService.getMatch().setTossWinbyTeam(this.tossWinby,this.decision);
    this.matchService.getMatch().setNumbersOfOvers(this.numberOfOvers);
    this.matchService.setMatchState();
    this.router.navigate(['/admin/defineteams'], { relativeTo:this.route });
    
  }
  
  
  onClearbuttonClick(){
    this.teamOneName=null;
    this.teamTwoName=null;
    this.tossWinby=null;
    this.decision = null;
    this.numberOfOvers = null;
  }


}
