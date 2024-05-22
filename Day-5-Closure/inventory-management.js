/*
Create a simple inventory management system using closures, what you have to do is..

1. Be able to add items to the inventory
2. Be able to remove items from the inventory
3. Be able to get all the items in the inventory

*/

/*
Steps:
1. Create a function called inventoryManagement
2. Make it as a IIFE, so that it will return an object with all the methods
3. Inside the inventoryManagement function, create an empty array called inventory
4. Create private methods to add, remove, get all and get specific items
5. Return an object with all the methods
*/

const inventoryManagementModule = (function () {
  // Declare a private obj called inventory
  let inventory = {};

  // Declare methods

  // Add
  function addInventory(item, quantity) {
    if (inventory[item]) {
      inventory[item] += quantity;
    } else {
      inventory[item] = quantity;
    }
  }

  // Remove
  function removeInventory(item, quantity) {
    if (inventory[item]) {
      inventory[item] -= quantity;
    }
    if (inventory[item] <= 0) {
      delete inventory[item];
    }
  }

  // Get inventory quantity
  function getInventoryQuantity(item) {
    return inventory[item] || 0;
  }

  return {
    getAll: function () {
      return inventory;
    },
    add: function (item, quantity) {
      addInventory(item, quantity);
    },
    remove: function (item, quantity) {
      removeInventory(item, quantity);
    },
    getItemQuantity: function (item) {
      return getInventoryQuantity(item);
    },
  };
})();

inventoryManagementModule.add("Apple", 10);
console.log("All items are:", inventoryManagementModule.getAll());
console.log(
  "Quantity of Apple:",
  inventoryManagementModule.getItemQuantity("Apple")
);

inventoryManagementModule.remove("Apple", 3);
console.log("All items are:", inventoryManagementModule.getAll());
console.log(
  "Quantity of Apple:",
  inventoryManagementModule.getItemQuantity("Apple")
);

inventoryManagementModule.add("Orange", 30);
console.log("All items are:", inventoryManagementModule.getAll());
inventoryManagementModule.add("Apple", 50);
console.log("All items are:", inventoryManagementModule.getAll());
