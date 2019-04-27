const Staff = require("./staff");
const Doctor = require("./doctor");
const db = require("./database");

// Create a new staff from the Staff constructor.
var Staff1 = new Staff("Egbo Uchenna", "egbouchenna@gmail.com", "phoneix120");

var Staff2 = new Staff(" Uchenna Egbo", "uchenna001@gmail.com", "phoneix140");

var Staff3 = new Staff("Steph", "Steph@gmail.com", "stephan$11");

var adminDoctor2 = new Doctor("Muse", "handsum-Muse@gmail.com", "mainDoc12");

//  Check if a staff object  was created successfully
test("A New Staff to be successfully created", function() {
  expect(Staff1).toEqual(db.Staff["1"]);
});

// Read a single staff by his ID and output the details.
test("Should Read a single Staff by ID to and return his object", function() {
  expect(Staff2.readSingleStaff(1)).toEqual(db.Staff["1"]);
});

//   Update staff with the same ID
test("A Staff to update his own details", function() {
  expect(
    Staff3.updateStaffDetails(
      3,
      "Stephen",
      "StephenMatt@gmail.com",
      "stephanLove"
    )
  ).toBe("Staff updated successfully");
});

//   All fields to be updated must be filled.
test("All fields of Staff details to be Required", function() {
  expect(Staff2.updateStaffDetails(2, "Steph@gmail.com", "stephan")).toBe(
    "All fields are required"
  );
});

//   A Staff cannot update another Staff details.
test("A Staff cannot update another Staff details", function() {
  expect(
    Staff1.updateStaffDetails(3, "Steph", "Steph@gmail.com", "stephan")
  ).toBe("Cannot update another Staff Details");
});

test("Admin Doctor to update his own details", function() {
    expect(
      adminDoctor2.updateStaffDetails(
        4,
        "Stephen",
        "StephenMatt@gmail.com",
        "stephanLove"
      )
    ).toBe("Staff updated successfully");
  });
console.log(db.Staff);

