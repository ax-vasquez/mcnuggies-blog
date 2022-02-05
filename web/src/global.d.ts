/* eslint-disable semi */
/* eslint-disable quotes */
declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}

declare module '*.png' {
    const content: string
    export = content
}
