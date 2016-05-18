(function() {

  return {
    events: {
      'app.activated':'doSomething'
    },

    doSomething: function() {
    }
    //Garrick
    //This function will take a Date in any of the formats I posted in Skype and return an Epoch Timestamp
    function getEpochTime(Input) {
      var inputDate = new Date(Input)
      var myEpoch = inputDate.getTime()/1000.0;
      return myEpoch;
      //Uncomment this for console debugging
      //console.log(myEpoch)
      }
  };

}());
