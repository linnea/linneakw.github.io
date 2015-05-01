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