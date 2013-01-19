# toggleable

jQuery plugin that hide/shows content - accordion menu style, but not quite like that.

## Markup

Here is what the markup should look like (tags are to your convenience, only classes matter) :

```html
<ul>
	<li class="ux-toggleable">
		<div class="ux-toggle-switch">
			Show/Hide me
		</div>
		<ul class="ux-toggle">
			<li>
				<a href="#">
					Link 1
				</a>
			</li>
			<li>
				<a href="#">
					Link 2
				</a>
			</li>
			<li>
				<a href="#">
					Link 3
				</a>
			</li>
		</ul>
	</li>
</ul>
```

Initilization :

```javascript
$(function(){
	$('.ux-toggleable').toggleable();
});
```

Now whenever the user clicks "Show/Hide me", the subsequent <ul> is toggled. Additionally, elements 
that are hidden by the plugin get a "closed" class (in this case the __li.ux-toggleable__.

## Options

You can change the class name that closed toggles get like this : 

```javascript
$(function(){
	$('.ux-toggleable').toggleable({closedClass: 'my-closed-class'});
});
```

By default, the toggleable plugin will close all toggles. You can prevent this by passing an option
at initialization time :

```javascript
$(function(){
	$('.ux-toggleable').toggleable({autoclose: false});
});
```

Alternatively, you can also specify in the markup that you want only some toggles to be kept open
by setting an __data-open__ property on the toggle.

```html
<ul>
	<li class="ux-toggleable" data-open>
		<div class="ux-toggle-switch">
			Show/Hide me
		</div>
		<ul class="ux-toggle">
			<li>
				<a href="#">
					Link 1
				</a>
			</li>
			<li>
				<a href="#">
					Link 2
				</a>
			</li>
			<li>
				<a href="#">
					Link 3
				</a>
			</li>
		</ul>
	</li>
</ul>
```