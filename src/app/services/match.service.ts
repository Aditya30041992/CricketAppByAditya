import { Injectable } from '@angular/core';
import { Match } from '../models/match';
@Injectable({
  providedIn: 'root'
})
export class MatchService{
  
  readonly MATCH_STATE_NOT_STARTED        = 0;
  readonly MATCH_STATE_MATCH_DEFINED      = 1;
  readonly MATCH_STATE_TEAMS_DEFINED      = 2;
  readonly MATCH_STATE_INNING1_STARTED    = 3;
  readonly MATCH_STATE_INNING1_END        = 4;
  readonly MATCH_STATE_INNING2_STARTED    = 5;
  readonly MATCH_STATE_INNING2_END        = 6;
  readonly MATCH_STATE_MATCH_FINISHED     = 7;
  
  private match:Match
  
  private current_Match_State:number;
  constructor() {
    this.match = new Match();
    this.current_Match_State = this.MATCH_STATE_NOT_STARTED; 
  }
  getMatchstate():number {
    return this.current_Match_State; 
    
  }
  setMatchState() {
    if(this.current_Match_State < this.MATCH_STATE_MATCH_FINISHED){
      this.current_Match_State++;
      return true;
    }
    return false;
  }
  getMatch(){
    return this.match;
  }
  
  
}