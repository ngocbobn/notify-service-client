const client = require('./client')

module.exports = async ({ method, params }) => {
    return new Promise((resolve, reject) => {
        try {
            client.Call({ method, params: JSON.stringify(params) }, (err, result) => {
                if (err) {
                    return reject({ message: err.code })
                }
                return resolve(result.result)
            })
        } catch (error) {
            reject(error)
        }
    })
}