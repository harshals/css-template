TaskController = function(app) { with (app) {
			
			app.use("Template" , 'html');
			app.before(/^#\/task-/, function(context) {

				context.log("inisde task");
				$("#main-content").html('');
				$("#sidebar-content").html('');
				$("#content-extra").html('');

				// make sure the menu remains all the time

		  		context.render('views/task-menu.html')
		  			.replace("#section-menu")

				context.render('views/task-add.html')
					.replace("#sidebar-content")
		  			.then(function(task_html) {
					
						$("#sidebar-content").hide();
						$("#sidebar-content" ).find("input.datepicker").hide(); //datepicker( "option", "format", 'yyyy-mm-dd');
						$("#section-menu").find("a.task-add").click(function() {

							$("#sidebar-content").toggle();

							return false;
						});
		  			});
			});

			bind("task-populate", function(ev, data) {
				
				this.render('views/task-list.html')
					.replace("#main-content")
					.then(function(html) {

						this.renderEach("views/task-list-item.html", data)
							.appendTo(".list > ul")
							.then(function(html) {
						
								$(".list :checkbox").click(function(ev) {
									
									$(this).parents("li:first").hide();

									// make ajax call to database
								});
							});
					});

			});

			app.get('#/task-list', function(context) {
				
				context.redirect("#/task-pending");
			});
			app.get('#/task-pending', function(context) {
						
				context.load("data/tasks.json")
				.then(function(json) {
					context.trigger("task-populate", json);
				});

			});

			app.post("#/task-add", function(context) {
				
				var form = context.params;
				alert("coming");
				$.post("/api/Task" , form, function(onSuccess) {

					context.redirect("#/task-pending");
				});

				
			});

	}};

