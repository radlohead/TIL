import axios from "axios";
import MockAdapter from "axios-mock-adapter";
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
  it("async posts", async () => {
    const wrapper = shallowMount(List);
    const response = await wrapper.vm.getPost();
    expect(response.data).toHaveProperty("userId", 1);
    expect(typeof response.data.title).toBe("string");
  });
});
