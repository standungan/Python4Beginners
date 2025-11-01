# Chapter 11: Introduction to Object-Oriented Programming

## 🎯 Learning Objectives
- Understand the fundamentals of Object-Oriented Programming (OOP)
- Learn to create and use classes in Python
- Master instance attributes and methods
- Implement constructors and class methods
- Understand encapsulation and data hiding

## 🧩 Overview
Object-Oriented Programming is a programming paradigm that organizes code into objects, which are instances of classes. Think of a class as a blueprint for creating objects. For example, just as a house blueprint defines what a house looks like, a class defines what an object will contain and how it will behave.

## 💡 Step-by-Step Tutorial

1. **Creating Your First Class**
   ```python
   # Define our first class
   class Dog:
       # Class attribute - shared by ALL instances of Dog
       # This is like a characteristic that all dogs have in common
       species = "Canis familiaris"
       
       # Constructor method (initializer)
       # This is called when we create a new Dog
       # self refers to the instance being created
       def __init__(self, name, age):
           # Instance attributes - unique to each dog
           self.name = name    # Each dog has its own name
           self.age = age      # Each dog has its own age
   
       # Instance method - a function that belongs to the class
       # self lets the method access the instance's attributes
       def bark(self):
           # Use self.name to get THIS dog's name
           return f"{self.name} says Woof!"
   
   # Creating instances (objects) of the Dog class
   # This calls __init__ automatically
   buddy = Dog("Buddy", 5)    # Create first dog
   max = Dog("Max", 3)        # Create second dog
   
   # Accessing attributes and methods
   # Instance attributes (unique to each dog)
   print(buddy.name)         # Output: Buddy
   print(max.age)           # Output: 3
   
   # Calling instance methods
   print(buddy.bark())      # Output: Buddy says Woof!
   
   # Accessing class attributes (shared by all dogs)
   print(Dog.species)       # Output: Canis familiaris
   
   # Key Concepts Demonstrated:
   # 1. Class Definition:
   #    - Blueprint for creating objects
   #    - Contains attributes and methods
   
   # 2. Class Attributes:
   #    - Shared by all instances
   #    - Defined directly in class
   #    - Accessed via class name or instance
   
   # 3. Instance Attributes:
   #    - Unique to each instance
   #    - Defined in __init__
   #    - Accessed via instance name
   
   # 4. Methods:
   #    - Functions that belong to the class
   #    - Take self as first parameter
   #    - Can access instance attributes
   
   # 5. Instance Creation:
   #    - Called instantiation
   #    - Creates unique object from class blueprint
   #    - Automatically calls __init__
   
   # Common Patterns:
   # - Use class attributes for shared properties
   # - Use instance attributes for unique properties
   # - Use methods for behaviors
   # - Always include self in method definitions

2. **Instance Methods and Self**
   ```python
   class Circle:
       def __init__(self, radius):
           # Initialize the circle with a radius
           # self.radius is an instance attribute
           self.radius = radius
       
       def area(self):
           # Calculate the area of the circle
           # Formula: π * r²
           import math  # Import math module for pi
           return math.pi * self.radius ** 2
       
       def circumference(self):
           # Calculate the circumference of the circle
           # Formula: 2 * π * r
           import math
           return 2 * math.pi * self.radius
       
       def describe(self):
           # Return a human-readable description
           # Uses f-string for string formatting
           return f"Circle with radius {self.radius}"

   # Creating and using a Circle object
   circle = Circle(5)    # Create circle with radius 5
   
   # Using the instance methods
   print(circle.area())           # Calculate area (≈ 78.54)
   print(circle.circumference())  # Calculate circumference (≈ 31.42)
   print(circle.describe())       # Get description
   
   # Understanding 'self':
   # 1. self represents the instance itself
   # 2. It's automatically passed to instance methods
   # 3. It gives methods access to instance attributes
   # 4. It allows methods to modify instance state
   
   # Method Types Demonstrated:
   # 1. Constructor (__init__):
   #    - Initializes the instance
   #    - Sets up initial state
   
   # 2. Calculation Methods (area, circumference):
   #    - Perform computations using instance data
   #    - Return calculated values
   #    - Don't modify instance state
   
   # 3. Descriptive Methods (describe):
   #    - Return information about the instance
   #    - Format data for human readability
   
   # Best Practices:
   # - Keep methods focused on one task
   # - Use clear, descriptive method names
   # - Document complex calculations
   # - Return values rather than printing
   # - Use appropriate return types
   ```

3. **Class Methods and Static Methods**
   ```python
   class BankAccount:
       # Class attribute - shared by all accounts
       # Default interest rate for all accounts
       interest_rate = 0.02  # 2% interest rate
       
       def __init__(self, owner, balance=0):
           # Instance attributes - unique per account
           self.owner = owner      # Account owner's name
           self.balance = balance  # Initial balance
       
       # Instance method - operates on instance data
       def deposit(self, amount):
           # Add amount to account balance
           # self refers to the specific account instance
           self.balance += amount
           return self.balance
       
       # Class method - operates on class data
       # Uses @classmethod decorator
       # cls parameter refers to the class itself
       @classmethod
       def set_interest_rate(cls, rate):
           # Change interest rate for ALL accounts
           # cls.interest_rate affects the class attribute
           cls.interest_rate = rate
       
       # Static method - utility function
       # Uses @staticmethod decorator
       # No access to instance or class data
       @staticmethod
       def validate_amount(amount):
           # Validate if amount is positive
           # Pure utility function - no self or cls needed
           return amount > 0

   # Demonstrating different method types
   
   # 1. Creating and using instance method
   account = BankAccount("Alice", 1000)  # Create account
   account.deposit(500)                  # Instance method call
   
   # 2. Using class method to change class attribute
   BankAccount.set_interest_rate(0.03)   # Change rate to 3%
   
   # 3. Using static method for validation
   BankAccount.validate_amount(100)      # Check if amount valid
   
   # Understanding Different Method Types:
   
   # 1. Instance Methods:
   #    - Regular methods that need instance data
   #    - First parameter is self (the instance)
   #    - Called on instances: account.deposit()
   #    - Can access/modify instance attributes
   
   # 2. Class Methods:
   #    - Methods that work with the class itself
   #    - First parameter is cls (the class)
   #    - Use @classmethod decorator
   #    - Can access/modify class attributes
   #    - Called on class: BankAccount.set_interest_rate()
   
   # 3. Static Methods:
   #    - Utility functions that don't need instance/class data
   #    - Use @staticmethod decorator
   #    - No special first parameter
   #    - Can't access instance or class attributes directly
   #    - Called on class: BankAccount.validate_amount()
   
   # When to Use Each:
   
   # Instance Methods:
   # - When you need to work with instance data
   # - When method behavior depends on instance state
   # - For operations specific to an instance
   
   # Class Methods:
   # - When you need to modify class state
   # - For alternative constructors
   # - For operations that affect all instances
   
   # Static Methods:
   # - For utility functions related to class purpose
   # - When you don't need instance or class state
   # - For keeping related functions organized
   ```

4. **Properties and Encapsulation**
   ```python
   class Employee:
       def __init__(self, name, salary):
           # Protected attribute (single underscore)
           # Indicates "please don't access this directly"
           self._name = name
           
           # Private attribute (double underscore)
           # Python will name-mangle this to _Employee__salary
           # Makes it harder to access from outside the class
           self.__salary = salary
       
       # Property getter for salary
       # @property decorator creates a read-only property
       @property
       def salary(self):
           # Controlled access to private salary attribute
           return self.__salary
       
       # Property setter for salary
       # @salary.setter allows controlled modification
       @salary.setter
       def salary(self, new_salary):
           # Validate salary before setting
           if new_salary > 0:
               self.__salary = new_salary
           else:
               raise ValueError("Salary must be positive")
       
       # Property getter for name
       # Makes name read-only
       @property
       def name(self):
           # Controlled access to protected name attribute
           return self._name

   # Demonstrating encapsulation and properties
   
   # Create an employee
   emp = Employee("John", 50000)
   
   # Using properties (looks like direct attribute access)
   print(emp.name)        # Uses name getter
   print(emp.salary)      # Uses salary getter
   emp.salary = 60000     # Uses salary setter
   
   # The following would raise errors:
   # emp.name = "Bob"     # Error: can't set read-only property
   # emp.__salary = 0     # Error: no direct access to private attribute
   
   # Understanding Python Name Mangling:
   # emp._name           # Accessible but discouraged
   # emp._Employee__salary  # Technically accessible but strongly discouraged
   
   # Key Concepts:
   
   # 1. Encapsulation Levels:
   #    - Public: normal attributes (no underscore)
   #    - Protected: _attribute (single underscore)
   #    - Private: __attribute (double underscore)
   
   # 2. Properties:
   #    - @property: creates getter
   #    - @x.setter: creates setter
   #    - @x.deleter: creates deleter (less common)
   
   # 3. Benefits of Properties:
   #    - Control access to attributes
   #    - Add validation logic
   #    - Compute values on demand
   #    - Maintain backward compatibility
   
   # When to Use Properties:
   
   # 1. Use @property when you need to:
   #    - Validate data before setting
   #    - Compute values dynamically
   #    - Control attribute access
   #    - Make attributes read-only
   
   # 2. Use protected (_) when:
   #    - Attribute should be used by subclasses
   #    - Warning other developers "internal use"
   
   # 3. Use private (__) when:
   #    - Attribute must not be accessed externally
   #    - Avoiding name conflicts in inheritance
   
   # Best Practices:
   # - Use properties instead of direct attribute access
   # - Validate data in setters
   # - Document property behavior
   # - Keep property logic simple
   # - Use private attributes sparingly
   ```

5. **String Representation**
   ```python
   class Book:
       def __init__(self, title, author, year):
           # Initialize book attributes
           self.title = title    # Book title
           self.author = author  # Author name
           self.year = year      # Publication year
       
       # String representation for users
       # Called by str() and print()
       def __str__(self):
           # Return user-friendly string
           # Format: "Title by Author (Year)"
           return f"{self.title} by {self.author} ({self.year})"
       
       # String representation for developers
       # Called by repr() and in interactive shell
       def __repr__(self):
           # Return developer-friendly string
           # Should ideally be valid Python code to recreate the object
           return f"Book('{self.title}', '{self.author}', {self.year})"

   # Demonstrating string representations
   
   # Create a book object
   book = Book("Python 101", "John Smith", 2025)
   
   # Different ways to see string representations
   print(str(book))   # User-friendly: Python 101 by John Smith (2025)
   print(repr(book))  # Developer: Book('Python 101', 'John Smith', 2025)
   
   # When each is called:
   # print(book)      # Uses __str__
   # book            # In interactive shell, uses __repr__
   # f"{book}"       # Uses __str__
   # f"{book!r}"     # Uses __repr__
   
   # Key Concepts:
   
   # 1. __str__ Method:
   #    - Informal string representation
   #    - Should be readable for end users
   #    - Called by str() and print()
   #    - Should focus on readability
   
   # 2. __repr__ Method:
   #    - Official string representation
   #    - Should be detailed and unambiguous
   #    - Used for debugging and development
   #    - Should ideally show how to recreate the object
   
   # Best Practices:
   
   # For __str__:
   # - Make it readable and clear
   # - Include key information
   # - Format nicely for display
   # - Focus on end-user needs
   
   # For __repr__:
   # - Include all essential attributes
   # - Make it possible to recreate the object
   # - Use precise syntax
   # - Include class name
   
   # Implementation Guidelines:
   
   # 1. Always implement __repr__
   #    - If no __str__, Python uses __repr__
   #    - Crucial for debugging
   
   # 2. Implement __str__ for user-facing classes
   #    - When objects need to be displayed to users
   #    - When readable output is important
   
   # 3. Make __repr__ detailed
   #    - Include all important state
   #    - Use exact values, not summaries
   
   # Common Patterns:
   
   # Class with both methods:
   # class Point:
   #     def __str__(self): return f"({self.x}, {self.y})"
   #     def __repr__(self): return f"Point({self.x}, {self.y})"
   
   # Technical class (repr only):
   # class DatabaseConnection:
   #     def __repr__(self): return f"Connection(host='{self.host}')"
   ```

## 🧠 Practice Challenge

Task A: Create a Student Management System
- Create a `Student` class with:
  - Name, age, and grades list
  - Methods to add grades and calculate average
  - Property for grade status (Pass/Fail)
  - String representation

Task B: Design a Bank Account System
- Create a `BankAccount` class with:
  - Account number, owner, balance
  - Methods for deposit and withdrawal
  - Transaction history
  - Interest calculation

Hints:
- Use properties for data validation
- Implement appropriate string representations
- Consider using private attributes
- Add helper methods where useful

## ✅ Solutions

```python
# Student Management System
class Student:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age
        self.__grades = []
    
    @property
    def name(self):
        return self.__name
    
    def add_grade(self, grade):
        if 0 <= grade <= 100:
            self.__grades.append(grade)
        else:
            raise ValueError("Grade must be between 0 and 100")
    
    def get_average(self):
        if not self.__grades:
            return 0
        return sum(self.__grades) / len(self.__grades)
    
    @property
    def status(self):
        avg = self.get_average()
        return "Pass" if avg >= 60 else "Fail"
    
    def __str__(self):
        return f"Student: {self.__name}, Age: {self.__age}, Average: {self.get_average():.1f}"

# Bank Account System
class BankAccount:
    account_counter = 1000  # Class variable for account numbers
    
    def __init__(self, owner, initial_balance=0):
        self.__account_number = BankAccount.account_counter
        self.__owner = owner
        self.__balance = initial_balance
        self.__transactions = []
        BankAccount.account_counter += 1
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            self.__transactions.append(f"Deposit: +${amount}")
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            self.__transactions.append(f"Withdrawal: -${amount}")
            return True
        return False
    
    def get_statement(self):
        statement = f"Account Statement for {self.__owner}\n"
        statement += f"Account Number: {self.__account_number}\n"
        statement += f"Current Balance: ${self.__balance}\n"
        statement += "\nRecent Transactions:\n"
        for transaction in self.__transactions[-5:]:
            statement += f"{transaction}\n"
        return statement

# Testing the solutions
def test_student():
    student = Student("Alice", 20)
    student.add_grade(85)
    student.add_grade(92)
    student.add_grade(78)
    print(student)
    print(f"Status: {student.status}")

def test_bank_account():
    account = BankAccount("Bob", 1000)
    account.deposit(500)
    account.withdraw(200)
    account.deposit(1000)
    print(account.get_statement())

test_student()
test_bank_account()
```

## 🚀 Summary
- Classes are blueprints for creating objects
- Objects have attributes (data) and methods (behavior)
- Instance methods use `self` to access object data
- Class methods and static methods serve different purposes
- Properties provide controlled access to attributes
- String representation methods customize object display
- Encapsulation protects data integrity

## 🔗 Next Chapter
[Next → Advanced OOP Concepts](./tutorial-12-advanced-oop.md)