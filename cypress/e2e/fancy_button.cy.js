describe("FancyButton", () => {
    it("renders and can be clicked", () => {
        cy.visit("http://localhost:3000");
        cy.get('[data-testid="fancy-btn"]').should("contain", "Click Me");
        cy.get('[data-testid="fancy-btn"]').click();
        cy.get('[data-testid="fancy-btn"]').should("contain", "Clicked!");
        cy.get('[data-testid="fancy-btn"]').should("have.class", "clicked");
    });
    it("shows icon, tooltip, and confetti", () => {
        cy.visit("http://localhost:3000");
        // Icon check
        cy.get('[data-testid="fancy-btn"] .fancy-icon').should('exist').and('contain', '✨');
        // Tooltip appears on hover (before clicking) - using realHover from cypress-real-events
        cy.get('[data-testid="fancy-btn"]').realHover();
        cy.get('.fancy-tooltip').should('be.visible').and('contain', 'Give it a try!');
        cy.get('[data-testid="fancy-btn"]').realHover({ position: 'topLeft' }).realHover({ position: 'bottomRight' }); // Move mouse away
        cy.get('.fancy-tooltip').should('not.exist');
        // Confetti appears on click
        cy.get('.confetti').should('not.be.visible');
        cy.get('[data-testid="fancy-btn"]').click();
        cy.get('.confetti').should('be.visible').and('contain', '🎉');
        // Button text and class
        cy.get('[data-testid="fancy-btn"]').should('contain', 'Clicked!');
        cy.get('[data-testid="fancy-btn"]').should('have.class', 'clicked');
        // Tooltip should not appear after clicking (since clicked=true)
        cy.get('[data-testid="fancy-btn"]').realHover();
        cy.get('.fancy-tooltip').should('not.exist');
    });
});