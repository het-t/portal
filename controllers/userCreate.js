import makeDbReq from '../db/index.js'
import bcrypt from 'bcrypt'

const createUser = (req, res, next) => {
    const {firstName, lastName, gender, bithdate, email, role, password} = req.body.params
    
    req.log_details = {
        "activity_id": 4,
        "user": req.email,
        "reference_table": "users",
    }

    password = bcrypt.hashSync(password, 3)

    makeDbReq(`users_create_user(?, ?, ?, ?, ?, ?, ?)`, [firstName, lastName, gender, bithdate, email, role, password])
    .then((results) => {
        req.log_details.reference_table_pk_id = results[0].pk_for_logs
        req.log_details.detail = 'success'
        req.res_data = 'success'
        next()
    })
    .catch((err)=>{
        console.log("/users/create-user catch ",err)
        req.log_details.reference_table_pk_id = null
        req.log_details.detail = [err]
        req.res_data = 'failed'
        next()
    })
}

export default createUser