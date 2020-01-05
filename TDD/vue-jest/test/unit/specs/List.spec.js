import { shallowMount, mount } from "@vue/test-utils";
import List from "@/containers/List";

describe("List", () => {
  it("data: itemList", () => {
    const wrapper = shallowMount(List);
    const itemList = ["item1", "item2"];
    expect(wrapper.vm.itemList).toEqual(itemList);
  });
  it("props: item", () => {
    const wrapper = shallowMount(List, {
      propsData: {
        propsItem: ["props item1", "props item2"]
      }
    });
    expect(wrapper.findAll(".lite-item")).toHaveLength(
      wrapper.props("propsItem").length
    );
  });
});
