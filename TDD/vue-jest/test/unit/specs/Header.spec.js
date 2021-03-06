import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header";

describe("Header.vue", () => {
  it("title data", () => {
    const wrapper = shallowMount(Header);
    expect(typeof wrapper.vm.title).toBe("string");
  });
});
