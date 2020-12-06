## Problem Statement

<img src="./problem.JPG">

## Solution

```javascript
function depositProfit(deposit, rate, threshold) {
    let count = 0;
    let amount = deposit + deposit * rate /100
    while (amount <= threshold){
        amount = amount + amount * rate / 100
        count += 1
    }
    return count + 1
    
}
```
