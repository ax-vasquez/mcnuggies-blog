export const kebabCase = (s: string) => {
    return s.replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}
