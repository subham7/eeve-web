const path = require("path")
const express = require("express")
const router = express.Router()
const { query } = require("./../config/db")

router.get("/", (req, res) => {
  res.render("home-test", {
    canonical: "https://eeveindia.com/",
    keyword:
      "Electric motorcycle India, electric bike price in India, electric two wheeler in India, electric scooter in India",
    title:
      "Electric Two Wheeler Motorcycle in India | Electric Scooter, Bike Price in India | Eeveindia",
    description:
      "Eeveindia is an Electric Two-Wheeler manufacturing company that provides a diverse range of Electric Two Wheeler Motorcycle in India that empower ecological sustainability with its futuristic, noise, and emissions-free Electric Scooter. Thus, it brings a balance between high-end technology and the environmental health of the world at one platform.With a five years warranty and a reasonable price,it provides a great value as compared to normals Bike Price in India.",
  })
})

router.get("/xeniaa", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/phe.html"))
})

router.get("/dealership", (req, res) => {
  res.render("dealer-form", {
    canonical: "https://eeveindia.com/dealership",
    keyword:
      "Electric scooter, Electric bikes, EEVE india, electric two wheeler, EEVE electric vehicle , electric bike price, electric scooter india price, electric bike india price, new electric bikes, eeve scooter price",
    title:
      "Best Upcoming Electric Scooters in India | Top Two Wheelers in Odisha | Eeveindia",
    description:
      "EeVe is an Indian electric two wheeler company that manufactures a wide range of eco-friendly, battery enabled electric scooters. So let's #RideIntoFuture",
  })
})

router.get("/booking", (req, res) => {
  res.render("bookingMsg", {
    canonical: "https://eeveindia.com/dealership",
    keyword:
      "Electric scooter, Electric bikes, EEVE india, electric two wheeler, EEVE electric vehicle , electric bike price, electric scooter india price, electric bike india price, new electric bikes, eeve scooter price",
    title:
      "Best Upcoming Electric Scooters in India | Top Two Wheelers in Odisha | Eeveindia",
    description:
      "EeVe is an Indian electric two wheeler company that manufactures a wide range of eco-friendly, battery enabled electric scooters. So let's #RideIntoFuture",
  })
})

router.get("/about", (req, res) => {
  res.render("about-test", {
    canonical: "https://eeveindia.com/about",
    keyword:
      "Best electric scooter in India 2019, best electric scooter in India 2020, best scooter in India 2019",
    title: "Best Electric Scooter in India 2019 | 2020 | Eeveindia",
    description:
      "Eeveindia ranks in the list of Best Electric Scooters in India 2019 and 2020 as well. EeVe electric scooters are light, stylish, & hassle-free. EeVe electric scooter is a great pick for anyone looking for high performance, low-maintenance, & lightweight companions for their everyday ride.",
  })
})

router.get("/your", (req, res) => {
  res.render("your-test", {
    canonical: "https://eeveindia.com/dealership",
    keyword:
      "Electric scooter, Electric bikes, EEVE india, electric two wheeler, EEVE electric vehicle , electric bike price, electric scooter india price, electric bike india price, new electric bikes, eeve scooter price",
    title:
      "Best Upcoming Electric Scooters in India | Top Two Wheelers in Odisha | Eeveindia",
    description:
      "EeVe is an Indian electric two wheeler company that manufactures a wide range of eco-friendly, battery enabled electric scooters. So let's #RideIntoFuture",
  })
})

router.get("/wind", (req, res) => {
  res.render("wind-test", {
    canonical: "https://eeveindia.com/wind",
    keyword: "Eeve wind electric scooters near me",
    title: "Eeve Wind Electric Scooters Near me | Eeveindia",
    description:
      "EeVe India introduces a vast fleet of electric scooters that are an alternative to petrol vehicles & are cost-efficient in multiple ways. Eeve Wind Electric Scooters Near me have increased reliability with features like USB Port, Keyless entry, GPS tracking, & anti-theft lock with a five-year warranty.",
  })
})

// router.get("/wind-test", (req, res) => {
//   res.render("wind")
// })

router.get("/4u", (req, res) => {
  res.render("4u-test", {
    canonical: "https://eeveindia.com/dealership",
    keyword:
      "Electric scooter, Electric bikes, EEVE india, electric two wheeler, EEVE electric vehicle , electric bike price, electric scooter india price, electric bike india price, new electric bikes, eeve scooter price",
    title:
      "Best Upcoming Electric Scooters in India | Top Two Wheelers in Odisha | Eeveindia",
    description:
      "EeVe is an Indian electric two wheeler company that manufactures a wide range of eco-friendly, battery enabled electric scooters. So let's #RideIntoFuture",
  })
})

// router.get("/dealers", (req, res) => {
//   let dealer = []
//   let district = []
//   let state = []
//   let sql1 = `SELECT TradeName, latitude, longitude from dealers1`
//   let sql2 = `SELECT * FROM state`
//   let sql3 = `SELECT * FROM district`
//   query(sql1)
//     .then(data => {
//       dealer = data
//       return query(sql2)
//     })
//     .then(data => {
//       state = data.splice(0)
//       return query(sql3)
//     })
//     .then(data => {
//       district = data
//       res.render("dealers", {
//         dealer: dealer,
//         state: state,
//         district: district
//       })
//     })
//     .catch(err => {
//       res.json({ message: "Bad Request!", error: err })
//     })
// })

router.get("/dealerdata", (req, res) => {
  let sql = `SELECT * FROM dealers1`
  query(sql)
    .then((data) => {
      if (!Array.isArray(data)) data = [data]
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad Request!", error: err })
    })
})

router.get("/dealers", (req, res) => {
  res.render("dealer-test", {
    canonical: "https://eeveindia.com/dealers",
    keyword:
      "Electric scooter, Electric bikes, EEVE india, electric two wheeler, EEVE electric vehicle , electric bike price, electric scooter india price, electric bike india price, new electric bikes, eeve scooter price",
    title:
      "Best Upcoming Electric Scooters in India | Top Two Wheelers in Odisha | Eeveindia",
    description:
      "EeVe is an Indian electric two wheeler company that manufactures a wide range of eco-friendly, battery enabled electric scooters. So let's #RideIntoFuture",
  })
})

router.get("/contact", (req, res) => {
  res.render("contact-test", {
    canonical: "https://eeveindia.com/contact",
    keyword:
      "Electric scooter, Electric bikes, EEVE india, electric two wheeler, EEVE electric vehicle , electric bike price, electric scooter india price, electric bike india price, new electric bikes, eeve scooter price",
    title:
      "Best Upcoming Electric Scooters in India | Top Two Wheelers in Odisha | Eeveindia",
    description:
      "EeVe is an Indian electric two wheeler company that manufactures a wide range of eco-friendly, battery enabled electric scooters. So let's #RideIntoFuture",
  })
})

router.get("/testride", (req, res) => {
  res.redirect("/#testRide")
})

router.get("/faq", (req, res) => {
  res.render("faq", {
    canonical: "https://eeveindia.com/faq",
    keyword:
      "Electric scooter, Electric bikes, EEVE india, electric two wheeler, EEVE electric vehicle , electric bike price, electric scooter india price, electric bike india price, new electric bikes, eeve scooter price",
    title:
      "Best Upcoming Electric Scooters in India | Top Two Wheelers in Odisha | Eeveindia",
    description:
      "EeVe is an Indian electric two wheeler company that manufactures a wide range of eco-friendly, battery enabled electric scooters. So let's #RideIntoFuture",
  })
})

router.get("/pressrelease", (req, res) => {
  res.render("pressrelease-test", {
    canonical: "https://eeveindia.com/pressrelease",
    keyword:
      "Electric scooter, Electric bikes, EEVE india, electric two wheeler, EEVE electric vehicle , electric bike price, electric scooter india price, electric bike india price, new electric bikes, eeve scooter price",
    title:
      "Best Upcoming Electric Scooters in India | Top Two Wheelers in Odisha | Eeveindia",
    description:
      "EeVe is an Indian electric two wheeler company that manufactures a wide range of eco-friendly, battery enabled electric scooters. So let's #RideIntoFuture",
  })
})

router.get("/privacy", (req, res) => {
  res.render("privacy", {
    canonical: "https://eeveindia.com/privacy",
    keyword:
      "Electric scooter, Electric bikes, EEVE india, electric two wheeler, EEVE electric vehicle , electric bike price, electric scooter india price, electric bike india price, new electric bikes, eeve scooter price",
    title:
      "Best Upcoming Electric Scooters in India | Top Two Wheelers in Odisha | Eeveindia",
    description:
      "EeVe is an Indian electric two wheeler company that manufactures a wide range of eco-friendly, battery enabled electric scooters. So let's #RideIntoFuture",
  })
})

router.get("/success", (req, res) => {
  res.render("success", { layout: false })
})

router.get("/mylocation", (req, res) => {
  res.render("myLatLong", { layout: false })
})

router.get("/sitemap.xml", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/seo/sitemap.xml"))
})

router.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/seo/robots.txt"))
})

module.exports = router
