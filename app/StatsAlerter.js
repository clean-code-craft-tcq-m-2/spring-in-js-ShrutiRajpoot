    class StatsAlerter {
      constructor(maxThreshold, alerters) {
          this.maxThreshold = maxThreshold;
          this.alerters = alerters;
      }
      checkAndAlert(arr) {
          let max = getMax(arr);
          if(max > this.maxThreshold){
            this.alerters[0].emailSent = true;
            this.alerters[1].ledGlows = true
          }
      }
    }
