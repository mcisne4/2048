<script>
    export let width
</script>

<div class="container" style:width="{width}px" style:height="{width}px">
    {#each Array(16) as x, i}
        <div
            class="tile-container"
            style:width="{width / 4}px"
            style:height="{width / 4}px"
        >
            <div class="tile" />
        </div>
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
    .tile-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.3rem;
    }
    .tile {
        background-color: #01232e;
        background-color: #142b31;
        background-color: var(--board-0);
        display: flex;
        flex-grow: 1;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
    }
</style>
