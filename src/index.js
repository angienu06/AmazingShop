const express = require ('express');
const router = express.Router();




const app = express();

//settings
app.set('port', 3000);

//Middlewares
app.use(express.json());
 
//Routes
app.use(require ('./routes/Reportes'));
app.use(require('./routes/Estadisticas'));
app.use(require('./routes/Compras'));
app.use(require('./routes/Ventas'));


//Staring the server
app.listen(app.get('port'), ()=>{
console.log('Server on port', app.get('port'))
});

app.get('/', (req, rest ) =>{
    rest.send('Hello word');
});


