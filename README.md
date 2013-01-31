# deck.console-notes.js

A simple extension for [deck.js][] for logging presenter notes to the console.
Adapted from mikeharris100/deck.console-notes.js to display notes from HTML comments instead of 
from hidden divs.

## Usage
+ Include deck.console-notes.js in your deck slideshow.
+ Place comments in your slides as direct children of the slide they belong to
+ Start the comment with the word 'note' or 'notes', optionally followed by a colon:

        <!-- Notes:
        This note will be logged to the console.
        It can contain multiple lines.
        -->

+ The comment will be logged to the console when its slide is displayed


## Requirements

[deck.js][]

## License

Dual licensed under the [MIT license][] and [GPL license][], consistent with [deck.js][].

[deck.js]: https://github.com/imakewebthings/deck.js
[MIT license]: https://github.com/bgmort/deck.console-notes.js/blob/master/MIT-license.txt
[GPL license]: https://github.com/bgmort/deck.console-notes.js/blob/master/GPL-license.txt
