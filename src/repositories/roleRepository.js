'use strict';

const
    Role = require('../models/rolesModel');

exports.getRoles = async (query, fields, params) => {
    return await Role.find(query, fields)
}

exports.create = async (data) => {
    return await Role.create(data)
}