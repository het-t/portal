import cron from 'node-cron'
import notificationsWaSend from '../helpers/notifications/whatsapp/notificationsWaSend.js'

let job = (client) => cron.schedule('*/1 * * * *', () => {
    notificationsWaSend(client)
})

export default job