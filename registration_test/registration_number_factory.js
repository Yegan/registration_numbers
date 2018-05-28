  function RegistartionFactory() {
    var regNums = {};
    var regisNum = ""

    function checkReg(location, reg) {
      if (regisNum !==""){
        if(regNums[reg]=== undefined){
          regNums[reg]=0;
        }
      }
      if (location == "CA") {
        regisNum = reg;
      }
      if (location == "CK") {
          regisNum = reg;
      }
      if (location == "CAW") {
          regisNum = reg;
      }
      if (location == "CJ") {
          regisNum = reg;
      }
      return regisNum;
    }
    return {
      checkReg,
    }

  }
