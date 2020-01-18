import { shallowMount, mount } from "@vue/test-utils";
import App from "@/App";

describe("App.vue", () => {
  it("title", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.vm.title).toBe("TDD..");
  });
  it("List rendering", () => {
    const wrapper = mount(App);
    expect(wrapper.findAll("li")).toHaveLength(3);
  });
});
