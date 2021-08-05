const React = require('react')
const {  
  ReduxProvider
} = require('./wrap-root-element')
exports.wrapRootElement = (props) => {
  return <ReduxProvider {...props} />
}
