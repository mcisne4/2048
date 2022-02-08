<script>
    import { chainStore } from '../stores/scoreKeeperStore'
</script>

<div class="container">
    <p class="description">Network</p>
    <div class="network">
        <h3 class="name">{$chainStore}</h3>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        width: 8.5rem;
    }
    .description {
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
        color: #9c9c9c;
        text-align: right;
    }
    .network {
        display: flex;
        align-items: center;
        /* height: 2rem; */
    }
    .name {
        font-size: 0.9rem;
        text-align: right;
    }
</style>
