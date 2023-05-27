const mongoose = require('mongoose');
const URI = 'mongodb://0.0.0.0/Empleados';
mongoose.connect(URI)
.then(db=>console.log('DB is connected'))
.catch(err=>console.error(err))
module.exports = mongoose;