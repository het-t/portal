import bcrypt from 'bcrypt'

function hashData (data) {
    bcrypt.hash(data, 3, (err, result) => {
        if (err) {
            console.log(err)
            return
        } 
        else {
            return result
        }
    })
} 

export default {
    hashData,
}