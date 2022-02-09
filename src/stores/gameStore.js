import { writable } from "svelte/store"

export const gameState = writable('initial')
export const newTile = writable(undefined)

function createBoardStore(){
    let initial = []
    for(let i=0; i<16; i++){
        initial.push(0)
    }

    const { subscribe, set, update } = writable(initial)

    function generateRandom(){
        update(current => {
            let available = []
            current.forEach((val, i) => {
                if(val === 0) available.push(i)
            })
            if(available.length === 0){
                gameState.set('game over')
                return current
            } else {
                const newIndex = available[Math.floor(Math.random() * available.length)]
                let newArray = [...current]
                newArray[newIndex] = 2
                newTile.set(newIndex)
                return newArray
            }
        })
    }

    return {
        subscribe,
        set,
        update,
        generateRandom,
    }
}

export const boardStore = createBoardStore()
