<script>
    import Username from './Username.svelte'
    import Chain from './Chain.svelte'
    // import { url } from '@roxi/routify'
</script>

<div class="background">
    <div class="content">
        <Username />
        <h1 class="title">2048</h1>
        <Chain />
    </div>
</div>

<style lang="scss">
    .background {
        background-color: #080808;
        display: flex;
        flex-direction: column;
    }
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: var(--content-max-width);
        min-width: var(--content-min-width);
        width: 100%;
        margin: 0 auto;
        padding: 0.75rem var(--content-padding);
    }
    .title {
        font-size: 2.5rem;
        color: #02e5ec;
        letter-spacing: 0.2rem;
        margin: 0 1rem;
    }
</style>
