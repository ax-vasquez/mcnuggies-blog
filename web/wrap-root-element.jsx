/* eslint-disable import/prefer-default-export */
import React from 'react'
import { Provider } from 'react-redux'

import reduxStore from './src/slices/index'

// eslint-disable-next-line react/prop-types
export const ReduxProvider = ({ element }) => {
    // Instantiating store in `wrapRootElement` handler ensures:
    //  - there is fresh store for each SSR page
    //  - it will be called only once in browser, when React mounts
    return <Provider store={reduxStore}>{element}</Provider>
}
