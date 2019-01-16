import { Batting } from 'src/app/models/batting';
import { Bowling} from 'src/app/models/bowling';
export class Player{

    private name:string;

    private batting:Batting;
    private bowling:Bowling;

    constructor(){
        this.batting=new Batting();
        this.bowling=new Bowling();
      
    }
    setPlayerName(name){
        this.name=this.name;
    }


}