import makeDbReq from '../db/index.js'
import xlsx from 'xlsx'
import fs from 'fs'

export default function createWaNotification(req, res) {

    let {
        content,
        userRule,
        clientRule,
        custom,
        consent
    } = req.body

    let msg = new String()
    msg = req.body.content

    msg.replaceAll('/', '///')
    
    if (req.files.length === 0) {
        makeDbReq('notifications_wa_add(?, ?, ?, ?, ?, ?, ?)', [
            req.userId,
            req.orgId,
            userRule,
            clientRule,
            custom === 'false' ? 0 : 1,
            msg,
            consent === 'false' ? 0 : 1
        ])
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log(err)
            makeDbReq(`logs_add(?, ?, ?, ?, ?)`, [
                req.userId,
                57,
                24,
                null,
                [err]
            ])
            .catch(err => console.log(err))
            res.sendStatus(500)
        }) 
    }

    else if (req.files?.[0]?.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        const workbook = xlsx.readFile(req.files[0].path)
        const sheet = workbook.Sheets[workbook.SheetNames[0]]
        const rows = JSON.stringify(xlsx.utils.sheet_to_json(sheet))

        makeDbReq('notifications_wa_add_from_file(?, ?, ?, ?, ?)', [
            req.userId,
            req.orgId,
            content,
            rows,
            consent === 'false' ? 0 : 1
        ])
        .then(() => res.sendStatus(200))
        .catch((err) => {
            console.log(err)
            makeDbReq(`logs_add(?, ?, ?, ?, ?)`, [
                req.userId,
                57,
                24,
                null,
                [err]
            ])
            .catch(err => console.log(err))
            res.sendStatus(500)
        })
        .finally(() => {
            fs.rm(req.files[0].path, (err) => {
                if (err) console.log(err)
            })
        })
    }

    else {
        res.sendStatus(400)
    }
}