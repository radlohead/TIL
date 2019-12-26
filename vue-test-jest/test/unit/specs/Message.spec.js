import { mount } from "@vue/test-utils";
import Message from "@/components/Message";

describe("Message.vue", () => {
  it("default msg", () => {
    const wrapper = mount(Message);
    const defaultMessage = "default message";
    expect(wrapper.text()).toBe(defaultMessage);
  });

  it("render props message", () => {
    const msg = "new message";
    const wrapper = mount(Message, {
      propsData: { msg }
    });
    expect(wrapper.props("msg")).toBe(msg);
  });
});
