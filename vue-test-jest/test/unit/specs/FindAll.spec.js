import { shallowMount } from "@vue/test-utils";
import FindAll from "@/components/FindAll";

describe("FindAll", () => {
  it("create", () => {
    const wrapper = shallowMount(FindAll);
    wrapper.vm.users.push({ id: 1 });
    wrapper.vm.users.push({ id: 2 });
    expect(wrapper.vm.users.length).toEqual(2);
  });
  it("findAll", () => {
    const wrapper = shallowMount(FindAll);
    wrapper.vm.users.push({ id: 1 });
    wrapper.vm.users.push({ id: 2 });

    const users = wrapper.vm.users;
    expect(users).toContainEqual({ id: 1 });
    expect(users).toContainEqual({ id: 2 });
  });
});
