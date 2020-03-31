<template>
    <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
    import { instance } from '@/api/index'
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        created() {
            this.fetchPost()
        },
        methods: {
            async fetchPost() {
                const response = await instance.get('/posts/1')
                console.log(response.data)
            }
        },
        components: {
            HelloWorld
        }
    }
</script>
