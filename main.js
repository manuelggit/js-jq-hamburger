// al click sull'hamburger compare il menu
$(".header-right > a").click(function(){
  $(".hamburger-menu").show(500);
})

// faccio scomparire il menu cliccando sulla X
$(".hamburger-menu > a").click(function(){
  $(".hamburger-menu").hide(300);
})
