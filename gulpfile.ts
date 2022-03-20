import { execSync } from "child_process"

function startMailer(cb) {
    execSync('cd packages/mailer && yarn start', { stdio: 'inherit' })
    cb()
}

exports.default = startMailer
