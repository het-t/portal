import makeDbReq from '../db/index.js'

export default function organizationsCount(req, res) {
    makeDbReq('organizations_count(?)', [
        req.userId,
    ])
    .then((results) => res.send({
        'count': results[0].count
    }))
    .catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
}