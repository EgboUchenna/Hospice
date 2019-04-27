const Doctor = require('./doctor');
const db = require("./database");

//  Create an Admin Doctor from the Doctor constructor
var adminDoctor = new Doctor("Muse", "handsum-Muse@gmail.com", "mainDoc1");

//  Admin Doctor can create a new user
test("Doctor can create a new  Staff", function() {
    var newStaff = adminDoctor.createNewStaff("Uchenna", "uche@gmail.com", "uche");
    expect(newStaff.name).toBe("Uchenna");
    console.log(db.Staff);
  });

//   Admin Doctor to read all Staff
  test("Doctor to read all Staff", function() {
    expect(adminDoctor.readAllStaff()).toEqual(db.Staff);
  });
  
//   Admin Doctor to delete a single Staff
  test("Doctor can delete  a Staff", function() {
    expect(adminDoctor.deleteStaff(2)).toBeTruthy();
  });