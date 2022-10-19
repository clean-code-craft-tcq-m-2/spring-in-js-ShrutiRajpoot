    module.exports = class StatsAlerter {
      constructor(maxThreshold, alerters) {
          this.maxThreshold = maxThreshold;
          this.alerters = alerters;
      }
    getMax(arr){
        let res = arr[0];
        for(let i = 1; i < arr.length; i++)
        res = Math.max(res, arr[i]);
        return res;
    }
      checkAndAlert(arr) {
          let max = this.getMax(arr);
          if(max > this.maxThreshold){
            this.alerters[0].emailSent = true;
            this.alerters[1].ledGlows = true
          }
      }
    }
