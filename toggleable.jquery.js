(function($){
	$.fn.toggleable = function(){
		this.each(function(){
			var $this = $(this);
			var toggleSwitch = $this.find('.ux-toggle-switch');
			var toggleContent = $this.find('.ux-toggle');
			
			$this.addClass('closed');
			toggleContent.hide();
			toggleSwitch.click(function(){
				toggleContent.toggle();
				$this.toggleClass('closed');
			});
		});
		
		return this;
	}
})(jQuery);