<script>
    import { goto } from '@roxi/routify'

    let loggedIn = false
    // let loggedIn = true

    $: if (loggedIn) {
        $goto('/app')
    } else {
        $goto('/home')
    }
</script>

<main>
    <slot />
</main>
