$(".prebookBtn").click(function() {
  var data = $("#prebook-form")
    .serializeArray()
    .reduce(function(obj, item) {
      obj[item.name] = item.value
      return obj
    }, {})
  $.post("/prebookform", data, function() {
    var options = {
      key: "rzp_live_6MXS8LHjHs665O",
      amount: "100000", // Amount is in currency subunits. Default currency is INR. Hence, 29935 refers to 29935 paise or INR 299.35.
      //amount: "100",
      currency: "INR",
      name: "EeVe India",
      description: "Pre book your ride.",
      payment_capture: "1",
      image:
        "http://ec2-13-126-94-61.ap-south-1.compute.amazonaws.com/assets/images/logoBlack.png",
      handler: function(response) {
        $.ajax({
          url: "/prebookform/paymentsuccess",
          type: "PUT",
          data: {
            payment_id: response.razorpay_payment_id,
            email: data.email
          },
          success: function(response) {
            setTimeout(() => {
              window.location.replace("/success")
            }, 1000)
          }
        })
      },
      prefill: {
        name: data.first_name + " " + data.last_name,
        email: data.email
      },
      notes: {
        address: "note value"
      },
      theme: {
        color: "#4db153"
      }
    }
    var rzp1 = new Razorpay(options)
    rzp1.open()
    e.preventDefault()
  }).error(function() {
    alert("Some error occured please try again.")
  })
})
