$(document).ready(function(){
  $.supersized({
    fit_landscape: 0,
    autoplay: 1,
    performance: 1,
    transition: 1,
    transition_speed: 1100,
    slide_links: 'blank',
    slides :[
      {image : 'work/australia.jpg', proj_id : '1'},
      {image : 'work/thailand.jpg', proj_id : '2'},
      {image : 'work/indonesia.jpg', proj_id : '3'},
      {image : 'work/thailand2.jpg', proj_id : '4'},
    ]
});

calcResolution();

$(window).resize(function(){
  calcResolution();
});

function calcResolution(){
  windowWidth = $(window).width();
  windowHeight = $(window).height();

  if(windowWidth <= 360){
    $("#supersized").hide();
    $("#supersized-loader").hide();
  }
  else if ( windowWidth > 360) {
    $("#supersized").show();
    $("#supersized-loader").show();
  }

  $('#prevslide img').css({
    'max-width' : '65px',
    'width' :  (windowWidth / 100) * 6.5+'px'
  }),

  $('#nextslide img').css({
      'max-width' : '65px',
      'width' :  (windowWidth / 100) * 6.5+'px'
  });
}
});