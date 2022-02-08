<script>
    import { fade } from 'svelte/transition'
    import { userStore } from '../stores/user'

    let opened = false

    function logout() {
        opened = false
        userStore.logout()
    }
</script>

{#if opened}
    <div class="background" on:click={() => (opened = false)} />
{/if}
<div class="container">
    <button class="main" on:click={() => (opened = !opened)}>
        <span>
            {$userStore}
        </span>
        {#if opened}
            <svg viewBox="0 0 20 10" in:fade={{ duration: 500 }}>
                <path d="M 1,9 L 10,1 L 19,9" />
            </svg>
        {:else}
            <svg viewBox="0 0 20 10" in:fade={{ duration: 500 }}>
                <path d="M 1,1 L 10,9 L 19,1" />
            </svg>
        {/if}
    </button>
    {#if opened}
        <button
            class="logout"
            transition:fade={{ duration: 100 }}
            on:click={logout}
        >
            Logout
        </button>
    {/if}
</div>

<style lang="scss">
    .background {
        background-color: #b3ff0025;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .container {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        border: 1px solid #24c703;
        color: #b3ff00;
        border-radius: 0.25rem;
        padding: 0.25rem 1rem;
        letter-spacing: 0.1rem;
        height: 2rem;
        background-color: #060f01;

        &:hover {
            background-color: #0c1f02;
        }
    }
    .logout {
        position: absolute;
        width: 100%;
        top: 2.1rem;
    }

    svg {
        height: 0.5rem;
        fill: none;
        margin-left: 0.5rem;

        & path {
            stroke: #24c703;
            stroke-width: 0.2rem;
        }
    }
</style>
