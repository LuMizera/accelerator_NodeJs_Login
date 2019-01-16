'use strict';

const User = require('../models/userModel');

exports.getUsers = async (query, fields, params) => {
    return await User.find(query, fields, params)
}

exports.findOne = async (id, fields, params) => {
    return await User.findOne(id, fields, params)
}

exports.findOneAndUpdate = async (id, data) => {
    return await User.findOneAndUpdate(id, data)
}

exports.create = async (data) => {
    return await User.create(data)
}

exports.deactivate = async (id) => {
    return await User.findOneAndUpdate(id, {$set: {
        isDeleted: true,
        isActive: false
    }})
}