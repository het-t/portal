import * as mysql from 'mysql2'

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'het161967',
    database: 'portal'
})

export default con;