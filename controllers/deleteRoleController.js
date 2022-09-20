import {deleteRoleDb} from '../db/rolesDb.js'

const deleteRole = (req, res, next) => {
    console.log("deleteRole body ",req.body)
    const roleId = req.body.role_id
    deleteRoleDb(roleId)
    .then((results) => {
        console.log(results)
        res.send(results[0])
    })
    .catch((err) => {
        console.log(err)
        res.send('failed to delete role')
    });
}

export default deleteRole