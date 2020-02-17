const express = require("express");
const router = express.Router();

var sql = require("mssql");

var sqlConfig = {
  user: "sa",
  password: "Timbuk2tu",
  server: "DESKTOP-2JRPJNT",
  database: "Northwindx"
};

router.post("/displayProducts", (req, res) => {
  console.log("router.post(/displayProducts)");

  // Find product by productID
  sql.connect(sqlConfig, function() {
    var request = new sql.Request();
    var stringRequest = "select * from new_Productx";
    request.query(stringRequest, function(err, recordset) {
      if (err) console.log(err);
      res.send(JSON.stringify(recordset)); // Result in JSON format
    });
  });
});
module.exports = router;
