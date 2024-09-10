import { getContext } from './constants/constant.js'

import { GameScene } from "./scenes/gameScene.js"


export class Game{
   

    constructor(){
        this.c = getContext()
        this.width= this.c.canvas.width
        this.height= this.c.canvas.height 

        this.frameTime ={
            previous: 0,
            secondsPast: 0
        } 

        this.scene = new GameScene()
        // this.levelCurrent
        // this.levelNumber =0
        // this.score = 0
        // this.time = 3
        // this.timer = 0
        // this.interval = 100
       
       
       
    }draw(){
        
        this.scene.draw(this.c)
    }update(){
       
        this.scene.update(this.c, this.frameTime)
    }
    animate(time){
        requestAnimationFrame(this.animate.bind(this))

        this.frameTime = {
         secondsPast: (time- this.frameTime.previous)/1000,
         previous: time
        }
       this.draw()
        this.update()
        
     }
 
     start(){
        requestAnimationFrame(this.animate.bind(this)) }
}