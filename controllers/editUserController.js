import {editUserDb} from '../db/usersDb.js'

const editUser = (req, res, next) => {
    console.log("editUser ", req.body.params)
    const args = Object.values(req.body.params)
    
    req.log_details = {
        "activity_id": 6,
        "user": req.email,
        "reference_table": "users",
    }

    editUserDb(args)
    .then((results) => {
        req.log_details.reference_table_pk_id = args[0]
        req.log_details.detail = 'success'
        next()
    })
    .catch((err) => {
        req.log_details.reference_table_pk_id = null
        req.log_details.detail = err
        next()
    })
}

export default editUser