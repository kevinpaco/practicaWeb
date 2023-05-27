//Controlador
const Empleado = require("../models/empleado");
const empleadoCtrl = {};

empleadoCtrl.getEmpleados = async (req, res) => {
  var empleados = await Empleado.find();
  res.json(empleados);
};

empleadoCtrl.insertEmpleado = async (req, res) => {
  console.log(req.body);
  var empleado = new Empleado(req.body);
  try {
    await empleado.save();
    res.status(200).json({
      status: "1",
      msg: "Empleado Guardado",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Empleado no Guardado",
    });
  }
};

empleadoCtrl.getEmpleado = async (req, res) => {
  const empleado = await Empleado.findById(req.params.id);
  res.json(empleado);
};

empleadoCtrl.editEmpleado = async (req, res) => {
  const empleado = new Empleado(req.body);
  try {
    await Empleado.updateOne({ _id: req.body._id }, empleado);
    res.json({
      status: "1",
      msg: "Agente updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};

module.exports = empleadoCtrl;
