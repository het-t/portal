import makeDbReq from '../db/index.js'
import xlsx from 'xlsx'
import csv from 'csv-parser'
import fs from 'fs'



export default function createWaNotification(req, res) {

    const {
        content,
        userRule,
        clientRule,
        custom,
        consent
    } = req.body

    if (req.file === '') {
        makeDbReq('notifications_wa_add(?, ?, ?, ?, ?, ?)', [
            req.userId,
            userRule,
            clientRule,
            custom === 'false' ? 0 : 1,
            content,
            consent === 'false' ? 0 : 1
        ])
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
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

    else if (req.file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        const workbook = xlsx.readFile(req.file.path)
        const sheet = workbook.Sheets[workbook.SheetNames[0]]
        const rows = JSON.stringify(xlsx.utils.sheet_to_json(sheet)
)
        makeDbReq('notifications_wa_add_from_file(?, ?, ?, ?)', [
            req.userId,
            content,
            rows,
            consent === 'false' ? 0 : 1
        ])
        .then(() => res.sendStatus(200))
        .catch((err) => {
            console.log(err)
            res.sendStatus(500)
        })
        .finally(() => {
            console.log(req.file.path)
            fs.rm(req.file.path, (err) => {
                if (err) console.log(err)
            })
        })
    }

    else {
        res.sendStatus(400).send('Unsupported file type')
    }
}