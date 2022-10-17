import makeDbReq from '../db/index.js'

const usersCount = (req, res) => {
    makeDbReq(`users_count()`, [])
    .then((count) => {
        res.send(count)
    })
    .catch(err => {
        res.send(false)
    }) 
}

export default usersCount