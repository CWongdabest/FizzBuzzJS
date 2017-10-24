describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("should turn multiples of 3 to fizz", function() {
    game = fizzbuzz.transform([1, 2, 3, 4]);
    expect(game).toEqual(1, 2, 'fizz', 4);

    //demonstrates use of custom matcher
  });




});
