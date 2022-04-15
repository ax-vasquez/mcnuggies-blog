
describe(`blog feed`, () => {
    it(`loads as expected`, () => {
        cy.visit(Cypress.env(`blog_url`))
    })
})

export {}
