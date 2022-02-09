<script>
    import { topScores, topUsernames } from '../stores/scoreKeeperStore'
    import InfoColumnCard from './InfoColumnCard.svelte'

    // topScores.set([23456, 426893, 1248])
    // topUsernames.set([
    //     'aliw03sowi.crypto',
    //     'another-user.crypto',
    //     'a-really-really-long-cool-name.works',
    // ])
</script>

<InfoColumnCard>
    <h3>Top Player Scores</h3>
    {#each [0, 1, 2] as index}
        <p>
            <span class="index">#{index + 1}</span>
            <span class="value">{$topScores[index]}</span>
            <span class="username">{$topUsernames[index]}</span>
        </p>
    {/each}
</InfoColumnCard>

<style>
    h3 {
        font-size: 0.9rem;
        color: #9c9c9c;
        letter-spacing: 0.1rem;
    }
    p {
        margin: 0.25rem 0 0.25rem 0.75rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        /* justify-content: center; */
        font-size: 0.9rem;
    }
    .index {
        color: #9c9c9c;
    }
    .value {
        color: aqua;
        margin: 0 0.5rem;
        /* font-size: 0.5rem; */
    }
    .username {
        color: blueviolet;
        font-size: 1.1rem;
        letter-spacing: 0.05rem;
        font-weight: 600;
    }
    /* .high-score {
        font-weight: 700;
        font-size: 1.4rem;
        color: #91ca0d;
    } */
</style>
