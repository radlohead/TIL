describe("MockFunc", () => {
  it("async mock return value", async () => {
    const mockFn = jest.fn();
    const mockValue = "mock return";
    mockFn.mockResolvedValue(mockValue);
    const res = await mockFn();
    expect(res).toBe(mockValue);
  });
  it("mockImplementation", () => {
    const mockFn = jest.fn();
    mockFn.mockImplementation(mock => `test is ${mock}`);
    expect(mockFn(1)).toBe("test is 1");
  });
  it("mockFn call", () => {
    const mockFn = jest.fn();
    mockFn("a");
    mockFn(["b", "c"]);
    expect(mockFn).toHaveBeenCalledTimes(2); // mockFn이 총 호출된 횟수
    expect(mockFn).toBeCalledWith("a");
    expect(mockFn).toBeCalledWith(["b", "c"]);
  });
});
