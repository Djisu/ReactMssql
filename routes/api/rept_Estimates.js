const express = require("express");
const router = express.Router();

var sql = require("mssql");

var sqlConfig = {
    user: 'sa',
    password: 'Timbuk2tu',
    server: 'DESKTOP-2JRPJNT',
    database: 'Northwindx'
 };   
 
router.post("/addEstimate", (req, res) => {
  console.log("router.post(/postEstimate)");

  function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
  }
  
  const newDate = convertDate(req.body.transdate)

  console.log("newDate===", newDate);

  sqlString = "INSERT INTO rept_Estimates (transdate, description, ProductID, size, quantity, SquareMetersSold, agentno, units)" 
  + " VALUES (CAST('" + req.body.transdate + "' as date), '" + req.body.description + "','" + req.body.ProductID + "','" + req.body.size + "'," + 
   req.body.quantity + "," + req.body.SquareMetersSold + ",'" + req.body.agentno + "'," + req.body.units + ")";

   console.log('sqlString===', sqlString)
  // insert estimate
  sql.connect(sqlConfig, function() {
    var request = new sql.Request();   
    var stringRequest = sqlString
    request.query(stringRequest, function(err, recordset) {
      if (err) console.log(err);
            res.send(JSON.stringify(recordset)); // Result in JSON format
    });
  });
});

module.exports = router;