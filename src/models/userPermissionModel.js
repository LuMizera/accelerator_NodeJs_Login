'use strict';

const 
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserPermissionsSchema = new Schema({
    url: { type: String, required: true },
    permissions: [{ type: Schema.Types.ObjectId, ref: 'Role', required: true }]
});

module.exports.UserPermissionsSchema = UserPermissionsSchema;
module.exports = mongoose.model('UserPermissions', UserPermissionsSchema, 'userPermissions');