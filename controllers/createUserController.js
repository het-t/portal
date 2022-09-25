import {createUserDb} from '../db/usersDb.js'
import bcrypt from 'bcrypt'

const createUser = (req, res) => {
    console.log("GET '/users/create-user'", req.body.params)
    const args = Object.values(req.body.params)
    
    args[6] = bcrypt.hashSync(args[6], 3)
    createUserDb(args)
    .then((results) => {
        console.log(results)
        res.send('success')
    })
    .catch((err)=>{
        console.log("/users/create-user catch ",err)
        res.send('failed')
    })
}

export default createUser