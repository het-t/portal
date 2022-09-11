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

const createRole = (roleName, roleRights) => {
    return new Promise((resolve, reject) => {
        con.query(
            `CALL roles_create_role(?, ?)`,
            [roleName, roleRights],
            (err, results) => {
                if (err) {
                    console.log('DB createRole', err)
                    reject(err)
                } 
                else {
                    console.log("DB createRole ",results)
                    resolve(results)
                }
            }
        )
    })
}

const getRights = (email) => {
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

const getRoles = () => {
    return new Promise((resolve, reject) => {
        con.query(
            `CALL roles_get_roles()`,
            (err, results) => {
                if (err) {
                    console.log('DB getRoles', err)
                    reject(err)
                }
                else {
                    console.log('DB getRoles ', results)
                    resolve(results)
                }
            }
        )
    })
}

export {
    createUser,
    userLogin,
    createRole,
    getRights,
    getRoles,
}