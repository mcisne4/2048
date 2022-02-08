import { set } from 'core-js/core/dict'
import { abi } from '../contracts/score-keeper-abi'
import { topScores, topUsernames, chainStore } from '../stores/scoreKeeperStore'

async function readFunction(functionName, params = undefined){
    const web3 = await Moralis.enableWeb3({ provider: "metamask" })

    let readOptions = {
        contractAddress: "0xf36bF3A42295581c6f6864Dd775e5E0A2f9eB655",
        functionName,
        abi
    }
    
    params !== undefined && (readOptions.params = params)

    const results = await Moralis.executeFunction(readOptions)

    return results
}


export async function getHighScores(){
    const [usernames, scores] = await readFunction('getHighScores')
    topScores.set(scores)
    topUsernames.set(usernames)
}

export async function getUserScores(){
    const chainId = await Moralis.chainId
    console.log(chainId)
}


export async function getChain(){
    const web3 = await Moralis.enableWeb3({ provider: "metamask" })

    const chainId = await Moralis.chainId
    let chainName = 'N/A'
    chainId === '0x13881' && (chainName = 'Polygon (Mumbai)')
    chainId === '0x4' && (chainName = 'Ethereum (Rinkeby)')
    chainStore.set(chainName)
}

export async function chainListener(){
    const web3 = await Moralis.enableWeb3({ provider: "metamask" })

    const unsubscribe = Moralis.onChainChanged((chainId) => {
        let chainName = 'N/A'
        chainId === '0x13881' && (chainName = 'Polygon (Mumbai)')
        chainId === '0x4' && (chainName = 'Ethereum (Rinkeby)')
        chainStore.set(chainName)
    });

    return unsubscribe
}
