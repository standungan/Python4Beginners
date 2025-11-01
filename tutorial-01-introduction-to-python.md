# Chapter 1: Introduction to Python

## 🎯 Learning Objectives
- Understand what Python is and why it's a great first programming language
- Install Python on your computer and verify the installation
- Write and run your first Python program
- Learn to use both the Python interactive shell (REPL) and Python files

## 🧩 Overview
Python is a popular programming language known for its simplicity and readability. Unlike many other programming languages, Python uses simple English-like commands and doesn't require complex symbols or strict rules about where to put brackets or semicolons. This makes it perfect for beginners who are just starting their programming journey.

Think of Python as a very patient assistant who can follow your instructions to perform tasks. These instructions (we call them "code") need to be clear and precise, but they don't need to be complicated.

## 💡 Step-by-Step Tutorial

1. **Installing Python**
   - Visit [python.org](https://python.org)
   - Download the latest version of Python 3 (e.g., Python 3.11)
   - Run the installer
     - On Windows: Make sure to check "Add Python to PATH"
     - On Mac/Linux: The installer handles this automatically

2. **Verifying Your Installation**
   Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and type:
   ```python
   python --version
   ```
   You should see something like:
   ```
   Python 3.11.0
   ```

3. **Using the Python Shell (REPL)**
   The Python shell is a place where you can type Python commands and see results immediately.
   
   Type `python` in your terminal to start it:
   ```python
   >>> print("Hello, World!")
   Hello, World!
   >>> 2 + 3
   5
   >>> exit()  # This is how you exit the shell
   ```

4. **Creating Your First Python File**
   Create a file named `hello.py` with this content:
   ```python
   # This is a comment - Python ignores everything after the # symbol
   # Comments are used to explain code and are not executed
   
   # Basic print statement - displays text on the screen
   print("Welcome to Python!")  # Outputs: Welcome to Python!
   
   # You can print multiple lines with multiple print statements
   print("Programming is fun!")  # Outputs: Programming is fun!
   
   # Variables and basic mathematics
   # Store the result of 5 * 4 in a variable called 'result'
   result = 5 * 4    # Multiplication using the * operator
   
   # Print text and the value of result
   # The comma automatically adds a space between items
   print("5 times 4 equals:", result)  # Outputs: 5 times 4 equals: 20
   
   # Key Concepts Demonstrated:
   
   # 1. Comments (#):
   #    - Start with #
   #    - Help explain code
   #    - Python ignores them
   #    - Essential for documentation
   
   # 2. print() Function:
   #    - Displays output
   #    - Can print text (strings)
   #    - Can print numbers
   #    - Can print multiple items
   
   # 3. Variables:
   #    - Store values
   #    - Can be changed
   #    - Names should be meaningful
   
   # 4. Basic Operations:
   #    - Mathematical calculations
   #    - Store results in variables
   
   # 5. Program Flow:
   #    - Executes top to bottom
   #    - Each line is a statement
   
   # Common Beginner Patterns:
   # - Use print() for output
   # - Store calculations in variables
   # - Comment code for clarity
   # - Keep it simple and clear
   ```

5. **Running Your Python File**
   In your terminal, navigate to where you saved `hello.py` and run:
   ```python
   python hello.py
   ```
   You should see:
   ```
   Welcome to Python!
   Programming is fun!
   5 times 4 equals: 20
   ```

## 🧠 Practice Challenge

Task A: Create a new file that prints your name and age
- Create a file called `about_me.py`
- Make it print at least three facts about yourself
- Add some calculations (like your age in days)

Task B: Experiment with the Python shell
- Open the Python shell
- Try different mathematical operations
- Try printing different messages

Hints:
- Remember to save your file with the `.py` extension
- Don't forget to use `print()` to see output
- Mathematical operations: `+`, `-`, `*`, `/`

## ✅ Solutions

```python
# about_me.py
print("My name is Alex")
print("I am 25 years old")
print("I live in New York")

# Age in days calculation
age_in_days = 25 * 365
print("I am approximately", age_in_days, "days old")
```

Shell experiments:
```python
>>> print("Hello from Python!")
Hello from Python!
>>> 10 + 5
15
>>> 20 / 4
5.0
>>> print("The year is 2025")
The year is 2025
```

## 🚀 Summary
- Python is a beginner-friendly programming language that's powerful and widely used
- You can run Python in two ways:
  - Interactive shell (REPL) for quick experiments
  - Python files (`.py`) for saving and running programs
- Comments start with `#` and help explain your code
- `print()` is used to display output
- Python can perform mathematical calculations

## 🔗 Next Chapter
[Next → Variables & Data Types](./tutorial-02-variables-and-data-types.md)