import con from './conDb.js'

const createUserDb =  (args) => {
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

const getAllUsersDb = () => {
    return new Promise((resolve, reject) => {
        con.query(`CALL users_get_all_users()`,
        [],
        (err, results) => {
            if (err) {
                console.log('DB getAllUsers', err)
                reject(err)
            }
            else {
                resolve(results)
            }
        })
    })
}

const getEditUserDb = (editUserId) => {
    return new Promise((resolve, reject) => {
        con.query(`CALL users_user_data(?)`,
        [editUserId],
        (err, results) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            else {
                resolve(results)
            }
        })
    })
}


const editUserDb = (args) => {
    return new Promise((resolve, reject) => {
        con.query(`CALL users_edit_user(?, ?, ?, ?, ?, ?, ?)`,
        args,
        (err, results) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            else {
                resolve(results)
            }
        })
    })
}
export {
    createUserDb,
    getAllUsersDb,
    getEditUserDb,
    editUserDb
}