import { mount } from "@vue/test-utils";
import List from "@/components/List";

describe("List.vue", () => {
  it("render li for each item in props.items", () => {
    const wrapper = mount(List, {
      propsData: {
        items: ["item 1", "item 2"]
      }
    });
    expect(wrapper.findAll("li")).toHaveLength(wrapper.props("items").length);
  });
});
