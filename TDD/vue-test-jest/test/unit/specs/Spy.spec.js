import { shallowMount } from "@vue/test-utils";
import Spy from "@/components/Spy";
import axios from "axios";

describe("spy", () => {
  it("spyOn", () => {
    const calculator = {
      add: (a, b) => a + b
    };
    const spyOn = jest.spyOn(calculator, "add"); // calculator의 add가 호출할때마다 spyOn에 히스토리가 쌓이게 됨
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
    expect(spyOn).toHaveBeenCalledTimes(1);
    expect(spyOn).toBeCalledWith(2, 3);
  });
  it("axios spyOn", async () => {
    const wrapper = shallowMount(Spy);
    axios.get = jest.fn().mockResolvedValue({
      data: {
        id: 1,
        name: "minho"
      }
    });

    const user = await wrapper.vm.findOne(1);
    expect(user).toHaveProperty("id", 1);
    expect(user).toHaveProperty("name", "minho");
  });
});
