const express = require("express");
const router = express.Router();

var sql = require("mssql");

var sqlConfig = {
    user: 'sa',
    password: 'Timbuk2tu',
    server: 'DESKTOP-2JRPJNT',
    database: 'Northwindx'
 };   
 
router.post("/login", (req, res) => {
  const operatorID = req.body.OperatorID;
  const password = req.body.password;

  // Find User by operatorID and password
  sql.connect(sqlConfig, function() {
    var request = new sql.Request();
    var stringRequest =
      "select * from Operator_definition where operatorID = '" +
      operatorID +
      "' and password = '" +
      password +
      "'";
    request.query(stringRequest, function(err, recordset) {
      if (err) console.log(err);
      res.send(JSON.stringify(recordset)); // Result in JSON format
    });
  });
});

module.exports = router;
