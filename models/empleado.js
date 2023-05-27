const mongoose = require("mongoose")
const {Schema} = mongoose
 
const empleado = new Schema({
apellido: {type: String, required: true},
nombre: {type:String, required: true},
nro_documento: {type:String, required:true},
estado: {type: Boolean, required: true}
})

module.exports = mongoose.model.Empleado || mongoose.model("Empleado",empleado);