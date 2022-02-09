<script>
    import {
        userHighScoreStore,
        userScoresStore,
    } from '../stores/scoreKeeperStore'
    import InfoColumnCard from './InfoColumnCard.svelte'

    let recentScores = []

    // userScoresStore.set([13216, 1565, 12, 0, 9648, 863145])

    $: {
        let scores = []
        $userScoresStore.forEach((value, index) => {
            scores.push({
                index: index + 1,
                value,
            })
        })
        recentScores = scores.slice(-5).reverse()
    }
</script>

<InfoColumnCard>
    <div class="content">
        <h3>High Score</h3>
        <p class="high-score">{$userHighScoreStore}</p>
        <h3>Recent Scores</h3>
        {#each recentScores as score}
            <p class="recent-score">
                <span class="index">#{score.index}</span>
                <span class="value">{score.value}</span>
            </p>
        {/each}
    </div>
</InfoColumnCard>

<style>
    .content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: flex-end;
        padding-bottom: 1rem;
    }
    h3 {
        font-size: 0.9rem;
        color: #9c9c9c;
        letter-spacing: 0.1rem;
    }
    .high-score {
        font-weight: 700;
        font-size: 1.4rem;
        color: #91ca0d;
        margin-left: 0.5rem;
        margin-bottom: 0.25rem;
    }
    .recent-score {
        font-size: 0.9rem;
        margin-left: 0.75rem;
    }
    .index {
        color: #9c9c9c;
    }
    .value {
        color: aqua;
        margin: 0 0.5rem;
    }
</style>
