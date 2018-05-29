describe("The registration function should take in registration number and display them to the screen", function(){
  it("The function should take in a string and display  it to the screen", function(){

    var registration_display= RegistartionFactory();

    assert.equal(registration_display.checkReg("CA","123456"), "CA123456")

  });
});
