import {getRolesDb} from '../db/rolesDb.js'

const getRoles = (req, res) => {
    console.log("GET '/users/get-roles'")
    getRolesDb()
    .then((roles) => {
        console.log(roles)
        res.send(roles)
    })
    .catch((err) => {
        console.log("/users/get-roles catch ",err)
        res.send('failed')
    })
}

export default getRoles