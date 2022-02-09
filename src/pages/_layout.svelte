<script>
    import { goto } from '@roxi/routify'
    import { userStore, uauth } from '../stores/user'
    import { getChain, chainListener } from '../modules/moralis'
    import { onMount } from 'svelte'

    onMount(async () => {
        const chainListenerUnsubscribe = await chainListener()

        return () => {
            chainListenerUnsubscribe()
        }
    })

    uauth
        .user()
        .then(user => userStore.set(user.sub))
        .catch(err => userStore.set(undefined))

    $: if (!$userStore) {
        $goto('/home')
    }
</script>

<main>
    <slot />
</main>
