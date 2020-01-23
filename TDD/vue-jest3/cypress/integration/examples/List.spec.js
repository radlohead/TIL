describe("List", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("handleClickAddTodo li rendering", () => {
    cy.get(".inputText").then($el => {
      $el[0].setAttribute("value", "a1");
    });
    cy.wait(500);
    cy.get(".add-btn").click();
    cy.get(".inputText").then($el => {
      $el[0].setAttribute("value", "a2");
    });
    cy.wait(500);
    cy.get(".add-btn").click();
    cy.get(".inputText").then($el => {
      $el[0].setAttribute("value", "a3");
    });
    cy.wait(500);
    cy.get(".add-btn").click();

    cy.get(".todo-wrap li:nth-child(2) > button").click();
  });
});
