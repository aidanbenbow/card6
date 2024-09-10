import { gameState, nums } from "../constants/constant.js";

export class GameOverlay{
    constructor(){
       
        this.image = document.querySelector('#letters');
        this.time = 10
        this.timeTimer = 0
       
    }

    drawFrame(context, frameKey,x,y,direction=[1,1]){
        const [dx,dy,dw,dh] = nums.get(frameKey)

        context.scale(direction[0],direction[1])
        context.drawImage(this.image,dx,dy,dw,dh, x*direction[0],y*direction[1], dw,dh)
        context.setTransform(1,0,0,1,0,0)
  
    }
   

    drawTime(context){
        const timeString = String(this.time).padStart(2, '00')
        this.drawFrame(context,`time-${timeString.charAt(0)}`, 800,100 )
        this.drawFrame(context,`time-${timeString.charAt(1)}`, 830,100 )
    }

    drawScore(context, score, x){
        const strValue = String(score)
        const buffer = ((4*20)-strValue.length*20)
        
        for (let i = 0; i < strValue.length; i++) {
            this.drawFrame(context, `score-${strValue[i]}`, x+buffer+i*20, 100)
            
        }
    }

    drawScoreLabel(context, x){
        
           
        context.save()
        context.font = "100px Arial";
            context.color = "white"
            context.fillText(`${player.value}`, x, 150)    
              context.restore()
        
       
    }

    drawScores(context){
        this.drawScore(context, gameState.score, 650)
    }

    draw(context){
        this.drawTime(context)
        this.drawScoreLabel(context, 500)
        this.drawScores(context)
    }

    updateTime(time){
       
        if(time.previous>this.timeTimer+1000){
            if(this.time>0)this.time-=1
            this.timeTimer=time.previous
        }
      }


    update(time){
     this.updateTime(time)
    }

}