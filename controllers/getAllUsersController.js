import {getAllUsersDb} from '../db/usersDb.js'

const getAllUsers = (req, res, next) => {
    req.log_details = {
        "activity_id": 11,
        "user": req.email,
        "reference_table": "users",
        "reference_table_pk_id": null,
    }
    getAllUsersDb()
    .then((users) => {
        req.log_details.detail = 'success'
        req.res_data = users
        next()
    })
    .catch((err) => {
        req.log_details.detail = err
        req.res_data = 'failed in fetching users details'
        next()
    })
} 

export default getAllUsers