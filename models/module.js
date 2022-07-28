const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Module = new Schema(
    {
        name: { type: String, required: true },
        manufacturer: { type: String, required: true },
        function: { type: Array, required: true },
        size: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        review: { type: String, required: false }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Module', Module)