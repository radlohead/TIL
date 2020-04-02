<template>
    <div class="hello">
        <h1 class="title">{{ msg }}</h1>
        <div id="app">
            <div v-for="item in list" :key="item">
                <p :class="bindId(item)">{{ item }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                list: []
            }
        },
        created() {
            for (var i = 0; i < 3; i++) {
                this._data.list.push(i)
            }
            this.$nextTick(() => {
                var dom = document.querySelector('.item-0')
                dom.style.backgroundColor = 'red'
            })
        },
        methods: {
            bindId: function(item) {
                return 'item-' + item
            }
        }
    }
</script>
<style scoped>
    @import '../css/helloWorld.css';
</style>
