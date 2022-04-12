const mongoose = require('mongoose')

const Gateways = mongoose.model('gateways', {
    name: String,
    serialNumber: String,
    registeredUsers: Array,
    ipV4: Object
})

module.exports = Gateways