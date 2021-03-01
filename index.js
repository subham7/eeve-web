const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const compression = require("compression")
const exphbs = require("express-handlebars")
const cors = require("cors")

const base = require("./routes/base")
const prebookform = require("./routes/prebookform")
const dealer = require("./routes/dealer")

var app = express()
var port = process.env.PORT || 7100

app.engine("hbs", exphbs({ defaultLayout: "main1" }))
app.set("view engine", "hbs")
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))

app.use("/", base)
app.use("/prebookform", prebookform)
app.use("/dealer", dealer)
app.use((req, res, next) => {
  res.status(404).render("404", { layout: false })
})

app.listen(port, function () {
  console.log(`Server started at ${port}`)
})
