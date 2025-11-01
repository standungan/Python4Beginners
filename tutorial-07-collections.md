# Chapter 7: Collections

## 🎯 Learning Objectives
- Master Python's main collection types: lists, tuples, sets, and dictionaries
- Learn how to create, modify, and access collections
- Understand collection methods and operations
- Master slicing and iteration techniques

## 🧩 Overview
Collections are containers that store multiple items in a single variable. Python provides several types of collections, each with its own characteristics and use cases. Think of them as different types of containers: lists are like ordered boxes you can modify, tuples are sealed packages, sets are bags of unique items, and dictionaries are like labeled storage bins.

## 💡 Step-by-Step Tutorial

1. **Lists: Ordered and Mutable**
   ```python
   # Creating lists
   fruits = ["apple", "banana", "orange"]
   numbers = [1, 2, 3, 4, 5]
   mixed = [1, "hello", 3.14, True]

   # Accessing elements
   print(fruits[0])      # First element
   print(fruits[-1])     # Last element

   # Modifying lists
   fruits.append("grape")
   fruits.insert(1, "mango")
   fruits.remove("banana")
   popped = fruits.pop()

   # List methods
   print(len(fruits))    # Length
   fruits.sort()         # Sorting
   fruits.reverse()      # Reversing
   ```

2. **Tuples: Ordered and Immutable**
   ```python
   # Creating tuples
   coordinates = (10, 20)
   rgb = (255, 128, 0)

   # Accessing elements
   x = coordinates[0]
   y = coordinates[1]

   # Tuple unpacking
   x, y = coordinates
   r, g, b = rgb

   # Tuple methods
   print(coordinates.count(10))  # Count occurrences
   print(coordinates.index(20))  # Find position
   ```

3. **Sets: Unordered and Unique**
   ```python
   # Creating sets
   colors = {"red", "blue", "green"}
   numbers = {1, 2, 3, 3, 4, 4, 5}  # Duplicates removed

   # Set operations
   colors.add("yellow")
   colors.remove("blue")

   # Set math
   set1 = {1, 2, 3}
   set2 = {3, 4, 5}
   print(set1.union(set2))        # All elements
   print(set1.intersection(set2))  # Common elements
   print(set1.difference(set2))    # Elements in set1 but not set2
   ```

4. **Dictionaries: Key-Value Pairs**
   ```python
   # Creating dictionaries
   person = {
       "name": "Alice",
       "age": 25,
       "city": "New York"
   }

   # Accessing and modifying
   print(person["name"])
   person["email"] = "alice@example.com"
   
   # Dictionary methods
   print(person.keys())    # All keys
   print(person.values())  # All values
   print(person.items())   # Key-value pairs

   # Safe access with get()
   phone = person.get("phone", "Not found")
   ```

5. **Slicing and Advanced Operations**
   ```python
   numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   
   # Slicing [start:end:step]
   print(numbers[2:7])     # [2, 3, 4, 5, 6]
   print(numbers[::2])     # [0, 2, 4, 6, 8]
   print(numbers[::-1])    # Reverse list

   # List comprehension
   squares = [x**2 for x in range(5)]
   evens = [x for x in numbers if x % 2 == 0]
   ```

## 🧠 Practice Challenge

Task A: Contact Manager
- Create a program that:
  - Stores contacts (name, phone, email)
  - Allows adding/removing contacts
  - Supports searching by name
  - Prints all contacts formatted nicely

Task B: Shopping Cart
- Create a shopping cart system that:
  - Stores items and quantities
  - Calculates total price
  - Removes sold-out items
  - Applies discounts

Hints:
- Choose appropriate collection types
- Consider data organization
- Plan your operations
- Handle edge cases

## ✅ Solutions

```python
# Contact Manager
contacts = {
    "Alice": {"phone": "123-456-7890", "email": "alice@email.com"},
    "Bob": {"phone": "098-765-4321", "email": "bob@email.com"}
}

def add_contact(name, phone, email):
    contacts[name] = {"phone": phone, "email": email}

def remove_contact(name):
    if name in contacts:
        del contacts[name]

def search_contact(name):
    return contacts.get(name, "Contact not found")

def print_contacts():
    for name, info in contacts.items():
        print(f"\nName: {name}")
        print(f"Phone: {info['phone']}")
        print(f"Email: {info['email']}")
        print("-" * 20)

# Shopping Cart
class ShoppingCart:
    def __init__(self):
        self.items = {}
        self.prices = {"apple": 0.5, "banana": 0.3, "orange": 0.6}
    
    def add_item(self, item, quantity):
        self.items[item] = self.items.get(item, 0) + quantity
    
    def remove_item(self, item):
        if item in self.items:
            del self.items[item]
    
    def calculate_total(self):
        total = sum(self.prices[item] * qty 
                   for item, qty in self.items.items())
        return round(total, 2)
    
    def apply_discount(self, percentage):
        total = self.calculate_total()
        discount = total * (percentage / 100)
        return round(total - discount, 2)

# Testing the solutions
cart = ShoppingCart()
cart.add_item("apple", 3)
cart.add_item("banana", 2)
print(f"Total: ${cart.calculate_total()}")
print(f"With 10% discount: ${cart.apply_discount(10)}")
```

## 🚀 Summary
- Lists are mutable, ordered sequences
- Tuples are immutable, ordered sequences
- Sets store unique, unordered elements
- Dictionaries store key-value pairs
- Slicing works on sequences (lists, tuples, strings)
- Choose the right collection for your needs:
  - Lists for ordered, changeable data
  - Tuples for unchangeable data
  - Sets for unique items
  - Dictionaries for key-value relationships

## 🔗 Next Chapter
[Next → Strings and Files](./tutorial-08-strings-and-files.md)