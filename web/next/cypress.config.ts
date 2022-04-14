import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config
    },
    env: {
      home_url: `http://localhost:3000`,
      blog_url: `http://localhost:3000/blog-feed`,
    }
  },
})
