import { shallowMount, mount } from "@vue/test-utils";
import App from "@/App";

describe("App.vue", () => {
  it("rendering", () => {
    const wrapper = mount(App);
    expect(wrapper.vm.$el.querySelector("#toggle-message")).toBeTruthy();
  });

  it("data", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.vm.itemList).toHaveLength(2);
  });
});
