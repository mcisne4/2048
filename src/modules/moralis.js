import { abi } from '../contracts/score-keeper-abi'
import { 
    topScores,
    topUsernames,
    chainStore,
    userScoresStore,
    userHighScoreStore,
} from '../stores/scoreKeeperStore'


async function readFunction(functionName, params = undefined){
    let readOptions = {
        contractAddress: "0xf36bF3A42295581c6f6864Dd775e5E0A2f9eB655",
        functionName,
        abi
    }
    
    params !== undefined && (readOptions.params = params)

    const results = await Moralis.executeFunction(readOptions)

    return results
}


// --- FUNCTION: getHighScores() ---
export async function getHighScores(){
    const [usernames, scores] = await readFunction('getHighScores')
    topScores.set(scores)
    topUsernames.set(usernames)
}


// --- FUNCTION: getUserScores() ---
export async function getUserScores(){
    const account = await Moralis.account

    const [scores, highScore] = await readFunction('getUserScores', {
        _address: account
    })

    userScoresStore.set(scores)
    userHighScoreStore.set(highScore)
}


// --- FUNCTION: getChain() ---
export async function getChain(){
    const chainId = await Moralis.chainId
    let chainName = 'N/A'
    chainId === '0x13881' && (chainName = 'Polygon (Mumbai)')
    chainId === '0x4' && (chainName = 'Ethereum (Rinkeby)')
    chainStore.set(chainName)

    console.log('--> getChain():', chainName)
    if(chainName !== 'N/A'){
        getUserScores()
        getHighScores()
    } else {
        userScoresStore.set([])
        userHighScoreStore.set('N/A')
        topScores.set([0,0,0])
        topUsernames.set(['N/A', 'N/A', 'N/A'])        
    }
}


// --- FUNCTION: chainListener() ---
export async function chainListener(){
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
}
