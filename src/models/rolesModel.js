'use strict';

const 
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const RolesSchema = new Schema({
    name: { type: String, require: true }
});

module.exports.RolesSchema = RolesSchema;
module.exports = mongoose.model('Role', RolesSchema, 'roles');