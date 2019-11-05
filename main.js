// al click sull'hamburger compare il menu
$(".header-right > a").click(function(){
  $(".hamburger-menu").show();
})

// faccio scomparire il menu cliccando sulla X
$(".hamburger-menu > a").click(function(){
  $(".hamburger-menu").hide();
})
