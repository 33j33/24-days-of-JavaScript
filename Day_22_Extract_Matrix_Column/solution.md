## Problem

https://scrimba.com/learn/adventcalendar/-javascript-challenge-extract-matrix-column-introduction-co9a8445aab096f48e7e5ecf5

<img src="problem.JPG">

## Solution

```javascript
function extractMatrixColumn(matrix, column) {
    let arr = []
    matrix.forEach((value) => {
        arr.push(value[column])
    })
    return arr    
}
```