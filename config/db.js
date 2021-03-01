const mysql = require("promise-mysql")
const Bluebird = require("bluebird")
const SqlString = require("sqlstring")

// Direct require dotenv, see https://www.npmjs.com/package/dotenv#usage
// for more.
require("dotenv").config()

let dbname

switch (process.env.NODE_ENV) {
  case "test":
    dbname = "eeve"
    break
  case "development":
    dbname = "eeve"
    break
  case "production":
    dbname = "eeve"
    break
  default:
    dbname = "eeve"
}

const dbAddress = process.env.DB_HOST || "127.0.0.1"
const dbPort = process.env.DB_PORT || 3306

let connection = mysql.createPool({
  connectionLimit: 100,
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "password",
  database: dbname
})

let db = Bluebird.promisifyAll(connection)

function getConnection() {
  return db.getConnection().disposer(connection => {
    db.releaseConnection(connection)
  })
}

let query = (sql, value) => {
  let sqlquery = SqlString.format(sql, value)
  //if (process.env.NODE_ENV === 'test') {
  console.log(sqlquery)
  //}
  return new Bluebird((resolve, reject) => {
    Bluebird.using(getConnection(), connection => {
      return connection
        .query(sqlquery)
        .then(rows => {
          // console.log(rows)
          if (Array.isArray(rows)) {
            if (rows.length === 0) {
              resolve([])
            } else if (rows.length === 1) {
              findAndConvertBufferToString(rows)
              resolve(rows)
            } else {
              findAndConvertBufferToString(rows)
              resolve(rows)
            }
          } else {
            resolve(rows)
          }
        })
        .catch(error => {
          console.log(error)
          reject(error.code)
        })
    })
  })
}

function findAndConvertBufferToString(data) {
  data.map(item => {
    for (var key in item)
      Buffer.isBuffer(item[key])
        ? (item[key] = Buffer.from(item[key]).toString("utf8"))
        : null
  })
}

module.exports = {
  db,
  query
}
