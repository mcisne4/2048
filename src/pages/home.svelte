<script>
    import { goto } from '@roxi/routify'
    import { userStore } from '../stores/user'

    $: if ($userStore) {
        $goto('/app')
    }
</script>

<div class="container">
    <h1>2048</h1>
    <h2>Saved to the Blockchain</h2>
    <p>Login to get start playing</p>
    <button class="text-ud" on:click={userStore.login}>
        <svg
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <title>Unstoppable Domains-Sign-Dark</title>
            <g
                id="Unstoppable-Domains-Sign-Dark"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
            >
                <g
                    id="Unstoppable-Domains---Sign---Dark---Transparent"
                    transform="translate(73.000000, 93.000000)"
                >
                    <polygon
                        id="Rectangle-Copy-3"
                        fill="#2FE9FF"
                        points="320 5 320 115 -4.54747351e-13 245"
                    />
                    <path
                        d="M260,0 L260,190 C260,245.228475 215.228475,290 160,290 C104.771525,290 60,245.228475 60,190 L60,110 L120,77 L120,190 C120,209.329966 135.670034,225 155,225 C174.329966,225 190,209.329966 190,190 L190,38.5 L260,0 Z"
                        id="Path"
                        fill="#FFFFFF"
                    />
                </g>
            </g>
        </svg>
        <span> Login with Unstoppable </span>
    </button>
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    h1 {
        font-size: 5rem;
        font-weight: 900;
        letter-spacing: 0.5rem;
        color: rgb(2, 229, 236);
    }
    h2 {
        font-weight: 700;
        letter-spacing: 0.1rem;
        margin-bottom: 4rem;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #4c47f7;
        color: #fff;
        border: none;
        border-radius: 0.25rem;
        padding: 0.5rem 3rem;
        margin-top: 1.25rem;

        & svg {
            height: 2rem;
            margin-right: 0.25rem;
        }

        &:hover {
            background-color: #0025bb;
        }
        &:active {
            background-color: #4f62ce;
        }
    }
</style>
