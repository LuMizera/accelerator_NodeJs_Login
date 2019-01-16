'use strict';

exports.get = async (req, res, next) => {
    try {
        res.status(200).send({
            message: "Hello World!"
        })
    } catch (err) {
        res.status(400).send({
            message: "ERROR!"
        })
    }
}