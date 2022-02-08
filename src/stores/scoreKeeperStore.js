import { writable } from "svelte/store"

export const chain = writable('N/A')

export const topScores = writable([0, 0, 0])
export const topUsernames = writable([
    'n/a',
    'n/a',
    'n/a'
])
