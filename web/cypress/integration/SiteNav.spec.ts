
describe(`SiteNav`, function () {
    context(`basic functionality`, function () {
        beforeEach(() => {
            cy.visit(`http://localhost:8000/`)
        })
        it(`can open and close the side bar`, function () {
            cy.get('[data-cy="sidebar"]').should('not.be.visible')
            cy.get('[data-cy="sidebar-btn"]').should('exist').click()
            cy.get('[data-cy="sidebar"]').should('be.visible')
            cy.get('[data-cy="sidebar-btn"]').should('exist').click()
            cy.get('[data-cy="sidebar"]').should('not.be.visible')
        })
        it(`has all expected root menu options`, function () {
            cy.get('[data-cy="sidebar-btn"]').should('exist').click()
            cy.get('[data-cy="sidebar-menu-option-home"]').should(`be.visible`)
            cy.get('[data-cy="sidebar-menu-option-blog"]').should(`be.visible`)
            cy.get('[data-cy="sidebar-menu-option-about"]').should(`be.visible`)
        })
    })
    context(`root page navigation`, function () {
        context(`from /`, function () {
            beforeEach(() => {
                cy.visit(`http://localhost:8000/`)
                cy.get('[data-cy="sidebar-btn"]').should('exist').click()
            })
            it(`can navigate to the about page`, function () {
                cy.get('[data-cy="sidebar-menu-option-about"]').click()
                cy.url().should(`include`, `/about`)
            })
            it(`can navigate to the blog page`, function () {
                cy.get('[data-cy="sidebar-menu-option-blog"]').click()
                cy.url().should(`include`, `/blog`)
            })
        })
        context(`from /blog`, function () {
            beforeEach(() => {
                cy.visit(`http://localhost:8000/blog`)
                cy.get('[data-cy="sidebar-btn"]').should('exist').click()
            })
            it(`can navigate to the home page`, function () {
                cy.get('[data-cy="sidebar-menu-option-home"]').click()
                cy.url().should(`eq`, `http://localhost:8000/`)
            })
            it(`can navigate to the about page`, function () {
                cy.get('[data-cy="sidebar-menu-option-about"]').click()
                cy.url().should(`include`, `/about`)
            })
        })
        context(`from /about`, function () {
            beforeEach(() => {
                cy.visit(`http://localhost:8000/about`)
                cy.get('[data-cy="sidebar-btn"]').should('exist').click()
            })
            it(`can navigate to the home page`, function () {
                cy.get('[data-cy="sidebar-menu-option-home"]').click()
                cy.url().should(`eq`, `http://localhost:8000/`)
            })
            it(`can navigate to the blog page`, function () {
                cy.get('[data-cy="sidebar-menu-option-blog"]').click()
                cy.url().should(`include`, `/blog`)
            })
        })
    })
})
