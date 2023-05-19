import cron from 'node-cron'
import notificationsWaSend from '../../helpers/notifications/whatsapp/notificationsWaSend.js'

let job = setInterval(notificationsWaSend, 1000*60*5)


export default job