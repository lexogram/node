testSwitch = function(trueOrFalse) {
  var output = trueOrFalse + " (" + typeof trueOrFalse + ") is ";
  switch (trueOrFalse) {
    case true:
      output += "true";
      break;
    case undefined:
      output = trueOrFalse + " is treated as false";
      break;
    case "":
      output = "'' (empty string) is ";
    case 0:  
    case null:
      output += "treated as ";
    case false:
      output += "false";
      break;
    default:
      output += "treated as true";
  }
  console.log(output);
}

testSwitch(true)
testSwitch(false)
testSwitch(undefined)
testSwitch("")
testSwitch(0)
testSwitch(null)
testSwitch("anything else")
testSwitch({})