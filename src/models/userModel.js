'use strict';

const 
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, 
    name: { type: String, required: true },
    rg: { type: Number, required: true },
    cpf: { type: Number, required: true },
    addres: [{
        street: { type: String },
        number: { type: Number },
        complement: { type: String },
        cep: { type: Number },
        state: { type: String },
        city: { type: String },
        neighborhood: { type: String }
    }],
    phone: { type: Number },
    role: { type: Schema.Types.ObjectId, ref: 'Role', required: true },
    // companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
    analystId: { type: Schema.Types.ObjectId, ref: 'User' },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedAt: { type: Date }
});

module.exports.UserSchema = UserSchema;
module.exports = mongoose.model('User', UserSchema, 'Users');