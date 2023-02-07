import sharp from 'sharp'
import * as fs from 'fs/promises'

export default function resizeImg(img, height, width, filePath) {
    return sharp(img)
    .resize(height, width)
    .toBuffer()
    .then(data => {
        fs.writeFile(filePath, data.toString('base64'))
    })
}