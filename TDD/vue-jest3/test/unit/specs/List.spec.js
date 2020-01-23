import { shallowMount } from "@vue/test-utils";
import List from "@/components/List";

describe("List", () => {
  const wrapper = shallowMount(List);
  it("handleClickAddTodo", () => {
    wrapper.vm.$refs.inputText.value = "a";
    wrapper.vm.handleClickAddTodo();
    wrapper.vm.$refs.inputText.value = "b";
    wrapper.vm.handleClickAddTodo();
    expect(wrapper.vm.todoList).toEqual(["a", "b"]);
  });
  it("todoList rendering", () => {
    expect(wrapper.findAll(".todo-wrap > li")).toHaveLength(
      wrapper.vm.todoList.length
    );
  });
  it("handleClickRemoveTodo", () => {
    wrapper.vm.handleClickRemoveTodo(1);
    expect(wrapper.vm.todoList).toEqual(["a"]);
  });
});
