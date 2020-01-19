import { shallowMount } from "@vue/test-utils";
import List from "@/components/List";

describe("List.vue", () => {
  let wrapper = shallowMount(List);

  test("list data", () => {
    expect(wrapper.vm.list).toEqual([1, 2, 3]);
  });
  test("list length", () => {
    expect(wrapper.findAll(".list > li")).toHaveLength(3);
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
  test("btn trigger click", () => {
    expect(wrapper.find("button").trigger("click")).toBeUndefined();
  });
  test("input value", () => {
    const input = wrapper.find("input");
    input.setValue = "abc";
    expect(input.setValue).toEqual("abc");
  });
  test("handleClickAddTodo", () => {
    const wrapper = shallowMount(List, {
      data() {
        return {
          todoList: ["abcd"]
        };
      }
    });
    expect(wrapper.vm.todoList).toContain("abcd");
  });
  test("todoList li dom rendering", () => {
    const wrapper = shallowMount(List, {
      data() {
        return {
          todoList: [1, 2, 3]
        };
      }
    });
    expect(wrapper.findAll(".todo-wrap > li")).toHaveLength(3);
  });
  test("handleClickRemoveTodo", () => {
    const wrapper = shallowMount(List, {
      data() {
        return {
          todoList: [1, 2, 3]
        };
      }
    });
    wrapper.vm.handleClickRemoveTodo(1);
    expect(wrapper.vm.todoList).toEqual([1, 3]);
  });
});
