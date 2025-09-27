
describe(`blog feed`, () => {
    beforeEach(() => {
        cy.visit(Cypress.env(`blog_url`))
    })

    context(`user interface`, () => {
        it(`shows the search bar`, () => {
            cy.getCy(`blog-search-field`).should(`be.visible`)
        })
        it(`shows the filter section`, () => {
            cy.getCy(`blog-category-filters`).scrollIntoView().should(`be.visible`)
        })
        it(`shows the feed of articles`, () => {
            cy.getCy(`blog-feed`).scrollIntoView().should(`be.visible`)
        })
    })

    context(`filtering`, () => {
        it(`filters the list of articles by search`, () => {
            cy.getCy(`blog-search-field`).type(`zzzzz`)
            cy.getCy(`blog-feed-item`).should(`have.length`, 0)
            cy.getCy(`blog-search-field`).clear()
            cy.getCy(`blog-feed-item`).should(`have.length.above`, 0)
        })
        it(`filters the list of articles by category`, () => {
            cy.getCy(`blog-feed-item`).should(`have.length.above`, 0)
            cy.getCy(`category-filter`).each(($el, index, $list) => {
                cy.wrap($el).click()
            })
            cy.getCy(`blog-feed-item`).should(`have.length`, 0)
            cy.getCy(`category-filter`).each(($el, index, $list) => {
                cy.wrap($el).click()
            })
            cy.getCy(`blog-feed-item`).should(`have.length.above`, 0)
        })
    })
})

export {}
