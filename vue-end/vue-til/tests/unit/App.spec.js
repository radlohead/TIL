import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
    it('fetchPost method', async () => {
        const wrapper = shallowMount(App)
        const response = await wrapper.vm.fetchPost()
        expect(response.data).toHaveProperty('userId')
        expect(response.data).toHaveProperty('id')
        expect(response.data).toHaveProperty('title')
        expect(response.data).toHaveProperty('body')
    })
})
