import {codeInput} from '@sanity/code-input'
import {dashboardTool} from "@sanity/dashboard"
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas/schema'

export default defineConfig({
  name: `default`,
  title: `my-creators-blog`,
  projectId: `4t91dfsx`,
  dataset: `production`,
  plugins: [
    deskTool(),
    codeInput(),
    dashboardTool({}), // Dashboard is a Sanity Content Studio Tool which renders any widgets configured for it
    visionTool() // Vision is a plugin for Sanity Studio for testing GROQ queries
  ],
  schema: {
    types: schemaTypes,
  },
})
