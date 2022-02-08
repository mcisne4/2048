<script>
    import Username from './Username.svelte'
    import { url } from '@roxi/routify'
</script>

<div class="background">
    <div class="content">
        <Username />
        <div class="user">User</div>
        <div class="user">User</div>
        <a href={$url('/app/404')}>404</a>
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
        // border: 1px solid olive;
        max-width: var(--content-max-width);
        min-width: var(--content-min-width);
        width: 100%;
        margin: 0 auto;
        padding: 0.75rem var(--content-padding);
    }
</style>
