'use strict';

const
    repository = require('../repositories/userRepository'),
    md5 = require('md5');

exports.getUsers = async (req, res, next) => {
    try {
        let query = {
            isDeleted: false,
            isActive: true
        }
        console.log(req.loggedUser)
        let users = await repository.getUsers(query, '-password')

        if (!users) {
            res.status(404).send({
                message: "Users not found!"
            })
        }

        res.status(200).send(users)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}

exports.findOneById = async (req, res, next) => {
    try {
        let query = {
            _id: req.params.id
        }

        let user = await repository.findOne(query, '-password')

        if (!user) {
            res.status(404).send({
                message: "User not found!"
            })
        }
        res.status(200).send(user)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}

exports.findOneAndUpdate = async (req, res, next) => {
    try {
        let query = {
            _id: req.params.id
        }
        let data = req.body
        data.updatedAt = Date.now()
        if(data.password) {
            data.password = md5(data.password + global.SALT_KEY)
        }

        let user = await repository.findOneAndUpdate(query, data)

        if (!user) {
            res.status(404).send({
                message: "Error in user update!"
            })
        }
        res.status(200).send(user)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}

exports.create = async (req, res, next) => {
    try {
        let data = req.body
        data.password = md5(data.password + global.SALT_KEY)

        let user = await repository.create(data)

        if (!user) {
            res.status(400).send({
                message: "Error in user creation!"
            })
        }

        res.status(200).send(user)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}

exports.delete = async (req, res, next) => {
    try {
        let query = {
            _id: req.params.id
        }

        let user = await repository.deactivate(query)

        if (!user) {
            res.status(404).send({
                message: "Error in user deactivation!"
            })
        }
        res.status(200).send(user)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}