<template>
  <div id="walletconnect">
    <!-- <section class="section">
  <h1 class="title">Section</h1>
  <h2 class="subtitle">
    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
  </h2>
</section> -->
    <section v-if="account" class="section">
      <b-field>
        <b-tag class="is-success">{{account}}</b-tag>
      </b-field>
      <b-button class="button is-danger" v-on:click="disconnect()">Disconnect</b-button>
    </section>
    <div v-if="!account" class="buttons">
      <b-button class="button is-success" v-on:click="connect()">Connect</b-button>
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
