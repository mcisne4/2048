import { get } from 'svelte/store'
import { abi } from '../contracts/score-keeper-abi'
import { 
    topScores,
    topUsernames,
    chainStore,
    userScoresStore,
    userHighScoreStore,
} from '../stores/scoreKeeperStore'
import { userStore } from '../stores/user'


async function readFunction(functionName, params = undefined){
    try {
        let readOptions = {
            contractAddress: "0xf36bF3A42295581c6f6864Dd775e5E0A2f9eB655",
            functionName,
            abi
        }
        
        params !== undefined && (readOptions.params = params)
    
        const results = await Moralis.executeFunction(readOptions)
    
        return results
    } catch (error) {
        console.error('readFunction() Error:\n', error)
    }
}


// --- FUNCTION: getHighScores() ---
export async function getHighScores(){
    try {
        const [usernames, scores] = await readFunction('getHighScores')
        topScores.set(scores)
        topUsernames.set(usernames)
    } catch (err) {
        console.error('getHighScores() Error:\n', err)
    }
}


// --- FUNCTION: getUserScores() ---
export async function getUserScores(){
    try {
        const account = await Moralis.account
    
        const [scores, highScore] = await readFunction('getUserScores', {
            _address: account
        })
    
        userScoresStore.set(scores)
        userHighScoreStore.set(highScore)
    } catch (err) {
        console.error('getUserScores() Error:\n', err)
    }
}


// --- FUNCTION: getChain() ---
export async function getChain(){
    try {
        const chainId = await Moralis.chainId
        let chainName = 'N/A'
        chainId === '0x13881' && (chainName = 'Polygon (Mumbai)')
        chainId === '0x4' && (chainName = 'Ethereum (Rinkeby)')
        chainStore.set(chainName)
    
        // console.log('--> getChain():', chainName)
        if(chainName !== 'N/A'){
            getUserScores()
            getHighScores()
        } else {
            userScoresStore.set([])
            userHighScoreStore.set('N/A')
            topScores.set([0,0,0])
            topUsernames.set(['N/A', 'N/A', 'N/A'])        
        }
    } catch (err) {
        console.error('getChain() Error:\n', err)
    }
}


// --- FUNCTION: chainListener() ---
export async function chainListener(){
    try {
        const unsubscribe = Moralis.onChainChanged((chainId) => {
            let chainName = 'N/A'
            chainId === '0x13881' && (chainName = 'Polygon (Mumbai)')
            chainId === '0x4' && (chainName = 'Ethereum (Rinkeby)')
            chainStore.set(chainName)
    
            if(chainName !== 'N/A'){
                getUserScores()
                getHighScores()
            } else {
                userScoresStore.set([])
                userHighScoreStore.set('N/A')
                topScores.set([0,0,0])
                topUsernames.set(['N/A', 'N/A', 'N/A'])        
            }
        });
    
        return unsubscribe
    } catch (err) {
        console.error('chainListener() Error:\n', err)
    }
}


// --- FUNCTION: addScore() ---
export async function addScore(score){
    try {
        let sendOptions = {
            contractAddress: "0xf36bF3A42295581c6f6864Dd775e5E0A2f9eB655",
            functionName: 'addOneScore',
            abi,
            params: {
                _score: score,
                _username: get(userStore)
            }
        }

        console.log(sendOptions)
        const transaction = await Moralis.executeFunction(sendOptions)
        await transaction.wait()
        getUserScores()
        getHighScores()
    } catch (err) {
        console.error('addScore() Error:\n', err)
    }
}
