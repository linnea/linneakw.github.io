
$(window).load(function() {
 
  // Vimeo API nonsense
  var player = document.getElementById('player_1');
  $f(player).addEvent('ready', ready);
 
  function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
      element.addEventListener(eventName, callback, false)
    } else {
      element.attachEvent(eventName, callback, false);
    }
  }
 
  function ready(player_id) {
    var froogaloop = $f(player_id);
    froogaloop.addEvent('play', function(data) {
      $('.flexslider').flexslider("pause");
    });
    froogaloop.addEvent('pause', function(data) {
      $('.flexslider').flexslider("play");
    });
  }
 
   
  // Call fitVid before FlexSlider initializes, so the proper initial height can be retrieved.
  $(".flexslider")
    .fitVids()
    .flexslider({
      animation: "slide",
      useCSS: false,
      animationLoop: false,
      smoothHeight: true,
      before: function(slider){
        $f(player).api('pause');
      }
   $('.flexslider .slides > li').click(function() {
    	$('.flexslider').flexslider("pause");
	});
  });
});


(function() {
	var app = angular.module('home', []);

	app.controller('HomeController', function () {
	
	});

})();

(function() {
	var app = angular.module('portfolio', []);

	app.controller('PortfolioController', function(){
		this.examples = projects;
	});

	var projects = [
		{
			name: "Group Up",
			description: 'Group Up description here',
			images: [
				{
					img: 'img/groupupbothnobg.png'
				}, 
				{
					img: 'img/groupuphome.png'
				},
				{
					img: 'img/groupuploggedin.png'
				}
			]
		},
		{
			name: "Mobile App Design",
			img: "img/mobile/prototypes1.png",
			description: 'Not written yet, oops'
		},
		{
			name: "Dub Design",
			img: "img/dubdesign1.png",
			description: 'Not written yet, oops'
		}
	];

	$("#immersive_slider").immersive_slider({
	  animation: "fade",
	  slideSelector: ".slide",
	  container: ".main",
	  cssBlur: false,
	  pagination: true,
	  loop: true,
	  autoStart: 5000
	});
})();