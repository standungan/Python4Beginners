# Chapter 13: OOP Design Patterns and Best Practices

## 🎯 Learning Objectives
- Understand common design patterns in Python
- Learn when and how to apply different patterns
- Master OOP best practices and principles
- Recognize anti-patterns to avoid
- Implement practical design pattern examples

## 🧩 Overview
Design patterns are proven solutions to common programming problems. They provide templates for solving issues that occur frequently in software development. In Python, design patterns help you write more maintainable, flexible, and scalable code while following object-oriented principles.

## 💡 Step-by-Step Tutorial

1. **Singleton Pattern**
   The Singleton pattern ensures a class has only one instance and provides a global point of access to it.
   
   ```python
   class Singleton:
       # Class variable to store the single instance
       _instance = None
       
       def __new__(cls):
           # __new__ is called before __init__ when creating a new instance
           # It's responsible for creating and returning the instance
           
           if cls._instance is None:
               # If no instance exists, create one
               cls._instance = super().__new__(cls)
           # Always return the same instance
           return cls._instance
       
       def __init__(self):
           # __init__ is called after __new__ to initialize the instance
           # We need to prevent re-initialization of the singleton
           if not hasattr(self, 'initialized'):
               # Only initialize once
               self.initialized = True
               self.data = {}  # Example data storage
   
   # Using Singleton
   
   # Create first instance
   config1 = Singleton()
   config1.data['server'] = 'localhost'
   
   # Create "second" instance
   config2 = Singleton()
   print(config2.data['server'])  # Outputs: 'localhost'
   
   # Prove they are the same instance
   print(config1 is config2)  # True - same instance
   
   # Common Use Cases:
   # 1. Configuration managers
   # 2. Database connections
   # 3. Logging systems
   # 4. Cache managers
   
   # Benefits:
   # - Ensures single instance
   # - Global state management
   # - Lazy initialization
   
   # Drawbacks:
   # - Global state can be dangerous
   # - Makes unit testing harder
   # - Can hide dependencies
   
   # Example Real-World Usage:
   class DatabaseConnection(Singleton):
       def __init__(self):
           if not hasattr(self, 'initialized'):
               self.initialized = True
               self.connection = None
       
       def connect(self):
           if not self.connection:
               # Simulate database connection
               self.connection = "Connected to DB"
           return self.connection
   
   # Usage
   db1 = DatabaseConnection()
   db2 = DatabaseConnection()
   print(db1 is db2)  # True - same database connection
   ```

2. **Factory Pattern**
   The Factory pattern provides an interface for creating objects but lets subclasses decide which class to instantiate.
   
   ```python
   from abc import ABC, abstractmethod

   # Step 1: Create Abstract Product
   class Animal(ABC):
       """Abstract base class defining the interface for all animals"""
       @abstractmethod
       def speak(self):
           """All animals must implement speak method"""
           pass
       
       @abstractmethod
       def get_type(self):
           """All animals must implement get_type method"""
           pass

   # Step 2: Create Concrete Products
   class Dog(Animal):
       """Concrete implementation of Animal for Dogs"""
       def speak(self):
           return "Woof!"
       
       def get_type(self):
           return "Dog"
       
       def fetch(self):
           """Dog-specific method"""
           return "Fetching the ball!"

   class Cat(Animal):
       """Concrete implementation of Animal for Cats"""
       def speak(self):
           return "Meow!"
       
       def get_type(self):
           return "Cat"
       
       def scratch(self):
           """Cat-specific method"""
           return "Scratching the post!"

   # Step 3: Create the Factory
   class AnimalFactory:
       """Factory class responsible for creating animal instances"""
       
       @staticmethod
       def create_animal(animal_type: str) -> Animal:
           """
           Creates and returns an animal instance based on the type
           
           Args:
               animal_type (str): Type of animal to create ("dog" or "cat")
           
           Returns:
               Animal: Instance of the specified animal
           
           Raises:
               ValueError: If animal_type is not recognized
           """
           # Convert to lowercase for case-insensitive comparison
           animal_type = animal_type.lower()
           
           # Dictionary mapping animal types to their classes
           animal_classes = {
               "dog": Dog,
               "cat": Cat
           }
           
           # Get the appropriate class and create instance
           if animal_type in animal_classes:
               return animal_classes[animal_type]()
           
           raise ValueError(f"Invalid animal type: {animal_type}")

   # Using the Factory Pattern
   
   # Create the factory
   factory = AnimalFactory()
   
   # Create animals using the factory
   try:
       # Create a dog
       dog = factory.create_animal("dog")
       print(f"Created a {dog.get_type()}")  # Created a Dog
       print(f"It says: {dog.speak()}")      # It says: Woof!
       print(dog.fetch())                    # Fetching the ball!
       
       # Create a cat
       cat = factory.create_animal("cat")
       print(f"Created a {cat.get_type()}")  # Created a Cat
       print(f"It says: {cat.speak()}")      # It says: Meow!
       print(cat.scratch())                  # Scratching the post!
       
       # Try invalid animal type
       factory.create_animal("elephant")
   except ValueError as e:
       print(f"Error: {e}")  # Error: Invalid animal type: elephant
   
   # Benefits of Factory Pattern:
   # 1. Encapsulation of object creation
   # 2. Loose coupling between creator and products
   # 3. Single Responsibility Principle
   # 4. Open/Closed Principle (easy to add new types)
   
   # Real-World Example: Document Creator
   
   class Document(ABC):
       @abstractmethod
       def create(self):
           pass

   class PDFDocument(Document):
       def create(self):
           return "Creating PDF document"

   class WordDocument(Document):
       def create(self):
           return "Creating Word document"

   class DocumentFactory:
       @staticmethod
       def create_document(doc_type: str) -> Document:
           doc_types = {
               "pdf": PDFDocument,
               "word": WordDocument
           }
           if doc_type.lower() in doc_types:
               return doc_types[doc_type.lower()]()
           raise ValueError(f"Unknown document type: {doc_type}")
   
   # Usage
   doc_factory = DocumentFactory()
   pdf = doc_factory.create_document("pdf")
   word = doc_factory.create_document("word")
   print(pdf.create())   # Creating PDF document
   print(word.create())  # Creating Word document
   ```

3. **Observer Pattern**
   The Observer pattern defines a one-to-many dependency between objects where when one object changes state, all its dependents are notified and updated automatically.
   
   ```python
   from abc import ABC, abstractmethod
   from typing import List
   from datetime import datetime
   
   # Step 1: Define the Subject (Observable) Interface
   class SubjectInterface(ABC):
       @abstractmethod
       def attach(self, observer) -> None:
           """Add an observer to the subject"""
           pass
       
       @abstractmethod
       def detach(self, observer) -> None:
           """Remove an observer from the subject"""
           pass
       
       @abstractmethod
       def notify(self) -> None:
           """Notify all observers of state change"""
           pass

   # Step 2: Define the Observer Interface
   class ObserverInterface(ABC):
       @abstractmethod
       def update(self, state) -> None:
           """Receive update from subject"""
           pass

   # Step 3: Implement the Concrete Subject
   class WeatherStation(SubjectInterface):
       def __init__(self):
           # List to store observers
           self._observers: List[ObserverInterface] = []
           # State data
           self._temperature = 0
           self._humidity = 0
           self._pressure = 0
       
       def attach(self, observer: ObserverInterface) -> None:
           """Add an observer to the weather station"""
           if observer not in self._observers:
               self._observers.append(observer)
               print(f"Attached observer: {observer.name}")
       
       def detach(self, observer: ObserverInterface) -> None:
           """Remove an observer from the weather station"""
           if observer in self._observers:
               self._observers.remove(observer)
               print(f"Detached observer: {observer.name}")
       
       def notify(self) -> None:
           """Notify all observers of weather changes"""
           for observer in self._observers:
               observer.update({
                   'temperature': self._temperature,
                   'humidity': self._humidity,
                   'pressure': self._pressure,
                   'timestamp': datetime.now()
               })
       
       def set_measurements(self, temperature: float, humidity: float, pressure: float) -> None:
           """
           Update weather measurements and notify observers
           
           Args:
               temperature (float): Temperature in Celsius
               humidity (float): Humidity percentage
               pressure (float): Pressure in hPa
           """
           self._temperature = temperature
           self._humidity = humidity
           self._pressure = pressure
           self.notify()  # Notify observers of new measurements

   # Step 4: Implement Concrete Observers
   class WeatherDisplay(ObserverInterface):
       def __init__(self, name: str):
           self.name = name
           self._last_update = None
       
       def update(self, state: dict) -> None:
           """
           Receive and display weather updates
           
           Args:
               state (dict): Weather data including temperature, humidity, pressure
           """
           self._last_update = state
           print(f"\n{self.name} Display Update:")
           print(f"Temperature: {state['temperature']}°C")
           print(f"Humidity: {state['humidity']}%")
           print(f"Pressure: {state['pressure']} hPa")
           print(f"Time: {state['timestamp'].strftime('%H:%M:%S')}")

   class WeatherLogger(ObserverInterface):
       def __init__(self, name: str):
           self.name = name
           self.log = []
       
       def update(self, state: dict) -> None:
           """Log weather updates"""
           self.log.append(state)
           print(f"\n{self.name}: Logged weather data at {state['timestamp'].strftime('%H:%M:%S')}")

   # Using the Observer Pattern
   
   # Create the subject (weather station)
   weather_station = WeatherStation()
   
   # Create observers
   display1 = WeatherDisplay("Main Display")
   display2 = WeatherDisplay("Secondary Display")
   logger = WeatherLogger("Weather Logger")
   
   # Register observers
   weather_station.attach(display1)
   weather_station.attach(display2)
   weather_station.attach(logger)
   
   # Simulate weather changes
   print("\nSimulating weather changes...")
   weather_station.set_measurements(24.5, 65, 1013)
   
   # Remove one display
   weather_station.detach(display2)
   
   # Another weather change
   print("\nUpdating weather...")
   weather_station.set_measurements(25.8, 70, 1014)
   
   # Benefits of Observer Pattern:
   # 1. Loose coupling between subject and observers
   # 2. Support for broadcast communication
   # 3. Dynamic relationships at runtime
   
   # Real-World Examples:
   # 1. Event handling systems
   # 2. User interface updates
   # 3. Stock market monitoring
   # 4. Social media notifications
   
   # Additional Example: News Agency
   
   class NewsAgency(SubjectInterface):
       def __init__(self):
           self._observers = []
           self._latest_news = None
       
       def attach(self, observer):
           self._observers.append(observer)
       
       def detach(self, observer):
           self._observers.remove(observer)
       
       def notify(self):
           for observer in self._observers:
               observer.update(self._latest_news)
       
       def publish_news(self, news):
           self._latest_news = news
           self.notify()

   class NewsChannel(ObserverInterface):
       def __init__(self, name):
           self.name = name
       
       def update(self, news):
           print(f"{self.name} broadcasting: {news}")
   
   # Usage
   agency = NewsAgency()
   channel1 = NewsChannel("BBC")
   channel2 = NewsChannel("CNN")
   
   agency.attach(channel1)
   agency.attach(channel2)
   agency.publish_news("Breaking News: Python 4.0 Released!")
   ```

4. **Strategy Pattern**
   The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable.
   Strategy lets the algorithm vary independently from clients that use it.
   
   ```python
   from abc import ABC, abstractmethod
   from typing import List, Optional
   from datetime import datetime

   # Step 1: Define the Strategy Interface
   class PaymentStrategy(ABC):
       """Abstract base class for payment strategies"""
       
       @abstractmethod
       def pay(self, amount: float) -> str:
           """Process payment for the given amount"""
           pass
       
       @abstractmethod
       def validate(self) -> bool:
           """Validate the payment method"""
           pass

   # Step 2: Implement Concrete Strategies
   class CreditCardPayment(PaymentStrategy):
       """Credit card payment implementation"""
       
       def __init__(self, card_number: str, expiry: str, cvv: str):
           self.card_number = card_number
           self.expiry = expiry
           self.cvv = cvv
       
       def validate(self) -> bool:
           """
           Validate credit card details
           
           Returns:
               bool: True if card details are valid
           """
           # Check card number length
           if not len(self.card_number) in [15, 16]:
               return False
           
           # Check if card number contains only digits
           if not self.card_number.isdigit():
               return False
           
           # Basic expiry validation (MM/YY)
           if not len(self.expiry) == 5 or self.expiry[2] != '/':
               return False
           
           # Basic CVV validation
           if not len(self.cvv) in [3, 4] or not self.cvv.isdigit():
               return False
           
           return True
       
       def pay(self, amount: float) -> str:
           """
           Process credit card payment
           
           Args:
               amount (float): Amount to charge
           
           Returns:
               str: Payment confirmation message
           """
           if not self.validate():
               raise ValueError("Invalid credit card details")
           
           # Mask card number except last 4 digits
           masked_card = '*' * (len(self.card_number) - 4) + self.card_number[-4:]
           return (f"Paid ${amount:.2f} with credit card {masked_card} "
                  f"on {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

   class PayPalPayment(PaymentStrategy):
       """PayPal payment implementation"""
       
       def __init__(self, email: str):
           self.email = email
       
       def validate(self) -> bool:
           """
           Validate PayPal email
           
           Returns:
               bool: True if email format is valid
           """
           # Basic email validation
           return '@' in self.email and '.' in self.email
       
       def pay(self, amount: float) -> str:
           """
           Process PayPal payment
           
           Args:
               amount (float): Amount to charge
           
           Returns:
               str: Payment confirmation message
           """
           if not self.validate():
               raise ValueError("Invalid PayPal email")
           
           return (f"Paid ${amount:.2f} with PayPal account {self.email} "
                  f"on {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

   class CryptoCurrencyPayment(PaymentStrategy):
       """Cryptocurrency payment implementation"""
       
       def __init__(self, wallet_address: str, currency: str = "BTC"):
           self.wallet_address = wallet_address
           self.currency = currency
       
       def validate(self) -> bool:
           """
           Validate wallet address
           
           Returns:
               bool: True if wallet address format is valid
           """
           # Basic validation (simplified)
           return len(self.wallet_address) >= 26
       
       def pay(self, amount: float) -> str:
           """
           Process cryptocurrency payment
           
           Args:
               amount (float): Amount to charge
           
           Returns:
               str: Payment confirmation message
           """
           if not self.validate():
               raise ValueError("Invalid wallet address")
           
           return (f"Paid ${amount:.2f} worth of {self.currency} to wallet "
                  f"{self.wallet_address[:6]}...{self.wallet_address[-6:]}")

   # Step 3: Create Context
   class ShoppingCart:
       """Shopping cart that uses payment strategies"""
       
       def __init__(self):
           self.items: List[dict] = []
           self.payment_strategy: Optional[PaymentStrategy] = None
       
       def add_item(self, name: str, price: float, quantity: int = 1) -> None:
           """
           Add item to cart
           
           Args:
               name (str): Item name
               price (float): Item price
               quantity (int): Quantity to add
           """
           self.items.append({
               'name': name,
               'price': price,
               'quantity': quantity
           })
       
       def remove_item(self, name: str) -> None:
           """
           Remove item from cart
           
           Args:
               name (str): Name of item to remove
           """
           self.items = [item for item in self.items if item['name'] != name]
       
       def get_total(self) -> float:
           """
           Calculate total cart value
           
           Returns:
               float: Total price of all items
           """
           return sum(item['price'] * item['quantity'] for item in self.items)
       
       def set_payment_strategy(self, strategy: PaymentStrategy) -> None:
           """
           Set payment strategy
           
           Args:
               strategy (PaymentStrategy): Payment strategy to use
           """
           self.payment_strategy = strategy
       
       def checkout(self) -> str:
           """
           Process payment for cart items
           
           Returns:
               str: Payment confirmation
           
           Raises:
               Exception: If no payment strategy is set
           """
           if not self.items:
               raise ValueError("Cart is empty")
           
           if not self.payment_strategy:
               raise ValueError("No payment strategy set")
           
           amount = self.get_total()
           return self.payment_strategy.pay(amount)

   # Using the Strategy Pattern
   
   # Create shopping cart
   cart = ShoppingCart()
   
   # Add items
   cart.add_item("Python Book", 29.99, 1)
   cart.add_item("Mechanical Keyboard", 149.99, 1)
   
   try:
       # Try different payment strategies
       
       # 1. Credit Card Payment
       print("\nTrying Credit Card Payment:")
       card_payment = CreditCardPayment("4111111111111111", "12/25", "123")
       cart.set_payment_strategy(card_payment)
       print(cart.checkout())
       
       # 2. PayPal Payment
       print("\nTrying PayPal Payment:")
       paypal_payment = PayPalPayment("user@example.com")
       cart.set_payment_strategy(paypal_payment)
       print(cart.checkout())
       
       # 3. Cryptocurrency Payment
       print("\nTrying Cryptocurrency Payment:")
       crypto_payment = CryptoCurrencyPayment("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa")
       cart.set_payment_strategy(crypto_payment)
       print(cart.checkout())
       
       # 4. Invalid Payment Attempt
       print("\nTrying Invalid Credit Card:")
       invalid_card = CreditCardPayment("1234", "13/25", "12")
       cart.set_payment_strategy(invalid_card)
       print(cart.checkout())
       
   except ValueError as e:
       print(f"Error: {e}")
   
   # Benefits of Strategy Pattern:
   # 1. Algorithms can be switched at runtime
   # 2. Isolation of algorithm implementation details
   # 3. Easy to add new strategies without changing context
   # 4. Promotes composition over inheritance
   
   # Real-World Applications:
   # 1. Payment processing systems
   # 2. Sorting algorithms
   # 3. Compression algorithms
   # 4. Route calculation in navigation apps
   # 5. Authentication methods
   ```

5. **Decorator Pattern**
   The Decorator pattern lets you attach new behaviors to objects by placing these objects inside wrapper objects that contain the behaviors.
   It provides a flexible alternative to subclassing for extending functionality.
   
   ```python
   from abc import ABC, abstractmethod
   from typing import List

   # Step 1: Define the Component Interface
   class Coffee(ABC):
       """Abstract base class for coffee beverages"""
       
       @abstractmethod
       def cost(self) -> float:
           """Calculate the cost of the coffee"""
           pass
       
       @abstractmethod
       def description(self) -> str:
           """Get the description of the coffee"""
           pass
       
       @abstractmethod
       def ingredients(self) -> List[str]:
           """List all ingredients"""
           pass

   # Step 2: Create Concrete Component
   class SimpleCoffee(Coffee):
       """Base coffee implementation"""
       
       def cost(self) -> float:
           """Base coffee cost"""
           return 3.00
       
       def description(self) -> str:
           """Base coffee description"""
           return "Simple coffee"
       
       def ingredients(self) -> List[str]:
           """Base coffee ingredients"""
           return ["Coffee beans", "Hot water"]

   class Espresso(Coffee):
       """Another base coffee type"""
       
       def cost(self) -> float:
           return 4.00
       
       def description(self) -> str:
           return "Espresso"
       
       def ingredients(self) -> List[str]:
           return ["Premium coffee beans", "Hot water"]

   # Step 3: Create Decorator Base Class
   class CoffeeDecorator(Coffee):
       """Base decorator class for coffee add-ons"""
       
       def __init__(self, coffee: Coffee):
           """
           Initialize decorator with coffee to wrap
           
           Args:
               coffee (Coffee): The coffee object to decorate
           """
           self._coffee = coffee
       
       def cost(self) -> float:
           """Pass through cost calculation"""
           return self._coffee.cost()
       
       def description(self) -> str:
           """Pass through description"""
           return self._coffee.description()
       
       def ingredients(self) -> List[str]:
           """Pass through ingredients"""
           return self._coffee.ingredients()

   # Step 4: Create Concrete Decorators
   class Milk(CoffeeDecorator):
       """Milk decorator for coffee"""
       
       def cost(self) -> float:
           """Add milk cost to coffee cost"""
           return self._coffee.cost() + 1.50
       
       def description(self) -> str:
           """Add milk to coffee description"""
           return f"{self._coffee.description()} with milk"
       
       def ingredients(self) -> List[str]:
           """Add milk to ingredients"""
           return self._coffee.ingredients() + ["Fresh milk"]

   class Sugar(CoffeeDecorator):
       """Sugar decorator for coffee"""
       
       def __init__(self, coffee: Coffee, spoons: int = 1):
           """
           Initialize sugar decorator
           
           Args:
               coffee (Coffee): The coffee to decorate
               spoons (int): Number of sugar spoons
           """
           super().__init__(coffee)
           self.spoons = spoons
       
       def cost(self) -> float:
           """Add sugar cost to coffee cost"""
           return self._coffee.cost() + (0.25 * self.spoons)
       
       def description(self) -> str:
           """Add sugar to coffee description"""
           return (f"{self._coffee.description()} with "
                  f"{self.spoons} spoon{'s' if self.spoons > 1 else ''} of sugar")
       
       def ingredients(self) -> List[str]:
           """Add sugar to ingredients"""
           return self._coffee.ingredients() + ["Sugar"]

   class WhippedCream(CoffeeDecorator):
       """Whipped cream decorator for coffee"""
       
       def cost(self) -> float:
           """Add whipped cream cost"""
           return self._coffee.cost() + 2.00
       
       def description(self) -> str:
           """Add whipped cream to description"""
           return f"{self._coffee.description()} with whipped cream"
       
       def ingredients(self) -> List[str]:
           """Add whipped cream to ingredients"""
           return self._coffee.ingredients() + ["Whipped cream"]

   class Caramel(CoffeeDecorator):
       """Caramel decorator for coffee"""
       
       def cost(self) -> float:
           """Add caramel cost"""
           return self._coffee.cost() + 1.75
       
       def description(self) -> str:
           """Add caramel to description"""
           return f"{self._coffee.description()} with caramel"
       
       def ingredients(self) -> List[str]:
           """Add caramel to ingredients"""
           return self._coffee.ingredients() + ["Caramel syrup"]

   # Using the Decorator Pattern
   def print_coffee_details(coffee: Coffee) -> None:
       """Helper function to print coffee details"""
       print("\nCoffee Details:")
       print(f"Description: {coffee.description()}")
       print(f"Cost: ${coffee.cost():.2f}")
       print("Ingredients:", ", ".join(coffee.ingredients()))

   # Example 1: Simple coffee with milk and sugar
   print("\nExample 1: Basic Coffee Combination")
   coffee1 = SimpleCoffee()
   coffee1 = Milk(coffee1)
   coffee1 = Sugar(coffee1, 2)
   print_coffee_details(coffee1)

   # Example 2: Fancy coffee combination
   print("\nExample 2: Fancy Coffee Combination")
   coffee2 = Espresso()
   coffee2 = Milk(coffee2)
   coffee2 = WhippedCream(coffee2)
   coffee2 = Caramel(coffee2)
   print_coffee_details(coffee2)

   # Example 3: Multiple decorators of same type
   print("\nExample 3: Double Shot with Extra Sugar")
   coffee3 = Espresso()
   coffee3 = Sugar(coffee3, 3)  # Extra sweet
   coffee3 = Milk(coffee3)
   print_coffee_details(coffee3)

   # Benefits of Decorator Pattern:
   # 1. Flexible alternative to subclassing
   # 2. Supports Open/Closed Principle
   # 3. Single Responsibility Principle
   # 4. Runtime modification of behavior
   
   # Real-World Applications:
   # 1. GUI Component decoration
   # 2. Input/Output streams
   # 3. Web service layers
   # 4. Middleware in web frameworks
   
   # Example with File Operations
   class DataSource(ABC):
       @abstractmethod
       def write_data(self, data: str) -> None:
           pass
       
       @abstractmethod
       def read_data(self) -> str:
           pass

   class FileDataSource(DataSource):
       def __init__(self, filename: str):
           self.filename = filename
       
       def write_data(self, data: str) -> None:
           with open(self.filename, 'w') as f:
               f.write(data)
       
       def read_data(self) -> str:
           with open(self.filename, 'r') as f:
               return f.read()

   class EncryptionDecorator(DataSource):
       def __init__(self, source: DataSource):
           self._source = source
       
       def write_data(self, data: str) -> None:
           # Simple encryption (for demonstration)
           encrypted = ''.join(chr(ord(c) + 1) for c in data)
           self._source.write_data(encrypted)
       
       def read_data(self) -> str:
           # Simple decryption
           data = self._source.read_data()
           return ''.join(chr(ord(c) - 1) for c in data)

   class CompressionDecorator(DataSource):
       def __init__(self, source: DataSource):
           self._source = source
       
       def write_data(self, data: str) -> None:
           # Simple compression (for demonstration)
           compressed = data.replace("    ", "\t")
           self._source.write_data(compressed)
       
       def read_data(self) -> str:
           # Simple decompression
           data = self._source.read_data()
           return data.replace("\t", "    ")
   ```

## 🧠 Practice Challenge

Task A: Implement a Document Management System
- Use appropriate design patterns to create:
  - Document creation (Factory Pattern)
  - Document state tracking (Observer Pattern)
  - Document processing strategies (Strategy Pattern)
  - Document caching (Singleton Pattern)

Task B: Create a Game Engine Framework
- Implement:
  - Game object factory
  - Event system using Observer
  - Different game states using State pattern
  - Component system using Decorator

Hints:
- Choose patterns based on specific needs
- Combine patterns when appropriate
- Keep implementations simple and focused
- Consider extensibility
- Document your pattern usage

## ✅ Solutions

```python
# Document Management System
from abc import ABC, abstractmethod
from typing import List, Dict
import time

# Document Factory
class Document(ABC):
    @abstractmethod
    def create(self):
        pass

class PDFDocument(Document):
    def create(self):
        return "Created PDF document"

class WordDocument(Document):
    def create(self):
        return "Created Word document"

class DocumentFactory:
    @staticmethod
    def create_document(doc_type: str) -> Document:
        if doc_type.lower() == "pdf":
            return PDFDocument()
        elif doc_type.lower() == "word":
            return WordDocument()
        raise ValueError(f"Unknown document type: {doc_type}")

# Document Observer
class DocumentObserver(ABC):
    @abstractmethod
    def update(self, document_id: str, status: str):
        pass

class DocumentManager:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
    
    def __init__(self):
        if not hasattr(self, 'initialized'):
            self.initialized = True
            self.documents: Dict = {}
            self.observers: List[DocumentObserver] = []
            self.cache = {}
    
    def attach(self, observer: DocumentObserver):
        self.observers.append(observer)
    
    def notify(self, document_id: str, status: str):
        for observer in self.observers:
            observer.update(document_id, status)
    
    def create_document(self, doc_type: str, document_id: str):
        document = DocumentFactory.create_document(doc_type)
        self.documents[document_id] = document
        self.notify(document_id, "created")
        return document

# Document Processing Strategy
class ProcessingStrategy(ABC):
    @abstractmethod
    def process(self, document: Document):
        pass

class CompressionStrategy(ProcessingStrategy):
    def process(self, document: Document):
        return f"Compressed {document.__class__.__name__}"

class EncryptionStrategy(ProcessingStrategy):
    def process(self, document: Document):
        return f"Encrypted {document.__class__.__name__}"

# Usage Example
class DocumentLogger(DocumentObserver):
    def update(self, document_id: str, status: str):
        print(f"Document {document_id}: {status}")

# Testing the system
def test_document_system():
    # Create manager (Singleton)
    manager = DocumentManager()
    
    # Add observer
    logger = DocumentLogger()
    manager.attach(logger)
    
    # Create documents (Factory)
    pdf_doc = manager.create_document("pdf", "doc001")
    word_doc = manager.create_document("word", "doc002")
    
    # Process documents (Strategy)
    compression = CompressionStrategy()
    encryption = EncryptionStrategy()
    
    print(compression.process(pdf_doc))
    print(encryption.process(word_doc))

test_document_system()
```

## 🚀 Summary
- Design patterns solve common programming problems
- Different patterns serve different purposes:
  - Creational (Factory, Singleton)
  - Structural (Decorator, Adapter)
  - Behavioral (Observer, Strategy)
- Choose patterns based on specific needs
- Combine patterns when appropriate
- Follow SOLID principles:
  - Single Responsibility
  - Open/Closed
  - Liskov Substitution
  - Interface Segregation
  - Dependency Inversion

## 🔗 Next Steps
Congratulations! You've completed the Object-Oriented Programming section. Consider exploring:
- Testing frameworks (unittest, pytest)
- Popular Python frameworks using OOP
- Real-world applications of design patterns
- Code optimization techniques