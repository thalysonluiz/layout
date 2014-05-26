# intuos.js #

You can use intuos.js to a render HTML partial anywhere you can use JavaSript.

### Methods ###

```$intuos.init()```: render all partials using the current config

```$intuos.renderTemplate(domObject, async = false)```: renders a single dom object

```$intuos.defineErrorTemplate(template)```: defines how the error is shown (use :message to print the error message)

```$intuos.defineCustomExtension(extension)```: by default intuos looks for templates with _pen_ extension, if you want to use any other, you should use this method

```$intuos.defineCustomClass(classname)```: by default intuos searchs only for _partial_ tags, you can use this method to have it to look for a specific class name

```$intuos.defineCustomFolder(path)```: by default intuos searchs for the partials on the _templates_ folder, you might use this method to change the default location, it is overwritten by the _data-path_ parameter.

### Usage ###

1. Import the intuos.js file

2. Put partials wherever you want in your file

3. Use intuos methods to set your configuration

4. Call ```$intuos.init()``` to render the partials

### Partials ###

An partial tag must contain a ```data-template``` parameter that should be the template name.

There is another parameters that are not required: ```data-path``` set the path to the partial fodlder.

### Important notice ###

1. Don't forget to call ```$intuos.init()``` method before all javascript files (modernizr may be an exception).

2. The library yet does not support rendering an partial inside another.

3. There are plans to implement template inheritance.