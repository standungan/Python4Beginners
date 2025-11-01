# Chapter 10: Mini Project - Command Line Calculator

## 🎯 Learning Objectives
- Apply Python concepts from previous chapters
- Build a complete, working application
- Implement error handling in a real project
- Create a user-friendly command-line interface

## 🧩 Overview
In this final chapter, we'll build a command-line calculator that brings together everything we've learned. This calculator will support basic arithmetic, memory functions, and a history of calculations. It's a practical example of how different Python concepts work together in a real application.

## 💡 Step-by-Step Tutorial

1. **Project Structure**
   ```python
   # calculator.py
   class Calculator:
       def __init__(self):
           self.history = []
           self.memory = 0
           self.operations = {
               '+': lambda x, y: x + y,
               '-': lambda x, y: x - y,
               '*': lambda x, y: x * y,
               '/': lambda x, y: x / y,
               '^': lambda x, y: x ** y
           }

   def main():
       calc = Calculator()
       show_welcome_message()
       
       while True:
           try:
               command = input("calc> ").strip().lower()
               if command == 'quit':
                   break
               handle_command(calc, command)
           except Exception as e:
               print(f"Error: {str(e)}")

   if __name__ == "__main__":
       main()
   ```

2. **Basic Operations**
   ```python
   def handle_command(calc, command):
       """Process user commands."""
       if command == 'help':
           show_help()
           return
           
       if command == 'history':
           show_history(calc)
           return
           
       if command == 'memory':
           print(f"Memory: {calc.memory}")
           return
           
       try:
           result = evaluate_expression(calc, command)
           calc.history.append((command, result))
           print(f"= {result}")
       except Exception as e:
           print(f"Error: {str(e)}")

   def evaluate_expression(calc, expression):
       """Evaluate a mathematical expression."""
       # Split into tokens
       tokens = tokenize(expression)
       
       # Convert to postfix notation
       postfix = to_postfix(tokens)
       
       # Evaluate postfix expression
       return evaluate_postfix(calc, postfix)
   ```

3. **Helper Functions**
   ```python
   def tokenize(expression):
       """Convert string expression to tokens."""
       tokens = []
       current = ''
       
       for char in expression:
           if char.isspace():
               if current:
                   tokens.append(current)
                   current = ''
           elif char in '+-*/^()':
               if current:
                   tokens.append(current)
                   current = ''
               tokens.append(char)
           else:
               current += char
               
       if current:
           tokens.append(current)
           
       return tokens

   def show_help():
       """Display calculator help message."""
       print("""
   Calculator Commands:
   ------------------
   number operator number   : Perform calculation (e.g., 5 + 3)
   memory                  : Show stored value
   m+                      : Add to memory
   m-                      : Subtract from memory
   mr                      : Recall memory
   mc                      : Clear memory
   history                 : Show calculation history
   help                    : Show this help message
   quit                    : Exit calculator
   
   Supported operators: +, -, *, /, ^ (power)
   """)
   ```

4. **Memory Functions**
   ```python
   def handle_memory_command(calc, command):
       """Handle memory-related commands."""
       if command == 'mc':
           calc.memory = 0
           print("Memory cleared")
       elif command == 'mr':
           print(f"Memory recall: {calc.memory}")
           return calc.memory
       elif command.startswith('m+'):
           value = float(command[2:])
           calc.memory += value
           print(f"Added to memory: {calc.memory}")
       elif command.startswith('m-'):
           value = float(command[2:])
           calc.memory -= value
           print(f"Subtracted from memory: {calc.memory}")
   ```

5. **Complete Implementation**
   ```python
   class Calculator:
       def __init__(self):
           self.history = []
           self.memory = 0
           self.operations = {
               '+': lambda x, y: x + y,
               '-': lambda x, y: x - y,
               '*': lambda x, y: x * y,
               '/': lambda x, y: x / y if y != 0 else float('inf'),
               '^': lambda x, y: x ** y
           }

       def calculate(self, x, op, y):
           """Perform calculation and store in history."""
           try:
               x, y = float(x), float(y)
               if op in self.operations:
                   result = self.operations[op](x, y)
                   expression = f"{x} {op} {y}"
                   self.history.append((expression, result))
                   return result
               else:
                   raise ValueError(f"Unknown operator: {op}")
           except ValueError as e:
               raise ValueError(f"Invalid input: {str(e)}")
           except ZeroDivisionError:
               raise ValueError("Division by zero!")

       def show_history(self):
           """Display calculation history."""
           if not self.history:
               print("No calculations in history")
               return
               
           print("\nCalculation History:")
           print("-" * 20)
           for expr, result in self.history:
               print(f"{expr} = {result}")
           print("-" * 20)
   ```

## 🧠 Practice Challenge

Task A: Extend the Calculator
- Add support for:
  - Parentheses in expressions
  - Scientific notation
  - Additional operations (%, sqrt, etc.)
  - Constants (pi, e)

Task B: Add Advanced Features
- Implement:
  - Expression validation
  - Unit conversion
  - Variable storage
  - Custom functions

Hints:
- Break down complex expressions
- Use regular expressions for parsing
- Implement proper error handling
- Add helpful user feedback

## ✅ Solutions

Here's a complete working calculator with some extended features:

```python
import math
import re

class AdvancedCalculator(Calculator):
    def __init__(self):
        super().__init__()
        self.constants = {
            'pi': math.pi,
            'e': math.e
        }
        self.variables = {}
        
        # Add more operations
        self.operations.update({
            '%': lambda x, y: x % y,
            'sqrt': lambda x, _: math.sqrt(x)
        })

    def evaluate(self, expression):
        """Evaluate a complex mathematical expression."""
        # Replace constants
        for name, value in self.constants.items():
            expression = expression.replace(name, str(value))
            
        # Handle parentheses
        while '(' in expression:
            match = re.search(r'\(([^()]+)\)', expression)
            if match:
                sub_expr = match.group(1)
                result = self.evaluate(sub_expr)
                expression = expression.replace(f"({sub_expr})", str(result))
                
        # Evaluate remaining expression
        return super().calculate(*expression.split())

def main():
    calc = AdvancedCalculator()
    print("Advanced Calculator (type 'help' for commands)")
    
    while True:
        try:
            command = input("calc> ").strip().lower()
            if command == 'quit':
                break
            elif command == 'help':
                show_help()
            else:
                result = calc.evaluate(command)
                print(f"= {result}")
        except Exception as e:
            print(f"Error: {str(e)}")

if __name__ == "__main__":
    main()
```

## 🚀 Summary
- Complex programs combine multiple Python concepts
- Proper structure makes code maintainable
- Error handling is crucial for user experience
- Object-oriented programming organizes code
- Regular expressions help with string parsing
- Documentation helps users understand the program

## � Summary
- Complex programs combine multiple Python concepts
- Proper structure makes code maintainable
- Error handling is crucial for user experience
- Documentation helps users understand the program
- Practice and experimentation lead to mastery

## 🔗 Next Chapter
Ready to take your Python skills to the next level? Let's dive into Object-Oriented Programming!

[Next → Introduction to OOP](./tutorial-11-introduction-to-oop.md)