/*
* jQuery.caption v0.9
*
*/

(function($){

	var methods = {

		init : function(options){

			var settings = $.extend({
				'styleClass' : 'caption',
				'lineBreak' : ' - ',
				'visible' : false
			}, options);

			return this.each(function(){

				var alt = $(this).attr('alt');

				if(alt !== undefined){

					$(this).wrap('<figure />');

					var html = "";
					var lines = alt.split(new RegExp(settings.lineBreak));
					for(var i = 0;i < lines.length;i++){
						if(i === 0){
							html += "<em>"+lines[i]+"</em>";
						}
						else{
							html += "<br/>"+lines[i];
						}
					}

					if(!$(this).data('caption')){
						var caption = $('<figcaption />', {html : html, 'class' : settings.styleClass});
						$(this).data('caption', {target : $(this), caption : caption});
					}

					if(settings.visible === true){
						$(this).after($(this).data('caption').caption);

						$(this).bind('mouseenter.caption', function(){
							$(this).data('caption').caption.stop().fadeOut();
						});
						$(this).bind('mouseleave.caption', function(){
							$(this).data('caption').caption.fadeIn();
						});
					}
					else{
						$(this).bind('mouseenter.caption', function(){
							$(this).after($(this).data('caption').caption);
						});
						$(this).bind('mouseleave.caption', function(){
							$(this).data('caption').caption.remove();
						});
					}
				}
				else{
					$.error("'attr' attribute is not present on element");
				}
			});
		},

		destroy : function(){

			return this.each(function(){

				var data = $(this).data('caption');
				$(window).unbind('.caption');
				data.caption.remove();
				$(this).removeData('caption');
			});
		}
	};

	$.fn.caption = function(method){

		if(typeof method === 'object' || !method){
			return methods.init.apply( this, arguments );
		}
		else if(methods[method]){
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		}
		else{
			$.error( 'Method ' +  method + ' does not exist on jQuery.caption' );
		}
	};

})(jQuery);
