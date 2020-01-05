import { shallowMount } from "@vue/test-utils";
import Body from "@/components/Body";

describe("Body", () => {
  it("title data", () => {
    const wrapper = shallowMount(Body);
    expect(typeof wrapper.vm.title).toBe("string");
  });
});
