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
  
//   Admin Doctor to delete a single Staff.
  test("Doctor can delete  a Staff", function() {
    expect(adminDoctor.deleteStaff(2)).toBeTruthy();
  });

  //   Admin Doctor to delete all Staff.
  test("Doctor to delete all Staff", function() {
    expect(adminDoctor.deleteAllStaff()).toEqual({});
  });

  //   Admin Doctor to read all Staff Operations.
  test("Doctor to read all Staff Operations", function() {
    expect(adminDoctor.readAllOperations()).toEqual(db.Operations);
  });

  //   Admin Doctor to read one Staff Operations by its ID.
  test("Doctor to read one operation by ID", function() {
    expect(adminDoctor.readOneOperationById(2)).toEqual(db.Operations["2"]);
  });

//   Admin Doctor to delete one Staff Operations by its ID.
  test("Doctor can delete an Operation", function() {
    expect(adminDoctor.deleteAnOperation(1)).toBeTruthy();
  });
  