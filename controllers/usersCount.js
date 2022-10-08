import {usersCountDb} from '../db/usersDb.js'

const usersCount = (req, res) => {
    usersCountDb()
    .then((count) => {
        res.send(count)
    })
    .catch(err => {
        res.send(false)
    }) 
}

export default usersCount