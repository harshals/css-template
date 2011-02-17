TaskController = function(app) { with (app) {
			
			app.before(/^#\/task-/, function(context) {

				context.log("inisde task");

				// make sure the menu remains all the time

		  		context.render('views/task-menu.html')
		  			.replace("#section-menu")
		  			.then(function(menu) {
						$("#task-add").click(function() {

							alert("comng");

							context.render('views/task-add.html')
							.replace("#sidebar-content")
							.then(function() {


							});

							return false;
						});
		  			});
			});

			app.get('#/task-list', function(context) {
			
				
						
				context.render('views/task-list.html')
					.replace("#main-content");



			});


			
				


	}};

