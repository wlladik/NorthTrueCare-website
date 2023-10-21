function slowScroll(id){
  $("html, body").animate({
    scrollTop: $(id).offset().top
  }, 500);
  return false;
}

$(".header-top .menu").on("click", function(){
  if($("header .mobile-menu").is(":visible"))
    $(this).html('<i class="fa-solid fa-bars"></i>');
  else
    $(this).html('<i class="fa-regular fa-rectangle-xmark"></i>');


  $("header .mobile-menu").slideToggle();
});

$("#windowsBtn").on("click", function(){
  var screenWidth = window.innerWidth;
  if (screenWidth <= 999) {
    // Перехід по посиланню для ширини екрану менше або рівно 600px
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfgFxvrwFSS7vmROqNYfmQ2r9wKgU-_ZFtlVBpRj9bBfwvvsA/viewform?usp=sf_link", "_blank");
  } else {
    $("#form").toggle('slow', function(){
      //Animation complited
      if ($("#form_snow").is(":visible") && $("#form_grass").is(":visible")){
        $("#form_snow").toggle("slow");
        $("#form_grass").toggle("slow");
      } else if ($("#form_snow").is(":visible")){
        $("#form_snow").toggle("slow");
      } else if ($("#form_grass").is(":visible"))
        $("#form_grass").toggle("slow");
        //close opened forms if we open another one
    });
  }

});

$("#appointmentBtn").on("click", function(){
  var screenWidth = window.innerWidth;
  if (screenWidth <= 999) {
    // Перехід по посиланню для ширини екрану менше або рівно 600px
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfgFxvrwFSS7vmROqNYfmQ2r9wKgU-_ZFtlVBpRj9bBfwvvsA/viewform?usp=sf_link", "_blank");
  } else {
    $("#form_snow").toggle('slow', function(){
      //Animation complited
      if ($("#form").is(":visible") && $("#form_grass").is(":visible")){
        $("#form").toggle("slow");
        $("#form_grass").toggle("slow");
      } else if ($("#form").is(":visible")){
        $("#form").toggle("slow");
      } else if ($("#form_grass").is(":visible"))
        $("#form_grass").toggle("slow");
        //close opened forms if we open another one
    });
  }
});

$("#grassBtn").on("click", function(){
  var screenWidth = window.innerWidth;
  if (screenWidth <= 999) {
    // Перехід по посиланню для ширини екрану менше або рівно 600px
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfgFxvrwFSS7vmROqNYfmQ2r9wKgU-_ZFtlVBpRj9bBfwvvsA/viewform?usp=sf_link", "_blank");
  } else {
    $("#form_grass").toggle('slow', function(){
      //Animation complited
      if ($("#form").is(":visible") && $("#form_snow").is(":visible")){
        $("#form").toggle("slow");
        $("#form_snow").toggle("slow");
      } else if ($("#form").is(":visible")){
        $("#form").toggle("slow");
      } else if ($("#form_snow").is(":visible"))
        $("#form_snow").toggle("slow");
        //close opened forms if we open another one
    });
  }
});

$("#subscribe").on("click", function(){
  let email = $("#email").val();
  email = email.trim();
  if(email.split("@").length != 2 || email.split(".").length != 2){
    $("#sub_form label").text("Invalid email adress.");
    $("#sub_form label").fadeIn();
  } else{
    $("#sub_form label").css("color", "green");
    $("#sub_form label").text("Email successfully sent, you are now subscribed to our newsletter.");
    $("#sub_form label").fadeIn();
  }

  setTimeout(function(){
    $("#sub_form label").fadeOut();
  }, 4000);
});

$('.video-play, #modal-video .close-button').on('click', function(){
  $('#modal-video').toggle();
  $("body").toggleClass('overflow-hidden');
  resizeVideo();
});

$(window).on('resize', function(){
  resizeVideo();
}).resize();

function resizeVideo(){
  $('iframe').each(function(){
    let width = $(this).width();
    $(this).css('height', width / 1.77 + "px");
  });
}

function submitForm(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var url = 'https://docs.google.com/forms/d/e/1FAIpQLSeztTuYeS5P_WLcR7MguH6dFi5DBs_XXL7VkwQvOK9-JU7iog/formResponse';
  var data = new FormData();
  data.append('entry.786025734', email);

  fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: data
  })
  .then(response => {
      // Обробка успішного відправлення форми
      console.log('Data succsessfully sent!');
  })
  .catch(error => {
      // Обробка помилки
      console.error('Google Forms error.', error);
  });
}