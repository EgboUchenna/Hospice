// const doctor = require("./doctor");
const db = require("./database");

// Initialize Staff constructor
function Staff(name, email, password) {
  // Add objects properties.
  this.name = name;
  this.email = email;
  this.password = password;

  //  Creation of Staff Id and adding it to database.
  for (var i = 1; i >= 0; ) {
    if (!db.Staff[i + ""]) {
      id = i + "";
      db.Staff[id] = {
        name: this.name,
        email: this.email,
        password: this.password,
        id: id
      };
      break;
    }
    i++;
  }
  this.id = id;
}

// Add all methods that can be carried out by any Staff to its prototype.



module.exports = Staff;
