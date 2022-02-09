<script>
    import { currentScoreStore } from '../stores/currentScoreStore'
    import InfoColumnCard from './InfoColumnCard.svelte'
</script>

<InfoColumnCard flexGrow="2">
    <div class="center">
        <h3>Current Store</h3>
        <h2>{$currentScoreStore}</h2>
    </div>
</InfoColumnCard>

<style>
    .center {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
    }
    h3 {
        font-size: 1rem;
        color: #e6e6e6;
        letter-spacing: 0.1rem;
        text-align: center;
    }
    h2 {
        font-weight: 700;
        font-size: 1.6rem;
        color: #e7ab05;
        text-align: center;
    }
</style>
