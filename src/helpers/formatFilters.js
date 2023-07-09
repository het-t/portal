export default function formatFilters(filtersObj) {
    let parsedFiltersObj = JSON.parse(filtersObj)

    let localFiltersObj = {}
    for(let key in parsedFiltersObj) {
        if (parsedFiltersObj[key] === 'null') localFiltersObj[key] = null
        else localFiltersObj[key] = parsedFiltersObj[key]
    }
    return localFiltersObj
}