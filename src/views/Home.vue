<template>
  <div id="home">
    <Menu></Menu>
    <section id="form" class="hero">
      <div class="hero-body">
        <b-field>
        <div tag="tag" v-if="myStatus !== 'busy'" class="heading tag is-success">{{myStatus}}</div>
        <div tag="tag" v-if="myStatus === 'busy'" class="heading tag is-danger">{{myStatus}}</div>
      </b-field>
      <hr>
      <b-field label="New Status">
        <b-input
          v-model="newStatus"
          value=""
          hint="new status"
        ></b-input>
      </b-field>
      <b-button tag="button" class="button is-primary" v-on:click="changeStatus()">Change Status</b-button>
      </div>
    </section>
    <hr>
    <hr>
  </div>
</template>

<script>
  import Menu from '../components/Menu.vue'
  import store, {setStatus, getStatus} from '../utils/store.js'
  export default {
    name: 'home',
    components: {
        Menu
    },
    data () {
        return {
          newStatus: 'new status'
        }
    },
    created () {
      getStatus()
    },
    methods: {
        changeStatus () {
            setStatus(this.newStatus)
        }
    },
    computed: {
      myStatus () {
        getStatus()
        return store.status
      }
    }
  }
</script>

<style>
  #form {
    padding: 1em;
    margin: 3em;
  }
  
</style>