const hello= require('../hello.js');
describe ("hello", function(){
    test("should return custom message when name is specified", function(){
        expect(hello("Jest")).toBe("Hello, Jest!");
    });
})