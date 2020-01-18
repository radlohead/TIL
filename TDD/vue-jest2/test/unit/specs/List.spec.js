import { shallowMount } from "@vue/test-utils";
import List from "@/components/List";

describe("List.vue", () => {
  it("list data", () => {
    const wrapper = shallowMount(List);
    expect(wrapper.vm.list).toEqual([1, 2, 3]);
  });
  it("list length", () => {
    const wrapper = shallowMount(List);
    expect(wrapper.findAll("li")).toHaveLength(3);
  });
});
