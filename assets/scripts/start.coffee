#
# Testing javascript import
#
console.log 'Working!'


#
# Default configuration for $intuos library
#
if window.$intuos
	$intuos.defineErrorTemplate('<p class="alert alert-danger"><i class="fa fa-times fa-fw"></i> :message</p>')
	$intuos.defineCustomExtension('html')
	$intuos.init()
else
	console.log 'intuos.js is disabled, you should remove this code from the main.coffee'
