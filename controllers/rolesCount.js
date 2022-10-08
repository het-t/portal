import {rolesCountDb} from '../db/rolesDb.js'

const rolesCount = (req, res) => {
    rolesCountDb()
    .then((count) => {
        console.log("roles count ", count)
        res.send(count)
    })
    .catch(err => {
        console.log(err)
        res.send(false)
    }) 
}

export default rolesCount