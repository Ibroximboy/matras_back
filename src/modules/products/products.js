const model = require('./model')

module.exports = {
    PRODUCT_ID: async(req, res) => {
        try {
            const { id } = req.params
            const productid = await model.productbyid(id)
            res.send(productid)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}