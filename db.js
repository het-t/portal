import * as mysql from 'mysql2';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'het161967',
    database: 'portal'
})

const userLogin = (args) => {
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

const createUser =  (args) => {
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
    createUser,
    userLogin,
}