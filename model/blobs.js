var mongoose = require('mongoose');  
var blobSchema = new mongoose.Schema({  
  name: String,
  badge: Number,
  dob: { type: Date, default: Date.now },
  isloved: Boolean,
  monto: Number,
  talleres: String
});
mongoose.model('Blob', blobSchema);