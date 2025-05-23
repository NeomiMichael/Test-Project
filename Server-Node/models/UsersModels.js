const mongoose = require("mongoose")

const UserSchema=mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['teacher', 'student','manager'], required: true },
})
module.exports = mongoose.model("UserSchema", UserSchema);
