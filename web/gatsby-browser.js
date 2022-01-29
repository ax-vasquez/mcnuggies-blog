import React from 'react'
import './src/_base.scss'

import {
    ReduxProvider,
} from './wrap-root-element'

export const wrapRootElement = (props) => {
    return <ReduxProvider {...props} />
}
