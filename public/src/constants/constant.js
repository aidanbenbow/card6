export const canvas = document.querySelector('canvas');

const canvasProps = {
    width: 1920,
    height: 1080,
    centre: {
        x: 1920/2,
        y: 1080/2
    }
}

export const stageProps = {
    width: 1920,
    height: 1080,
    top: 540,
    left: 960
}

export function getContext(){
    
	
    const c = canvas.getContext('2d');
    
    c.canvas.width = canvasProps.width;
        c.canvas.height = canvasProps.height;
        c.imageSmoothingEnabled = false;

        return c
}

export const cardName = [
   
    ['h','e','a','r','t'],
   ['c','i','r','c','l','e'],
   ['o','v','a','l'],
   ['s','t','a','r'],
   ['c','h','i','c','k','e','n'],
   ['s','n','a','k','e'],
   ['b','i','r','d'],
   ['r','a','b','b','i','t'],
   ['s','n','a','i','l'],
   ['w','a','s','p'],  
]


export const keys = new Map([
    [' ', [0,0]],
    ['a', [1,0]],
['b', [2,0]],
['c', [3,0]],
['d', [4,0]],
    ['e', [5,0]],
['f', [6,0]],
['g', [7,0]],
['h', [8,0]],
['i', [9,0]],
['j', [1,1]],
    ['k', [2,1]],
['l', [3,1]],
['m', [4,1]],
['n', [5,1]],
    ['o', [6,1]],
['p', [7,1]],
['q', [8,1]],
['r', [9,1]],
['s', [1,2]],
['t', [2,2]],
['u', [3,2]],
    ['v', [4,2]],
['w', [5,2]],
['x', [6,2]],
['y', [7,2]],
['z', [8,2]],
['cross', [0,1]],
['tick', [0,2]],
])

export const nums = new Map( 
    [ ['time-0', [0,384,40,57]],
     ['time-1', [40,384,40,57]],
     ['time-2', [80,384,40,57]],
    ['time-3', [120,384,40,57]],
    ['time-4', [160,384,40,57]],
    ['time-5', [200,384,40,57]],
    ['time-6', [240,384,40,57]],
     ['time-7', [280,384,40,57]],
    ['time-8', [320,384,40,57]],
    ['time-9', [360,384,40,57]],

    ['score-0', [0,384,40,57]],
     ['score-1', [40,384,40,57]],
     ['score-2', [80,384,40,57]],
    ['score-3', [120,384,40,57]],
    ['score-4', [160,384,40,57]],
    ['score-5', [200,384,40,57]],
    ['score-6', [240,384,40,57]],
     ['score-7', [280,384,40,57]],
    ['score-8', [320,384,40,57]],
    ['score-9', [360,384,40,57]],
    ]
 )

 export const gameState = {
    score: 0
 }