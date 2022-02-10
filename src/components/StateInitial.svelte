<script>
    import { boardStore, gameState } from '../stores/gameStore'

    export let width

    function onClick() {
        gameState.set('playing')
        boardStore.generateRandom()
        boardStore.generateRandom()
    }
</script>

<div
    class="container"
    style:width="calc({width}px + 0.5rem)"
    style:height="calc({width}px + 0.5rem)"
>
    <button on:click={onClick}>Start</button>
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
        background-color: #031d1fc2;
        border-radius: 0.8rem;
    }
    button {
        background-color: #1bc7d3;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        border: none;
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: 0.1rem;

        &:hover {
            background-color: #19edfc;
        }
    }
</style>
