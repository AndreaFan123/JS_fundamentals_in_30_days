class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

# No overriding parent class
class Car(Vehicle):
    pass # Inherit everything automatically

# Overriding parent class, add new attribute
class Truck(Vehicle):
    def __init__(self,brand, model,year):
        super().__init__(brand, model)
        self.year = year

newCar = Car("Toyota", "Corolla")

print(newCar.brand) # Output: Toyota
print(newCar.model) # Output: Corolla

newTruck = Truck("Toyota", "Hilux", 2020)

print(newTruck.brand) # Output: Toyota
print(newTruck.model) # Output: Hilux
print(newTruck.year) # Output: 2020
