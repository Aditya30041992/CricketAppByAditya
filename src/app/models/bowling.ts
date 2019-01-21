export class Bowling{
    private didNotBowl:boolean;
    private runs:number;
    private balls:number;
    private out:string;
    
    constructor(){
        this.didNotBowl=true;
    }
    
    startBowling(){
        this.didNotBowl=false;
        this.balls=0;
        this.runs=0;
    }
    bowlerGiveNoRun(){
        this.runs;
        this.balls++;
    }
    bowlerGiveSingleRun(){
        this.runs++;
        this.balls++;
    }
    bowlerGiveDoubleRun(){
        this.runs+=2;
        this.balls++;
    }
    bowlerGiveThreeRun(){
        this.runs+=3;
        this.balls++;
    }
    bowlerGiveFourRun(){
        this.runs+=4;
        this.balls++;
    }
    playedSixRun(){
        this.runs+=6;
        this.balls++;
    }
    bowlerTakeWicket(){
        this.balls++;
    }
    bowllerGiveNoball(){
        this.runs++;
    }
    
    bowllerGiveWideBall(){
        this.runs++;
    }
    
}