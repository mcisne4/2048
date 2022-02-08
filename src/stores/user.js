import { writable } from 'svelte/store'
import UAuth from '@uauth/js'

const uauth = new UAuth({
  clientID: import.meta.env.VITE_UD_ID,
  clientSecret: import.meta.env.VITE_UD_SECRET,
  redirectUri: import.meta.env.VITE_UD_REDIRECT_URI,
  postLogoutRedirectUri: import.meta.env.VITE_UD_LOGOUT_URI
})



function createUserStore(){
    const { subscribe, set } = writable(undefined)

    async function login(){
        try {
            const user = await uauth.loginWithPopup()

            if(user){
                console.log(user)
                set(user)
            }
        } catch (err) {
            console.error('userStore.login() Error:\n', err)
        }
    }

    function logout(){
        set(undefined)
    }

    return {
        subscribe,
        login,
        logout,
    }
}

export const userStore = createUserStore()
