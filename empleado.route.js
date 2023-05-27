//defino controlador para el manejo de CRUD
const empleadoCtrl = require('../practicaWeb/controller/controllers');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', empleadoCtrl.getEmpleados);
router.post('/',empleadoCtrl.insertEmpleado);
router.get('/:id', empleadoCtrl.getEmpleado);
//router.put('/:id', agenteCtrl.editAgente);
//router.delete('/:id', agenteCtrl.deleteAgente);
//exportamos el modulo de rutas
module.exports = router;