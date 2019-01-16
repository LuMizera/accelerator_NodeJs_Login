'use strict';

const
    repository = require('../repositories/roleRepository');

exports.getRoles = async (req, res, next) => {
    try {
        let roles = await repository.getRoles()

        if (!roles) {
            res.status(404).send({
                message: "Roles not found!"
            })
        }

        res.status(200).send(roles)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}

exports.create = async (req, res, next) => {
    try {
        let data = req.body

        let role = await repository.create(data)

        if (!role) {
            res.status(400).send({
                message: "Error in role creation!"
            })
        }

        res.status(200).send(role)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}