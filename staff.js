const Operations = require("./operations");
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

// ****** Read A Single Staff By His ID  ******
Staff.prototype.readSingleStaff = function(id) {
  return db.Staff[id.toString()];
};

// ****** Update a Staff Details  ******
Staff.prototype.updateStaffDetails = function(id, name, email, password) {
  if (!id || !name || !email || !password) return "All fields are required";

  if (id.toString() !== this.id) return "Cannot update another Staff Details";

  db.Staff[id.toString()].name = name;
  db.Staff[id.toString()].email = email;
  db.Staff[id.toString()].password = password;
  return "Staff updated successfully";
};

//  Create an activity
Staff.prototype.createNewActivity = function(activity) {
  return new Operations(this.id, activity);
};

module.exports = Staff;
