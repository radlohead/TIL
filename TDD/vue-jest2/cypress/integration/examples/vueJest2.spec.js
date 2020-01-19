describe("vue-jest2", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });
  it("dom is rendering", () => {
    cy.get("#app").find("h1");
    cy.get(".list");
    cy.get(".list")
      .find("li")
      .then($el => {
        expect($el).to.have.lengthOf(3);
      });
  });
  it("todoList add 2 is delete 1", () => {
    cy.get(".inputText").then($el => {
      $el[0].setAttribute("value", "aadff");
      cy.get("button").click();
    });
    cy.get(".inputText").then($el => {
      $el[0].setAttribute("value", "cvcv");
      cy.get("button").click();
    });
    cy.get(".todo-wrap")
      .find("li")
      .then($el => {
        expect($el).to.have.lengthOf(2);
      });
    cy.get(".delete-btn").then($el => {
      $el.click();
    });
  });
});
