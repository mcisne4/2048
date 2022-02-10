# 2048

## About

The popular game 2048 comes to the web3 ecosystem as a decentralized application. Login to the application using your Unstoppable Domains account. Play the game and save your scores to the blockchain. Compete with other players to get the top scores.

## How to Test Run

### Needed Credentials:

Before being able to run the application, you will need [login credentials from Unstoppable Domains](https://docs.unstoppabledomains.com/login-with-unstoppable/getting-login-credentials). The `New Redirect URIs` should be set to `http://localhost:5000/app` and the `New Post Logout Redirect URIs` should be set to `http://localhost:5000/home`.

You will also need create a [Moralis server](https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server) and get the `Server URL` and `App ID` credentials. The _ScoreKeeper_ smart contract is currently only deployed on the _Rinkeby_ (Ethereum Testnet) network and the _Mumbai_ (Polygon Testnet) network.

Place your credentials in a `.env` file in the root folder with the following keys:

```
# .env

VITE_UD_ID= your Unstoppable Domains application's Client ID

VITE_UD_SECRET= your Unstoppable Domains application's Client Secret


VITE_UD_REDIRECT_URI=http://localhost:5000/app
VITE_UD_LOGOUT_URI=http://localhost:5000/home


VITE_MORALIS_SERVER_URL= your Moralis server's Server URL

VITE_MORALIS_APP_ID= your Moralis server's App ID

```

### Run the Application:

```bash
# Install Dependencies
yarn

# Run for development
yarn dev
```

The application will be available on `http://localhost:5000`

## Build

### To build the application

```bash
# Build App
yarn build
```

### To Serve the Built Application:

```bash
# Serve App
yarn serve
```

## Important Notes

-   The dapp is set to run on the _Rinkeby_ (Ethereum Testnet) network and the _Mumbai_ (Polygon Testnet) network. However, only the _Rinkeby_ (Ethereum Testnet) network seems to be working properly at the moment
