
import { SmokePuff } from "../animations/smokePuff.js";
import { StartGame } from "../animations/startGame.js";
import { cardName, gameState, keys } from "../constants/constant.js";
import { check, getData } from "../constants/utils.js";
import { Card } from "../entities/card.js";
import { Tiles } from "../entities/tiles.js";
import { GameOverlay } from "../overlays.js/gameOverlay.js";



export class GameScene{
    constructor(){
       
       getData().then(res=>{
        console.log(res)
        return res
    }).then(data=>{
        console.log(data[0])
        let pl1 = data[0]
        let pl2 = data[1]
        let pl3 = data[2]
       nameone.innerHTML = pl1.name
       scoreone.innerHTML = pl1.score
       nametwo.innerHTML = pl2.name
       scoretwo.innerHTML = pl2.score
       namethree.innerHTML = pl3.name
       scorethree.innerHTML = pl3.score
    })
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
          console.log(this.scores)
        },{once:true})

        savebtn.addEventListener('click', ()=>{
let name = player.value
let score = gameState.score

          let data = {
           name ,
            score
          }  

          const options = {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
          }

          fetch('/api', options)
  
          },{once:true})

        
        // gameinput.addEventListener('input', (e)=>{
        //     e.preventDefault();
        //     const [dx,dy] = keys.get(e.key)
                   
        //     this.length = cardName[this.cardOrder].length
       
        // if(this.order<this.length){
        //     this.tiles[this.order].frameX=dx
        //     this.tiles[this.order].frameY=dy
        //     this.entered.push(e.key)
        //   }     
        //     this.order++
            
        // })

        checkbtn.addEventListener('click', (e)=>{
            e.preventDefault();
            

            for (let i = 0; i < game.value.length; i++) {
                const [dx,dy] = keys.get(game.value[i])
                this.tiles[i].frameX=dx
            this.tiles[i].frameY=dy
           this.entered.push(game.value[i])
                
            }

        //     const [dx,dy] = keys.get(e.key)
                   
        //     this.length = cardName[this.cardOrder].length
       
        // if(this.order<this.length){
        //     this.tiles[this.order].frameX=dx
        //     this.tiles[this.order].frameY=dy
        //     this.entered.push(e.key)
        //   }     
        //     this.order++
            
        })

    }
    change(){
        console.log('hi')
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
            console.log(cardName[this.cardOrder], this.entered, this.tiles)
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
        
        
        this.tiles = []
        this.entered = []
        game.value = []
       
        for (let i = 0; i < cardName[this.cardOrder].length; i++) {
            this.tiles.push(new Tiles([630+109*i,740]))
          }
          this.overlay.time = 1
          this.order = 0
          this.checked=false
    }

}