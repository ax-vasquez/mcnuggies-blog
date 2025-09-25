describe(`about page`, () => {
    beforeEach(() => {
        cy.visit(Cypress.env(`about_url`))
    })
    
    context(`user interface`, () => {
        it(`shows the author avatar image`, () => {
            cy.getCy('author-avatar').should('be.visible')
        })
        it(`shows the author name and description`, () => {
            cy.getCy('author-name').should('be.visible')
            cy.getCy('author-description').should('be.visible')
        })
        it(`shows the linked icon for the author's GitHub`, () => {
            cy.getCy('github').should('be.visible')
        })
        it(`shows the linked icon for the author's LinkedIn`, () => {
            cy.getCy('linkedin').should('be.visible')
        })
        it(`shows the work history section`, () => {
            cy.getCy('work-history').should('be.visible')
        })
    })
})

export {}
