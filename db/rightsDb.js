import con from './conDb.js'

const getRightsDb = (email) => {
    return new Promise((resolve, reject) => {
        con.query(
            `CALL rights_master_get_rights(?)`,
            email,
            (err, results) => {
                if (err) {
                    console.log('DB getRights', err)
                    reject(err)
                }
                else {
                    console.log('DB getRights ', results)
                    resolve(results)
                }
            }
        )
    })
}

export {
    getRightsDb
}