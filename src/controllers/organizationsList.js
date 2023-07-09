import con from '../db/conDb.js'
import makeDbReq from '../db/index.js'

export default function organizationsList(req, res) {
    const connection = con()
    makeDbReq(
        connection,
        'organizations_list(?)', 
            [
            req.userId
        ]
    )
    .then((results) => {
        res.send({
            'orgsList': results
        })
    })
    .catch((err) => {
        res.sendStatus(500)
    })
    .finally(() => {
        connection.end()
    })
}