describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

    it('fizzes for 3', function() {
      expect(fizzBuzz.transform(3)).toEqual('fizz');
    });

    it('buzzes for 5', function() {
      expect(fizzBuzz.transform(5)).toEqual('buzz');
    });

    it('fizzbuzzes for 15', function() {
      expect(fizzBuzz.transform(15)).toEqual('fizzbuzz');
    });

});
