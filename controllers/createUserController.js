import {createUserDb} from '../db/usersDb.js'
import bcrypt from 'bcrypt'

const createUser = (req, res, next) => {
    console.log("GET '/users/create-user'", req.body.params)
    const args = Object.values(req.body.params)
    
    req.log_details = {
        "activity_id": 4,
        "user": req.email,
        "reference_table": "users",
        "reference_table_pk_id": null,
    }
    args[6] = bcrypt.hashSync(args[6], 3)
    createUserDb(args)
    .then((results) => {
        req.log_details.detail = 'success'
        req.res_data = 'success'
        next()
    })
    .catch((err)=>{
        console.log("/users/create-user catch ",err)
        req.log_details.detail = err
        req.res_data = 'failed'
        next()
    })
}

export default createUser