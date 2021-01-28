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

        this.getImg()
    }

    async getImg() {
        console.log('getImg')

        const imgs = [
            {
                name: '배너 1',
                url:
                    'https://d2x8kymwjom7h7.cloudfront.net/live/application_no/119000/application_no/119000/indie-center/indie_home_banner_turntack_sale_3.png',
            },
            // {
            //     name: '배너 2',
            //     url:
            //         'https://d2x8kymwjom7h7.cloudfront.net/live/application_no/119000/application_no/119000/indie-center/indie_home_banner_turntack_sale_31.png',
            // },
            {
                name: '배너 3',
                url:
                    'https://d2x8kymwjom7h7.cloudfront.net/live/application_no/119000/application_no/119000/indie-center/indie_home_banner_turntack_sale_2.png',
            },
        ]
        const loadImage = (url: string) =>
            new Promise<{ height: number }>((resolve) => {
                let img = new Image()
                img.src = url
                img.onload = () => {
                    resolve(img)
                }
                return img
            })

        function* map(f: any, iter: any) {
            for (const a of iter) {
                yield a instanceof Promise ? a.then(f) : f(a)
            }
        }
        async function reduceAsync(f: any, acc: any, iter: any) {
            for await (const a of iter) {
                acc = f(acc, a)
            }
            return acc
        }
        const f2 = (imgs: any) => {
            return reduceAsync(
                (a: any, b: any) => a + b,
                0,
                map(async ({ url }: any) => {
                    const res: any = await loadImage(url)
                    return res.height
                }, imgs)
            )
        }
        f2(imgs).then((a) => console.log(a))
    }

    private openPopup(): void {
        window.open(`/popup?name=${this.name}`, 'Popup')
    }
}
