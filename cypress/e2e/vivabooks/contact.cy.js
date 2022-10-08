import address from '../../fixtures/address.json'


describe('visit contact us page and validate its functionality', () => {
    it('visit contact us page and validate its content', () => {
        cy.visit('https://www.vivabooksindia.com/')
        cy.contains('a', 'Contact Us').click()
        cy.url().should('include', '/contact-us')


        Object.entries(address).forEach(([key, value]) => {
            cy.contains(value).should('be.visible')
        });

    });

    it('fill contact form and submit', () => {
        cy.get('#con_name').type('abhijeet')
        cy.get('#con_email').type('k@gmail.com')
        cy.get('#con_phone').type('123456')
        cy.get('#con_message').type('hi welcome')
        cy.get('#submit').click()

        cy.get('.alert-success').should('contain.text', 'Your enquiry is successfully sent')

    });
});