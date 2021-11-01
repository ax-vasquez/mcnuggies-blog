import React from 'react'
import './src/global.css'

import {
    ReduxProvider,
} from './wrap-root-element'

export const wrapRootElement = (props) => {
    return <ReduxProvider {...props} />
}
