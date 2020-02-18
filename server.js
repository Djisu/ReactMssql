//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");


const path = require('path')
var sql = require("mssql");

const Operator_definition = require('./routes/api/Operator_definition');
const DEM_Productx = require('./routes/api/DEM_Productx')
const rept_Estimates = require('./routes/api/rept_Estimates')
const Display_Products = require('./routes/api/Display_Products')




var app = express(); 

// Body Parser Middleware
//app.use(bodyParser.json()); 

// bodyParser Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});


// Connection string parameters.
var sqlConfig = {
    server: "DESKTOP-2JRPJNT",
    user: "sa",
    password: "Timbuk2tu",
    options: {
      database: "Northwindx",
      instanceName: "MSSQLSERVER",
      port: 1433,
      host: "127.0.0.1",
      dialect: "mssql"
    }
}
// Use Routes.NOTE NO FULL STOPS AT THE BEGINNING
//app.use('/', routes);
app.use('/api/DEM_Productx', DEM_Productx);
app.use('/api/rept_Estimates', rept_Estimates); 
app.use('/api/Operator_definition', Operator_definition);
app.use('/api/Display_Products', Display_Products);

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`)) 

//app.use('/api/Operator_definition', Operator_definition)

/* const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
 */

// Start server and listen on http://localhost:8081/
/* var server = app.listen(5000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
}); */





