module.exports=function getStatistics(numbers){
    
    //implement the computation of statistics here
    stats = {
    min: '',
    max: '',
    average:''
    };
    
    function getMin(arr)
    {
        let res = arr[0];
        for(let i = 1; i < arr.length; i++)
        res = Math.min(res, arr[i]);
        return res;
    }
    function getMax(arr)
    {
        let res = arr[0];
        for(let i = 1; i < arr.length; i++)
        res = Math.max(res, arr[i]);
        return res;
    }
    function getAverage(arr){
        let sum = 0;
        for(let i = 0; i < arr.length; i++)
         sum = sum + arr[i];
        return sum/arr.length;
    }
    stats.min = getMin(numbers);
    stats.max = getMax(numbers);
    stats.average = getAverage(numbers);
    console.log(stats,"**********************************");
    
    function EmailAlert(){
        this.emailSent = false;
    }
    function LEDAlert(){
        this.ledGlows = false;
    }
    const ledAlert=new LEDAlert();
    const emailAlert=new EmailAlert();
    const alerters=[emailAlert,ledAlert];
    const maxThreshold = 10.2;

    class StatsAlerter {
      constructor(maxThreshold, alerters) {
          this.maxThreshold = maxThreshold;
          this.alerters = alerters;
      }
      checkAndAlert(arr) {
          console.log(this.maxThreshold, this.alerters, arr);
          let max = getMax(arr);
          if(max > this.maxThreshold){
            return true;
          }
          else{
            return false;
          }
      }
    }
    const statsAlerter=new StatsAlerter(maxThreshold, alerters);
    console.log(statsAlerter.checkAndAlert([99.8, 34.2, 4.5, 6.7]));
    return stats;
}

