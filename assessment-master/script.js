$(document).ready(function() {
  
  // Background Image Func
  function backgroundImageFunc () {

      $('.first-banner').animate({'left': 0});
      $('.second-banner').animate({'left': 0});

      function delay (time) {
        return new Promise(resolve => setTimeout(resolve, time))
      }

      // delay to allow animation to complete
      delay(1000).then(() => {
        let something = $('.first-banner').remove()
        $('.second-banner').css('left', -1510)
        
        $(something).removeClass('first-banner')
        $(something).addClass('second-banner')
        $(something).css('left', -1510)

        $('.second-banner').addClass('first-banner')
        $('.first-banner').removeClass('second-banner')
  
        $('.test').prepend(something);
      })

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

  $("#sign-in-btn").click(async function(e) {
    e.preventDefault()
    const parentEmail = $("#parent-email").val();
    const parentPassword = $("#parent-password").val();

    const config = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: parentEmail, password: parentPassword })
    }

    const results = await fetch('http://localhost:3000/signin', config)
    const data = await results.json()
    
    if(data.success) {
        window.location.replace('parent-portal.html')
    }
  })

  $(".signup-btn").click(async function(e) {
    const name = $("#name").val();
    const email = $("#email").val();
    const password = $("#password").val();

    const config = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    }

    const results = await fetch('http://localhost:3000/stayUpdated', config)
    const data = await results.json()
  })
})
