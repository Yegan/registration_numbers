describe("The registration function should take in registration number and display them to the screen", function() {
  it("The function should take in a string and display  it to the screen", function() {

    var registration_display = RegistrationFactory();

    assert.equal(registration_display.checkReg("CA 123456"), true);

  });
  it("The function should take in a string and display  it to the screen", function() {

    var registration_display = RegistrationFactory();

    assert.equal(registration_display.checkReg("CZ123456"), false);

  });

  it("The function should not add the same registration number to the map once already there", function() {

    var registration_display = RegistrationFactory({"CA 123456": 0});
    registration_display.checkReg("CA 123456")
    registration_display.checkReg("CA 123456")

    assert.deepEqual(registration_display.regMap(), {"CA 123456": 0});

  });

  it("The function should not add the same registration number to the map once already there", function() {

    var registration_display = RegistrationFactory({"CA 123456": 0});
    registration_display.checkReg("CA 123456")
    registration_display.checkReg("CA 123456")

    assert.deepEqual(registration_display.regMap(), {"CA 123456": 0});

  });

  it('Should return a list of keys for regMap', function(){
    var registration_display = RegistrationFactory();

    registration_display.checkReg('CA 1234')
    registration_display.checkReg('CZ 1234')
    assert.deepEqual(registration_display.regMapKeys(), ['CA 1234'])
  })
});
