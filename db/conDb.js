import * as mysql from 'mysql2'
// import db_info from './db-info.json' assert {type: 'json'}

// console.log(db_info)

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'het161967',
    database: 'portal'
})

export default con;