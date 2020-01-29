describe("List", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("handleClickAddTodo", () => {
    cy.get(".inputText").then($el => {
      $el[0].setAttribute("value", "aaaa");
    });
    cy.wait(500);
    cy.get(".add-btn").click();
    cy.get(".inputText").then($el => {
      $el[0].setAttribute("value", "bbbb");
    });
    cy.wait(500);
    cy.get(".add-btn").click();

    cy.wait(500);
    cy.get(".todo-list:nth-child(2) > button").click();
  });
});
