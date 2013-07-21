$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
  	$('#awesomeness_holder').text($(this).data('heading'));
  });

  $('.skill_teller').on('click', function() {
  	$('#skill_holder').text(location.pathname.split('/')[2]);
  });

  $('.meal_teller').on('click', function(){
  	$('#meal').toggle();
  });

  // What other events do you need to bind to make the other pages work?

  // FOR STRETCH
  $('.color-button').click(function(e){
    $('body').css('background-color', $(this).data('color'));
  });
});
