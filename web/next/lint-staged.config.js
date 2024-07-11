const path = require(`path`)

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => {
      const val = path.relative(process.cwd(), f)
      // Strip off the leading path segments since the command runs from the project root
      return val.replace(`web/next`, ``)
    })
    .join(` --file `)}`

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
}
