  function RegistrationFactory(storage) {
    var registrationMap = {};
    var regisNum = "";
    var regPlates = ['CA', 'CY', 'CK', 'CAW', 'CJ']
    // This functions parameter takes in an object
    if (storage) {
      registrationMap = storage;
    }


    function checkReg(reg) {
      if (reg !== "") {
        regisNum = reg;

        for (var i = 0; i < regPlates.length; i++) {
          if (regisNum.startsWith(regPlates[i])) {

            if (registrationMap[regisNum] === undefined) {
              registrationMap[regisNum] = 0;
            }
            return true
          }

        }
        return false

      }
    }

    function filter(town) {
      var list = Object.keys(registrationMap);
      var regNumbersFromTown = [];

      // loop over all your reg numbers
      for (var i = 0; i < list.length; i++) {
        var regNumber = list[i];
        // look for the ones starting with town - keep them in a list
        if (town === "All"){
          return list
          }
          if (regNumber.startsWith(town)) {
            // return regList;
            regNumbersFromTown.push(regNumber);
          }



      }
      // once done - return the list
      return regNumbersFromTown;
    }


    function regMap() {
      return registrationMap
    }

    function regMapKeys() {
      return Object.keys(registrationMap)
    }

    return {
      checkReg,
      regMap,
      regMapKeys,
      filter,
    }

  }
