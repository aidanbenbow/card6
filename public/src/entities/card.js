import { stageProps } from "../constants/constant.js"

export class Card{
    constructor(n){
        this.image = document.querySelector(`#cards`)
        
        this.width = 274
        this.height = 368
        this.frameX = 0
        this.frameY = 2

    }
    draw(context){
        context.drawImage(this.image,
            this.width*this.frameX,
            this.height*this.frameY,
            this.width,this.height, 
            stageProps.left-this.width/2,stageProps.top-this.height/2 , 
            this.width,this.height) 
    }

    update(time){

    }

}