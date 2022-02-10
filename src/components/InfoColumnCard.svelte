<script>
    export let flexGrow = 1
</script>

<div class="card" style:flex-grow={flexGrow}>
    <slot />
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 0.5rem var(--content-padding);
    }
</style>
