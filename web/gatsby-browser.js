import React from 'react'
import './src/sass/main.scss'

import {
    ReduxProvider,
} from './wrap-root-element'

export const wrapRootElement = (props) => {
    return <ReduxProvider {...props} />
}
