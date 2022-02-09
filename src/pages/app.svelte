<script>
    import AppHeader from '../components/AppHeader.svelte'
    import InfoColumn from '../components/InfoColumn.svelte'
</script>

<div class="container">
    <AppHeader />
    <InfoColumn />
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
