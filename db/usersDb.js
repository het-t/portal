import con from './conDb.js'
import hashData from './hash.js'

const createUserDb =  (args) => {
    args[6] = hashData(args[6])
    return new Promise((resolve, reject) => {
        con.query(
            `CALL users_create_user(?, ?, ?, ?, ?, ?, ?)`,
            args,
            (err, results) => {
                if (err) {
                    console.log('DB createUser', err)
                    reject(err)
                } 
                else {
                    // console.log('DB createUser', results)
                    resolve(results)
                }
            }
        )
    })
}

export {
    createUserDb,
}