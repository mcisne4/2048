<script>
    export let size
    export let value

    let fontSize
    $: switch (value.toString().length) {
        case 1:
            fontSize = `${size * 0.3}px`
            break

        case 2:
            fontSize = `${size * 0.3}px`
            break

        case 3:
            fontSize = `${size * 0.3}px`
            break

        case 4:
            fontSize = `${size * 0.25}px`
            break

        case 5:
            fontSize = `${size * 0.2}px`
            break

        case 6:
            fontSize = `${size * 0.18}px`
            break

        default:
            fontSize = '0.5rem'
            break
    }
</script>

<div class="tile-container" style:width="{size}px" style:height="{size}px">
    <div
        class="tile"
        class:tile-0={value === 0}
        class:tile-1={value === 2}
        class:tile-2={value === 4}
        class:tile-3={value === 8}
        class:tile-4={value === 16}
        class:tile-5={value === 32}
        class:tile-6={value === 64}
        class:tile-7={value === 128}
        class:tile-8={value === 256}
        class:tile-9={value === 512}
        class:tile-10={value === 1024}
        class:tile-11={value === 2048}
        class:tile-12={value === 4096}
        class:tile-13={value === 8192}
        class:tile-14={value === 16384}
        class:tile-15={value === 32768}
        class:tile-16={value === 65536}
        class:tile-17={value === 131072}
    >
        <h2 class="value" style:font-size={fontSize}>{value}</h2>
    </div>
</div>

<style lang="scss">
    .tile-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.3rem;
    }
    .tile {
        display: flex;
        flex-grow: 1;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        justify-content: center;
        align-items: center;

        &-0 {
            background-color: var(--board-0);
            color: var(--board-0);
        }
        &-1 {
            background-color: var(--board-1a);
            color: var(--board-1b);
        }
        &-2 {
            background-color: var(--board-2a);
            color: var(--board-2b);
        }
        &-3 {
            background-color: var(--board-3a);
            color: var(--board-3b);
        }
        &-4 {
            background-color: var(--board-4a);
            color: var(--board-4b);
        }
        &-5 {
            background-color: var(--board-5a);
            color: var(--board-5b);
        }
        &-6 {
            background-color: var(--board-6a);
            color: var(--board-6b);
        }
        &-7 {
            background-color: var(--board-7a);
            color: var(--board-7b);
        }
        &-8 {
            background-color: var(--board-8a);
            color: var(--board-8b);
        }
        &-9 {
            background-color: var(--board-9a);
            color: var(--board-9b);
        }
        &-10 {
            background-color: var(--board-10a);
            color: var(--board-10b);
        }
        &-11 {
            background-color: var(--board-11a);
            color: var(--board-11b);
        }
        &-12 {
            background-color: var(--board-12a);
            color: var(--board-12b);
        }
        &-13 {
            background-color: var(--board-13a);
            color: var(--board-13b);
        }
        &-14 {
            background-color: var(--board-14a);
            color: var(--board-14b);
        }
        &-15 {
            background-color: var(--board-15a);
            color: var(--board-15b);
        }
        &-16 {
            background-color: var(--board-16a);
            color: var(--board-16b);
        }
        &-17 {
            background-color: var(--board-17a);
            color: var(--board-17b);
        }
    }
    .value {
        font-size: 500%;
    }
</style>
