## Problem Statement
 
<img src="./problem.JPG">

https://scrimba.com/learn/adventcalendar/-javascript-challenge-chunky-monkey-introduction-cLkqvyAR

## Solution

```javascript
function chunkyMonkey(values, size) {
    let array = [values.slice(0,size), values.slice(size)] 
    return array   
}
```