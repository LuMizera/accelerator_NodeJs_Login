'use strict';

const 
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const SalesSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    customerId: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    salePrice: { type: Number, required: true },
    saleMargin: { type: Number, required: true },
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    observation: { type: String },
    paymentMethod: { type: String, enum: ['Conta Corrente', 'Pouopança' ]},
    esp: { type: String },
    documents: [{ type: Schema.Types.ObjectId, ref: 'Documents' }],
    promoter: { type: String, enum: [''] },
    ade: { type: String },
    paymentDate: { type: Date },
    transactionStatus: [{ 
        statusId: { type: Schema.Types.ObjectId, ref: 'Status' },
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        createdAt: { type: Date, default: Date.now}
    }],
    sla: { type: String, enum: [''] },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date }
});

module.exports.SalesSchema = SalesSchema;
module.exports = mongoose.model('Sales', SalesSchema, 'Sales');