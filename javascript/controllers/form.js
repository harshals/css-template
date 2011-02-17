FormsController = function(app) { with (app) {
			
			app.before(/^#\/form-/, function(context) {

				context.log("inisde form");

				// make sure the menu remains all the time

		  		context.render('views/form-menu.html').replace("#section-menu");
			});

			app.get('#/form-login', function(context) {
			
				context.render('views/form-login.html').replace("#main-content");
			});
			
			app.post('#/form-post', function(context) {
				
				alert("submitting the form");
				//context.render('views/form-login.html').replace("#main-content");
				return false;
			});


			app.get('#/form-vertical', function(context) {
				
				context.render('views/form-sidebar.html').replace("#main-content");
				context.render('views/form-sidebar.html').replace("#sidebar-content");
			});
			
			app.get('#/form-large', function(context) {
			
				context.render('views/form-large.html').replace("#main-content");
			});
			
			
			
			app.get('#/form-hybrid', function(context) {
			
				context.render('views/form-hybrid.html').replace("#main-content");
			});
			app.get('#/form-multistep', function(context) {
				
				context.render('views/form-multistep.html')
					.replace("#main-content")
					.then(function() {
						
						$("#myform").formwizard({ 
							formPluginEnabled: true,
							validationEnabled: true,
							focusFirstInput : true,
							formOptions :{
								success: function(data){
								$("#status").fadeTo(500,1,function(){ 
									$(this).html("You are now registered!").fadeTo(5000, 0); 
									})
								},
								beforeSubmit: function(data){
									$("#data").html("data sent to the server: " + $.param(data));
								},
								dataType: 'json',
								resetForm: true,
							},
							next:"#next_step",
							back:"#prev_step",
							disableUIStyles:true,
							inDuration:0,
							outDuration:0

						}).bind("step_shown", function(event, data) {
							
							var current_step = data.currentStep.replace('step','');
							var progress = current_step / data.steps.length * 100;

							$("#progress-level").css("width", progress + '%');
						});
						
						$("#myform").formwizard("show","step1");
					});

			
			});

			app.get('#/form-multistep-alternate', function(context) {
				
				context.render('views/form-multistep-alternate.html')
					.replace("#main-content")
					.then(function() {
						
						$(".form-steps").find("input[name=save]").click(function() {
								
							alert("submit this form");
							return false;
						})

						$("#main-content")
							.find("fieldset.step").not("#step1")
							.hide();
						$(".form-steps").find("a.nav-step").click(function(ev){
							
							var stp = $(this).attr("id").replace("nav-",'');
							

							$("#main-content")
								.find("fieldset.step")
								.hide();
							$("#main-content")
								.find("fieldset#" + stp).show();


							return false;	

						});	
						
					});

			});
			
			app.get('#/form-modal', function(context) {
				
				context.render('views/form-modal.html')
					.replace("#main-content")
					.then(function() {
						
						$("a[rel=facebox]").facebox({
							loadingImage : 'css/images/loading.gif',
							closeImage   : 'css/images/closelabel.png'
						});
						
					});
			});
			
			app.get('#/form-modal-login', function(context) {
				context.load('views/form-login.html')
					
					.then(function( content) {
						
						$.facebox( content );
					});
				
			});
			
			app.post('#/form-modal-login', function(context) {
				
				alert("submitted modal form");
				
			});


		}};

