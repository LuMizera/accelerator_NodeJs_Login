'use strict';

const
    repository = require('../repositories/authRepository'),
    md5 = require('md5'),
    authService = require('../middlewares/authMiddleware');

exports.authenticate = async (req, res, next) => {
    try {
        const user = await repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        }, '');
        if (!user) {
            res.status(404).send({
                message: 'E-mail ou senha inválidos'
            });
            return
        }
        const token = await authService.generateToken({
            id: user._id,
            name: user.name,
            email: user.email
        })

        let authToken = {
            userId: user._id,
            token: token
        }

        let userHasToken = await repository.findOne({
            userId: user._id
        })

        if (userHasToken) {
            await repository.updateToken({userId: user._id},{$set: {token: token}})
        } else{
            await repository.saveToken(authToken)
        }

        
        res.status(201).send({
            token: token,
            data: {
                email: user.email,
                name: user.name
            }
        })
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
};