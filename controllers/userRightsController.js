import {userRightsDb} from "../db/login.js";

const userRights = (req, res, next) => {
    userRightsDb(req.email)
    .then((rights) => {
        res.send(rights)
    })
    .catch((err) => {
        console.log(err)
        res.send("failed to load rights")
    })
}

export default userRights