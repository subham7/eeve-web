const express = require("express")
const router = express.Router()
const fs = require("fs")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
const { Parser } = require("json2csv")
const sgMail = require("@sendgrid/mail")
const axios = require("axios")

router.use(bodyParser())

const { query } = require("./../config/db")

router.post("/", (req, res) => {
  let sql = `INSERT INTO pre_book SET ?`
  query(sql, [req.body])
    .then((_) => {
      res.status(200).json({ m: "success" })
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad Request!", error: err })
    })
})

router.get("/data", (req, res) => {
  const fields = [
    "id",
    "first_name",
    "last_name",
    "email",
    "city",
    "state",
    "vehicle",
    "phone",
    "address",
    "pin",
    "payment_id",
  ]
  const opts = { fields }
  const filePath = `./public/csv${Date.now()}.csv`

  let sql = `SELECT pb.id, pb.first_name, pb.last_name, pb.email, pb.city, s.state, v.vehicle, pb.phone, pb.address, pb.pin, pb.payment_id
  FROM pre_book pb
  INNER JOIN state s on pb.state = s.id
  INNER JOIN vehicle v on pb.v_model = v.id
  ORDER BY pb.id;`
  query(sql)
    .then((data) => {
      const parser = new Parser(opts)
      const csv = parser.parse(data)
      fs.writeFile(filePath, csv, () => {
        res.status(200).download(filePath)
      })
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad Request!", error: err })
    })
})

router.put("/paymentsuccess", (req, res) => {
  let sql = `UPDATE pre_book 
  SET payment_id = ?
  WHERE email = ?`
  query(sql, [req.body.payment_id, req.body.email])
    .then((_) => {
      // sgMail.setApiKey(
      //   "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"
      // )
      // const msg = {
      //   to: req.body.email,
      //   from: "subham.sengupta@provoz.co",
      //   subject: "Sending with Twilio SendGrid is Fun",
      //   text: "and easy to do anywhere, even with Node.js",
      //   html: "<strong>and easy to do anywhere, even with Node.js</strong>"
      // }
      // sgMail.send(msg)

      res.status(200).json({ m: "success" })
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad Request!", error: err })
    })
})

router.get("/testp", (req, res) => {
  res.send("test")
})

router.get("/email", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    if (err) {
      console.error("Failed to create a testing account. " + err.message)
      return process.exit(1)
    }

    console.log("Credentials obtained, sending message...")

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    })

    // Message object
    let message = {
      from: "admin@provoz.co",
      to: "subham.sengupta7@gmail.com",
      subject: "Nodemailer is unicode friendly ✔",
      text: "Hello to myself!",
      html: "<p><b>Hello</b> to myself!</p>",
    }

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log("Error occurred. " + err.message)
        return process.exit(1)
      }

      console.log("Message sent: %s", info.messageId)
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    })
  })
})

router.post("/formspree", (req, res) => {
  axios
    .post("https://formspree.io/xzbjzzja", req.body)
    .then(() => {
      res.status(200).json({ m: "success" })
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad Request!", error: err })
    })
})

router.post("/formspreeleads", (req, res) => {
  axios
    .post("https://formspree.io/xzbjdbkb", req.body)
    .then(() => {
      res.status(200).json({ m: "success" })
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad Request!", error: err })
    })
})

module.exports = router
