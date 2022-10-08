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
                    resolve(results)
                }
            }
        )
    })
}

const getAllUsersDb = (offSet, recordsPerPage) => {
    return new Promise((resolve, reject) => {
        con.query(`CALL users_get_all_users(?, ?)`,
        [offSet, recordsPerPage],
        (err, results) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(results[0])
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

const usersCountDb = () => {
    return new Promise((resolve, reject) => {
        con.query(
            `CALL users_count()`,
            (err, results) => {
                if (err) reject(err)
                else resolve(results[0])
            }
        )
    })
}

export {
    createUserDb,
    getAllUsersDb,
    getEditUserDb,
    editUserDb,
    usersCountDb
}