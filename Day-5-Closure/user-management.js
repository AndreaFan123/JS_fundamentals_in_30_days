const userManagementModule = (function () {
  // Declare a private user obj
  let user = {};

  // Declare private methods
  // getUser
  function getUser() {
    return user;
  }

  // add user
  function addUser(name) {
    if (user[name]) {
      return;
    } else {
      user[name] = name;
    }
  }

  // remove user
  function removeUser(name) {
    if (!user[name]) {
      return;
    } else {
      delete user[name];
    }
  }

  return {
    add: function (name) {
      addUser(name);
    },
    remove: function (name) {
      removeUser(name);
    },
    getAllUser: function () {
      return getUser();
    },
  };
})();

userManagementModule.add("Nick");
console.log("User list:", userManagementModule.getAllUser());

userManagementModule.add("Jack");
console.log("User list:", userManagementModule.getAllUser());

userManagementModule.remove("Jack");
console.log("User list:", userManagementModule.getAllUser());
userManagementModule.remove("Jack");
console.log("User list:", userManagementModule.getAllUser());
