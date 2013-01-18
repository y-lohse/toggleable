(function($){
	$.fn.toggleable = function(options){
		var settings = $.extend({
			'closedClass': 'closed',
		}, options);
		
		this.each(function(){
			var $this = $(this);
			var toggleSwitch = $this.find('.ux-toggle-switch');
			var toggleContent = $this.find('.ux-toggle');
			
			$this.addClass(settings.closedClass);
			toggleContent.hide();
			toggleSwitch.click(function(){
				toggleContent.toggle();
				$this.toggleClass(settings.closedClass);
			});
		});
		
		return this;
	}
})(jQuery);