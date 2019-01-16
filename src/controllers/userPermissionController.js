'use strict';

const
    repository = require('../repositories/userPermissionRepository');

exports.getPermissions = async (req, res, next) => {
    try {
        let permissions = await repository.getPermissions()

        if (!permissions) {
            res.status(404).send({
                message: "Permissions not found!"
            })
        }

        res.status(200).send(permissions)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}

exports.create = async (req, res, next) => {
    try {
        let data = req.body

        let permission = await repository.create(data)

        if (!permission) {
            res.status(400).send({
                message: "Error in permission creation!"
            })
        }

        res.status(200).send(data)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}