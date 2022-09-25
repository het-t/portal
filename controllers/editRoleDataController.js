import {getEditRoleDb} from '../db/rolesDb.js'

const getEditRole = (req, res) => {
    getEditRoleDb(req.query.editRoleName)
    .then((roleData) => {
        console.log("edit Role Data", roleData)
        res.send(roleData[0])
    })
}

export default getEditRole