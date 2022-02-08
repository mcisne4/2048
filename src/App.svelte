<script>
    import { Router } from '@roxi/routify'
    import { routes } from '../.routify/routes'
    import './sass/global.scss'

    Moralis.start({
        serverUrl: import.meta.env.VITE_MORALIS_SERVER_URL,
        appId: import.meta.env.VITE_MORALIS_APP_ID,
    })
        // .then(res => console.log(res, Moralis))
        .catch(err => console.error(err))
</script>

<Router {routes} />
