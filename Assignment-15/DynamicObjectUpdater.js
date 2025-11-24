"use strict";

const user = { name: "John", email: "john@mail.com", age: 21 };

function updateUser(key, value) {
  if (user.hasOwnProperty(key)) {
    if (key === "age") value = Number(value);
    user[key] = value;
    console.log("Updated user:", user);
  } else {
    console.log("Invalid field:", key);
  }
}

updateUser("name", "Aadi");
updateUser("email", "aadi@mail.com");
updateUser("age", 22);