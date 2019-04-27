const db = require("./database");

//  Create Operations constructor
function Operations(staff_Id, activity) {
  this.activity = activity;
  this.staff_Id = staff_Id;
  var today = new Date();

  this.timeOfActivity = today.toLocaleTimeString();

  this.dateOfActivity = today.toDateString();

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
