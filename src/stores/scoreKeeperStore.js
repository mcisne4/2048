import { writable } from "svelte/store"

export const chainStore = writable('N/A')

export const topScores = writable([0, 0, 0])
export const topUsernames = writable([
    'n/a',
    'n/a',
    'n/a'
])


export const userScoresStore = writable([])
export const userHighScoreStore = writable(0)
