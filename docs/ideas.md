* Multiple account support
* Temporarily maximize widget   
# Widgets
* Can add edit, delete widgets
* The dashboard can have any number of widgets
* The widgets in the dashboard can be rearragnged
* Each service might have one or more pre defined widgets
* A widget can combine multiple services as well
* Each widget will have a title
* Each widget has actions
* A global registry of widgets that people can share
* Each widget will have a list of ahort cut buttons that one can configure
* Widgets can be easily cloned
* A widget is a collection of widget items


* Each widget can 
    * Display static text
    * graphs
    * charts
    * Have forms

* Have a set of default widgets that can be used anywhere. Like region selector.


# Actions
* Can be an http request
* A shell command
* Any javascript code
* Each action will emit few events
    * Started
    * Ended
* An action can be coupled with a display item and this coupling is called as widget item
* A widget item can be configured to rerun every specific interval
* Whenever the action coupled with a widget item is executed, the result is passed to the widget item
    * The widget item can use this to render any html wanted (This would be a set of supported html items)
    * The html will be rerendered whenever the widget item is refreshed / or rerun according to configuration