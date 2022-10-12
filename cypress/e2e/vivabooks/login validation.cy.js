describe("test login page", () => {
    let errors = {
        a: "Invalid email address.",
        aa: "Invalid email address.",
        "aaa@": "Invalid email address.",
        "aaa,": "Invalid email address.",
        "aaa@gmail": "Invalid email address.",
        "aa@gmailcom": "Invalid email address.",
        "aa@gmail.co": "Invalid email address.",
        "123@gmail,com": "Invalid email address.",
        "123$gmail.com": "Invalid email address.",
        'plainaddress': "Invalid email address.",
        "#@%^%#$@#$@#.com": "Invalid email address.",
        "@example.com": "Invalid email address.",
        "Joe Smith <email@example.com>": "Invalid email address.",
        "email.example.com": "Invalid email address.",
        "email@example@example.com": "Invalid email address.",
        ".email@example.com": "Invalid email address.",
        "email.@example.com": "Invalid email address.",
        "email..email@example.com": "Invalid email address.",
        "あいうえお@example.com": "Invalid email address.",
        "email@example.com (Joe Smith)": "Invalid email address.",
        "email@example": "Invalid email address.",
        "email@-example.com": "Invalid email address.",
        "email@example.web": "Invalid email address.",
        "email@111.222.333.44444": "Invalid email address.",
        "email@example..com": "Invalid email address.",
        "Abc..123@example.com": "Invalid email address."
    }
    let pass = {
        'kasyakk': 'There is 1 error',
        'kaya': 'There is 1 error',
        'saya   ': 'There is 1 error',
        'huyfhjghjgjhgj98908890809808hghhhhfhgfhg': 'There is 1 error',

    }



    it("sign in and validate the user", () => {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account")
        cy.url().should("include", "/index.php?controller=authentication&back=my-account")

        cy.get(".page-heading")
            .contains("Authentication")
            .should("be.visible")

        Object.entries(errors).forEach(([key, value]) => {
            cy.get("#email").type(key)
            cy.get("button").contains("Sign in").click()
            cy.get(".alert-danger")
                .should("be.visible")
                .and("contain.text", value)
        })


        Object.entries(pass).forEach(([key, value]) => {
            cy.get('#passwd').type(key)
            cy.get("button").contains("Sign in").click()
            cy.get('.alert-danger')
                .should("be.visible")
                .and("contain.text", value)

        })
    })
});
