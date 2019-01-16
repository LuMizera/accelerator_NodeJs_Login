'use strict';

exports.get = async (req, res, next) => {
    try {
        res.status(200).send({
            message: "Hello"
        })
    } catch (err) {
        res.status(404).send({
            message: "ERROR!"
        })
    }
}