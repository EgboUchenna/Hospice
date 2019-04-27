const Doctor = require('./doctor');
const db = require("./database");

//  Create an Admin Doctor from the Doctor constructor
var adminDoctor = new Doctor("Muse", "handsum-Muse@gmail.com", "mainDoc1");

//  Doctor admin can create a new user
test("Doctor can create a new  Staff", function() {
    var newStaff = adminDoctor.createNewStaff("Uchenna", "uche@gmail.com", "uche");
    expect(newStaff.name).toBe("Uchenna");
    console.log(db.Staff);
  });