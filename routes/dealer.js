const path = require("path")
const express = require("express")
const router = express.Router()
const { query } = require("../config/db")

router.get("/state/:state/dist/:dist", (req, res) => {
  let sql = `SELECT d.latitude, d.longitude 
            FROM dealers1 d
            WHERE d.StateId = ?
            AND d.DistId = ?`

  query(sql, [req.params.state, req.params.dist])
    .then(data => {
      if (Object.keys(data).length === 0)
        res.status(200).json({
          status: false,
          data: "No dealer found at the given location!"
        })
      else res.status(200).json({ status: true, data: data })
    })
    .catch(err => {
      res.status(400).json({
        status: false,
        data: "Some problem occured at our side please try again.",
        err: err
      })
    })
})

module.exports = router
