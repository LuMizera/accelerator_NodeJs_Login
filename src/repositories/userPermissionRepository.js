'use strict';

const
    UserPermissions = require('../models/userPermissionModel');

exports.getRoles = async (query, fields, params) => {
    return await UserPermissions.find(query, fields)
}

exports.create = async (data) => {
    return await UserPermissions.create(data)
}