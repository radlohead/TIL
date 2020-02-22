import { shallowMount } from "@vue/test-utils";
import FindAll from "@/components/FindAll";

describe("FindAll", () => {
  const wrapper = shallowMount(FindAll);

  it("create", () => {
    wrapper.vm.users.push({ id: 1 }, { id: 2 });
    expect(wrapper.vm.users.length).toEqual(2);
  });
  it("findAll", () => {
    wrapper.vm.create([{ id: 1 }, { id: 2 }]);
    const users = wrapper.vm.users;
    expect(users).toContainEqual({ id: 1 });
    expect(users).toContainEqual({ id: 2 });
  });
  it("destroy", () => {
    wrapper.vm.create([{ id: 1 }, { id: 2 }, { id: 3 }]);
    const destroyEach = id => {
      wrapper.vm.destroy(id);
      return wrapper.vm.users.map(item => item.id);
    };
    expect(destroyEach(1)).toEqual([2, 3]);
    expect(destroyEach(2)).toEqual([3]);
  });
  it("update", () => {
    wrapper.vm.create([{ id: 1 }, { id: 2 }, { id: 3 }]);
    wrapper.vm.update(1, { id: 4 });
    const usersId = wrapper.vm.users.map(item => item.id);
    expect(wrapper.vm.users).toContainEqual({ id: 4 });
  });
});
