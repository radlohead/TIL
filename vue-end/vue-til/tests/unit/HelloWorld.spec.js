import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg }
        })
        // exists는 해당 객체가 존재하면 true를 반환하고 존재하지 않으면 false를 반환한다
        expect(wrapper.exists()).toBeTruthy()
        // text 메소드는 해당 태그내에 텍스트를 출력한다.
        expect(wrapper.find('.item-0').text()).toBe('0')
    })
})
