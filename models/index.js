const mongoose = require('mongoose')
const ModuleSchema = require('./module')

const Module = mongoose.model('Module', ModuleSchema)

module.exports = Module
