# Client Side JavaScript

## Arrays

## Array Terminology

```javascript
/*  
[value, value, value]      values
   |      |                
   0      1      2         index postion
*/
const numbers = [2, 4, 6];
```

## How to identify an array in the console

```javascript
// square brackets around a group of items is an array [ ]
[li.test, li.test, li.test, li.test];
```

### Declaring An Array.

```javascript
const salaries = [100000, 800000, 750000, 650000, 950000, 860000];
```

### Array Contents.

You can have mixed data type arrays that contain any of the javascript primitive data types: number, string, object..

```javascript
const items = [
	100000,
	false,
	{ anObj: "obj" },
	[650000, 950000, 860000, "string", (x) => x + 1],
	null,
	undefined,
];
```

### Retriving Elements

```javascript
const numbers = [2, 4, 6];
const aNumber = numbers[1];
console.log(aNumber);
// output 4
```

### Adding Elements To An Array

```javascript
const numbers = [2, 4, 6];
number.push(8);
console.log(numbers);
// output [2,4,6,8]
```

### Updating an Array Index Position

To update a value in an array you use the values index position and assign it a new value.

```javascript
const numbers = [2, 4, 6, 8, 10];
numbers[0] = 1;
console.log(numbers);
// output [1,4,6,8]
```

### Editing Array Values using toSpliced()

Use the **toSpliced()** Array method to removed and/or replaced a value at a given index position. This method returns a new array with some the changes made to the original array.
[MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)

**Array.toSpliced(`start, count, items`)**

1. `start:` index value of the position where the array will start the changes.
1. `count:` An integer indicating the number of elements in the array to remove.
1. `items:` The elements to add to the array, beginning from start.

```javascript
const numbers = [2, 4, 6, 8];
// Inserting an element at index 1
const newArray = numbers.toSpliced(1, 0, 3);
console.log(newArray);
// output:  [2,3,4,6,8]
```

### Array.slice()

The method **Array.slice()** will return a slice of array values without mutating/changing the original array.

[MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)

**Array.slice(`start, count, items`)**

1. `start:` index value of the position where the array will start the changes.
2. `deleteCount:` An integer indicating the number of elements in the array to remove.
3. `items:` The elements to add to the array, beginning from start.

```javascript
const numbers = [2, 4, 6, 8];
// Inserting an element at index 1
const newArray = numbers.toSpliced(1, 0, 3);
console.log(newArray);
// output:  [2,3,4,6,8]
```

### Removing an Array Value

To remove an array value use the Array.splice

```javascript
const numbers = [2, 4, 6, 8];
numbers[0] = 1;
console.log(numbers);
// output [1,4,6,8]
```

- Lenght of An Array.
- Index of An Array.
- Accessing Items of An Array.
- Adding Items To An Array.
- Checking to see if element is an array.

## Array Methods

- Array.push() - push adds an element to the end.
- Array.pop() - pop takes an element from the end.
- Array.shift() - Extracts the first element of the array and returns it.
- Array.slice()
- Array.splice()
- Array.unshift() - Add the element to the beginning of the array.

## Looping Through An Array

## Resources

- Arrays [MDN Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- Code Snippets [Online Generator](https://snippet-generator.app/)

```

```

## Shallow Copy

A shallow copy of an array is a copy whose properties share the same references (point to the same underlying values) as those of the source array from which the copy was made.

As a result, when you change either the source or the copy, you may also cause the other values in the array to change too.

That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.
