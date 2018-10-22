/*
 *  Tinacious Design goalProgress jQuery plugin
 *  Plugin URL: https://github.com/tinacious/goalProgress
 *
 *  Christina Holly (Tinacious Design)
 *  http://tinaciousdesign.com
 *
 */
!function($){
	$.fn.extend({
		goalProgress: function(options, first) {
			var defaults = {
				goalAmount: 100,
				currentAmount: 0,
				speed: 1000,
				textBefore: '',
				textAfter: ' %',
				milestoneNumber: 70,
				milestoneClass: 'almost-full',
				callback: function() {
					console.log("Animating Callback!");
				}
			}
			var options = $.extend(defaults, options);

			return this.each(function(){
				var obj = $(this);

				// Collect and sanitize user input
				var goalAmountParsed = parseInt(defaults.goalAmount);
				var currentAmountParsed = parseInt(defaults.currentAmount);

				// Calculate size of the progress bar
				var percentage = currentAmountParsed;
				// var percentage = (currentAmountParsed / goalAmountParsed) * 100;

				// Append to the target
				if(first){
					var milestoneNumberClass = (percentage > defaults.milestoneNumber) ? ' ' + defaults.milestoneClass : ''

					// Generate the HTML
	 				var progressBar = '<div class="progressBar">' + defaults.textBefore + percentage + defaults.textAfter + '</div>';

	 				var progressBarWrapped = '<div class="goalProgress' + milestoneNumberClass + '">' + progressBar + '</div>';

					obj.append(progressBarWrapped);
				}

				// Ready
				var rendered = obj.find('div.progressBar');
				rendered[0].textContent = percentage + defaults.textAfter;

				// Remove Spaces
				rendered.each(function() {
					$(this).html($(this).text().replace(/\s/g, '&nbsp;'));
				});

				// Animate!
				rendered.animate({width: percentage +'%'}, defaults.speed, defaults.callback);

				if(typeof callback == 'function') {
					callback.call(this);
				}
			});
		}
	});
}(window.jQuery);
