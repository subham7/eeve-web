$(".covbookingBtn").click(function () {
  var data = $("#covbooking-form")
    .serializeArray()
    .reduce(function (obj, item) {
      obj[item.name] = item.value
      return obj
    }, {})

  bookingLeads(data)
  var options = {
    key: "rzp_live_6MXS8LHjHs665O",
    amount: "29900", // Amount is in currency subunits. Default currency is INR. Hence, 29935 refers to 29935 paise or INR 299.35.
    //amount: "100",
    currency: "INR",
    name: "EeVe India",
    description: "Pre book your ride.",
    payment_capture: "1",
    image:
      "http://ec2-13-126-94-61.ap-south-1.compute.amazonaws.com/assets/images/logoBlack.png",

    prefill: {
      name: data.first_name + " " + data.last_name,
      email: data.email,
      contact: data.phone,
    },
    notes: {
      address: "note value",
    },
    theme: {
      color: "#4db153",
    },
    handler: function (response) {
      var formData = { ...response, ...data }
      $.ajax({
        url: "/prebookform/formspree",
        type: "POST",
        data: formData,
        success: function (response) {
          setTimeout(() => {
            window.location.replace("/success")
          }, 1000)
        },
        error: function (err) {
          alert("There was a problem! Please try again.")
        },
      })
    },
  }
  var rzp1 = new Razorpay(options)
  rzp1.open()
  e.preventDefault()
})

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.setRequestHeader("Accept", "application/json")
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType)
    } else {
      error(xhr.status, xhr.response, xhr.responseType)
    }
  }
  xhr.send(data)
}

function bookingLeads(formData) {
  $.ajax({
    url: "/prebookform/formspreeleads",
    type: "POST",
    data: formData,
  })
}

function success() {
  setTimeout(() => {
    window.location.replace("/success")
  }, 1000)
}

function error() {
  alert("Error")
}
