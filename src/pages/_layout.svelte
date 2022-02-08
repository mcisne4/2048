<script>
    import { goto } from '@roxi/routify'
    import { userStore } from '../stores/user'

    // let loggedIn = false
    // let loggedIn = true

    $: if ($userStore) {
        $goto('/app')
    } else {
        $goto('/home')
    }
</script>

<main>
    <slot />
</main>
