(function(jQuery){
	jQuery.fn.toggleable = function(){
		this.each(function(){
			var $this = $(this);
			var toggleSwitch = $this.find('.ui-toggle-switch');
			var toggleContent = $this.find('.ui-toggle');
			
			$this.addClass('closed');
			toggleContent.hide();
			toggleSwitch.click(function(){
				toggleContent.toggle();
			});
		});
		
		return this;
	}
	
	$(function(){
		$('.ui-toggleable').toggleable();
	});
})(jQuery);