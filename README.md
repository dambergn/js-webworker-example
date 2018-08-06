# js-webworker-example
An example of how web workers work.

# How this works
This is an example of how web workers work and why they are useful.  Web workers help mitigate the fact that JavaScript is single threaded.  By offsetting intensive calculations to a web worker it can perform those calculations on a seperate thread, freeing up CPU cycles on the thread that is currently rendering the DOM.  This example uses a canvas with a FPS counter and a button that generates 300 balls for a visual representation of the DOM freezing when running the large calculation on the same thread as the dom, while you can see the DOM continue to render un affected by web worker.  Both buttons run the same code, and without the worker simulates how code is normally run in JS.

# What about ASYNC?
Running something ASYNC can still cause stuttering within the DOM since it is still running on the same thread, and if you are doing intense real time rendering, such as a game, then the either the ASYNC will take to long or the game will stutter or freeze ruining the experience.

# Where would this be useful.
- HTML5 Games
- Video Players
- Live financial tickers
- Heavy math calculations (what is being simulated here.)

# Youtube example
- https://www.youtube.com/watch?v=O1WmnLCLk3Q
- https://www.youtube.com/watch?v=OgLemdR65pE
- https://www.youtube.com/watch?v=LrK5HudphWY