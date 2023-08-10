import makeDbReq from "../db/index.js";
import con from "../db/conDb.js";

export default function (req, res) {

    const {
        tableId,
        tagName
    } = req.body.params

    const connection = con()

    makeDbReq(
        connection,
        `tags_master_create(?, ?, ?, ?, ?, ?)`,
        [
            req.userId,
            req.orgId,
            tableId,
            tagName,
            null,
            null
        ]
    )
    .then((results) => {
        res.send({createdTagId: results[0].createdTagId})
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
        makeDbReq(
            connection,
            `logs_add(?, ?, ?, ?, ?)`,
            [
                req.userId,
                70,
                28,
                null,
                [err]
            ]
        )
    })
    .finally(() => {
        connection.end()
    })
}