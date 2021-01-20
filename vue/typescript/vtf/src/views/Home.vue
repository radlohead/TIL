<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <p>Count: {{ count }}</p>
    </div>
</template>

<script>
    import { Observable } from 'rxjs/Rx'
    import 'rxjs/add/observable/interval'
    import 'rxjs/add/operator/filter'

    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        data() {
            return {
                count: 0,
            }
        },
        created() {
            const obs = Observable.interval(1000)
            obs.filter((value) => value % 2 === 0).subscribe(
                (value) => (this.count = value)
            )
        },
        components: {
            HelloWorld,
        },
    }
</script>
