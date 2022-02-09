<script>
    import { goto } from '@roxi/routify'
    import { userStore, uauth } from '../stores/user'
    import { chainListener } from '../modules/moralis'
    import { onMount } from 'svelte'

    onMount(async () => {
        try {
            const chainListenerUnsubscribe = await chainListener()

            return () => {
                chainListenerUnsubscribe()
            }
        } catch (err) {
            console.error('_layout Error:\n', err)
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
