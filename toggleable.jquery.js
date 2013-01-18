(function($){
	$.fn.toggleable = function(options){
		var settings = $.extend({
			'closedClass': 'closed',
			autoclose: true,
		}, options);
		
		this.each(function(){
			var $this = $(this);
			var toggleSwitch = $this.find('.ux-toggle-switch');
			var toggleContent = $this.find('.ux-toggle');
			
			if (typeof $this.data('open') === 'undefined' || settings.autoclose){
				$this.addClass(settings.closedClass);
				toggleContent.hide();
			}
			
			toggleSwitch.click(function(){
				toggleContent.toggle();
				$this.toggleClass(settings.closedClass);
			});
		});
		
		return this;
	}
})(jQuery);