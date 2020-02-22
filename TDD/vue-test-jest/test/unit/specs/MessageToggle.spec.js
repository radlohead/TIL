import { mount } from "@vue/test-utils";
import MessageToggle from "@/components/MessageToggle";

describe("MessageToggle.vue", () => {
  it("toggleMessage button click", () => {
    const wrapper = mount(MessageToggle);
    const btn = wrapper.find("#toggle-message");
    expect(wrapper.vm.msg).toEqual(null);
    btn.trigger("click");
    expect(wrapper.vm.msg).toEqual("message");
    btn.trigger("click");
    expect(wrapper.vm.msg).toEqual("toggled message");
  });
});
