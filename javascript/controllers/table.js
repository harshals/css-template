TablesController = function(app) { with (app) {
			
			app.before(/^#\/table-/, function(context) {

				context.log("inisde table");

				// make sure the menu remains all the time

		  		context.render('views/table-menu.html').replace("#section-menu");
			});

			app.get('#/table-simple', function(context) {
			
				context.render('views/table-simple.html')
					.replace("#main-content")
					.then(function() {

                		$('.basetable').tableHover();
					});
			});

			app.get('#/table-condensed', function(context) {
			
				context.render('views/table-condensed.html').replace("#main-content");
			});
	}};

