# Chapter 9: Errors and Exceptions

## 🎯 Learning Objectives
- Understand different types of errors in Python
- Master try/except/else/finally blocks
- Learn to raise and handle exceptions
- Implement proper error handling strategies

## 🧩 Overview
Errors are a natural part of programming. Python's exception handling system helps you gracefully handle errors, maintain program flow, and provide meaningful feedback. Think of exceptions as safety nets that catch problems before they crash your program, allowing you to respond appropriately.

## 💡 Step-by-Step Tutorial

1. **Types of Errors**
   ```python
   # SyntaxError
   # print "Hello"  # Python 2 style - wrong in Python 3

   # NameError
   # print(undefined_variable)

   # TypeError
   # "2" + 2

   # ValueError
   # int("not a number")

   # IndexError
   # list = [1, 2, 3]
   # print(list[10])

   # KeyError
   # dict = {"a": 1}
   # print(dict["b"])

   # ZeroDivisionError
   # 10 / 0
   ```

2. **Basic Exception Handling**
   ```python
   # Simple try/except
   try:
       number = int(input("Enter a number: "))
       print(f"You entered: {number}")
   except ValueError:
       print("That's not a valid number!")

   # Handling multiple exceptions
   try:
       numbers = [1, 2, 3]
       position = int(input("Enter position: "))
       print(numbers[position])
   except ValueError:
       print("Please enter a valid number!")
   except IndexError:
       print("Position out of range!")
   ```

3. **The else and finally Clauses**
   ```python
   try:
       file = open("data.txt", "r")
       content = file.read()
   except FileNotFoundError:
       print("File not found!")
   else:
       print("File content:", content)
   finally:
       file.close()

   # Better version using context manager
   try:
       with open("data.txt", "r") as file:
           content = file.read()
   except FileNotFoundError:
       print("File not found!")
   else:
       print("File content:", content)
   ```

4. **Raising Exceptions**
   ```python
   def divide(a, b):
       if b == 0:
           raise ValueError("Cannot divide by zero!")
       return a / b

   def validate_age(age):
       if not isinstance(age, int):
           raise TypeError("Age must be an integer")
       if age < 0:
           raise ValueError("Age cannot be negative")
       if age > 150:
           raise ValueError("Age is unrealistic")
       return True
   ```

5. **Creating Custom Exceptions**
   ```python
   class InvalidAgeError(Exception):
       """Raised when the age is invalid."""
       pass

   class EmptyNameError(Exception):
       """Raised when the name is empty."""
       pass

   def create_profile(name, age):
       if not name.strip():
           raise EmptyNameError("Name cannot be empty!")
       if age < 0 or age > 150:
           raise InvalidAgeError(f"Invalid age: {age}")
       return f"Profile created for {name}, age {age}"
   ```

## 🧠 Practice Challenge

Task A: Calculator with Error Handling
- Create a calculator that:
  - Handles division by zero
  - Validates input types
  - Provides helpful error messages
  - Supports basic operations (+, -, *, /)

Task B: File Processing with Error Handling
- Create a program that:
  - Reads multiple files
  - Handles missing files
  - Validates file content
  - Generates error report

Hints:
- Plan your exception hierarchy
- Use specific exception types
- Provide helpful error messages
- Clean up resources in finally blocks

## ✅ Solutions

```python
# Calculator with Error Handling
def calculator():
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        operation = input("Enter operation (+,-,*,/): ")

        if operation not in ['+', '-', '*', '/']:
            raise ValueError("Invalid operation")

        result = None
        if operation == '+':
            result = num1 + num2
        elif operation == '-':
            result = num1 - num2
        elif operation == '*':
            result = num1 * num2
        elif operation == '/':
            if num2 == 0:
                raise ZeroDivisionError("Cannot divide by zero!")
            result = num1 / num2

        print(f"Result: {result}")

    except ValueError as e:
        if str(e) == "Invalid operation":
            print("Please enter a valid operation (+,-,*,/)")
        else:
            print("Please enter valid numbers!")
    except ZeroDivisionError as e:
        print(e)
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

# File Processing with Error Handling
def process_files(file_list):
    error_report = []
    processed_files = []

    for file_name in file_list:
        try:
            with open(file_name, 'r') as file:
                content = file.read()
                
                # Validate content
                if len(content.strip()) == 0:
                    raise ValueError("File is empty")
                
                # Process content (example: count words)
                word_count = len(content.split())
                processed_files.append({
                    'file': file_name,
                    'words': word_count
                })

        except FileNotFoundError:
            error_report.append(f"Error: {file_name} not found")
        except ValueError as e:
            error_report.append(f"Error: {file_name} - {str(e)}")
        except Exception as e:
            error_report.append(f"Unexpected error in {file_name}: {str(e)}")

    # Generate report
    with open('processing_report.txt', 'w') as report:
        report.write("File Processing Report\n")
        report.write("====================\n\n")
        
        report.write("Processed Files:\n")
        for pf in processed_files:
            report.write(f"{pf['file']}: {pf['words']} words\n")
        
        report.write("\nErrors:\n")
        for error in error_report:
            report.write(f"{error}\n")

# Test the file processor
files_to_process = ['file1.txt', 'file2.txt', 'nonexistent.txt']
process_files(files_to_process)
```

## 🚀 Summary
- Exceptions help handle errors gracefully
- try/except blocks catch and handle errors
- else runs when no exception occurs
- finally always runs, regardless of exceptions
- Raise exceptions for invalid conditions
- Custom exceptions add clarity to error handling
- Always clean up resources (close files, etc.)
- Be specific about which exceptions to catch

## 🔗 Next Chapter
[Next → Mini Project](./tutorial-10-mini-project.md)