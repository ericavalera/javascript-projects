const processor = require('../processor.js');

describe("transmission processor", function() {

   test("takes a string and returns an object", function() {
      let result = processor("9701::<489584872710>");
      expect(typeof result).toBe("object");
   });

   test("returns -1 if '::' not found", function() {
      let result = processor("9701<489584872710>");
      expect(result).toBe(-1);
   });
   test("returns id in object", function() {
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
  });

});