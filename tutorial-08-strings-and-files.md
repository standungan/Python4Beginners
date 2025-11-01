# Chapter 8: Strings and Files

## 🎯 Learning Objectives
- Master string manipulation and formatting
- Learn to read from and write to files
- Understand file paths and handling
- Work with different file formats

## 🧩 Overview
Strings are sequences of characters, and files are containers for data on your computer. Together, they form the backbone of text processing and data storage in Python. Whether you're processing user input, reading configuration files, or saving program output, these skills are essential for any programmer.

## 💡 Step-by-Step Tutorial

1. **String Methods and Operations**
   ```python
   # String methods
   text = "  Hello, Python Programming!  "
   
   print(text.strip())          # Remove whitespace
   print(text.lower())          # Convert to lowercase
   print(text.upper())          # Convert to uppercase
   print(text.replace("Python", "World"))  # Replace text
   
   # String splitting and joining
   words = text.split()         # Split into list
   print(words)
   new_text = "-".join(words)   # Join with separator
   print(new_text)

   # Finding substrings
   print(text.find("Python"))   # Find position
   print("Python" in text)      # Check existence
   ```

2. **String Formatting**
   ```python
   name = "Alice"
   age = 25
   height = 1.75

   # Old style formatting
   print("Name: %s, Age: %d" % (name, age))

   # str.format() method
   print("Name: {}, Age: {}".format(name, age))

   # f-strings (Python 3.6+)
   print(f"Name: {name}, Age: {age}")
   print(f"Height: {height:.2f} meters")

   # Formatting specifications
   price = 19.99
   print(f"Price: ${price:>10.2f}")  # Right align, 2 decimals
   ```

3. **Reading Files**
   ```python
   # Reading entire file
   with open("example.txt", "r") as file:
       content = file.read()
       print(content)

   # Reading line by line
   with open("example.txt", "r") as file:
       for line in file:
           print(line.strip())

   # Reading specific number of lines
   with open("example.txt", "r") as file:
       first_line = file.readline()
       all_lines = file.readlines()
   ```

4. **Writing Files**
   ```python
   # Writing text
   with open("output.txt", "w") as file:
       file.write("Hello, World!\n")
       file.write("This is a new line.")

   # Appending to file
   with open("output.txt", "a") as file:
       file.write("\nAppending new content")

   # Writing multiple lines
   lines = ["Line 1", "Line 2", "Line 3"]
   with open("output.txt", "w") as file:
       file.writelines(line + "\n" for line in lines)
   ```

5. **File and Path Handling**
   ```python
   import os

   # Path operations
   current_dir = os.getcwd()
   file_path = os.path.join(current_dir, "data", "example.txt")

   # Check file existence
   if os.path.exists(file_path):
       print("File exists!")

   # File information
   print(os.path.getsize(file_path))  # Size in bytes
   print(os.path.basename(file_path))  # File name
   print(os.path.dirname(file_path))   # Directory path
   ```

## 🧠 Practice Challenge

Task A: Log File Analyzer
- Create a program that:
  - Reads a log file
  - Counts occurrences of "ERROR", "WARNING", "INFO"
  - Extracts timestamps
  - Generates a summary report

Task B: Simple Note Taking App
- Create a program that:
  - Allows adding new notes
  - Lists all notes
  - Searches notes by keyword
  - Saves notes to a file

Hints:
- Always use context managers (with statements)
- Handle file not found errors
- Consider using appropriate string methods
- Plan your file format

## ✅ Solutions

```python
# Log File Analyzer
def analyze_log(filename):
    counts = {"ERROR": 0, "WARNING": 0, "INFO": 0}
    timestamps = []

    try:
        with open(filename, "r") as file:
            for line in file:
                # Count message types
                for msg_type in counts:
                    if msg_type in line:
                        counts[msg_type] += 1
                
                # Extract timestamp (assuming format: [YYYY-MM-DD HH:MM:SS])
                if line.startswith("["):
                    timestamps.append(line[1:20])

        # Generate report
        with open("log_report.txt", "w") as report:
            report.write("Log Analysis Report\n")
            report.write("=================\n\n")
            for msg_type, count in counts.items():
                report.write(f"{msg_type}: {count}\n")
            report.write(f"\nTotal entries: {sum(counts.values())}")

    except FileNotFoundError:
        print("Log file not found!")

# Note Taking App
class NoteTaker:
    def __init__(self, filename):
        self.filename = filename
        self.notes = []
        self.load_notes()

    def load_notes(self):
        try:
            with open(self.filename, "r") as file:
                self.notes = file.readlines()
        except FileNotFoundError:
            self.notes = []

    def save_notes(self):
        with open(self.filename, "w") as file:
            file.writelines(self.notes)

    def add_note(self, note):
        self.notes.append(f"{note}\n")
        self.save_notes()

    def list_notes(self):
        for i, note in enumerate(self.notes, 1):
            print(f"{i}. {note.strip()}")

    def search_notes(self, keyword):
        matches = [note for note in self.notes if keyword.lower() in note.lower()]
        for match in matches:
            print(match.strip())

# Testing the Note Taking App
notes = NoteTaker("my_notes.txt")
notes.add_note("Remember to learn Python!")
notes.add_note("Practice file handling")
notes.list_notes()
notes.search_notes("python")
```

## 🚀 Summary
- String methods provide powerful text manipulation
- Multiple ways to format strings (f-strings recommended)
- Always use context managers for file operations
- Files can be read in multiple ways (read, readline, readlines)
- File paths should be handled carefully
- Consider error handling for file operations

## 🔗 Next Chapter
[Next → Errors and Exceptions](./tutorial-09-errors-and-exceptions.md)