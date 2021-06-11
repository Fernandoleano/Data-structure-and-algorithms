var maximumWealth = function(accounts) {
    var newArr = [];
 
 accounts.forEach(function(item) {
   item = item.reduce(function(a, b) {
     return a + b;
   });
     newArr.push(item);
 });
     console.log(newArr);
     
     var max = 0;
     
      for(var i = 0; i <= newArr.length; i++) {
         if(newArr[i] > max) {
             max = newArr[i];
         }
     }
     return max;
     
 };