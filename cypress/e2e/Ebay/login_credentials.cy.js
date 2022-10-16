describe('login credentials', () => {
    it('visit ebay homepage and click on ebay summary', () => {
        cy.visit('https://www.ebay.com.au/')
        cy.title().should('eq', 'Electronics, Cars, Fashion, Collectibles & More | eBay')
        cy.get('[class="gh-eb-li-a gh-rvi-menu"]').first().trigger('mouseover').click()
        cy.title().should('eq', 'Sign in or Register | eBay')
    });
    it('visit sign in page and validate error message,while entering empty username and empty password', () => {
        cy.get('button').contains('Continue').click()
        cy.get('#errormsg').should('exist').and('contain.text', `Oops, that's not a match.`)
        cy.get('#errormsg').should('exist').and('contain.text', 'Oops, that\'s not a match.')
    });

});


