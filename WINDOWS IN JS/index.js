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

// [i] BOM - focused on the content of browser environment
// window.location.href - for URL
// window.navigator - browser information
// window.location - location of websites
// window.alert('some message !')

// [ii] DOM - focused on the content of web page
// in html, head and bosy tag are childNodes
// all html tags/elements in js known as NODE
// <text> means space and new line in console
// to show childnodes -
// document.head.childNodes
// document.body.childNodes

// the DOM provides multiple properties and methods to dynamically change the content of html document using javascript

// properties
/*  
    document
    getElementById(id)
    getElementsByClassName(className)
    getElementsByTagName(tagName )
    querySelector (selector)
    querySelectorAll (selector )
    innerHTML
    textContent
    style
*/

// methods
/*
    createElement (tagName)
    appendChild (node)
    removeChild (node)
    addEventListener(event, function)
    removeEventListener(event, function)
    setAttribute(name, value)
    getAttribute (name )
    closest (selector)
    parentNode / parentElement
    childNodes / children
    firstChild / firstElementChild
    lastChild / lastElementChild
    nextsibling / nextelementsibling
    previoussibling / previouselement
    
*/
