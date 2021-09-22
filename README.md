# vue-web3
A ready-to-go dapp-template built on solidity, vue and web3

## Pre Installation
1. Make sure you have all the needed software:  
  * [truffle](https://www.trufflesuite.com/truffle):
    * `npm install truffle -g`
  * [ganache](https://www.trufflesuite.com/ganache):  
    * `see instructions for your Operating System`
  * [nodejs](https://nodejs.org/en/download/):   
    * `see instructions for your Operating System`
## Installation
1. ### Getting the system ready
  * Folders
    * navigate to a folder where you like to setup your project.
    * run: `git clone https://github.com/Abstrucked/vue-web3-solidity.git`
    * navigate into the vue-web3-solidity folder created by the previous command.
2. ### Installing the dependecies
  * with npm
    * run: `npm install`
  * with yarn
    * run: `yarn install`
3. ### Getting the eviroment started
  * Ganache
    * open `ganache`, start a new "Ethereum enviroment" and save it.
  * Metamask
    * add a custom network to metamask with the info from ganache.
    * copy the private-key of the first account in ganache and import it into metamask (!!!DO NOT USE THIS ADDRESS ON MAINNET!!!).
    * select the newly imported network.
  * Truffle
    * compile the smart contracts: `truffle compile`
    * test the smart contracts: `truffle test`
    * migrate the contracts: `truffle migrate`
4. ### Start the App
  * run: `npm run serve` 
