import makeDbReq from '../db/index.js'

export default function organizationsCreate(req, res) {
    let { name } = req.body.params

    makeDbReq('organizations_create(?, ?)', [
        req.userId,
        name
    ])
    .catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
}