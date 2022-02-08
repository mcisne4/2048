<script>
    import { goto } from '@roxi/routify'
    import { userStore, uauth } from '../stores/user'

    uauth
        .user()
        .then(user => userStore.set(user.sub))
        // .then(() => console.log('-> Logged in...'))
        // .catch(err => console.log('-> Not logged in...'))
        .catch(err => userStore.set(undefined))

    $: if (!$userStore) {
        $goto('/home')
    }
</script>

<main>
    <slot />
</main>
