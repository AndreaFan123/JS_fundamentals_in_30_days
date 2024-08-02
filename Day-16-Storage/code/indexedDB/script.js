// Initialize db 
let db;
const dbName = 'MyDB';
const objectStoreName = "Employees";

// Open DB with name and version
const request = indexedDB.open(dbName, 1);

// Use onerror to log any errors
request.onerror = (e) => {
  console.error("DB Error:" + e.target.error);
};

// Use onsuccess to log success message
request.onsuccess = (e) => {
  // Assign the result to the database variable to use it later
  db = e.target.result;
  console.log("DB Opened Successfully");
};

// Use onupgradeneeded to create object store
request.onupgradeneeded = (e) => {
  db = e.target.result;
  // Create object store
  const objectStore = db.createObjectStore(objectStoreName, { keypath: 'id', autoIncrement: true });
  objectStore.createIndex("name", "name", { unique: false });
  objectStore.createIndex("age", "age", { unique: false });
};

// Add a person to db
const addEmployee = () => {
  // Get id from html
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  // transaction is used to interact with the db
  // We need to specify the object store we want to interact with
  // readwrite is used to add data
  const transaction = db.transaction([objectStoreName], 'readwrite');

  // Get the object store
  const objectStore = transaction.objectStore(objectStoreName);

  // Add data to the object store with name and age as key value pairs
  const request = objectStore.add({ name, age });

  // error or success handler
  request.onerror = (e) => {
    document.getElementById('result').innerHTML = "Error Adding Data";
  };

  request.onsuccess = (e) => {
    document.getElementById('result').innerHTML = "Data Added Successfully";
  };
};

// Get all persons from db

const getAllEmployees = () => {
  // Make sure that id is an integer
  const id = parseInt(document.getElementById('employeeId').value);
  const transaction = db.transaction([objectStoreName], 'readonly');
  const objectStore = transaction.objectStore(objectStoreName);
  const request = objectStore.getAll();

  // error or success handler
  request.onerror = () => {
    document.getElementById('result').innerHTML = "Error Getting Data";
  };

  request.onsuccess = (e) => {
    const employees = e.target.result;
    let result = "";
    employees.forEach(employee => {
      result += `Name: ${employee.name}, Age: ${employee.age} <br>`;
    });
    document.getElementById('result').innerHTML = result;
  };
};

// Get a person from db by name

const getAEmployee = () => {

};