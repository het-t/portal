import con from './conDb.js'

const makeDbReq = (sp, args) => {
    return new Promise((resolve, reject) => {
        con.query(
            `CALL ${sp}`,
            [...args],
            (err, results) => {
                if (err) {
                    console.log(err)
                    reject(err)
                } 
                else resolve(results[0])
            }
        )
    })
}

export default makeDbReq