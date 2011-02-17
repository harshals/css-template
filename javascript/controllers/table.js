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

			app.get('#/table-alternative', function(context) {
				

				context.render('views/table-pager.html').replace("#sidebar-content");
			
				context.render('views/table-data.html')
				.appendTo("#main-content")
				.then(function(html)  {

					$(".dataTable")
					.tablesorter({ widthFixed: true })
					.tablesorterPager({ container : $("#pager") , positionFixed: false});

				});

			})
			app.get('#/table-large', function(context) {
				

				context.render('views/table-pager.html').replace("#sidebar-content");
			
				context.render('views/table-large.html')
				.appendTo("#main-content")
				.then(function(html)  {

					$("#largeTable")
					.tablesorter({ widthFixed: true })
					.tablesorterPager({ container : $("#pager") , positionFixed: false});

				});

			});
	}};

