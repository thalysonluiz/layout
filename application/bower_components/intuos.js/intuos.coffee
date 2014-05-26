window.$intuos =

    # List of the user's custom class names
    customElements: new Object()

    # List of elements to render
    renderQueue: new Object()

    # Custom error template
    errorTemplate: '<p>:message</p>'

    # Custom extension
    templateExtension: 'pen'

    # Template folder
    templateFolder: 'templates/'

    # Add element class to be rendered
    defineCustomClass: (name) ->
        customObjects = document.getElementsByClassName(name)
        customObjects = Array.prototype.slice.call customObjects
        $intuos.customElements = customObjects

    # Set a custom error template
    defineErrorTemplate: (template) ->
        $intuos.errorTemplate = template

    # Set a custom extension
    defineCustomExtension: (extension) ->
        $intuos.templateExtension = '.' + extension

    # Set a custom folder
    defineCustomFolder: (path) ->
        $intuos.templateFolder = path

    # Concatente custom class elements and custom tag elements
    concatenateObjects: () ->
        idx = $intuos.renderQueue.length
        for key, elem of $intuos.customElements
            $intuos.renderQueue[idx] = elem
            idx++

    # Create custom element that will be rendered
    createCustomElement: () ->
        document.createElement 'partial'

    # Find all items to be rendered
    findAll: () ->
        $intuos.renderQueue = document.getElementsByTagName 'partial'
        $intuos.renderQueue = Array.prototype.slice.call $intuos.renderQueue
        $intuos.concatenateObjects()

    # Make sync ajax request
    ajaxCall: (url, async) ->
        if (window.XMLHttpRequest)
            xmlhttp = new XMLHttpRequest()
        else
            xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')

        xmlhttp.open('GET', url, async)
        xmlhttp.send()

        if xmlhttp.status == 404
            return $intuos.errorTemplate.replace ':message', xmlhttp.responseText

        return xmlhttp.responseText

    # Build url for request
    buildURL: (domObject) ->
        absolute = new RegExp('^(?:[a-z]+:)?//', 'i')
        template = domObject.getAttribute 'data-template'
        extension = $intuos.templateExtension

        if !domObject.hasAttribute 'data-template'
            throw 'intuos.js: the data-template attribute is required'
        if absolute.test template
            throw 'intuos.js: the library do not accept absolute path'
        else
            if path = domObject.getAttribute 'data-path'
                url = path + '/' + template + extension
            else
                url = $intuos.templateFolder + template + extension

        return url

    # Render one object
    renderElement: (domObject, async) ->
        async = typeof async != 'undefined' ? async : false

        url = $intuos.buildURL(domObject)
        res = $intuos.ajaxCall(url, async)

        domObject.innerHTML = res

    # Init
    init: () ->
        $intuos.findAll()

        for elem in $intuos.renderQueue
            $intuos.renderElement elem
