'use strict';

const 
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const AuthSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    token: { type: String, unique: true }
    // expires: { type: Date },
    // date: { type: Date, default: new Date() }
});

module.exports.AuthSchema = AuthSchema;
module.exports = mongoose.model('Auth', AuthSchema, 'authToken');