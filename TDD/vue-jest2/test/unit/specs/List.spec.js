import { shallowMount } from "@vue/test-utils";
import List from "@/components/List";

describe("List.vue", () => {
  const wrapper = shallowMount(List);

  test("list data", () => {
    expect(wrapper.vm.list).toEqual([1, 2, 3]);
  });
  test("list length", () => {
    expect(wrapper.findAll("li")).toHaveLength(3);
  });
  test("list fetchPost", async () => {
    const postNum = 1;
    const response = await wrapper.vm.fetchPost(postNum);
    expect(response).toHaveProperty("id", postNum);
  });
  test("list fetchPost2", async () => {
    const postNum = 2;
    const response = await wrapper.vm.fetchPost2(postNum);
    expect(response).toHaveProperty("id", postNum);
  });
  test("list fetchPost3", () => {
    const isState = true;
    const response = wrapper.vm.fetchPost3(isState);
    response.then(res => {
      expect(res).toBeTruthy();
    });
  });
  test("list fetchPost3", async () => {
    const isState = false;
    const response = await wrapper.vm.fetchPost3(isState);
    expect(response).toBeFalsy();
  });
});
