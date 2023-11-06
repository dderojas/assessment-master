$(document).ready(function() {

  $(".header-image-container").click(function() {
    console.log("Clicked!!!");

    let currentImg = $('.active-image')
    let nextImg = currentImg.next()
    console.log(nextImg.length, 'next imageeeee')
    if (nextImg.length) {

      currentImg.removeClass('active-image')
      nextImg.addClass('active-image')
    } else {
      let prevImg = currentImg.prev()

      currentImg.removeClass('active-image')
      prevImg.addClass('active-image')
    }
  });

  // Modal Funcs
  $(".login-button").click(function(event) {
    console.log(event.target.nodeName, 'event???/')

    $(".modal-background-container").css("display", "flex")
    $(".modal").css("display", "flex")
  })

  $("#close").click(function() {
    $(".modal").css("display", "none")
    $(".modal-background-container").css("display", "none")
  })

  $(".modal-background-container").click(function(e) {
    if ($(e.target).is(".modal-background-container")) {
      $(".modal").css("display", "none")
      $(".modal-background-container").css("display", "none")
    }
  });
})
