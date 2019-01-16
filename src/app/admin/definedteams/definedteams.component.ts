import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-definedteams',
  templateUrl: './definedteams.component.html',
  styleUrls: ['./definedteams.component.css']
})
export class DefinedteamsComponent implements OnInit {

  // private nameOfTeam1:string;
  // private nameOfTeam2:string;
  constructor(private matchService:MatchService, private router: Router, private route: ActivatedRoute ) { 

  // this.nameOfTeam1=matchService.getMatch().getTeam1Name();
  // this.nameOfTeam2=matchService.getMatch().getTeam2Name();
    
  }

  ngOnInit() {
  }

  onStartButtonClick(){
    if(this.matchService.getMatch().getTeam1().isTeamComplete()){
      this.matchService.setMatchState();
      this.router.navigate(['/admin/innings'], { relativeTo:this.route });
    }
  }
}
