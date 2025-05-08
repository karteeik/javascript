// In JavaScript, "windows" typically refers to the window object, which represents the browser's window or tab. It's the global object in client-side JavaScript, meaning all global variables and functions are actually properties of window

// window global object are 3 parts
// [i] - BOM (browser object model) 
// [ii] - DOM (document object model) - (navigator, screen, location, frames, history, XMLhttprequest)
// [iii] - javasript (object, array, functions....)

// difference between window and console
// | Feature  | `window`                          | `console`                          |
// | -------- | --------------------------------- | ---------------------------------- |
// | Type     | Global object                     | Debugging object                   |
// | Scope    | Global (available everywhere)     | Available via `window.console`     |
// | Purpose  | Interact with browser environment | Debug JavaScript code              |
// | Examples | `window.location`, `alert()`      | `console.log()`, `console.error()` |

// [i] BOM
window.navigator 
window.location
window.alert('some message !')