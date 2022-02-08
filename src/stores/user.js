import { writable } from 'svelte/store'


function createUserStore(){
    const { subscribe, set, update } = writable()

    return {
        subscribe,
    }
}

export const user = createUserStore()
