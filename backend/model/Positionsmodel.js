const {model} = require("mongoose")
const {PositionsSchema} = require("../schemas/PositionsSchema")

const Positionsmodel = new model('position',PositionsSchema)

module.exports = {Positionsmodel}