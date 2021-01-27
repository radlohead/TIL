import { Vue, Component } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
    template: require('./Test1.html'),
    computed: mapState('popup', ['name', 'storeName']),
})
export default class Test1 extends Vue {
    private name!: string

    created(): void {
        console.log('created')
    }

    mounted(): void {
        console.log('mounted')
    }

    private openPopup(): void {
        window.open(`/popup?name=${this.name}`, 'Popup')
    }
}
