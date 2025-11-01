# Chapter 6: Functions

## 🎯 Learning Objectives
- Learn to define and call functions
- Understand parameters and return values
- Master function documentation with docstrings
- Grasp variable scope in functions

## 🧩 Overview
Functions are reusable blocks of code that perform specific tasks. Think of them as mini-programs that you can call whenever needed. They help organize code, avoid repetition, and make programs more maintainable. Just as you might have a recipe for cooking your favorite dish, functions are like recipes for your code!

## 💡 Step-by-Step Tutorial

1. **Basic Function Definition and Calling**
   ```python
   def greet():
       print("Hello, world!")

   # Calling the function
   greet()  # Prints: Hello, world!

   # Function with parameters
   def greet_person(name):
       print(f"Hello, {name}!")

   greet_person("Alice")  # Prints: Hello, Alice!
   ```

2. **Functions with Return Values**
   ```python
   def calculate_area(length, width):
       """Calculate the area of a rectangle."""
       area = length * width
       return area

   # Using the function
   room_area = calculate_area(4, 5)
   print(f"The room area is {room_area} square meters")

   # Function with multiple returns
   def get_coordinates():
       x = 10
       y = 20
       return x, y

   point_x, point_y = get_coordinates()
   print(f"Point: ({point_x}, {point_y})")
   ```

3. **Default Parameters and Named Arguments**
   ```python
   def create_profile(name, age=25, city="Unknown"):
       return f"Name: {name}, Age: {age}, City: {city}"

   # Different ways to call
   print(create_profile("Bob"))
   print(create_profile("Alice", 30))
   print(create_profile("Charlie", city="Paris"))
   ```

4. **Docstrings and Documentation**
   ```python
   def calculate_circle_area(radius):
       """
       Calculate the area of a circle.

       Parameters:
           radius (float): The radius of the circle

       Returns:
           float: The area of the circle
       """
       import math
       return math.pi * radius ** 2

   # Accessing the documentation
   print(calculate_circle_area.__doc__)
   ```

5. **Variable Scope**
   ```python
   global_var = "I'm global"

   def demonstrate_scope():
       local_var = "I'm local"
       print(global_var)  # Can access global
       print(local_var)   # Can access local

   demonstrate_scope()
   # print(local_var)  # This would cause an error
   ```

## 🧠 Practice Challenge

Task A: Temperature Converter Functions
- Create two functions:
  - celsius_to_fahrenheit(celsius)
  - fahrenheit_to_celsius(fahrenheit)
- Include proper docstrings
- Add parameter validation
- Test with various temperatures

Task B: Calculator Function
- Create a function that takes:
  - Two numbers
  - An operation ('+', '-', '*', '/')
- Include error handling for division by zero
- Return the result and operation used

Hints:
- Use descriptive parameter names
- Add default values where appropriate
- Include input validation
- Write clear docstrings

## ✅ Solutions

```python
def celsius_to_fahrenheit(celsius):
    """
    Convert Celsius to Fahrenheit temperature.

    Parameters:
        celsius (float): Temperature in Celsius

    Returns:
        float: Temperature in Fahrenheit
    """
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    """
    Convert Fahrenheit to Celsius temperature.

    Parameters:
        fahrenheit (float): Temperature in Fahrenheit

    Returns:
        float: Temperature in Celsius
    """
    return (fahrenheit - 32) * 5/9

# Calculator function
def calculate(num1, num2, operation='+'):
    """
    Perform basic arithmetic operations.

    Parameters:
        num1 (float): First number
        num2 (float): Second number
        operation (str): One of '+', '-', '*', '/'

    Returns:
        tuple: (result, operation used)
    """
    if operation == '+':
        return (num1 + num2, operation)
    elif operation == '-':
        return (num1 - num2, operation)
    elif operation == '*':
        return (num1 * num2, operation)
    elif operation == '/':
        if num2 == 0:
            raise ValueError("Cannot divide by zero!")
        return (num1 / num2, operation)
    else:
        raise ValueError("Invalid operation!")

# Testing the functions
print(f"32°F = {fahrenheit_to_celsius(32):.1f}°C")
print(f"100°C = {celsius_to_fahrenheit(100):.1f}°F")

result, op = calculate(10, 5, '*')
print(f"10 {op} 5 = {result}")
```

## 🚀 Summary
- Functions make code reusable and organized
- Parameters allow functions to work with different inputs
- Return values pass results back to the caller
- Default parameters provide flexibility
- Docstrings document how to use functions
- Variable scope determines where values can be accessed

## 🔗 Next Chapter
[Next → Collections](./tutorial-07-collections.md)