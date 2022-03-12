/**
 * A helper method to convert any string into a lower-case, kebab-case string. This is useful
 * for using text from a "presentation" format to one that can be used for unique keys.
 * 
 * For example, the side bar options each have a unique `key` - this key is set by converting
 * the string from something like `Components Demo` to `components-demo`.
 */
const kebabCase = (str?: string) => {
    if (!str) {
      return ``
    }
    return str.split(``).map((letter, idx) => {
      return letter.toUpperCase() === letter
       ? `${idx !== 0 ? `-` : ``}${letter.toLowerCase()}`
       : letter
    }).join(``)
}

export default kebabCase
