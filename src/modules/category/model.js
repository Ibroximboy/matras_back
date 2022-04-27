const { fetch, fetchAll } = require('../../lib/connect')

const ALL_CATEGORY = `
    SELECT
        *
    FROM
        category
`

const allcategory = () => fetchAll(ALL_CATEGORY)

module.exports = {
    allcategory
}