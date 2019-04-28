const Operations = require("./operations");
const Staff = require("./staff");
const db = require("./database");

// Bind the Staff constructor to the Doctor
function Doctor(name, email, password) {
  Staff.call(this, name, email, password);
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
};

// Delete a single Staff from database.
Doctor.prototype.deleteStaff = function(staff_id) {
  return delete db.Staff[staff_id.toString()];
};

//  Deleting all Staff from the database
Doctor.prototype.deleteAllStaff = function() {
  return (db.Staff = {});
};

// Read all operations by all statf
Doctor.prototype.readAllOperations = function() {
  return Operations.prototype.readAllOperations();
};

//   Read one operation by its ID
Doctor.prototype.readOneOperationById = function(operation_Id) {
  return Operations.prototype.readOneOperationById(operation_Id);
};

//   Delete an operation by its ID
Doctor.prototype.deleteAnOperation = function(operation_Id) {
  return Operations.prototype.deleteAnOperation(operation_Id);
};
module.exports = Doctor;
