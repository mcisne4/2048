<script>
    import AppHeader from '../components/AppHeader.svelte'
    import { getHighScores, getUserScores } from '../modules/moralis'

    // getHighScores()
    getUserScores()
</script>

<div class="container">
    <AppHeader />
    <h1>App</h1>
</div>

<style>
    .container {
        border: 1px solid salmon;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
