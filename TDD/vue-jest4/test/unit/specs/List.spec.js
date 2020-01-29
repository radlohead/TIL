import { shallowMount } from "@vue/test-utils";
import List from "@/components/List";

describe("List.vue", () => {
  const wrapper = shallowMount(List);
  it("handleClickAddTodo", () => {
    const inputText = wrapper.vm.$refs.inputText;
    inputText.value = "aaa";
    expect(inputText.value).toEqual("aaa");

    wrapper.vm.handleClickAddBtn();
    expect(wrapper.vm.todoList).toEqual(["aaa"]);

    inputText.value = "bbb";
    wrapper.vm.handleClickAddBtn();
    expect(wrapper.vm.todoList).toEqual(["aaa", "bbb"]);
  });
  it("todo list li element length", () => {
    expect(wrapper.findAll("li")).toHaveLength(wrapper.vm.todoList.length);
  });
  it("handleClickRemoveTodo", () => {
    wrapper.vm.handleClickRemoveTodo(1);
    expect(wrapper.vm.todoList).toEqual(["aaa"]);
  });
});
