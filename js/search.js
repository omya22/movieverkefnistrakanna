$(document).ready(function(){
  $('.searchlogo').click(function() {
       $('.search').show();
      //  $("body").css("overflow", "hidden");
     });

     $(".closeMe").click(function() {
       $('.search').hide();
       $("body").css("overflow", "auto");
     });


               $('.Genre').slick({
                 dots: true,
                 infinite: false,
                 speed: 300,
                 slidesToShow: 2.7,
                 slidesToScroll: 3,
                 responsive: [
                   {
                     breakpoint: 1024,
                     settings: {
                       slidesToShow: 3,
                       slidesToScroll: 3,
                       infinite: true,
                       dots: true
                     }
                   },
                   {
                     breakpoint: 600,
                     settings: {
                       slidesToShow: 2,
                       slidesToScroll: 2
                     }
                   },
                   {
                     breakpoint: 480,
                     settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1
                     }
                   }
                   // You can unslick at a given breakpoint now by adding:
                   // settings: "unslick"
                   // instead of a settings object
                 ]
               });



  $(document).foundation();


//$(".value").innerHTML = $(".slider-handlemin").attr("aria-valuenow", newprogress).value;

$('.slider').on('moved.zf.slider', function(){
  let handleValue1 = $(".slider-handlemin").attr('aria-valuenow');
  let handleValue2 = $(".slider-handlemax").attr('aria-valuenow');
  console.log(handleValue1);
  document.getElementById("talamin").innerHTML = handleValue1/10;
  document.getElementById("talamax").innerHTML = handleValue2/10;
});

  $('.btnG').click(function(){
    $(this).toggleClass('btnG1');
  });

  $(".seemore").click(function() {
    $('.row1').show();
    $(".seeless").show();
        $(".seemore").hide();
  });

  $(".seeless").click(function() {
    $('.row1').hide();
      $('.seeless').hide();
          $('.seemore').show();
      });
});
