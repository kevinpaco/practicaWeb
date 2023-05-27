const express = require("express"); //nos proporcina funcionalidades de enrutamiento
const cors = require("cors"); //acceso a la aip
const {mongoose} = require("./database") //archivo con la conexion a la BD

const app = express();

//programas intermiadio
app.use(express.json());
app.use(cors({origin: "http://localhost:4200"}))

//Cargamos el modulo de direccionamiento de ruta
app.use('/api/empleado', require('./empleado.route')); //api 
//app.use('/api/sector', require('./routes/sector.route'));
  
//setting
app.set('port', process.env.PORT || 3000); // 
//starting the server

app.listen(app.get('port'), () => {
console.log(`Server started on port`, app.get('port'));
});