# vue-web3
A ready-to-go dapp-template built on solidity, vue and web3

## Pre Installation
1. Make sure you have all the needed software ready to go!:  
  * [truffle](https://www.trufflesuite.com/truffle):
    * `npm install truffle -g`
  * [ganache](https://www.trufflesuite.com/ganache):  
    * `see instructions for your Operating System`
  * [nodejs](https://nodejs.org/en/download/):   
    * `see instructions for your Operating System`
    * 
### Installation
1.  #### Folders
   * open the terminal
   * navigate to a folder where you like to setup your project.
2. #### Create a new project from template: 
   ##### Choose if install this project or create a new one from the template:
    * REPOSITORY 
    * => run: `git clone https://github.com/Abstrucked/vue-web3-solidity.git`
    * => navigate into the vue-web3-solidity folder created by the previous command.
    ---
    * TEMPLATE 
    * => run: `git clone -b main --single-branch https://github.com/Abstrucked/vue-web3-solidity [project-name]`
    * => navigate into the [project-name] folder created by the previous command.
3. ### Installing the dependecies
  * with npm
    * run: `npm install`
  * with yarn
    * run: `yarn install`
4. ### Getting the environment started
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
5. ### Start the App
  * run: `npm run serve` 
