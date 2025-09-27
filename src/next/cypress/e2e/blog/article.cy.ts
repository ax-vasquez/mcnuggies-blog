describe(`blog article`, () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env(`article_url_root`)}/${Cypress.env(`test_article_name`)}`)
    })

    context(`user interface`, () => {
        it(`has an article title`, () => {
            cy.getCy(`article-title`).should(`be.visible`)
        })
        it(`shows the author name`, () => {
            cy.getCy(`author-field`).should(`be.visible`)
        })
        it(`shows the publish date`, () => {
            cy.getCy(`publish-date`).should(`be.visible`)
        })
        it(`shows the article body`, () => {
            cy.getCy(`article-body`).should(`be.visible`)
        })
    })
})

export {}
