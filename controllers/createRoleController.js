import {createRoleDb} from '../db/rolesDb.js'

const createRole = (req, res) => {
    console.log("GET '/users/create-role'", req.query)
    const roleName = req.query.role_name
    const roleRights = JSON.stringify(req.query.role_rights)
    createRoleDb(roleName, roleRights)
    .then((results) => {
        console.log(results)
        res.send('success')
    })
    .catch((err) => {
        console.log("/users/create-role catch ",err)
        res.send('failed')
    })
}

export default createRole