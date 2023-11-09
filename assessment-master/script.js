$(document).ready(function() {
  // Background Image Func
  function backgroundImageFunc () {

    let currentImg = $('.active-image')
    let nextImg = currentImg.next()

    if (nextImg.length) {

      currentImg.removeClass('active-image')
      nextImg.addClass('active-image')
      
    } else {
      let prevImg = currentImg.prev()

      currentImg.removeClass('active-image')
      prevImg.addClass('active-image')
    }
  }

  setInterval(backgroundImageFunc, 5000);

  // Modal Funcs
  $(".partner-portal-button").click(function(event) {
    $(".modal-background-container").css("display", "flex")
    $(".modal").css("display", "flex")
  })

  $("#close-modal").click(function() {
    $(".modal").css("display", "none")
    $(".modal-background-container").css("display", "none")
  })

  $(".modal-background-container").click(function(e) {
    if ($(e.target).is(".modal-background-container")) {
      $(".modal").css("display", "none")
      $(".modal-background-container").css("display", "none")
    }
  });

  $("#sign-in-btn").click(function(e) {
    e.preventDefault()
    const parentEmail = $("#parent-email").val();
    const parentPassword = $("#parent-password").val();
    console.log(parentPassword, 'pass??/')
    console.log(parentEmail, 'email???/')
    console.log('SIGN INNNNN')

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/signin",
      dataType: "json",
      CORS: true,
      contentType:'application/json',
      secure: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: JSON.stringify({ email: parentEmail, password: parentPassword })
    })
  })

  $(".signup-btn").click(function(e) {
    const name = $("#name").val();
    const email = $("#email").val();
    const password = $("#password").val();

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/stayUpdated",
      dataType: "json",
      CORS: true,
      contentType:'application/json',
      secure: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      data: JSON.stringify({ name, email, password })
    })
  })
})
