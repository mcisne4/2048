import { writable } from "svelte/store"
import {
    _generateRandom,
    _shiftLeft,
    _shiftRight,
    _shiftUp,
    _shiftDown
} from '../modules/game-logic'


export const gameState = writable('initial')
export const newTile = writable(undefined)
export const scoreStore = writable(0)

function createBoardStore(){
    let initial = []
    for(let i=0; i<16; i++){
        initial.push(0)
    }

    const { subscribe, set, update } = writable(initial)

    function reset(){
        gameState.set('initial')
        boardStore.set(initial)
        newTile.set(undefined)
        scoreStore.set(0)
    }

    function generateRandom(){
        update(current => {
            const data = _generateRandom(current)
            if(data === false){
                gameState.set('game over')
                return current
            } else {
                newTile.set(data.newIndex)
                return data.board
            }
        })
    }

    function shiftRight(){
        update(current => {
            const { board, score} = _shiftRight(current)
            scoreStore.update(val => val + score)
            return board
        })
    }

    function shiftLeft(){
        update(current => {
            const { board, score} = _shiftLeft(current)
            scoreStore.update(val => val + score)
            return board
        })
    }

    function shiftUp(){
        update(current => {
            const { board, score} = _shiftUp(current)
            scoreStore.update(val => val + score)
            return board
        })
    }

    function shiftDown(){
        update(current => {
            const { board, score} = _shiftDown(current)
            scoreStore.update(val => val + score)
            return board
        })
    }

    return {
        subscribe,
        set,
        update,
        reset,
        generateRandom,
        shiftRight,
        shiftLeft,
        shiftUp,
        shiftDown,
    }
}

export const boardStore = createBoardStore()
