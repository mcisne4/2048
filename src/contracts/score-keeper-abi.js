export const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            { "internalType": "uint24", "name": "_score", "type": "uint24" },
            { "internalType": "string", "name": "_username", "type": "string" }
        ],
        "name": "addOneScore",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getHighScores",
        "outputs": [
            {
                "internalType": "string[3]",
                "name": "usernames",
                "type": "string[3]"
            },
            {
                "internalType": "uint24[3]",
                "name": "scores",
                "type": "uint24[3]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "address", "name": "_address", "type": "address" }
        ],
        "name": "getUserScores",
        "outputs": [
            { "internalType": "uint24[]", "name": "", "type": "uint24[]" },
            { "internalType": "uint24", "name": "", "type": "uint24" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "globalHighScore1",
        "outputs": [
            { "internalType": "string", "name": "username", "type": "string" },
            { "internalType": "uint24", "name": "highScore", "type": "uint24" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "globalHighScore2",
        "outputs": [
            { "internalType": "string", "name": "username", "type": "string" },
            { "internalType": "uint24", "name": "highScore", "type": "uint24" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "globalHighScore3",
        "outputs": [
            { "internalType": "string", "name": "username", "type": "string" },
            { "internalType": "uint24", "name": "highScore", "type": "uint24" }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
