import con from './conDb.js'

const getRightsDb = () => {
    return new Promise((resolve, reject) => {
        con.query(
            `CALL rights_master_get_all_rights()`,
            [],
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

const userRightsDb = (args) => {
    return new Promise((resolve, reject) => {
        con.query(
            `CALL rights_master_get_user_rights(?)`,
            args,
            (err, results) => {
                if (err) {
                    console.log(err)
                    reject(err)
                }
                else {
                    console.log("userRightsDb ", results)
                    resolve(results?.[0])
                }
            }
        )
    })
}

export {
    getRightsDb,
    userRightsDb
}