import con from './conDb.js'

const addLogDb = (args) => {
    return new Promise((resolve, reject) => {
        con.query(
            `CALL logs_add(?, ?, ?, ?, ?)`,
            args,
            (err, results) => {
                if (err) reject(err)
                else resolve(results[0])
            }
        )
    })
}

export default addLogDb