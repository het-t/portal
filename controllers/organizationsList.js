import makeDbReq from '../db/index.js'

export default function organizationsList(req, res) {

    makeDbReq('organizations_list(?)', [
        req.userId
    ])
    .then((results) => {
        res.send({
            'orgsList': results
        })
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
}