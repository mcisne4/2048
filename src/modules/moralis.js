import { abi } from '../contracts/score-keeper-abi'
import { topScores, topUsernames } from '../stores/scoreKeeperStore'

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
    // console.log('Scores:', scores)
    // console.log('Usernames:', usernames)
    topScores.set(scores)
    topUsernames.set(usernames)
}

export async function getUserScores(){
    const chainId = await Moralis.chainId
    console.log(chainId)
}


