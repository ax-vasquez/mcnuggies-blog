const { parallel } = require('gulp')

const startMailer = (cb) => {
    
    cb()
}

exports.default = parallel(startMailer)
