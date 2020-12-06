## Problem Statement 

<img src="./problem.JPG">

## Solution

```javascript
function candies(children, candy) {
    const candyPerChild = Math.floor(candy / children);
    
    return candyPerChild * children;
}
```