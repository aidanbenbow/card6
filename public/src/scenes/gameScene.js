
import { SmokePuff } from "../animations/smokePuff.js";
import { StartGame } from "../animations/startGame.js";
import { cardName, gameState, keys } from "../constants/constant.js";
import { check } from "../constants/utils.js";
import { Card } from "../entities/card.js";
import { Tiles } from "../entities/tiles.js";
import { GameOverlay } from "../overlays.js/gameOverlay.js";



export class GameScene{
    constructor(){
       
        this.bg = document.querySelector('#scene1');
        this.startbtn = document.querySelector('#stbtn');
        this.start = new StartGame()
        this.card = new Card()
        this.smoke = new SmokePuff()
        this.overlay = new GameOverlay()
        this.tiles = []
        this.entered = []
        this.checked = false
        this.cardOrder = 0
this.order = 0
        this.timer = 0

        this.entities = [
            this.card,
            this.start,
            
        ]

        this.startbtn.addEventListener('click', ()=>{
          this.startGame()

         
       
        },{once:true})

        
        gameinput.addEventListener('keydown', (e)=>{
            e.preventDefault();
            const [dx,dy] = keys.get(e.key)
                   
            this.length = cardName[this.cardOrder].length
       
        if(this.order<this.length){
            this.tiles[this.order].frameX=dx
            this.tiles[this.order].frameY=dy
            this.entered.push(e.key)
          }     
            this.order++
            
        })

    }

    startGame(){
        this.entities.splice(1,1)
        this.entities.push(this.smoke)
        this.card.frameY = 0
        this.entities.push(this.overlay)

        for (let i = 0; i < cardName[this.cardOrder].length; i++) {
          this.tiles.push(new Tiles([630+109*i,740]))
          
        }
        
           start.style.display='none'
           gameinput.style.display='block'
           
    }


    draw(context){
        context.drawImage(this.bg, 0, 0) 
       
for (const entity of this.entities) {
    entity.draw(context)
}

for (const tile of this.tiles) {
    tile.draw(context)
}
    }
    update(context, time){
        
        for (const entity of this.entities) {
            entity.update(time)
        }

        for (const tile of this.tiles) {
            tile.update(time)
        }

        if(this.overlay.time === 0 && !this.checked) {
            check(cardName[this.cardOrder], this.entered, this.tiles)
        this.checked=true
       
        setTimeout(()=>{
          if(this.cardOrder<9) {this.reset()
        } else{
           this.gameover(context)
        
        }
        },1000)


        }

    }
gameover(context){
    console.log(context)
    gameinput.style.display='none'
    finish.style.display='block'
    playername.value = `${player.value}`
    playerscore.value = `${gameState.score}`
}

    reset(){
        this.cardOrder++
        if(this.card.frameX<4 && this.card.frameY===0){
            this.card.frameX = this.cardOrder
        } else{
            this.card.frameY = 1
            this.card.frameX = this.cardOrder-5
        }
        console.log(this.cardOrder,this.card.frameX)
        
        this.tiles = []
        this.entered = []
       
        for (let i = 0; i < cardName[this.cardOrder].length; i++) {
            this.tiles.push(new Tiles([630+109*i,740]))
          }
          this.overlay.time = 10
          this.order = 0
          this.checked=false
    }

}