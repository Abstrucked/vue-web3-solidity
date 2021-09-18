
import Vue from 'vue'
import * as Web3 from 'web3'
// import * as contractJSON from '../build/contracts/StepByStep.json'

const state = Vue.observable({ account: '', balance: 0 })

export const _connect = async () => {
  if (window.ethereum != null) {
    try {
      await window.ethereum.send('eth_requestAccounts')
      const web3 = await new Web3(window.ethereum)
      const accounts = await web3.eth.getAccounts()
      if (accounts[0] !== undefined) {
        state.account = accounts[0]
        const balance = await web3.eth.getBalance(accounts[0])
        state.balance = balance * 0.0000000000000000001
        localStorage.setItem('connected', state.account)
      }
    } catch (error) {
      // err
    }
  } else {
    alert('Please install Metamask')
  }
}
export const _disconnect = () => {
  localStorage.removeItem('connected')
  state.account = ''
  state.balance = 0
  location.reload()
}
export const checkAndGo = async () => {
  if (window.ethereum) {
    const web3 = await new Web3(window.ethereum)
    const accounts = await web3.eth.getAccounts()
    const cache = localStorage.getItem('connected')
    if (accounts) {
      if (accounts[0] === cache) {
        state.account = accounts[0]
        const balance = await web3.eth.getBalance(accounts[0])
        state.balance = balance * 0.000000000000000001
      }
    }
  }
}

// export const getContract = async () => {
//   let web3 = ''
//   if (typeof web3 !== 'undefined') {
//     web3 = await new Web3(window.ethereum)
//     console.log('val', web3)
//   } else {
//     // set the provider you want from Web3.providers
//     web3 = await new Web3(new Web3.providers.HttpProvider(networks.dev.httpProvider))
//     console.log('null', web3)
//   }
//   const accounts = await web3.eth.getAccounts()
//   web3.eth.defaultAccount = accounts[0]
//   const account = accounts[0]
//   console.log(account)
//   const sbs = new web3.eth.Contract(contractJSON.abi, '0xA3d6D860F6A3D76D1cDB58aD5F5afe8813781F10', {
//     from: account,
//     gasLimit: web3.utils.toHex(7900000),
//     gasPrice: web3.utils.toHex(1000000000)
//   })
//   console.log(sbs)
//   await sbs.methods.claim().send({from: accounts[0]})
// }

// const networks = {
//   dev: {
//     httpProvider: 'http://localhost:7545'

//   },
//   default: this.httpProvider
// }

export default state
