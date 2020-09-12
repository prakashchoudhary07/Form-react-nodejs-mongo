const mongoose = require('mongoose');

const postDataSchema = new mongoose.Schema({
 firstName: {
  type: String,
  required: true
 },
 lastName: {
  type: String,
  required: true,
 },
 emailId: {
  type: String,
  required: true,
 },
 phoneNumber: {
  type: String,
  required: true,
 },
 image: {
  contentType: String,
  data: Buffer,
 }
})

module.exports = mongoose.model('PostData', postDataSchema);

