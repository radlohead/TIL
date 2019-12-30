import { shallowMount } from "@vue/test-utils";
import CallbackFunc from "@/components/CallbackFunc";

describe("CallbackFunc.vue", () => {
  it("callback function", () => {
    const wrapper = shallowMount(CallbackFunc);
    return wrapper.vm.fetchUser(true).then(res => {
      expect(res).toEqual(wrapper.vm.isCallback);
    });
  });
});
