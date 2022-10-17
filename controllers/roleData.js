import makeDbReq from '../db/index.js'

const getEditRole = (req, res) => {
    makeDbReq(`roles_role_data(?)`, [req.query.editRoleName])
    .then((roleData) => {
        console.log("edit Role Data", roleData)
        res.send(roleData[0])
    })
}

export default getEditRole