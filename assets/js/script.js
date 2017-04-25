$(document).ready(function() {

$('#sidebar-button').click(function() {
    if ($('#sidebar-button').hasClass('button-active')) {
        $('body').removeClass('no-scroll');
        $('.sidebar-container').removeClass('sidebar-active');
        $('#sidebar-button').removeClass('button-active');
        $('.page-wrapper').removeClass('wrapper-active');
  }
    else {
        $('.sidebar-container').addClass('sidebar-active');
        $('#sidebar-button').addClass('button-active');
        $('.page-wrapper').addClass('wrapper-active');
        setTimeout(function() {
          $('body').addClass('no-scroll');}, 300);
  }
})

$('.sidebar-item').click(function() {
  $('body').removeClass('no-scroll');
  $('.sidebar-container').removeClass('sidebar-active');
  $('#sidebar-button').removeClass('button-active');
  $('.page-wrapper').removeClass('wrapper-active');
})

$('.page-wrapper').click(function() {
  if ($('#sidebar-button').hasClass('button-active')) {
           $('body').removeClass('no-scroll');
           $('.sidebar-container').removeClass('sidebar-active');
           $('#sidebar-button').removeClass('button-active');
           $('.page-wrapper').removeClass('wrapper-active');
       }
  })

  $('.project-item').hover(function() {
    $(this).css('opacity', .8);
  })

});
