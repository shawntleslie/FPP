//= require_tree .

(function(window, $, undefined){

  // Use Case typing effect
  $(function() {

    var useCases =[
      "social shares with more context",
      "to drive traffic to a particular part of the page",
      "a more elegant way to share content",
      "to encourage which content to share",
      "social shares with more context",
      "to drive traffic to a particular part of the page",
      "a more elegant way to share content",
      "to encourage which content to share"
    ]

    var i = 0; // Sentence
    var c = 0; // Character

    var $addCharacter = $('#add-character');
    var $useCaseList = $('#use-case-list');

    function useCaseBot() {

      var sentence = useCases[i%useCases.length];

      c++;
      $addCharacter.text(sentence.substr( 0, c ));

      setTimeout( function() {
        if( c <= sentence.length ) {
          useCaseBot();
        } else {
          c = 0;
          i++;

          setTimeout( function(){
            var $li = $("<li><i class='icon-ok'></i> " + sentence + "</li>").prependTo($useCaseList);

            if( i > useCases.length) {
              $useCaseList.find('li:last').remove();
            }

            setTimeout( function() {
              $li.addClass('visible');
            }, 0)


            useCaseBot();

          }, 1750)
        }

      }, 60);

    }

    useCaseBot();

  });

})(window, jQuery, null)

// Smoothscroll to id on same page
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
});