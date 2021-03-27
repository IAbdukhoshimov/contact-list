const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    _id: {
        type: String,
        default: function genUUID() {
            return uuidv4();
        },
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    phone_number: {
        type: String,
    },
});

module.exports = mongoose.model("Contact", ContactSchema);
