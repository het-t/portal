import cron from 'node-cron'
import makeDbReq from '../db/index.js'

let job = cron.schedule('*/10 * * * *', () => {
    console.log("sending", new Date())
    makeDbReq(`notification_get()`, [])
    .then((res) => {
        console.log(res)
    })
})

export default job