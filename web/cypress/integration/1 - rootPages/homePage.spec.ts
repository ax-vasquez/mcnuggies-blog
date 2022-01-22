describe(`Home page`, () => {
    beforeEach(() => {
        cy.visit(`http://localhost:9000/`)
    })
    it(`has the correct banner links`, () => {
        cy.get(`#home-banner-about`).should(`be.visible`)
        cy.get(`#home-banner-blog`).should(`be.visible`)
    })
    it(`navigates to the blog page without issue`, () => {
        cy.get(`#home-banner-blog`).click()
        cy.url().should(`contain`, `blog`)
    })
    it(`navigates to the about page without issue`, () => {
        cy.get(`#home-banner-about`).click()
        cy.url().should(`contain`, `about`)
    })
})
