import { shallowMount } from "@vue/test-utils";
import CallbackFunc from "@/components/CallbackFunc";

describe("CallbackFunc.vue", () => {
  it("callback function", () => {
    const wrapper = shallowMount(CallbackFunc);
    return wrapper.vm.fetchUser(true).then(res => {
      expect(res).toEqual(wrapper.vm.isCallback);
    });
  });
  it("callback async true function", async () => {
    const wrapper = shallowMount(CallbackFunc);
    const isCallbackState = true;
    await wrapper.vm.fetchUser(isCallbackState);
    expect(isCallbackState).toEqual(wrapper.vm.isCallback);
  });
  it("callback async false function", async () => {
    const wrapper = shallowMount(CallbackFunc);
    const isCallbackState = false;
    await wrapper.vm.fetchUser(isCallbackState);
    expect(isCallbackState).toEqual(wrapper.vm.isCallback);
  });
});
