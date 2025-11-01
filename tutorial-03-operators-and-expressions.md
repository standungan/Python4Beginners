# Chapter 3: Operators and Expressions

## 🎯 Learning Objectives
- Master the different types of operators in Python
- Understand operator precedence (order of operations)
- Learn how to build complex expressions
- Use assignment operators for efficient coding

## 🧩 Overview
Operators are special symbols that perform operations on variables and values. Think of them as the verbs of programming – they make things happen! From basic arithmetic to complex comparisons, operators are essential tools in your Python toolkit.

## 💡 Step-by-Step Tutorial

1. **Arithmetic Operators**
   ```python
   # Basic math operations
   a = 10
   b = 3

   addition = a + b        # Addition
   subtraction = a - b     # Subtraction
   multiplication = a * b  # Multiplication
   division = a / b        # Division
   floor_division = a // b # Floor division (rounds down)
   modulus = a % b        # Modulus (remainder)
   power = a ** b         # Exponentiation

   print(f"Addition: {addition}")
   print(f"Subtraction: {subtraction}")
   print(f"Multiplication: {multiplication}")
   print(f"Division: {division}")
   print(f"Floor Division: {floor_division}")
   print(f"Modulus: {modulus}")
   print(f"Power: {power}")
   ```
   Output:
   ```
   Addition: 13
   Subtraction: 7
   Multiplication: 30
   Division: 3.3333333333333335
   Floor Division: 3
   Modulus: 1
   Power: 1000
   ```

2. **Comparison Operators**
   ```python
   x = 5
   y = 10

   print(x == y)  # Equal to
   print(x != y)  # Not equal to
   print(x < y)   # Less than
   print(x > y)   # Greater than
   print(x <= y)  # Less than or equal to
   print(x >= y)  # Greater than or equal to
   ```
   Output:
   ```
   False
   True
   True
   False
   True
   False
   ```

3. **Logical Operators**
   ```python
   is_sunny = True
   is_warm = True
   is_weekend = False

   # and - both conditions must be True
   good_beach_day = is_sunny and is_warm
   
   # or - at least one condition must be True
   can_go_swimming = is_warm or is_weekend
   
   # not - inverts the boolean value
   must_work = not is_weekend

   print(f"Good beach day? {good_beach_day}")
   print(f"Can go swimming? {can_go_swimming}")
   print(f"Must work? {must_work}")
   ```
   Output:
   ```
   Good beach day? True
   Can go swimming? True
   Must work? True
   ```

4. **Assignment Operators**
   ```python
   # Simple assignment
   count = 0

   # Compound assignment operators
   count += 5      # Add and assign (count = count + 5)
   print(count)    # 5

   count -= 2      # Subtract and assign
   print(count)    # 3

   count *= 3      # Multiply and assign
   print(count)    # 9

   count /= 2      # Divide and assign
   print(count)    # 4.5
   ```

5. **Operator Precedence**
   ```python
   # Order of operations (PEMDAS)
   result = 2 + 3 * 4 ** 2 - 6
   print(f"2 + 3 * 4 ** 2 - 6 = {result}")

   # Using parentheses to change precedence
   result = (2 + 3) * (4 ** 2) - 6
   print(f"(2 + 3) * (4 ** 2) - 6 = {result}")
   ```
   Output:
   ```
   2 + 3 * 4 ** 2 - 6 = 44
   (2 + 3) * (4 ** 2) - 6 = 74
   ```

## 🧠 Practice Challenge

Task A: Shopping Calculator
- Create variables for item price and quantity
- Calculate total cost with 8% tax
- Apply a 10% discount if total is over 50
- Print the final amount

Task B: Grade Calculator
- Create variables for three test scores
- Calculate the average
- Use comparison operators to assign a letter grade
- Print both the average and grade

Hints:
- Remember operator precedence
- Use parentheses when in doubt
- Test with different values

## ✅ Solutions

```python
# Shopping Calculator
price = 12.99
quantity = 5
subtotal = price * quantity
tax = subtotal * 0.08
total = subtotal + tax

if total > 50:
    discount = total * 0.10
    total -= discount

print(f"Final total: ${total:.2f}")

# Grade Calculator
score1 = 85
score2 = 92
score3 = 88
average = (score1 + score2 + score3) / 3

if average >= 90:
    grade = 'A'
elif average >= 80:
    grade = 'B'
elif average >= 70:
    grade = 'C'
else:
    grade = 'F'

print(f"Average: {average:.1f}")
print(f"Grade: {grade}")
```

## 🚀 Summary
- Arithmetic operators perform mathematical calculations
- Comparison operators evaluate relationships between values
- Logical operators combine boolean conditions
- Assignment operators provide shortcuts for modifying variables
- Operator precedence determines the order of operations
- Parentheses can override default precedence

## 🔗 Next Chapter
[Next → Control Flow](./tutorial-04-control-flow.md)