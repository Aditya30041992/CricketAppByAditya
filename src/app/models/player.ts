
import { Batting } from 'src/app/models/batting';
import { Bowling} from 'src/app/models/bowling';
export class Player{
    
    private name:string;
    private player1TotalRuns:number=0;
    private player2TotalRuns:number=0;
    private player1TotalBalls: number=0;
    private player2TotalBalls: number=0;
    private batting:Batting;
    private bowling:Bowling;
    
    constructor() {
        this.batting=new Batting();
        this.bowling=new Bowling(); 
    }
    
    setPlayerName(name){
        this.name=name;
    }
    
    getPlayerName() {
        return this.name;
    }
    
}
