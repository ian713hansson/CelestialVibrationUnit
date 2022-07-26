const mongoose = require('mongoose')
const ModuleSchema = require('./module')

const Module = mongoose.model('module', ModuleSchema)

module.exports = Module
