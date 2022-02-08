import { writable } from 'svelte/store'
import UAuth from '@uauth/js'

export const uauth = new UAuth({
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
                set(user.idToken.sub)
                // const web3 = await Moralis.enableWeb3({ provider: "metamask" });
                // console.log('Web3 Provider!! -->\n', web3)
            }
        } catch (err) {
            console.error('userStore.login() Error:\n', err)
        }
    }

    function logout(){
        uauth
            .logout()
            .then(() => set(undefined))
            .catch(err => console.error('logout() Error:\n', err))
    }

    return {
        subscribe,
        set,
        login,
        logout,
    }
}

export const userStore = createUserStore()
