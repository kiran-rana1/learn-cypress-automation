import bookData from '../../fixtures/bookISBN.json'
import { faker } from '@faker-js/faker';


const quantity = 250000
let listPrice, totalPrice

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
        cy.get(".book-search-head").type(bookData.ISBN)
        // cy.get('form').submit()
        cy.get("button").contains("Search").click()

        cy.get(".panel-info-full").should("be.visible").and("contain.text", bookData.ISBN)

    });

    it('select the qunatity for the selected textbook, click next and validate it lands on the cart summary page', () => {
        cy.get(".pro-img").click()
        cy.get("#quantity").clear().type(quantity)



        cy.get('[value="Buy Now"]').click()
        cy.url().should('include', '/cart')
        cy.get(".table").should("contain.text", bookData.title)
        cy.get('[name="qty"]').should('be.visible').and('have.value', quantity)


        cy.get('tbody > tr > :nth-child(4)').invoke('text').then(price => {
            listPrice = Number(price.trim().replace(',', '').substr(1))

            cy.get('tbody > tr > :nth-child(6)').invoke('text').then(total => {
                totalPrice = Number(total.trim().replace(',', '').substr(1))
                expect(totalPrice).to.equal(listPrice * quantity)
                expect(listPrice * quantity).to.equal(totalPrice)
            })
        })




        cy.pause()

        cy.get('.page-section-title').should('be.visible').and('contain.text', 'Shopping Cart')
        cy.get("button").contains("Next").click()
        cy.url().should('include', '/shipping')

    });


    it('enter new billing address and checkout', () => {
        cy.get('#NewBillingAddress').click()

        cy.get("#sameas").check()
        cy.get('[placeholder="Full Name"]').first().should("be.visible").type(faker.name.fullName())
        cy.get('[placeholder="Phone Number"]').first().type("1234567")
        cy.get('[placeholder="Address (Area and Street)"]').first().type("22 street")
        cy.get('[placeholder="City/District/Town"]').first().type(faker.address.city)
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

