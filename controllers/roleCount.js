import makeDbReq from '../db/index.js'

const rolesCount = (req, res) => {
    makeDbReq(`roles_count()`, [])
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