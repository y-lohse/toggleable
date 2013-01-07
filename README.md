# toggleable

jQuery plugin that hide/shows content - accordion menu style, but not quite like that.

## Markup

Here is what the markup should look like (tags are to your convenience, only classes matter) :

```
<ul>
	<li class="ui-toggleable">
		<div class="ui-toggle-switch">
			Show/Hide me
		</div>
		<ul class="ui-toggle">
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

Now whenever the user clicks "Show/Hide me", the subsequent <ul> is toggled. Additionally, elements 
that are hidden by the plugin get a "closed" class.