import con from './conDb.js'

const activityDb = (off_set, records_per_page) => {
    return new Promise((resolve, reject) => {
        console.log("pagination ", off_set, records_per_page)
        con.query(
            `CALL user_activities(?, ?)`,
            [off_set, records_per_page],
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