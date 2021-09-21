<template>
    <b-navbar id="navApp">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src=""
                    alt=""
                >
            </b-navbar-item>
        </template>
        <template #start>
            <!-- <div v-for="route in loadedRoutes" v-bind:key="route">
                <b-navbar-item tag="router-link" :to="{ path: route.path }">
                    {{route.name}}
                </b-navbar-item>
            </div> -->
                <b-navbar-item v-for="item in menu" v-bind:key="item.name">
                    <a tag="router-link" :to="{ path: item.path }">{{item.name}}</a>
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

export default {
    name: 'navApp',
    components: { WalletConnect },
    data () {
        return {
            menu: [
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'About',
                    path: '/about'
                }
            ]
        }
    },
    methods: {

    }
}
</script>
