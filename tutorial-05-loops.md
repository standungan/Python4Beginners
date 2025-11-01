# Chapter 5: Loops

## 🎯 Learning Objectives
- Master `for` and `while` loops
- Understand the `range()` function
- Learn to use `break` and `continue` statements
- Explore common loop patterns and best practices

## 🧩 Overview
Loops allow you to repeat actions multiple times without writing the same code over and over. They're like having a robot assistant that can perform repetitive tasks quickly and accurately. Python provides two main types of loops: `for` loops for iterating over sequences, and `while` loops for repeating actions until a condition is met.

## 💡 Step-by-Step Tutorial

1. **For Loops with Range**
   ```python
   # Basic counting loop
   for i in range(5):
       print(i)  # Prints 0, 1, 2, 3, 4

   # Range with start and stop
   for i in range(2, 6):
       print(i)  # Prints 2, 3, 4, 5

   # Range with step
   for i in range(0, 10, 2):
       print(i)  # Prints 0, 2, 4, 6, 8
   ```

2. **For Loops with Sequences**
   ```python
   # Looping through a string
   for char in "Python":
       print(char)

   # Looping through a list
   colors = ["red", "green", "blue"]
   for color in colors:
       print(f"Color: {color}")

   # Using enumerate for index and value
   for index, color in enumerate(colors):
       print(f"Color {index + 1}: {color}")
   ```

3. **While Loops**
   ```python
   # Basic while loop
   count = 0
   while count < 5:
       print(count)
       count += 1

   # While loop with user input
   answer = ""
   while answer != "quit":
       answer = input("Enter 'quit' to exit: ")
       print(f"You typed: {answer}")
   ```

4. **Break and Continue**
   ```python
   # Break example
   for i in range(1, 11):
       if i == 5:
           break
       print(i)  # Prints 1, 2, 3, 4

   # Continue example
   for i in range(1, 6):
       if i == 3:
           continue
       print(i)  # Prints 1, 2, 4, 5
   ```

5. **Nested Loops**
   ```python
   # Multiplication table
   for i in range(1, 4):
       for j in range(1, 4):
           print(f"{i} x {j} = {i*j}")
       print("---")
   ```

## 🧠 Practice Challenge

Task A: Number Guesser
- Generate a number between 1 and 100
- Let user guess until correct
- Tell them if guess is too high or low
- Count number of attempts

Task B: Pattern Printer
- Create a program that prints this pattern:
  ```
  *
  **
  ***
  ****
  *****
  ```
- Then modify it to print:
  ```
    *
   ***
  *****
   ***
    *
  ```

Hints:
- Use while loop for unknown iterations
- Use for loop for fixed patterns
- Think about nested loops for complex patterns

## ✅ Solutions

```python
# Number Guesser
import random

number = random.randint(1, 100)
attempts = 0
guess = 0

while guess != number:
    guess = int(input("Guess the number (1-100): "))
    attempts += 1
    
    if guess < number:
        print("Too low!")
    elif guess > number:
        print("Too high!")
    else:
        print(f"Correct! It took you {attempts} attempts")

# Pattern Printer
# First pattern
for i in range(5):
    print('*' * (i + 1))

print("\nDiamond pattern:")
# Diamond pattern
size = 3
for i in range(size):
    print(' ' * (size - i - 1) + '*' * (2 * i + 1))
for i in range(size - 2, -1, -1):
    print(' ' * (size - i - 1) + '*' * (2 * i + 1))
```

## 🚀 Summary
- `for` loops are perfect for iterating over sequences
- `while` loops continue until a condition is false
- `range()` generates sequences of numbers
- `break` exits a loop early
- `continue` skips to the next iteration
- Nested loops can create complex patterns
- Always ensure loops have a way to end

## 🔗 Next Chapter
[Next → Functions](./tutorial-06-functions.md)