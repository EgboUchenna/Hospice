const Staff = require("./staff");
const db = require("./database");

// Create a new staff from the Staff constructor.
var Staff1 = new Staff(
  "Egbo Uchenna",
  "egbouchenna001@gmail.com",
  "phoneix120"
);

var Staff2 = new Staff(
    " Uchenna Egbo",
    "uchenna001@gmail.com",
    "phoneix140"
  );
console.log(db.Staff);

//  Check if a staff object  was created successfully
test('New Staff to be successfully created', function(){
    expect(Staff1).toEqual(db.Staff['1']);
});

// Read a single staff by his ID and output the details.
test("Read a single Staff by ID to and return his object", function() {
    expect(Staff2.readSingleStaff(1)).toEqual(db.Staff["1"]);
  });

// test("Admin Doctor can create another staff", function() {
//   var anotherStaff = Staff1.createNewStaff(
//     "Matthew Egbo",
//     'uchesco4jesus@gmail.com',
//     "infinityXXX"
//   );
//   expect(anotherStaff.email).toBe("uchesco@gmail.com");
// });
