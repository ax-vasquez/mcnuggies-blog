import React from 'react'
import './src/css/index.css'

import {
    ReduxProvider,
} from './wrap-root-element'

export const wrapRootElement = (props) => {
    return <ReduxProvider {...props} />
}
