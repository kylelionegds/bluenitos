describe("I can see a plataform presentation and go to login or create screen", () => {
  it("enter login screen", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#to-login-button").should("have.attr", "href");
    cy.get("#to-login-button").click();
    cy.url().should("include", "/login");
  });
  it("enter create screen", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#to-create-button").should("have.attr", "href");
    cy.get("#to-create-button").click();
    cy.url().should("include", "/create");
  });
});
