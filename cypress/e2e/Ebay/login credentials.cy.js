describe('login credentials', () => {
    it('visit ebay homepage', () => {
        cy.visit('https://www.ebay.com.au/')
        cy.title().should('eq', 'Electronics, Cars, Fashion, Collectibles & More | eBay')
        // cy.get('.gh-menu').first().trigger('mouseover')
        // 
        // cy.get('.gh-menu').first().trigger('onmouseover')
        //  cy.get('.gh-menu').first().trigger('mouseenter')
        cy.get('.gh-menu').first().invoke('trigger', 'contextmenu')
        // cy.get('.gh-menu').first().rightclick();

        // cy
        //     .get('[title="My eBay"]')
        //     //.triggerHover()
        //     .then(function ($heading) { $heading.trigger('hover'); })
        //     .get('[class= " My eBay Summary"]')
        //     .should('exist')
        cy.get('[class= " My eBay Summary"]').click()
    });
});


