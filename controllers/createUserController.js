import {createUserDb} from '../db/usersDb.js'

const createUser = (req, res) => {
    console.log("GET '/users/create-user'", req.body.params)
    const args = Object.values(req.body.params)
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