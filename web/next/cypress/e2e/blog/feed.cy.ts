import client from "../../../sanity/client"

describe(`blog feed`, () => {
    it(`calls the sanity fetch API when first loading`, () => {
        // TODO: Fix this so that it actually works... (client doesn't appear to be making requests)
        client.fetch = cy.stub()
        cy.visit(Cypress.env(`blog_url`))
        expect(client.fetch).to.be.called
    })
})

export {}
