<template>
    <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <ul>
            <li>userId: {{ post.userId }}</li>
            <li>title: {{ post.title }}</li>
            <li>body: {{ post.body }}</li>
        </ul>
    </div>
</template>

<script>
    import { instance } from '@/api/index'
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        data() {
            return {
                post: {}
            }
        },
        created() {
            this.fetchPost()
        },
        methods: {
            async fetchPost() {
                const { data } = await instance.get('/posts/1')
                this.post = data
            }
        },
        components: {
            HelloWorld
        }
    }
</script>
