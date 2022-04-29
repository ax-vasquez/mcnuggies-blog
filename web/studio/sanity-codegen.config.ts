// eslint-disable-next-line import/no-extraneous-dependencies
import {SanityCodegenConfig} from 'sanity-codegen'

const config: SanityCodegenConfig = {
  schemaPath: './schemas/schema.ts',
  outputPath: '../next/types/sanity.ts',
}

export default config
