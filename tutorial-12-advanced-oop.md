# Chapter 12: Advanced OOP Concepts

## 🎯 Learning Objectives
- Master inheritance and polymorphism
- Understand multiple inheritance and method resolution order (MRO)
- Learn abstract classes and interfaces
- Implement operator overloading
- Use composition and aggregation effectively

## 🧩 Overview
Advanced Object-Oriented Programming concepts help you create more sophisticated and flexible code structures. These concepts enable code reuse, establish relationships between classes, and provide powerful ways to customize object behavior.

## 💡 Step-by-Step Tutorial

1. **Inheritance Basics**
   ```python
   # Base class (parent class)
   class Animal:
       def __init__(self, name, species):
           # Initialize basic attributes that all animals share
           self.name = name      # Every animal has a name
           self.species = species # Every animal has a species
       
       def make_sound(self):
           # This is a placeholder method that subclasses will override
           # It's empty because each animal makes a different sound
           pass
       
       def describe(self):
           # A common method that all animals can use without modification
           return f"{self.name} is a {self.species}"

   # First derived class (child class)
   class Dog(Animal):  # Dog inherits from Animal
       def __init__(self, name, breed):
           # Call parent's __init__ with known species
           super().__init__(name, species="Dog")  # Use super() to call parent method
           self.breed = breed    # Add Dog-specific attribute
       
       def make_sound(self):
           # Override parent's method with Dog-specific sound
           return "Woof!"
       
       def fetch(self):
           # Add Dog-specific method (not in parent class)
           return f"{self.name} is fetching the ball"

   # Second derived class (child class)
   class Cat(Animal):  # Cat inherits from Animal
       def __init__(self, name, indoor=True):
           # Call parent's __init__ with known species
           super().__init__(name, species="Cat")
           self.indoor = indoor  # Add Cat-specific attribute
       
       def make_sound(self):
           # Override parent's method with Cat-specific sound
           return "Meow!"

   # Using inheritance
   dog = Dog("Buddy", "Golden Retriever")  # Create a Dog instance
   cat = Cat("Whiskers")                   # Create a Cat instance
   
   # demonstrate inheritance in action
   print(dog.describe())    # Uses method from parent class (Animal)
   print(dog.make_sound())  # Uses overridden method (Dog version)
   print(cat.make_sound())  # Uses overridden method (Cat version)

   # Key Points about this example:
   # 1. Animal is the base class with common attributes and methods
   # 2. Dog and Cat inherit from Animal (they are subclasses)
   # 3. Both override make_sound() with their specific sounds
   # 4. Both add their own unique attributes (breed, indoor)
   # 5. Both use super() to properly initialize the parent class
   ```

2. **Multiple Inheritance and MRO (Method Resolution Order)**
   ```python
   # First mixin class - provides swimming capabilities
   class Swimming:
       def swim(self):
           # Basic swimming behavior
           return "Swimming..."
       
       def float(self):
           # How the object floats in water
           return "Floating..."

   # Second mixin class - provides flying capabilities
   class Flying:
       def fly(self):
           # Basic flying behavior
           return "Flying..."
       
       def float(self):
           # Note: This is a different kind of floating (in air)
           return "Gliding..."

   # Duck class inherits from multiple classes
   class Duck(Animal, Swimming, Flying):
       def __init__(self, name):
           # Initialize the main parent class (Animal)
           super().__init__(name, species="Duck")
       
       def make_sound(self):
           # Duck-specific sound
           return "Quack!"

   # Demonstrating multiple inheritance
   duck = Duck("Donald")
   
   # Duck can use methods from all parent classes
   print(duck.swim())    # From Swimming mixin
   print(duck.fly())     # From Flying mixin
   print(duck.float())   # This is interesting! Which float() method is called?
   
   # Let's check the Method Resolution Order (MRO)
   print(Duck.__mro__)
   
   # The output of __mro__ will show:
   # (<class 'Duck'>, <class 'Animal'>, <class 'Swimming'>, 
   #  <class 'Flying'>, <class 'object'>)
   
   # Key Points about Multiple Inheritance:
   # 1. A class can inherit from multiple parent classes
   # 2. Mixins (Swimming, Flying) add specific functionality
   # 3. MRO determines which method is called when names conflict
   # 4. In this case, float() comes from Swimming because:
   #    - Duck doesn't have float()
   #    - Animal doesn't have float()
   #    - Swimming is listed before Flying in the inheritance
   # 5. super() in multiple inheritance uses the MRO to determine
   #    which parent's method to call
   
   # Common Use Cases for Multiple Inheritance:
   # 1. Mixing in additional functionality (like our Swimming, Flying)
   # 2. Interface implementation
   # 3. Feature composition
   ```

3. **Abstract Classes and Interfaces**
   ```python
   # Import required ABC (Abstract Base Class) components
   from abc import ABC, abstractmethod

   # Abstract base class definition
   class Shape(ABC):
       @abstractmethod
       def area(self):
           # This is an abstract method that must be implemented
           # by all concrete subclasses
           pass
       
       @abstractmethod
       def perimeter(self):
           # Another abstract method that must be implemented
           # by all concrete subclasses
           pass
       
       def describe(self):
           # This is a concrete method that can be inherited as-is
           # It demonstrates that abstract classes can have
           # implemented methods too
           return f"This is a {self.__class__.__name__}"

   # Concrete implementation of Shape
   class Rectangle(Shape):
       def __init__(self, width, height):
           self.width = width    # Store rectangle dimensions
           self.height = height
       
       def area(self):
           # Implementation of abstract method area()
           # Calculates area of rectangle: width × height
           return self.width * self.height
       
       def perimeter(self):
           # Implementation of abstract method perimeter()
           # Calculates perimeter of rectangle: 2(width + height)
           return 2 * (self.width + self.height)

   # Another concrete implementation of Shape
   class Circle(Shape):
       def __init__(self, radius):
           self.radius = radius  # Store circle radius
       
       def area(self):
           # Implementation of abstract method area()
           # Calculates area of circle: πr²
           import math
           return math.pi * self.radius ** 2
       
       def perimeter(self):
           # Implementation of abstract method perimeter()
           # Calculates circumference of circle: 2πr
           import math
           return 2 * math.pi * self.radius

   # Demonstrating abstract classes
   
   # This would raise an error:
   # shape = Shape()  # Can't instantiate abstract class
   
   # Creating concrete shapes
   rectangle = Rectangle(5, 3)
   circle = Circle(4)

   # Key Points about Abstract Classes:
   # 1. Abstract classes define a common interface
   # 2. They can't be instantiated directly
   # 3. Subclasses MUST implement all abstract methods
   # 4. They can mix abstract and concrete methods
   # 5. They're useful for ensuring consistent APIs
   
   # Common Use Cases:
   # 1. Defining interfaces that multiple classes must implement
   # 2. Sharing common functionality while enforcing a contract
   # 3. Creating plug-in architectures
   # 4. Establishing a framework for other developers
   ```

4. **Operator Overloading**
   ```python
   class Vector:
       def __init__(self, x, y):
           # Initialize a 2D vector with x and y coordinates
           self.x = x
           self.y = y
       
       def __add__(self, other):
           # Overload the + operator
           # Called when we write: vector1 + vector2
           # Performs vector addition: (x1 + x2, y1 + y2)
           return Vector(self.x + other.x, self.y + other.y)
       
       def __sub__(self, other):
           # Overload the - operator
           # Called when we write: vector1 - vector2
           # Performs vector subtraction: (x1 - x2, y1 - y2)
           return Vector(self.x - other.x, self.y - other.y)
       
       def __mul__(self, scalar):
           # Overload the * operator
           # Called when we write: vector * number
           # Performs scalar multiplication: (x * scalar, y * scalar)
           return Vector(self.x * scalar, self.y * scalar)
       
       def __str__(self):
           # Overload string conversion
           # Called when we print the vector or convert it to string
           # Returns a readable string representation
           return f"Vector({self.x}, {self.y})"
       
       def __eq__(self, other):
           # Overload the == operator
           # Called when we write: vector1 == vector2
           # Compares two vectors for equality
           return self.x == other.x and self.y == other.y

   # Demonstrating operator overloading
   v1 = Vector(2, 3)    # Create first vector (2,3)
   v2 = Vector(3, 4)    # Create second vector (3,4)
   
   # Example operations
   print(v1 + v2)      # Uses __add__: Vector(5, 7)
   print(v1 * 3)       # Uses __mul__: Vector(6, 9)
   print(v1 == v2)     # Uses __eq__: False

   # Common Python Special Methods for Operator Overloading:
   # __add__(self, other)     -> +
   # __sub__(self, other)     -> -
   # __mul__(self, other)     -> *
   # __truediv__(self, other) -> /
   # __lt__(self, other)      -> <
   # __le__(self, other)      -> <=
   # __eq__(self, other)      -> ==
   # __ne__(self, other)      -> !=
   # __gt__(self, other)      -> >
   # __ge__(self, other)      -> >=
   
   # Key Benefits of Operator Overloading:
   # 1. Makes code more intuitive and readable
   # 2. Allows objects to behave like built-in types
   # 3. Enables mathematical operations on custom objects
   # 4. Provides natural syntax for domain-specific operations
   
   # Common Use Cases:
   # 1. Mathematical objects (vectors, matrices)
   # 2. Custom numeric types
   # 3. Container classes
   # 4. Business objects with natural operations
   ```

5. **Composition and Aggregation**
   ```python
   # Component class for Composition
   class Engine:
       def __init__(self, power):
           # Initialize engine with power rating
           self.power = power  # Power in horsepower
       
       def start(self):
           # Basic engine functionality
           return "Engine started"

   # Component class for Aggregation
   class Wheel:
       def __init__(self, size):
           # Initialize wheel with size
           self.size = size    # Wheel size in inches

   # Container class demonstrating both composition and aggregation
   class Car:
       def __init__(self, model, engine_power):
           self.model = model
           
           # Composition: Car creates and owns the Engine
           # Engine cannot exist without the Car
           # If Car is destroyed, Engine is also destroyed
           self.engine = Engine(engine_power)  # Composition
           
           # Aggregation: Car has Wheels but doesn't create them
           # Wheels could exist independently and be used by other cars
           # If Car is destroyed, Wheels could still exist
           self.wheels = [Wheel(17) for _ in range(4)]  # Aggregation
       
       def start(self):
           # Delegate to engine's functionality
           return f"{self.model}: {self.engine.start()}"
       
       def describe(self):
           # Access composed object's attributes
           return f"{self.model} with {self.engine.power}hp engine"

   # Demonstrating composition and aggregation
   car = Car("Toyota", 150)
   print(car.start())      # Shows composition in action
   print(car.describe())   # Accesses composed object's data

   # Key Points about Composition and Aggregation:
   
   # Composition ("has-a" relationship):
   # 1. Stronger form of association
   # 2. Child (Engine) cannot exist without parent (Car)
   # 3. Lifetime of child is tied to parent
   # 4. Example: Car has-a Engine
   
   # Aggregation ("has-a" relationship, but looser):
   # 1. Weaker form of association
   # 2. Child (Wheel) can exist without parent (Car)
   # 3. Lifetime of child is independent
   # 4. Example: Car has Wheels
   
   # Benefits of Using Composition/Aggregation:
   # 1. More flexible than inheritance
   # 2. Easier to change implementation
   # 3. Promotes loose coupling
   # 4. More realistic modeling of real-world relationships
   
   # When to Use:
   # Composition:
   # - When component is an integral part
   # - When components have the same lifecycle
   # - When you want strong encapsulation
   
   # Aggregation:
   # - When components can be shared
   # - When components have independent lifecycles
   # - When you need looser coupling
   ```

## 🧠 Practice Challenge

Task A: Create a Library Management System
- Implement classes for:
  - `LibraryItem` (abstract base class)
  - `Book`, `DVD`, `Magazine` (derived classes)
  - `Library` (container class using composition)
- Include:
  - Checkout/return functionality
  - Search by various criteria
  - Due date management

Task B: Design a Game Character System
- Create classes for:
  - `Character` (abstract base class)
  - Various character types (warrior, mage, etc.)
  - Equipment and inventory system
- Implement:
  - Combat mechanics
  - Character stats
  - Equipment effects

Hints:
- Use inheritance appropriately
- Implement abstract methods
- Consider using properties
- Handle edge cases
- Use operator overloading where appropriate

## ✅ Solutions

```python
# Library Management System
from abc import ABC, abstractmethod
from datetime import datetime, timedelta

class LibraryItem(ABC):
    def __init__(self, title, item_id):
        self.title = title
        self.item_id = item_id
        self.checked_out = False
        self.due_date = None
    
    @abstractmethod
    def get_loan_period(self):
        pass
    
    def check_out(self):
        if not self.checked_out:
            self.checked_out = True
            self.due_date = datetime.now() + timedelta(days=self.get_loan_period())
            return True
        return False
    
    def return_item(self):
        if self.checked_out:
            self.checked_out = False
            self.due_date = None
            return True
        return False

class Book(LibraryItem):
    def __init__(self, title, item_id, author, pages):
        super().__init__(title, item_id)
        self.author = author
        self.pages = pages
    
    def get_loan_period(self):
        return 21  # 3 weeks

class DVD(LibraryItem):
    def __init__(self, title, item_id, director, length):
        super().__init__(title, item_id)
        self.director = director
        self.length = length
    
    def get_loan_period(self):
        return 7   # 1 week

class Library:
    def __init__(self):
        self.items = {}
    
    def add_item(self, item):
        self.items[item.item_id] = item
    
    def check_out_item(self, item_id):
        if item_id in self.items:
            return self.items[item_id].check_out()
        return False
    
    def return_item(self, item_id):
        if item_id in self.items:
            return self.items[item_id].return_item()
        return False
    
    def search(self, **kwargs):
        results = []
        for item in self.items.values():
            match = True
            for key, value in kwargs.items():
                if not hasattr(item, key) or getattr(item, key) != value:
                    match = False
                    break
            if match:
                results.append(item)
        return results

# Game Character System
class Character(ABC):
    def __init__(self, name, level=1):
        self.name = name
        self.level = level
        self.health = 100
        self.inventory = []
    
    @abstractmethod
    def attack(self):
        pass
    
    @abstractmethod
    def special_ability(self):
        pass

class Warrior(Character):
    def __init__(self, name):
        super().__init__(name)
        self.strength = 15
        self.defense = 10
    
    def attack(self):
        return self.strength * 1.5
    
    def special_ability(self):
        return "Berserker Rage"

class Mage(Character):
    def __init__(self, name):
        super().__init__(name)
        self.magic = 15
        self.mana = 100
    
    def attack(self):
        return self.magic * 2
    
    def special_ability(self):
        return "Fireball"

class Equipment:
    def __init__(self, name, bonus):
        self.name = name
        self.bonus = bonus
    
    def apply_bonus(self, character):
        pass

# Testing the solutions
def test_library():
    library = Library()
    
    book = Book("Python Programming", "B001", "John Smith", 300)
    dvd = DVD("Python Tutorial", "D001", "Jane Doe", 120)
    
    library.add_item(book)
    library.add_item(dvd)
    
    library.check_out_item("B001")
    print(f"Book checked out: {book.checked_out}")
    print(f"Due date: {book.due_date}")
    
    results = library.search(title="Python Programming")
    print(f"Search results: {len(results)} items found")

def test_game():
    warrior = Warrior("Conan")
    mage = Mage("Gandalf")
    
    print(f"{warrior.name} attack: {warrior.attack()}")
    print(f"{mage.name} attack: {mage.attack()}")
    
    print(f"{warrior.name} special: {warrior.special_ability()}")
    print(f"{mage.name} special: {mage.special_ability()}")

test_library()
test_game()
```

## 🚀 Summary
- Inheritance enables code reuse and hierarchies
- Multiple inheritance allows combining features
- Abstract classes define interfaces
- Operator overloading customizes object behavior
- Composition creates "has-a" relationships
- Method Resolution Order (MRO) determines method calls
- Properties and decorators enhance class interfaces

## 🔗 Next Chapter
[Next → OOP Design Patterns](./tutorial-13-oop-design-patterns.md)