<script>
    import { boardStore } from '../stores/gameStore'
    import Tile from './Tile.svelte'

    export let width
</script>

<div class="container" style:width="{width}px" style:height="{width}px">
    {#each $boardStore as value}
        <Tile size={width / 4} {value} />
    {/each}
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
