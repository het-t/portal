import {editUserDb} from '../db/usersDb.js'

const editUser = (req, res) => {
    console.log("editUser ", req.body.params)
    const args = Object.values(req.body.params)
    editUserDb(args)
    .then((results) => {
        console.log(results)
    })
}

export default editUser