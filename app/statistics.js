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
//         let res = arr[0];
//         for(let i = 1; i < arr.length; i++)
//         res = Math.max(res, arr[i]);
//         return res;
        return 0;
    }
    function getAverage(arr){
        let sum = 0;
        for(let i = 1; i < arr.length; i++)
         sum = sum + arr[i];
        return sum/arr.length;
    }
    stats.min = getMin(numbers);
    stats.max = getMax(numbers);
    stats.average = getAverage(numbers);
    console.log(stats,"**********************************");
    
    return stats;
}

