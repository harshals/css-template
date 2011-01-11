MediaController = function(app) { with (app) {
			
			app.before(/^#\/media-/, function(context) {

				context.log("inisde media");

				// make sure the menu remains all the time

		  		context.render('views/table-menu.html').replace("#section-menu");
			});

			app.get('#/media-images', function(context) {
			
				context.render('views/media-images.html')
					.replace("#main-content")
					.then(function() {

                	//	turn into gallery
						$('.thumbnails li a').facebox({
							 loadingImage : 'css/images/loading.gif',
							closeImage   : 'css/images/closelabel.png'

						});

					});
			});

	}};

