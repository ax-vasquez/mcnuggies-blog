/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
        getCy: typeof getCy
    }
  }
}

function getCy(cySelector: string) {
  return cy.get(`[data-cy="${cySelector}"]`)
}

Cypress.Commands.add(`getCy`, getCy)

// TODO: remove this if/when this file is using imports - just needs EITHER an import or this placeholder export
// Workaround to suppress TS error 'Augmentations for the global scope can only be directly nested in external modules or ambient module declarations'
export {}