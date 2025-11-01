# Chapter 2: Variables and Data Types

## 🎯 Learning Objectives
- Understand what variables are and how to use them
- Learn Python's basic data types: numbers, strings, and booleans
- Master type conversion (casting) between different data types
- Use the `type()` function to identify data types

## 🧩 Overview
Variables are like labeled containers in your program that store data. Just as you might label a box "Books" or "Tools" to remember what's inside, variables let you give meaningful names to your data. Python has several basic types of data that you can store in these variables, including numbers, text (strings), and true/false values (booleans).

## 💡 Step-by-Step Tutorial

1. **Creating and Using Variables**
   ```python
   # In Python, creating variables is as simple as name = value
   # Variables are created the moment you first assign a value
   
   # Integer variable - stores a whole number
   age = 25          # No need to declare type - Python figures it out
   
   # String variable - stores text
   name = "Alice"    # Text must be in quotes (single or double)
   
   # Float variable - stores decimal numbers
   height = 1.75     # Use dot (.) for decimal point
   
   # Boolean variable - stores True or False
   is_student = True  # Notice the capital T in True
   
   # Printing variables using the print() function
   # The comma (,) in print() automatically adds a space
   print("Name:", name)       # Combines text label with variable value
   print("Age:", age)        # Python converts numbers to text for printing
   print("Height:", height, "meters")  # Can print multiple items
   print("Student:", is_student)      # Booleans print as True or False
   
   # Variable Rules and Best Practices:
   # 1. Names can contain letters, numbers, underscores
   # 2. Must start with letter or underscore
   # 3. Case-sensitive (age ≠ Age)
   # 4. Can't use Python keywords (like 'print', 'True', etc.)
   
   # Examples of valid variable names:
   user_age = 30      # Using underscore (snake_case)
   studentName = "Bob" # Using camelCase
   _hidden = True     # Starting with underscore
   count2 = 100       # Including numbers (not at start)
   
   # Examples of invalid variable names (would cause errors):
   # 2age = 25        # Can't start with number
   # my-name = "Tom"  # Can't use hyphen
   # class = "Math"   # Can't use Python keywords
   ```
   Output:
   ```
   Name: Alice
   Age: 25
   Height: 1.75 meters
   Student: True
   ```

2. **Numbers: Integers and Floats**
   ```python
   # INTEGERS (int) - Whole numbers without decimal points
   count = 100        # Positive integer
   negative = -42     # Negative integer
   zero = 0          # Zero is also an integer
   
   # FLOATING-POINT NUMBERS (float) - Numbers with decimal points
   price = 19.99      # Positive float with 2 decimal places
   temperature = -2.5  # Negative float
   
   # BASIC MATH OPERATIONS
   # Addition (+)
   sum_result = 5 + 3        # Result: 8
   
   # Subtraction (-)
   diff_result = 10 - 7      # Result: 3
   
   # Multiplication (*)
   product = 4 * 6           # Result: 24
   
   # Division (/)
   quotient = 15 / 3         # Result: 5.0 (always returns float)
   
   # Integer Division (//)
   int_division = 17 // 5    # Result: 3 (drops decimal part)
   
   # Modulus (%) - Gets remainder
   remainder = 17 % 5        # Result: 2
   
   # Exponentiation (**)
   power = 2 ** 3           # Result: 8 (2 to the power of 3)
   
   # Complex Calculations
   total = count + 50       # Adding to a variable
   average = (19 + 21 + 20) / 3  # Parentheses control order
   
   # Order of Operations (PEMDAS):
   # 1. Parentheses ()
   # 2. Exponents **
   # 3. Multiplication * and Division /
   # 4. Addition + and Subtraction -
   
   # Example with order of operations
   result1 = 2 + 3 * 4        # Result: 14 (not 20)
   result2 = (2 + 3) * 4      # Result: 20
   
   # Type Conversion
   integer_number = int(19.99)  # Result: 19 (truncates decimal)
   float_number = float(42)     # Result: 42.0
   
   # Common Math Functions (need 'import math')
   import math
   
   rounded = round(3.7)         # Result: 4
   absolute = abs(-15)          # Result: 15
   floor_val = math.floor(3.7)  # Result: 3
   ceil_val = math.ceil(3.2)    # Result: 4
   pi_value = math.pi           # Result: 3.141592653589793

   print("Total:", total)
   print("Average:", average)
   ```
   Output:
   ```
   Total: 150
   Average: 20.0
   ```

3. **Strings (Text)**
   ```python
   # CREATING STRINGS - Three ways to define strings
   
   # 1. Double quotes
   message = "Hello, Python!"   # Most common method
   with_single = "It's sunny"   # Good when string contains '
   
   # 2. Single quotes
   name = 'Alice'              # Same as double quotes
   with_double = 'Say "Hi"'    # Good when string contains "
   
   # 3. Triple quotes (''' or """) for multi-line strings
   description = '''This is a
   multi-line
   string'''                   # Preserves line breaks
   
   # STRING OPERATIONS
   
   # 1. Concatenation (combining strings)
   first_name = "John"
   last_name = "Doe"
   # Using + to join strings
   full_name = first_name + " " + last_name  # Adds space between names
   
   # 2. String Length
   name_length = len(full_name)  # Returns number of characters
   print(full_name)              # Output: John Doe
   print(name_length)            # Output: 8
   
   # 3. String Methods
   text = "Python Programming"
   print(text.upper())          # PYTHON PROGRAMMING
   print(text.lower())          # python programming
   print(text.title())          # Python Programming
   
   # 4. String Indexing (accessing characters)
   #    P  y  t  h  o  n
   #    0  1  2  3  4  5  (positive indices)
   #   -6 -5 -4 -3 -2 -1  (negative indices)
   word = "Python"
   first_char = word[0]      # P
   last_char = word[-1]      # n
   
   # 5. String Slicing [start:end:step]
   slice1 = word[0:2]        # Py (characters 0 to 1)
   slice2 = word[2:]         # thon (character 2 to end)
   slice3 = word[:4]         # Pyth (start to character 3)
   
   # 6. String Formatting
   # Using f-strings (Python 3.6+)
   age = 25
   message = f"I am {age} years old"  # I am 25 years old
   
   # Using .format()
   name = "Alice"
   greeting = "Hello, {}!".format(name)  # Hello, Alice!
   
   # Using % operator (older style)
   info = "Name: %s, Age: %d" % (name, age)
   
   # 7. Useful String Methods
   text = "  Python  "
   print(text.strip())      # "Python" (removes extra spaces)
   print(text.replace("P", "J"))  # "  Jython  "
   print("python".startswith("py"))  # True
   print("python".endswith("on"))    # True
   
   # 8. Escape Characters
   special = "Line 1\nLine 2"  # \n creates new line
   tabbed = "Name:\tJohn"      # \t creates tab space
   raw_string = r"C:\Users"    # r prefix treats \ as literal
   ```
   Output:
   ```
   John Doe
   8
   ```

4. **Booleans (True/False)**
   ```python
   # BOOLEAN BASICS
   # Boolean values: Only two possible values - True or False
   is_sunny = True    # Notice capital T
   is_raining = False # Notice capital F
   is_cold = True
   
   # BOOLEAN OPERATIONS
   
   # 1. AND Operation (True only if both are True)
   stay_home = is_raining and is_cold
   #   is_raining  is_cold    Result
   #   False       True       False
   #   True        False      False
   #   True        True       True
   #   False       False      False
   
   # 2. OR Operation (True if at least one is True)
   bring_umbrella = is_raining or is_cold
   #   is_raining  is_cold    Result
   #   False       True       True
   #   True        False      True
   #   True        True       True
   #   False       False      False
   
   # 3. NOT Operation (reverses True/False)
   is_warm = not is_cold  # False (opposite of is_cold)
   
   # COMPARISON OPERATORS (return boolean values)
   x = 5
   y = 10
   
   # Equal to (==)
   print(x == 5)    # True
   print(x == y)    # False
   
   # Not equal to (!=)
   print(x != y)    # True
   
   # Greater than (>)
   print(x > y)     # False
   
   # Less than (<)
   print(x < y)     # True
   
   # Greater than or equal to (>=)
   print(x >= 5)    # True
   
   # Less than or equal to (<=)
   print(x <= y)    # True
   
   # BOOLEAN METHODS AND FUNCTIONS
   
   # 1. Checking Types
   print(isinstance(True, bool))    # True
   print(type(False))              # <class 'bool'>
   
   # 2. Converting to Boolean
   print(bool(1))       # True (non-zero numbers are True)
   print(bool(0))       # False
   print(bool(""))      # False (empty string)
   print(bool("text"))  # True (non-empty string)
   
   # 3. Common Boolean Patterns
   # Check if a number is in a range
   age = 25
   is_adult = age >= 18 and age <= 65  # True
   
   # Check if a value is in a set of values
   day = "Monday"
   is_weekday = day in ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
   
   # Check if a string is empty
   name = ""
   has_name = bool(name)  # False
   
   # Multiple conditions
   is_valid = (age >= 18) and (not is_raining) or is_sunny
   
   print("Should I bring an umbrella?", bring_umbrella)
   print("Should I stay home?", stay_home)
   ```
   Output:
   ```
   Should I bring an umbrella? True
   Should I stay home? False
   ```

5. **Type Conversion (Casting)**
   ```python
   # Converting between types
   age_str = "25"
   age_num = int(age_str)      # String to integer
   price = float("19.99")      # String to float
   is_positive = bool(age_num)  # Number to boolean
   number_str = str(123)       # Number to string

   print("Age + 5 =", age_num + 5)
   print("Is age positive?", is_positive)
   ```
   Output:
   ```
   Age + 5 = 30
   Is age positive? True
   ```

## 🧠 Practice Challenge

Task A: Temperature Converter
- Create variables for Celsius temperature
- Convert it to Fahrenheit (formula: °F = °C × 9/5 + 32)
- Print both temperatures

Task B: Personal Info Processor
- Create variables for age, name, and height
- Convert age to string and height to integer
- Combine them in a formatted message

Hints:
- Remember to use appropriate data types
- Test your type conversions
- Use `print()` to verify your results

## ✅ Solutions

```python
# Temperature Converter
celsius = 25
fahrenheit = celsius * 9/5 + 32
print(f"{celsius}°C is equal to {fahrenheit}°F")

# Personal Info Processor
age = 25
name = "Alex"
height = 1.75

age_str = str(age)
height_int = int(height)

message = name + " is " + age_str + " years old and " + str(height_int) + " meters tall"
print(message)
```

## 🚀 Summary
- Variables store data and give it meaningful names
- Python's basic data types:
  - Integers (whole numbers)
  - Floats (decimal numbers)
  - Strings (text)
  - Booleans (True/False)
- Type conversion functions:
  - `int()` for integers
  - `float()` for decimal numbers
  - `str()` for strings
  - `bool()` for boolean values
- The `type()` function tells you the data type of any variable

## 🔗 Next Chapter
[Next → Operators and Expressions](./tutorial-03-operators-and-expressions.md)