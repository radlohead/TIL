import { shallowMount } from "@vue/test-utils";
import List from "@/containers/List";

describe("List", () => {
  it("list data", () => {
    const wrapper = shallowMount(List);
    const itemList = ["item1", "item2"];
    expect(wrapper.vm.itemList).toEqual(itemList);
  });
});
