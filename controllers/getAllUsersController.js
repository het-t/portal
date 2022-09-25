import {getAllUsersDb} from '../db/usersDb.js'

const getAllUsers = (req, res) => {
    getAllUsersDb()
    .then((users) => {
        res.send(users)
    })
    .catch((err) => {
        res.send('failed in fetching users details')
    })
} 

export default getAllUsers