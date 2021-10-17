import React from 'react'
import { ReduxProvider }  from './wrap-root-element'

export const wrapRootElement = (props) => {
    return <ReduxProvider {...props} />
}
