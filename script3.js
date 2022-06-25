var lastScrollTop=0;
$(window).scroll(function(){
    if($(this).scrollTop()>50 ){
        $('.header-wrapper').addClass('scroll');
        $('.notifications-and-accounts-div').addClass('scroll2');
    } else {
        $('.header-wrapper').removeClass('scroll');
        $('.notifications-and-accounts-div').removeClass('scroll2');
    }
    lastScrollTop=$(this).scrollTop();

});

$('.button-search').click(function(){
    $('.content-input').toggleClass('display')
    $('.button-search').toggleClass('button-search-display')
    $('.button-search-icon').toggleClass('button-search-display')
    $('.accounts').stop(true, true).slideUp(400)
    $('.drop-arrow').removeClass('drop-arrow-rotate')
    $('.drop-new').stop(true, true).slideUp(400)
    $('.notifications').stop(true, true).slideUp(400)
    if ($(window).width()<950) {
        $('.button-search').toggleClass('button-search-display2');
     }
})

$(document).ready(function () {
   

    

    $('.button-notification').mouseover(

        function () {
            $('.notifications').stop(true, true).slideDown(400);
            $('.accounts').stop(true, true).slideUp(400)
            $('.drop-arrow').removeClass('drop-arrow-rotate')
            $('.drop-new').stop(true, true).slideUp(400)
        }
    );
    
    $(".notifications").mouseleave(
        
        function () {
            $('.notifications').stop(true, true).slideUp(400)
		
        })

     $('.drop-down').mouseover(

            function () {
                $('.accounts').stop(true, true).slideDown(400);
                $('.drop-arrow').addClass('drop-arrow-rotate')
                $('.notifications').stop(true, true).slideUp(400)
                $('.drop-new').stop(true, true).slideUp(400)
            }
        );
        
        $(".accounts").mouseleave(
            
            function () {
                $('.accounts').stop(true, true).slideUp(400)
                $('.drop-arrow').removeClass('drop-arrow-rotate')
            })


            $('.browse').mouseover(

                function () {
                    $('.drop-new').stop(true, true).slideDown(400);
                    $('.accounts').stop(true, true).slideUp(400)
                    $('.drop-arrow').removeClass('drop-arrow-rotate')
                    $('.drop-media').toggleClass('drop-arrow-rotate')
                }
            );
            
            $(".list-drop").mouseleave(
                
                function () {
                    $('.drop-new').stop(true, true).slideUp(400)
                    $('.drop-media').removeClass('drop-arrow-rotate')
                })

});
$('.angle-right-button').click(function(event) {
    value = $('.left-panel').css('right') === '1450px' ? 0 : '1450px';
      $('.left-panel').animate({
          right: value
      });
      value2 = $('.right-panel').css('right') === '1450px' ? 0 : '1450px';
      $('.right-panel').animate({
        right: value2
    });
    

});
$('.angle-right-button1').click(function(event) {
    value = $('.left-panel1').css('right') === '1450px' ? 0 : '1450px';
      $('.left-panel1').animate({
          right: value
      });
      value2 = $('.right-panel1').css('right') === '1450px' ? 0 : '1450px';
      $('.right-panel1').animate({
        right: value2
    });
    

});


$(document).ready(function () {
   

  

    $('.card1').mouseover(

        function () {
            $('.card-bottom1').stop(true, true).slideDown(400);
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)
            $('.card1').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card1').addClass('card-bottom-scale')
            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card1-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        });
    
    $(".card-bottom1").mouseleave(
        
        function () {
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card1').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card1-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

   

    $('.card2').mouseover(

        function () {
            $('.card-bottom2').stop(true, true).slideDown(400);
            $('.card2').addClass('card-bottom-scale')
            $('.card2').addClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)
            $('.card1').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card2-img').addClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom2").mouseleave(
        
        function () {
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card2').removeClass('card-bottom-scale')
            $('.card2').removeClass('card-index')
            if ($(window).width()<949) {
                $('.card2-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

    

    $('.card3').mouseover(

        function () {
            $('.card-bottom3').stop(true, true).slideDown(400);
            $('.card3').addClass('card-bottom-scale')
            $('.card3').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)
            
            $('.card2').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card3-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom3").mouseleave(
        
        function () {
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card3').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card3-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

  

    $('.card4').mouseover(

        function () {
            $('.card-bottom4').stop(true, true).slideDown(400);
            $('.card4').addClass('card-bottom-scale')
            $('.card4').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)
            
            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card4-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom4").mouseleave(
        
        function () {
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card4').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card4-img').addClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

   

    $('.card5').mouseover(

        function () {
            $('.card-bottom5').stop(true, true).slideDown(400);
            $('.card5').addClass('card-bottom-scale')
            $('.card5').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)
           
            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card5-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom5").mouseleave(
        
        function () {
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card5').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card5-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

    

    $('.card6').mouseover(

        function () {
            $('.card-bottom6').stop(true, true).slideDown(400);
            $('.card6').addClass('card-bottom-scale')
            $('.card6').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)
      
            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card6-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom6").mouseleave(
        
        function () {
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card6').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card6-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   



    $('.card7').mouseover(

        function () {
            $('.card-bottom7').stop(true, true).slideDown(400);
            $('.card7').addClass('card-bottom-scale')
            $('.card7').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)

            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card7-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom7").mouseleave(
        
        function () {
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card7').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card7-img').removeClass('img-490px');
             }
        })

    

});

$(document).ready(function () {
   

  

    $('.card8').mouseover(

        function () {
            $('.card-bottom8').stop(true, true).slideDown(400);
            $('.card8').addClass('card-bottom-scale')
            $('.card8').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)
      
            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card8-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom8").mouseleave(
        
        function () {
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card8').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card8-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   



    $('.card9').mouseover(

        function () {
            $('.card-bottom9').stop(true, true).slideDown(400);
            $('.card9').addClass('card-bottom-scale')
            $('.card9').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)
    
            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card9-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom9").mouseleave(
        
        function () {
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card9').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card9-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

  

    $('.card10').mouseover(

        function () {
            $('.card-bottom10').stop(true, true).slideDown(400);
            $('.card10').addClass('card-bottom-scale')
            $('.card11').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)

            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card10-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom10").mouseleave(
        
        function () {
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card10-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

  

    $('.card11').mouseover(

        function () {
            $('.card-bottom11').stop(true, true).slideDown(400);
            $('.card11').addClass('card-bottom-scale')
            $('.card11').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)

            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card111-img').addClass('img-490px');
             }
        }
    );
    
    $(".card-bottom11").mouseleave(
        
        function () {
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card11').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card11-img').removeClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
           
        })

    

});
$(document).ready(function () {
   


    $('.card12').mouseover(

        function () {
            $('.card-bottom12').stop(true, true).slideDown(400);
            $('.card12').addClass('card-bottom-scale')
            $('.card12').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)

            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card12-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom12").mouseleave(
        
        function () {
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card12').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card12-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

   

    $('.card13').mouseover(

        function () {
            $('.card-bottom13').stop(true, true).slideDown(400);
            $('.card13').addClass('card-bottom-scale')
            $('.card13').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)
    
            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card13-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom13").mouseleave(
        
        function () {
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card13').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card13-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

  

    $('.card14').mouseover(

        function () {
            $('.card-bottom14').stop(true, true).slideDown(400);
            $('.card14').addClass('card-bottom-scale')
            $('.card14').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)

            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card14-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom14").mouseleave(
        
        function () {
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card14').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card14-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

    
    $('.card15').mouseover(

        function () {
            $('.card-bottom15').stop(true, true).slideDown(400);
            $('.card15').addClass('card-bottom-scale')
            $('.card15').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)

            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card15-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom15").mouseleave(
        
        function () {
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card15').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card15-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

    

    $('.card16').mouseover(

        function () {
            $('.card-bottom16').stop(true, true).slideDown(400);
            $('.card16').addClass('card-bottom-scale')
            $('.card16').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)

            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card16-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom16").mouseleave(
        
        function () {
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card16').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card16-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

   

    $('.card17').mouseover(

        function () {
            $('.card-bottom17').stop(true, true).slideDown(400);
            $('.card17').addClass('card-bottom-scale')
            $('.card17').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)

            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card17-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom17").mouseleave(
        
        function () {
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card17').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card17-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

    

    $('.card18').mouseover(

        function () {
            $('.card-bottom18').stop(true, true).slideDown(400);
            $('.card18').addClass('card-bottom-scale')
            $('.card18').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)

            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card18-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom18").mouseleave(
        
        function () {
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card18').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card18-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

    

    $('.card19').mouseover(

        function () {
            $('.card-bottom19').stop(true, true).slideDown(400);
            $('.card19').addClass('card-bottom-scale')
            $('.card19').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)

            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card19-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom19").mouseleave(
        
        function () {
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card19').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card19-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

  

    $('.card20').mouseover(

        function () {
            $('.card-bottom20').stop(true, true).slideDown(400);
            $('.card20').addClass('card-bottom-scale')
            $('.card20').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)

            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card20-img').addClass('img-490px');
             }
        }
    );
    
    $(".card-bottom20").mouseleave(
        
        function () {
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card20').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card20-img').removeClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   



    $('.card21').mouseover(

        function () {
            $('.card-bottom21').stop(true, true).slideDown(400);
            $('.card21').addClass('card-bottom-scale')
            $('.card21').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card22').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)
            $('.card-bottom22').stop(true, true).slideUp(400)

            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card21-img').addClass('img-490px');
                $('.card21').removeClass('card-index')
             }
        }
    );
    
    $(".card-bottom21").mouseleave(
        
        function () {
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card21').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card21-img').removeClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
                $('.card22-img').removeClass('img-490px');
             }
        })

    

});
$(document).ready(function () {
   

  

    $('.card22').mouseover(

        function () {
            $('.card-bottom22').stop(true, true).slideDown(400);
            $('.card22').addClass('card-bottom-scale')
            $('.card22').addClass('card-index')
            $('.card2').removeClass('card-index')
            $('.card3').removeClass('card-index')
            $('.card4').removeClass('card-index')
            $('.card5').removeClass('card-index')
            $('.card6').removeClass('card-index')
            $('.card7').removeClass('card-index')
            $('.card8').removeClass('card-index')
            $('.card9').removeClass('card-index')
            $('.card10').removeClass('card-index')
            $('.card11').removeClass('card-index')
            $('.card12').removeClass('card-index')
            $('.card13').removeClass('card-index')
            $('.card14').removeClass('card-index')
            $('.card15').removeClass('card-index')
            $('.card16').removeClass('card-index')
            $('.card17').removeClass('card-index')
            $('.card18').removeClass('card-index')
            $('.card19').removeClass('card-index')
            $('.card20').removeClass('card-index')
            $('.card21').removeClass('card-index')
            $('.card1').removeClass('card-index')
            $('.card-bottom2').stop(true, true).slideUp(400)
            $('.card-bottom3').stop(true, true).slideUp(400)
            $('.card-bottom4').stop(true, true).slideUp(400)
            $('.card-bottom5').stop(true, true).slideUp(400)
            $('.card-bottom6').stop(true, true).slideUp(400)
            $('.card-bottom7').stop(true, true).slideUp(400)
            $('.card-bottom8').stop(true, true).slideUp(400)
            $('.card-bottom9').stop(true, true).slideUp(400)
            $('.card-bottom10').stop(true, true).slideUp(400)
            $('.card-bottom11').stop(true, true).slideUp(400)
            $('.card-bottom12').stop(true, true).slideUp(400)
            $('.card-bottom13').stop(true, true).slideUp(400)
            $('.card-bottom14').stop(true, true).slideUp(400)
            $('.card-bottom15').stop(true, true).slideUp(400)
            $('.card-bottom16').stop(true, true).slideUp(400)
            $('.card-bottom17').stop(true, true).slideUp(400)
            $('.card-bottom18').stop(true, true).slideUp(400)
            $('.card-bottom19').stop(true, true).slideUp(400)
            $('.card-bottom20').stop(true, true).slideUp(400)
            $('.card-bottom21').stop(true, true).slideUp(400)
            $('.card-bottom1').stop(true, true).slideUp(400)

            $('.card2').removeClass('card-bottom-scale')
            $('.card3').removeClass('card-bottom-scale')
            $('.card4').removeClass('card-bottom-scale')
            $('.card5').removeClass('card-bottom-scale')
            $('.card6').removeClass('card-bottom-scale')
            $('.card7').removeClass('card-bottom-scale')
            $('.card8').removeClass('card-bottom-scale')
            $('.card9').removeClass('card-bottom-scale')
            $('.card10').removeClass('card-bottom-scale')
            $('.card11').removeClass('card-bottom-scale')
            $('.card12').removeClass('card-bottom-scale')
            $('.card13').removeClass('card-bottom-scale')
            $('.card14').removeClass('card-bottom-scale')
            $('.card15').removeClass('card-bottom-scale')
            $('.card16').removeClass('card-bottom-scale')
            $('.card17').removeClass('card-bottom-scale')
            $('.card18').removeClass('card-bottom-scale')
            $('.card19').removeClass('card-bottom-scale')
            $('.card20').removeClass('card-bottom-scale')
            $('.card21').removeClass('card-bottom-scale')
            $('.card1').removeClass('card-bottom-scale')
            if ($(window).width()<950) {
                $('.card22-img').addClass('img-490px');
                $('.card2-img').removeClass('img-490px');
                $('.card3-img').removeClass('img-490px');
                $('.card4-img').removeClass('img-490px');
                $('.card5-img').removeClass('img-490px');
                $('.card6-img').removeClass('img-490px');
                $('.card7-img').removeClass('img-490px');
                $('.card8-img').removeClass('img-490px');
                $('.card9-img').removeClass('img-490px');
                $('.card10-img').removeClass('img-490px');
                $('.card11-img').removeClass('img-490px');
                $('.card12-img').removeClass('img-490px');
                $('.card13-img').removeClass('img-490px');
                $('.card14-img').removeClass('img-490px');
                $('.card15-img').removeClass('img-490px');
                $('.card16-img').removeClass('img-490px');
                $('.card17-img').removeClass('img-490px');
                $('.card18-img').removeClass('img-490px');
                $('.card19-img').removeClass('img-490px');
                $('.card20-img').removeClass('img-490px');
                $('.card21-img').removeClass('img-490px');
                $('.card1-img').removeClass('img-490px');
             }
        }
    );
    
    $(".card-bottom22").mouseleave(
        
        function () {
            $('.card-bottom22').stop(true, true).slideUp(400)
            $('.card22').removeClass('card-bottom-scale')
            $('.card22').removeClass('card-index')
            if ($(window).width()<950) {
                $('.card22-img').removeClass('img-490px');
             }
        })

    

});