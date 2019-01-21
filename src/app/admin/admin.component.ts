import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(private matchService:MatchService,private router:Router,private route:ActivatedRoute) { } 
  
  ngOnInit() {
    switch(this.matchService.getMatchstate())
    {
      case  this.matchService.MATCH_STATE_NOT_STARTED:
      this.router.navigate(['newmatch'], { relativeTo:this.route });
      break;
      case this.matchService.MATCH_STATE_MATCH_DEFINED:
      this.router.navigate(['defineteams'], { relativeTo:this.route });
      break;
      case this.matchService.MATCH_STATE_TEAMS_DEFINED:
      this.router.navigate(['inngings'], { relativeTo: this.route });
      break;
    }
    
  }
  
}
