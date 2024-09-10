import { stageProps } from "../constants/constant.js";


export class SmokePuff{
    constructor(){
        this.image = document.querySelector('#puff');
        this.width = 200
        this.height = 200
        this.frameX = 0
        this.frameY = 0
        this.animationTimer = 0

        this.animation = [['puff-1',420], ['puff-2',100],['puff-3',80],['puff-4',120], ['puff-5',100],['puff-6',80],
        ['puff-7',120], ['puff-8',100],['puff-9',-1]]

    }

    draw(context){
        if(this.frameX<this.animation.length-1){
            context.drawImage(this.image,
                this.width*this.frameX,
                this.height*this.frameY,
                this.width,this.height, 
                stageProps.left-this.width/2,stageProps.top-this.height/2 , 
                this.width,this.height) 
        }
            
    }
    update(time){
        const [,framedelay] = this.animation[this.frameX]
        if(time.previous<this.animationTimer+framedelay) return
       if(this.frameX<8) this.frameX++
this.animationTimer = time.previous
    }
   
}