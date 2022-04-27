const model = require('./model')

module.exports = {
    ALL_CATEGORY: async(_, res) => {
        try {
            const category = await model.allcategory()
            res.send(category)
        } catch(err) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}