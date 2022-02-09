<script>
    import UserScores from './UserScores.svelte'
    import CurrentScore from './CurrentScore.svelte'
    import TopScores from './TopScores.svelte'
</script>

<div class="container">
    <div class="content">
        <div class="info-column">
            <TopScores />
            <div class="spacer" />
            <CurrentScore />
            <div class="spacer" />
            <UserScores />
        </div>
        <div class="page-content">
            <h1>Content</h1>
            <slot />
        </div>
    </div>
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-grow: 1;
    }
    .content {
        display: flex;
        flex-grow: 1;
        max-width: var(--content-max-width);
        min-width: var(--content-min-width);
        margin: 0 auto;
    }
    .info-column,
    .page-content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .info-column {
        background-color: black;
        max-width: 40%;
    }
    .page-content {
        justify-content: center;
        align-items: center;
    }

    .spacer {
        border-top: 1px solid rgb(17, 17, 17);
    }
</style>
