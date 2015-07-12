$('.search-result').on('click', '.company', function() {
  $('.company-full').removeClass('company-full');
  var $company = $(this);

  $company.toggleClass('company-full');
  setTimeout(function(){
    $('html, body').animate({
      scrollTop: $company.offset().top
    }, 800);
  }, 300);
});


$('.full-page').on('click input', function(){
  $(this).removeClass('full-page');
});
