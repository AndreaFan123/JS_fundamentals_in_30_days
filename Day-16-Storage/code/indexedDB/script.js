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

const getAnEmployeeById = (id, action) => {
  const transaction = db.transaction([objectStoreName], action);
  const objectStore = transaction.objectStore(objectStoreName);
  const request = objectStore.get(id);

  return request;
};

// Add a person to db
const addAnEmployee = () => {
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




// Get a person from db by name

const getAnEmployee = () => {
  // Make sure the id is an integer
  const id = parseInt(document.getElementById('searchEmployee').value);
  const request = getAnEmployeeById(id, 'readonly');

  // error or success handler
  request.onerror = () => {
    document.getElementById('result').innerHTML = "Error Getting Data";
  };

  request.onsuccess = (e) => {
    const employee = e.target.result;
    if (!employee) {
      document.getElementById('result').innerHTML = "No Data Found";
    }
    if (employee) {
      document.getElementById('result').innerHTML = `Name: ${employee.name} Age: ${employee.age}`;
    }
  };
};


// Delete an employee

const deleteAnEmployee = () => {
  const id = parseInt(document.getElementById('searchEmployee').value);
  const transaction = db.transaction([objectStoreName], 'readwrite');
  const objectStore = transaction.objectStore(objectStoreName);
  const request = objectStore.delete(id);

  request.onerror = () => {
    document.getElementById('result').innerHTML = "Could not delete! Please try again";
  };

  request.onsuccess = () => {
    document.getElementById('result').innerHTML = "Employee deleted Successfully";
  };
};