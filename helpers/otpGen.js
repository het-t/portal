import {generate} from 'otp-generator'

export default function otpGen() {
    return generate(5 , {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: true,
        specialChars: false,
        digits: true
    })
}