jquery.caption
==============

jQuery.caption is a simple plugin which displays an image's 'alt' attribute content, using HTML5's 'figure' and 'figcaption' elements.

Compatibility
-------------

This plugin uses [jQuery](http://jquery.com).

The [figure](http://www.w3schools.com/tags/tag_figure.asp) and [figcaption](http://www.w3schools.com/tags/tag_figcaption.asp) elements are supported in Internet Explorer 9, Firefox, Opera, Chrome, and Safari.

HTML
-------

*Before*

	<img src="img/kho-maak.jpg" alt="kho Maak - A small island in Thailand"/>

*After*

	<figure class="figure">
		<img src="img/kho-maak.jpg" alt="kho Maak - A small island in Thailand"/>
		<figcaption class="figcaption">
			<em>kho Maak</em>
			<br>
			A small island in Thailand
		</figcaption>
	</figure>

Options
-------

	figureClass		{string}	default:'figure'		The css class of the 'figure' element.
	figcaptionClass	{string}	default:'figcaption'	The css class of the 'figcaption' element.
	lineBreak		{string}	default:' - '			A string that is converted to a regular expression and used to delimit a line in the 'alt' attribute.
	visible			{boolean}	default:false			Whether or not the figcaption is initially displayed.
