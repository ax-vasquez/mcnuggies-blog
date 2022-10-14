describe(`blog article`, () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env(`article_url_root`)}/${Cypress.env(`test_article_name`)}`)
    })

    context(`user interface`, () => {
        it(`does a thing`, () => {

        })
    })
})

export {}
