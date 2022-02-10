<script>
    import { boardStore, gameState } from '../stores/gameStore'

    export let width

    function playAgain() {
        boardStore.reset()
        gameState.set('playing')
        boardStore.generateRandom()
        boardStore.generateRandom()
    }

    function saveScore() {
        //
    }
</script>

<div
    class="container"
    style:width="calc({width}px + 0.5rem)"
    style:height="calc({width}px + 0.5rem)"
>
    <button on:click={playAgain}>Play Again</button>
    <button on:click={saveScore}>Save Score</button>
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -0.25rem;
        left: -0.25rem;
        background-color: #1f0303ea;
        border-radius: 0.8rem;
    }
    button {
        background-color: #d31b1b;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        border: none;
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: 0.1rem;
        margin: 1.75rem;

        &:hover {
            background-color: #ff3333;
        }
    }
</style>
