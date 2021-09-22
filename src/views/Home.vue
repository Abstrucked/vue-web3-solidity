<template>
    <div id="home">
        <Menu></Menu>
        <h1>HOME</h1>
        <b-button tag="button" class="button is-primary" v-on:click="status()">Get Contract</b-button>
    </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import {getContract} from '../utils/store.js'
export default {
    name: 'home',
    components: {
        Menu
    },
    data () {
        return {

        }
    },
    methods: {
        status () {
            getContract()
        }
    }
}
</script>
