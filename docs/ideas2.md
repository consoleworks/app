html elements will be provided by us
each element has a list of mandatory values that it needs
The types of mandatory values should match

each action should define from where it should get basic resources like credentials
Have a list of UI components that can display data or query data

- Have a list of indexed commmands that returns configured html elements. These commands can be searched (Fuzzy Search)
- Everything from the widget to a widget item can be configured to run repeatedly in a specified duration

Steps:

1. Identify list of used widget items and interactions
2. Create those widget items and define their schema
3. Add action types that adhere to that schema
4. Define widgets using the above widget items
5. The app should take care of layouting, providing global context to all widgets, editing and cloning widgets, verifying widget action type compatibility
6. Identify the first list of actions that should be provided

Spikes:

1. Make stenciljs work with electron
2. Make the-grid work with stenciljs
- The user should not move the mouse more than a few cms
- if there only one logical next action, then just pressing enter or clicking the mouse button should do that action
- The app should have a config system in which user can enter details and then in the actions, the config will be injected automatically
- The config file should have the abililty to read from environment variables and via http requests
- The config should have the ability to be refreshed in a specified duration of time
- Actions are javascript files

Questions:

- Json / Yaml / Html / Jade / Haml for widgets?