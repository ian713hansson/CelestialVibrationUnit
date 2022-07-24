const { Schema } = require('mongoose')

const Module = new Schema(
    {
        name: { type: String, required: true },
        manufacturer: { type: String, required: true },
        function: { type: String, required: true },
        size: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = Module 