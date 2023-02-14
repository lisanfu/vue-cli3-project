import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Button from '@/components/global/cc-button/main.vue'
describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg }
        })
        expect(wrapper.text()).to.include(msg)
    })
})

describe('main.vue', () => {
    it('renders', () => {
        const wrapper = shallowMount(Button)
        expect(wrapper.text())
    })
})
