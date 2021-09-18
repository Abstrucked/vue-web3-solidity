<template>
    <div id="walletconnect">
        <div v-if="account" class="b-box buttons">
            <tag class="tag is success">{{account}}</tag>
            <b-button class="button is-danger" v-on:click="disconnect()">Disconnect</b-button>

        </div>
        <div v-if="!account" class="buttons">
            <b-button class="button is-primary" v-on:click="connect()">Connect</b-button>
        </div>
    </div>
</template>

<script>
import store, {_connect, _disconnect, checkAndGo} from '@/utils/store.js'

export default {
  name: 'walletconnect',
  computed: {
    account () {
      return store.account
    }
  },
  mounted () {
    checkAndGo()
  },
  methods: {
    connect () {
      _connect()
    },
    disconnect () {
      _disconnect()
    }
  }
}
</script>
