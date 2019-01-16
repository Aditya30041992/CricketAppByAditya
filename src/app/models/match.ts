import { Team } from './team';

export class Match{

    readonly decision_batting=1;
    readonly decision_bowling=2;

   private team1Name:string;
   private team2Name:string;
   private team1:Team;
   private team2:Team;
   private tossWinby:string;
   private decision:number;
   private numberOfOvers:number;


setTeamName(team1Name:string,team2Name:string){
    this.team1Name=team1Name;
    this.team2Name=team2Name;
    this.team1= new Team();
    this.team2=new Team();
    console.log(this.team1Name);
    console.log(this.team2Name);

}

setTossWinbyTeam(teamName:string,decision:number){
    this.tossWinby=teamName;
    this.decision=decision;
    console.log(this.tossWinby);
    console.log(this.decision);
    return true;
}

setNumbersOfOvers(overs:number){
    this.numberOfOvers=overs;
    console.log(this.numberOfOvers);
}

getTeam1Name(){
    return this.team1Name;
}

getTeam2Name(){
    return this.team2Name;
}

getTeam1(){
    return this.team1;
}

getTeam2(){
    return this.team2;
}

}