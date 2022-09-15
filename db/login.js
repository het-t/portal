import con from './conDb.js'

const userLoginDb = (args) => {
    return new Promise((resolve, reject) => {
        con.query(
            `CALL users_login(?, ?)`,
            args, 
            (err, results) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } 
                else {
                    console.log(results)
                    resolve(results?.[0])
                }
            }
        )
    })
}

export {
    userLoginDb
}