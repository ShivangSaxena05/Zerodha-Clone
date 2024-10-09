const {model} = require('mongoose')
const {HoldingsSchema} = require("../schemas/HoldingsSchema")

const Holdingsmodel = new model('holding',HoldingsSchema)
module.exports = {Holdingsmodel}