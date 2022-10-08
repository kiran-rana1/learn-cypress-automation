describe("book purcahse", () => {
    it("login", () => {
        cy.visit("/account/login")
        cy.get("#input_email").type(Cypress.env('EMAIL'))
        cy.get("#input_pwd").type(Cypress.env('PASSWORD'))
        cy.get("#input_submit").click()

        cy.wait(3000)

        cy.contains('a', 'My Account').should('be.visible')


    })

    it('search for ISBN in search bar and validate it shows in the results', () => {
        cy.get(".book-search-head").type("9789393329981")
        // cy.get('form').submit()
        cy.get("button").contains("Search").click()

        cy.get(".panel-info-full").should("be.visible").and("contain.text", "9789393329981")

    });

    it('select the qunatity for the selected textbook, click next and validate it lands on the cart summary page', () => {
        cy.get(".pro-img").click()
        cy.get("#quantity").clear().type("2")
        cy.get('[value="Buy Now"]').click()
        cy.url().should('include', '/cart')
        cy.get(".table").should("contain.text", "Methods of Teaching English")
        cy.get('[name="qty"]').should('be.visible').and('have.value', '2')
        cy.get('.page-section-title').should('be.visible').and('contain.text', 'Shopping Cart')
        cy.get("button").contains("Next").click()
        cy.url().should('include', '/shipping')

    });


    it('enter new billing address and checkout', () => {
        cy.get('#NewBillingAddress').click()

        cy.get("#sameas").check()
        cy.get('[placeholder="Full Name"]').first().should("be.visible").type("reena")
        cy.get('[placeholder="Phone Number"]').first().type("1234567")
        cy.get('[placeholder="Address (Area and Street)"]').first().type("22 street")
        cy.get('[placeholder="City/District/Town"]').first().type("belgaum")
        cy.get('[placeholder="State"]').first().type("Karnataka")
        cy.get("#country").first().select("Australia")
        cy.get('[placeholder=" Landmark (Optional)"]').first().type("cinema")
        cy.get('[placeholder="Pincode"]').first().type("21890")


        cy.get('[name="address_type"]').first().select("Home")

        cy.get("button").contains("Checkout").click()

    });


    it('open billing form and check the address', () => {
        cy.get("#billing-form")
            .should("be.visible")
            .and("contain.text", "Reena")
            .and("contain.text", "1234567")
            .and("contain.text", "22 street")
            .and("contain.text", "belgaum")
            .and("contain.text", "Karnataka")
            .and("contain.text", "21890")
    });
})

