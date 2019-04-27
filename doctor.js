const Staff = require('./staff');
const db = require("./database");

// Bind the Staff constructor to the Doctor
function Doctor(name,email,password){
    Staff.call(this,name,email,password);
}

// Copies the Staff prototype but creates a new Reference
Doctor.prototype = Object.create(Staff.prototype);

// Sets the Doctor constructor to point back to Doctor Object.
Doctor.prototype.constructor = Doctor;

// Add all methods that can be carried out by the admin Doctor to its prototype.
Doctor.prototype.createNewStaff = function(name, email, password) {
    return new Staff(name, email, password);
  };
  
// Read all Staff  from database.
Doctor.prototype.readAllStaff = function() {
    return db.Staff;
}

module.exports = Doctor;