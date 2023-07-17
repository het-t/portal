import makeDbReq from "../db/index.js";
import con from "../db/conDb.js";

export default function (req, res) {
    const userId = req.userId;
    const orgId = req.orgId;

    const connection = con();
    makeDbReq(
        connection,
        `settings_organizations_get(?, ?)`,
        [
            userId,
            orgId
        ]
    )
    .then((results) => {
        res.send(results)
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(500)
        makeDbReq(
            connection,
            `logs_add(?, ?, ?, ?, ?)`,
            [
                userId,
                51,
                27,
                null,
                [err]
            ]
        )
        .catch(err => console.log(err))
    })
    .finally(() => {
        connection.end()
    })
}