<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: ReferenceError: greetign is not defined

<i>This issue comes from an error in the name. The word "greeting" is misspelled as "greetign," resulting in a ReferenceError because the variable is not declared. It's always a good idea to double-check your names!</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `TypeError`

<i>The sum function is defined by two parameters: 'a' and 'b'. If I use sum(1 "2"), the first parameter is a number (1), and the second is a string ("2"). In JavaScript, a technique known as type conversion turns the number to a string so that it matches the data type of the argument. The two strings are combined together using the addition operator (+), yielding "12". However, because there is no return statement given within the method in this scenario, the function will return TypeError.
</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `['🍝', '🍫', '🥑', '🍔']`

<i>Basically the food array consists of four items- pizza (🍕) chocolate (🍫) avocado (🥑) and burger (🍔).
I created an object called "info". Set its property "favoriteFood" to the item, in the food array, which is pizza.
Next I updated the value of info.favoriteFood to spaghetti (🍝).
Since the info object only holds a reference to the element, in the array changing info.favoriteFood does not impact the array.
Therefore when I log the food array it remains unchanged; ['🍕', '🍫' '🥑' '🍔'].
</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>When the sayHi function is invoked without any arguments the name parameter automatically becomes undefined. As a result the template string will substitute undefined in place of ${name} resulting in the greeting "Hi undefined."</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C:3

<i>The forEach loop goes through each element in the nums array. While, inside the loop the if (num) condition verifies if num is true.

In the nums array only 0 is considered as false. The rest of the values (1, 2 and 3) are all considered true. As a result the count will increase by 3 times (for the values 1, 2 and 3) resulting in a count value of 3.
</i>

</p>
</details>
