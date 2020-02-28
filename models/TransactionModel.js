const { Schema, model } = require("mongoose");

const TransactionSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"]
  },
  amount: {
    type: Number,
    required: [true, "Add a positive or negative number"]
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});
module.exports = model("Transaction", TransactionSchema);
