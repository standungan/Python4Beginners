# Chapter 4: Control Flow

## 🎯 Learning Objectives
- Master if/elif/else conditional statements
- Understand boolean logic and truthiness in Python
- Learn how to create nested conditional statements
- Recognize common control flow patterns

## 🧩 Overview
Control flow determines how your program makes decisions and chooses different paths of execution. It's like creating a flowchart where your program can take different routes based on certain conditions. This is what makes programs smart and interactive!

## 💡 Step-by-Step Tutorial

1. **Basic if Statements**
   ```python
   temperature = 25

   if temperature > 30:
       print("It's hot outside!")
   print("This always runs")
   ```

2. **if-else Statements**
   ```python
   age = 15

   if age >= 18:
       print("You are an adult")
       print("You can vote")
   else:
       print("You are a minor")
       print("You cannot vote yet")
   ```

3. **if-elif-else Chains**
   ```python
   score = 85

   if score >= 90:
       grade = 'A'
   elif score >= 80:
       grade = 'B'
   elif score >= 70:
       grade = 'C'
   elif score >= 60:
       grade = 'D'
   else:
       grade = 'F'

   print(f"Your grade is: {grade}")
   ```

4. **Understanding Truthiness**
   ```python
   # Values considered False:
   print(bool(0))        # False
   print(bool(""))       # False
   print(bool([]))       # False
   print(bool(None))     # False

   # Values considered True:
   print(bool(42))       # True
   print(bool("Hello"))  # True
   print(bool([1, 2]))   # True

   # Using truthiness in if statements
   name = ""
   if name:
       print("Name is not empty")
   else:
       print("Name is empty")
   ```

5. **Nested Conditions**
   ```python
   is_weekend = True
   weather = "sunny"
   temperature = 25

   if is_weekend:
       if weather == "sunny":
           if temperature > 20:
               print("Let's go to the beach!")
           else:
               print("It's too cold for the beach")
       else:
           print("Let's do indoor activities")
   else:
       print("It's a work day")
   ```

## 🧠 Practice Challenge

Task A: Movie Ticket Calculator
- Create variables for age and time (24-hour format)
- Implement the following rules:
  - Under 12: $8
  - 12-65: $12
  - Over 65: $6
  - Early bird (before 12:00): $2 discount
  - Late night (after 20:00): $3 discount

Task B: Weather Activity Advisor
- Create variables for temperature and weather condition
- Recommend activities based on conditions
- Include at least 3 different weather scenarios

Hints:
- Use elif to handle multiple conditions
- Consider combining conditions with and/or
- Test edge cases (boundary values)

## ✅ Solutions

```python
# Movie Ticket Calculator
age = 25
time = 10  # 10:00

# Base ticket price
if age < 12:
    price = 8
elif age > 65:
    price = 6
else:
    price = 12

# Time discounts
if time < 12:
    price -= 2
elif time >= 20:
    price -= 3

print(f"Ticket price: ${price}")

# Weather Activity Advisor
temperature = 28
weather = "rainy"

if weather == "sunny":
    if temperature > 30:
        print("Stay hydrated and find shade!")
    elif temperature > 20:
        print("Perfect for outdoor activities!")
    else:
        print("Good for hiking with a jacket")
elif weather == "rainy":
    if temperature > 20:
        print("Indoor activities recommended")
    else:
        print("Movie day!")
elif weather == "snowy":
    print("Time for winter sports!")
```

## 🚀 Summary
- if/elif/else statements control program flow
- Conditions can be combined using and/or
- Python has a concept of "truthiness"
- Nested conditions allow complex decision trees
- Always consider all possible scenarios
- Use proper indentation (4 spaces) for blocks

## 🔗 Next Chapter
[Next → Loops](./tutorial-05-loops.md)