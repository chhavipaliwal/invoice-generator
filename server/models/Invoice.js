const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  companyName: { type: String, required: true },

  from: {
    name: { type: String, required: true },
    address: String,
    zipCode: String,
    city: String,
    country: String,
    email: String,
    phonenumber: String,
  },

  to: {
    name: { type: String, required: true },
    address: String,
    zipCode: String,
    city: String,
    country: String,
    email: String,
    phonenumber: String,
  },

  invoiceDetails: {
    invoiceNo: String,
    invoiceDate: String,
    dueDate: String,
  },

  lineItems: [
    {
      id: { type: Number },
      name: { type: String },
      quantity: { type: Number },
      rate: { type: Number },
      description: String,
    },
  ],

  paymentInfo: {
    bankName: { type: String },
    accountName: { type: String },
    accountNumber: { type: String },
  },

  summary: {
    subtotal: { type: Number },
    total: { type: Number },
    discount: {
      isDiscount: { type: Boolean },
      amount: { type: Number },
      type: { type: String, enum: ["percentage", "fixed"] },
    },
    shipping: {
      isShipping: { type: Boolean },
      amount: { type: Number },
    },
    tax: {
      isTax: { type: Boolean },
      amount: { type: Number },
      type: { type: String, enum: ["percentage", "fixed"] },
    },
    isInWords: Boolean,
    additionalNotes: String,
    termsAndConditions: String,
    totalTax: { type: Number },
    totalShipping: { type: Number },
    totalDiscount: { type: Number },
  },

  currency: {
    type: String,
    enum: ["INR", "USD", "EUR", "GBP"],
    required: true,
  },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
