import con from './conDb.js'

const userLoginDb = (email) => {
    return new Promise((resolve, reject) => {
        con.query(
            `CALL users_login(?)`,
            email, 
            (err, results) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } 
                else {
                    console.log("userLoginDb ",results)
                    resolve(results?.[0])
                }
            }
        )
    })
}

export {
    userLoginDb,
}