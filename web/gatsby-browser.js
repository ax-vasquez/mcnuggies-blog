const React = require('react')
require("./src/css/index.css")
const {  
    ReduxProvider
  } = require('./wrap-root-element')
  exports.wrapRootElement = (props) => {
    return <ReduxProvider {...props} />
  }
