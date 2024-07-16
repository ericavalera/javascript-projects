// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("should have the value of 'nonprofit for organization", function(){
    expect(launchcode.organization).toEqual("nonprofit");
     });

   test("should have an Executive Director property with value of 'Jeff' ", function(){
    expect(launchcode.executiveDirector).toEqual("Jeff");
   });

   test("should have percentage 'percentageCoolEmployees' at 100 ", function(){
    expect(launchcode.percentageCoolEmployees).toEqual(100);
   });

   test("should have the value of 'Web Development, Data Analysis, LiftOff' in programsOffered array", function(){
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
   });

   test("should have 3 indices in the array", function(){
    expect(launchcode.programsOffered).toHaveLength(3);
    });
  });

describe("Launchcode output method", function(){
  test("should return 'Launch!' when passed a number divisible by 2", function (){
    expect(launchcode.launchOutput(2)).toEqual("Launch!")
  });

  test("should return 'Code!' when passed a number divisible by 3", function (){
    expect(launchcode.launchOutput(3)).toEqual("Code!")
});
test("should return 'Rocks!' when passed a number divisible by 5", function (){
  expect(launchcode.launchOutput(5)).toEqual("Rocks!")
});

test("should return 'LaunchCode!' when passed a number divisible by 2 and 3", function (){
expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
 });
test("should return 'Code Rocks!' when passed a number divisible by 3 and 5", function (){
expect(launchcode.launchOutput(15)).toEqual('Code Rocks!');
    
});
 test("should return 'Launch Rocks! (CRASH!!!!)' when passed a number divisible by 2 and 5", function (){
 expect(launchcode.launchOutput(10)).toEqual('Launch Rocks! (CRASH!!!!)')        
});
test("should return 'LaunchCode Rocks!' when passed a number divisible by 2, 3, and 5", function (){
  expect(launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!')        
 });
 test("should return 'Rutabagas! That doesnt work.!' when passed a number not divisible by 2, 3, and 5", function (){
  expect(launchcode.launchOutput(1)).toEqual('Rutabagas! That doesnt work.')        
 });
});
