<script>
    import GameBackground from './GameBackground.svelte'
    import GameTiles from './GameTiles.svelte'
    import { boardStore } from '../stores/gameStore'

    let width
    // let started = false
    // console.log('Client Width:', width)

    // boardStore.generateRandom()
    // boardStore.generateRandom()
</script>

<div class="container">
    <div class="board-ref">
        <div
            class="board-background"
            bind:clientWidth={width}
            style:height="{width}px"
        >
            <GameBackground {width} />
            <GameTiles {width} />
        </div>
    </div>

    <div class="description">
        <h3>How to Play</h3>
        <p>
            Use the <code>Left</code>, <code>Right</code>, <code>Up</code> and
            <code>Down</code> keys to move the tiles in that direction. Adjacent
            tiles of equal value will combine to into a new tile of their combined
            value. Each new tile is added to your current score
        </p>
    </div>
</div>

<style lang="scss">
    .container {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }

    .board {
        &-ref {
            background-color: #1b3f4b;
            background-color: var(--board-bg);
            border-radius: 0.8rem;
            width: 80%;
            max-width: 25rem;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.25rem;
        }

        &-background {
            display: flex;
            flex-wrap: wrap;
            position: relative;
            width: 100%;
        }
    }

    .description {
        width: 80%;
        max-width: 25rem;
        text-align: center;
        margin: 1.5rem 0;
    }
    p {
        font-size: 0.9rem;
        line-height: 1.5rem;
        margin-top: 0.5rem;

        & code {
            background-color: rgb(68, 68, 68);
            color: #e6e6e6;
            font-weight: 600;
            padding: 0.03rem 0.3rem;
            border-radius: 0.25rem;
            margin: 0 0.1rem;
        }
    }
</style>
