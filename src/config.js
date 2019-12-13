require('dotenv').config()
module.exports = {
    notifyService: process.env.NOTIFY_SERVICE_URI || ''
}