import { Team } from './team';
import { Commentry } from './commentry';
import { Player } from './player';

export class Match {
    
    readonly decision_batting=1;
    readonly decision_bowling=2;
    
    private team1Name:string;
    private team2Name:string;
    private team1:Team;
    private team2:Team;
    private player1:Player;
    private player2:Player;
    private tossWinBy:string;
    private decision:number;
    private numberOfOvers:number;
    private flag:boolean=true;
    private inningFinshedMessage:string;
    public commentryDetailsArray:Array<Commentry>=[];
    public runDetailsArray:Array<Commentry>=[];
    
    setInningFinshedMessage(inningFinshedMessage:string) {
        this.inningFinshedMessage=inningFinshedMessage;
    }
    getInningFinshedMessage() {
        return this.inningFinshedMessage;
    }
    
    setTeamName(team1Name:string,team2Name:string) {
        this.team1Name=team1Name;
        this.team2Name=team2Name;
        this.team1= new Team();
        this.team2=new Team();
        console.log(this.team1Name);
        console.log(this.team2Name);
    }
    
    setTossWinbyTeam(teamName:string, decision:number):boolean {
        this.tossWinBy=teamName;
        this.decision=decision;
        console.log(this.tossWinBy);
        console.log(this.decision);
        return true;
    }
    
    setNumbersOfOvers(overs:number) {
        this.numberOfOvers=overs;
        console.log(this.numberOfOvers);
    }
    
    getNumberOfOver(){
        return this.numberOfOvers;
    }
    
    getTeam1Name() {
        return this.team1Name;
    }
    
    getTeam2Name() {
        return this.team2Name;
    }
    
    getTeam1() {
        return this.team1;
    }
    
    getTeam2() {
        return this.team2;
    }
    
    saveCommentryDetails(
        onStrikeBatsmanName,
        nonStrikeBatsmanName,
        bowlerName,
        balls,
        runsPerBall,
        wicketType,
        catchBy,
        runOutBy,
        numberOfOvers,
        commentry
        )
        {
            
            this.commentryDetailsArray.push(new Commentry(
                onStrikeBatsmanName,
                nonStrikeBatsmanName,
                bowlerName,
                balls,
                runsPerBall,
                wicketType,
                catchBy,
                runOutBy,
                numberOfOvers,
                commentry
                ));
                console.log(this.commentryDetailsArray);
            }
            
            getCommentry() {
                return this.commentryDetailsArray;
            }
            
            
            
            saveRunDetails(
                onStrikeBatsmanName,
                nonStrikeBatsmanName,
                bowlerName,
                balls,
                runsPerBall,
                wicketType,
                catchBy,
                runOutBy,
                numberOfOvers,
                commentry
                )
                {
                    this.runDetailsArray.push(new Commentry(
                        onStrikeBatsmanName,
                        nonStrikeBatsmanName,
                        bowlerName,
                        balls,
                        runsPerBall,
                        wicketType,
                        catchBy,
                        runOutBy,
                        numberOfOvers,
                        commentry));
                        console.log(this.runDetailsArray);
                    }
                    
                    
                    
                    savePlayer1Details(onStrikeBatsmanName,runsPerBall){
                        status=<string><any>runsPerBall;
                        if(status=='Wicket'){
                            this.player1=undefined;
                        }
                        
                        if(this.getPlayer1Details()==undefined){
                            this.player1= new Player();
                            this.player1.setPlayerName(onStrikeBatsmanName);
                        }
                        
                    }
                    
                    
                    getPlayer1Details(){
                        return this.player1;
                        console.log(this.player1);
                    }
                    
                    savePlayer2Details(nonStrikeBatsmanName) {
                        if(this.getPlayer2Details() == undefined) {
                            this.player2= new Player();
                            this.player2.setPlayerName(nonStrikeBatsmanName);
                        }
                    }
                    
                    getPlayer2Details(){
                        return this.player2;
                    }
                    
                    getRundetailsOfPlayer1(){
                        return this.player1;
                    }
                    
                    getRundetailsOfPlayer2(){
                        return this.player2;
                    }
                    
                }
                
                