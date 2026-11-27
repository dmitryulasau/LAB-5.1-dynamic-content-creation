# Dynamic Content Creation - Reflection

### 1. How did you dynamically create and append new elements to the DOM?
Use JavaScript methods like `createElement()` and `appendChild()` to create new table rows and add them to the cart.

### 2. What steps did you take to ensure accurate updates to the total price?
I used `parseFloat()` to convert prices into numbers and updated the total when products were added or removed.

### 3. How did you handle invalid input for product name or price?
I checked that the product name was not empty and the price was a valid positive number before adding it to the cart.

### 4. What challenges did you face when implementing the remove functionality?
I had trouble removing products from both the DOM and the array. I used `closest()` to find the table row and `filter()` to remove the product from the array.

#### Questions?

[Dmitry Ulasau](https://github.com/dmitryulasau)
