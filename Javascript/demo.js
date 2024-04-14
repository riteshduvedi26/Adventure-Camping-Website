
//Day Mode

$(document).ready(function(){
    $('.mode').change(function(){
      if($(this).prop('checked')){
        $('.header').css('background-image', "url('css/images/day.jpg')");
        $('.fwall').css('background-image', "url('css/images/daya.jpg')");
        $('body').css('background-color',"white");
        $('.mirado').css('color', "white");
        $('.card-body').css('background-color',"#ffe8ff");
        $('h3').css('color', "white");
          $('h2').css('color', "#800000");
          $('h5').css('color', "black");
        $('p').css('color', " #1a47a3");
      }
      else{
        $('.header').css('background-image', "url('css/images/bg1div.jpg')");
        $('.fwall').css('background-image', "url('css/images/bg1.jpg')");
        $('body').css('background-color', "black");
        $('.card-body').css('background-color', "black");
        $('h2').css('color', "#face98");
        $('h3').css('color', "white");
        $('h5').css('color', "#c3f0bd");
        $('p').css('color', "white");
      }
    });
});
$('.navbar-toggler-icon').click(function(){
  var get = $('.map');
  var gett = $('.maplink');
  get.remove();
  gett.remove();
});
