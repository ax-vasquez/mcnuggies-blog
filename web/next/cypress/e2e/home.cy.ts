describe(`home page`, () => {
    context(`user interface`, () => {
        it(`root page items are visible`, () => {
            [`blog`, `about`].forEach(identifier => {
                cy.getCy(`root-page-item-${identifier}`).should(`be.visible`)
            })
        })
        it(`integration items are visible`, () => {
            [
                `next-.js`,
                `sanity`,
                `netlify`,
                `cypress`,
                `e-s-lint`,
                `react- -bootstrap`,    // TODO: fix kebabCase so that spaces are stripped
                `redux`,
                `sass`
            ].forEach(identifier => {
                cy.getCy(`integration-${identifier}`).should(`exist`)
            })
        })
    })
})

export {}
