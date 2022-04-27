const { fetch, fetchAll } = require('../../lib/connect')

const PRODUCT_ID = `
    SELECT
        *
    FROM
        products
    WHERE
        category_id = $1
`

const productbyid = (id) => fetchAll(PRODUCT_ID, id)

module.exports = {
    productbyid
}