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
                const { data } = await instance.get('/posts/1')
                console.log(data)
            }
        },
        components: {
            HelloWorld
        }
    }
</script>
