const convertToWid = (contactNo) => {
    if (contactNo.length == 10) contactNo = `91${contactNo}`
    if (contactNo.indexOf('@') == -1) contactNo = `${contactNo}@c.us`
    return contactNo
}

export default convertToWid 