'use strict';

const
    User = require('../models/userModel'),
    Auth = require('../models/authModel'); 

exports.authenticate = async (query, fields) => {
    return await User.findOne(query, fields)
}

exports.saveToken = async (data) => {
    return await Auth.create(data)
}

exports.updateToken = async (id, data) => {
    return await Auth.findOneAndUpdate(id, data)
}

exports.findOne = async (query) => {
    return await Auth.findOne(query)
}

exports.findOneAndPopulate = async (query) => {
    return await Auth.findOne(query).populate('userId')
}