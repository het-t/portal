import con from './conDb.js'

const activityDb = (req, res, next) => {
    return new Promise((resolve, reject) => {
        con.query(
            `CALL user_activities()`,
            (err, results) => {
                if (err) reject(err)
                else resolve(results[0])
            }
        )
    })
}

export default activityDb