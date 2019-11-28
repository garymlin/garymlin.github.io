function face_change(){
  $('#face-picture-lg').hover(function(){
    $('#face-picture-lg').css({display:'none'} );
    $('#tongue-picture-lg').css({display:'inline'} );
  },
    function(){
      // $('#tongue-picture-lg').css({display:'none'} );
      // $('#face-picture-lg').css({display:'inline'} );
      
  });

  $('#tongue-picture-lg').hover(function(){

  }, 
    function(){
      $('#tongue-picture-lg').css({display:'none'} );
      $('#face-picture-lg').css({display:'inline'} );
  })
}

function picture_location(){
  $('#picture-location-word-stack').hover(function(){
    $('#picture-location-word-stack').animate({marginTop: '-=15px'},170 );
    
    $('#japan').removeClass('white');
    $('#japan').addClass('yellow');
    $('#brent').removeClass('white');
    $('#brent').addClass('yellow');

    $('#brent').show(150);
  },
    function(){
     $('#picture-location-word-stack').animate({marginTop: '+=15px'}, 170);
     setTimeout(function () {
        $('#brent').css({display:'none'} );

        $('#japan').removeClass('yellow');
        $('#japan').addClass('white');
        $('#brent').removeClass('yellow');
        $('#brent').addClass('white');
        
    }, 100);
  });
}

function name_hover(){
  $('#name-style-lg').hover(function(){
    $('#name-style-lg').removeClass('changa-one');
    $('#name-style-lg').addClass('shadows-into-light');
  },
    function(){
      $('#name-style-lg').removeClass('shadows-into-light');
      $('#name-style-lg').addClass('changa-one');
  });
}

function button_hover_colors(){
  $('.github').hover(function(){
    $('.github').removeClass('white');
    $('.github').addClass('github-color');
  },
    function(){
      $('.github').removeClass('github-color');
      $('.github').addClass('white');
  });

  $('.linkedin').hover(function(){
    $('.linkedin').removeClass('white');
    $('.linkedin').addClass('linkedin-color');
  },
    function(){
      $('.linkedin').removeClass('linkedin-color');
      $('.linkedin').addClass('white');
  });

  $('.resume').hover(function(){
    $('.resume').removeClass('white');
    $('.resume').addClass('resume-color');
  },
    function(){
      $('.resume').removeClass('resume-color');
      $('.resume').addClass('white');
  });

  $('.facebook').hover(function(){
    $('.facebook').removeClass('white');
    $('.facebook').addClass('facebook-color');
  },
    function(){
      $('.facebook').removeClass('facebook-color');
      $('.facebook').addClass('white');
  });

  $('.instagram').hover(function(){
    $('.instagram').removeClass('white');
    $('.instagram').addClass('instagram-color');
  },
    function(){
      $('.instagram').removeClass('instagram-color');
      $('.instagram').addClass('white');
  });

}

function button_click() {
  // $('#github').click(function(){
  //   window.location.href= "https://github.com/garymlin";
  // });

  // $('#linkedin').click(function(){
  //   window.location.href= "https://www.linkedin.com/in/garymlin";
  // });

  // $('#resume').click(function(){
  //   window.location.href= "resume.pdf"
  // });

  // $('#facebook').click(function(){
  //   window.location.href= "https://www.facebook.com/gary.lin.754";
  // });

  // $('#instagram').click(function(){
  //   window.location.href= "http://instagram.com/garymlin";
  // });
}

function kritikal_stats() {
  $('#project-content').click(function(){
    window.location.href="http://kritikalstats.com/about";
  });

  $('#project-content').hover(function(){
    $('#project-content').removeClass('white');
    $('#project-content').addClass('kritikalstats');
  },
    function(){
      $('#project-content').removeClass('kritikalstats');
      $('#project-content').addClass('white');
    });
}

$(document).ready(function () {
  button_hover_colors();
  button_click();
  name_hover();
  picture_location();
  face_change();
  kritikal_stats();
})
