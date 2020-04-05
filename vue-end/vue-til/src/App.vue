<template>
    <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <h1>{{ title }}</h1>
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
                title: 'one',
                post: {}
            }
        },
        created() {
            this.$nextTick(() => {
                console.log('created nextTick')
            })
            this.fetchPost()
        },
        mounted() {
            this.title = 'two'

            this.$nextTick(() => {
                this.title = 'three'
            })
        },
        methods: {
            fetchPost() {
                // const { data } = await instance.get('/posts/1')
                // this.post = data
                return instance
                    .get('/posts/1')
                    .then(res => {
                        return Promise.resolve(res)
                    })
                    .catch(err => {
                        console.error(err)
                    })
            }
        },
        components: {
            HelloWorld
        }
    }
</script>
