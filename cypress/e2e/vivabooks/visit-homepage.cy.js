

describe('Test VivaBooks Homepage', () => {
    it('should validate the title of the homepage', () => {

        //action
        cy.visit('https://www.vivabooksindia.com')

        //assertion
        cy.title().should('equal', 'Viva Books | Largest Book Publisher & Distributor in India')

    });


    it('should validate VIVA BOOKS logo is present on the homepage', () => {
        cy.get('[class="site-brand"]').should('exist').and('be.visible')
    });


    it('login button is visible and present', () => {
        cy.get('[class="fa fa-sign-in"]').should('exist').and('be.visible').siblings().should('contain.text', 'Login')

    });
    it('registration is visbile and present', () => {
        cy.get('[class= "fa fa-user-plus"]').should('exist').and('be.visible').siblings().should('contain.text','registration')
        
    });
});