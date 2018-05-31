  function RegistrationFactory(data) {
    var registrationMap = {};
    var regisNum = "";
    var regPlates = ['CA', 'CY','CK', 'CAW', 'CJ']
    // This functions parameter takes in an object
    if(data){
      registrationMap = data;
    }


      function checkReg(reg){
      if (reg !==""){
        regisNum = reg;

        for(var i = 0; i < regPlates.length; i++){
          if(regisNum.startsWith(regPlates[i])){

            if (registrationMap[regisNum] === undefined) {
              registrationMap[regisNum] = 0;
            }
            return true
          }

        }
          return false
      }



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
    }

  }
