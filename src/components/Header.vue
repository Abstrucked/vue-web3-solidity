<template>
    <b-navbar id="header">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <!-- <div v-for="route in loadedRoutes" v-bind:key="route">
                <b-navbar-item tag="router-link" :to="{ path: route.path }">
                    {{route.name}}
                </b-navbar-item>
            </div> -->
                <b-navbar-item v-for="route in loadedRoutes" v-bind:key="route" tag="router-link" :to="{ path: route.path }">
                    {{route.name}}
                </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <WalletConnect></WalletConnect>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import WalletConnect from './WalletConnect.vue'
import {routes} from '../router'
export default {
    name: 'header',
    data () {
        return {
            
        }
    },
    components: { WalletConnect },
    computed: {
        loadedRoutes () {
            console.log(routes)
            return routes
        }
    },
    methods: {

    }
}
</script>
