const db = require("./database");

//  Create Operations constructor
function Operations(staff_Id, activity) {
  // Add operations properties
  this.activity = activity;
  this.staff_Id = staff_Id;
  var today = new Date();

  this.timeOfActivity = today.toLocaleTimeString();

  this.dateOfActivity = today.toDateString();
  //  Operations unique ID
  for (var i = 1; i >= 0; ) {
    if (!db.Operations[i + ""]) {
      id = i + "";
      db.Operations[id] = {
        staff_Id: this.staff_Id,
        timeOfActivity: this.timeOfActivity,
        dateOfActivity: this.dateOfActivity,
        id: id,
        activity: activity
      };
      break;
    }
    i++;
  }
}

module.exports = Operations;

// Methods of the Operations should be in its constructor.

//  Read all Operations
Operations.prototype.readAllOperations = function() {
  return db.Operations;
};

// Read an operation by its ID
Operations.prototype.readOneOperationById = function(id) {
  return db.Operations[id.toString()];
};

// Delete an Operation by its ID
Operations.prototype.deleteAnOperation = function(operation_id) {
  return delete db.Operations[operation_id.toString()];
};
