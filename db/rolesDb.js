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

const deleteRoleDb = (roleId) => {
    console.log("delete role roleId", roleId)
    return new Promise((resolve, reject) => {
        con.query(
            `CALL roles_delete_role(?)`,
            [roleId],
            (err, results) => {
                if (err) {
                    console.log("DB deleteRole", err)
                    reject(err)
                }
                else {
                    console.log("Db deleteRole", results)
                    resolve(results)
                }
            }
        )
    })
}

export {
    getRolesDb,
    createRoleDb,
    deleteRoleDb
}