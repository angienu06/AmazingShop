const mysql = require('mysql');
const express = require('express');
var app = express();

const bp = require('body-parser');

app.use(bp.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=>{
res.send('Hello Word')
});

let mysqlconecction= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_amazingshop',
    password: ''
});

//test de coneccion 
mysqlconecction.connect((err)=>{
if  (!err){
console.log('Coneccion Exitosa')
}
else{
    console.log('Error al conectar a la base de datos ')  
}
})

//Ejecutar el servidor en un puerto especifico 

app.listen(3000, () => console.log('Server Running puerto: 3000'));
