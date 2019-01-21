import { Player } from './player';

export class Team{
    private playerNames:Array<Player>;
    
    constructor()
    {
        this.playerNames=[];
        for(let index=0; index<11; index++)
        {
            const player=new Player();
            this.playerNames.push (player);
        }
    }
    
    isTeamComplete():boolean {
        
        if(this.playerNames.length===11)
        {
            return true;
        }
        return false;
    }
    
    getPlayerNames(){
        return this.playerNames;
    }
    
    
}
