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

const getEditRoleDb = (roleName) => {
    console.log("edit role name", roleName)
    return new Promise((resolve, reject) => {
        con.query(
            `CALL roles_role_data(?)`,
            [roleName],
            (err, results) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } 
                else {
                    resolve(results)
                }
            }
        )
    })
}

const editRoleDb = (roleName, roleRights) => {
    return new Promise((resolve, reject) => {
        con.query(`CALL roles_edit_role(?, ?)`,
        [roleName, roleRights],
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
    getRolesDb,
    createRoleDb,
    deleteRoleDb,
    getEditRoleDb,
    editRoleDb
}