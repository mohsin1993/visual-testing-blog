describe("Home page", () => {
    it("should render correctly", () => {
        cy.visit(Cypress.env("rootUrl"));
        cy.get('[data-test-id="main-content"]').should("be.visible");
        cy.matchImageSnapshot("home-page-first-render");
    });
});
