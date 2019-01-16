'use strict';

const
    repository = require('../repositories/authRepository');

module.exports = async function (req, res, next) {
    let authToken = req.headers.authorization
    let userToken = await repository.findOneAndPopulate({token: authToken})

    if (userToken) {
        req.loggedUser = userToken.userId
        return next()
    } else {
        console.log('error')
        return next()
    }
}