import con from './conDb.js'

const getRolesDb = () => {
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


const createRoleDb = (roleName, roleRights) => {
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

export {
    getRolesDb,
    createRoleDb,
}