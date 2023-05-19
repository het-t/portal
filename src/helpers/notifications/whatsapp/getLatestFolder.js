import fs from 'fs'
import path from 'path';

export default function (orgId, usecase) {
    const user = `session-admin-${orgId}`
    const folderPath = `./auth-${usecase}`

    const subFolders = fs.readdirSync(folderPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    // Filter the list to find the folders that belong to the specific user
    const userFolders = subFolders.filter(folderName => folderName.startsWith(user));

    // Determine the latest folder created by that user
    let latestFolder = userFolders.reduce((latest, folderName) => {
        const folderStat = fs.statSync(path.join(folderPath, folderName));
        const latestStat = fs.statSync(path.join(folderPath, latest));
        return folderStat.birthtimeMs > latestStat.birthtimeMs ? folderName : latest;
    }, userFolders[0]);
    if(latestFolder) latestFolder = latestFolder.replace('session-', '')
    return latestFolder
}