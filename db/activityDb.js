import con from './conDb.js'

const activityDb = (offSet, recordsPerPage) => {
    return new Promise((resolve, reject) => {
        console.log("pagination ", offSet, recordsPerPage)
        con.query(
            `CALL user_activities(?, ?)`,
            [offSet, recordsPerPage],
            (err, results) => {
                if (err) reject(err)
                else resolve(results[0])
            }
        )
    })
}

const activityCountDb = () => {
    return new Promise((resolve, reject) => {
        con.query(
            `CALL user_activities_count()`,
            (err, results) => {
                if (err) reject(err)
                else resolve(results[0])
            }
        )
    })
}

export {
    activityDb,
    activityCountDb
}