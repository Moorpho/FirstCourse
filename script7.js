
// var calculateDistance = function(time, speedOfFirstCyclist,speedOfSecondCyclist){
//     var distanceOfFirstCyclist = speedOfFirstCyclist * time;
//     var distanceOfSecondCyclist = speedOfSecondCyclist * time;
    
//     var totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;
    
//     return totalDistance;
// };
// var measureUnit = 'км';
// console.log('Distance between first cities: ' + calculateDistance(3,12,14) + measureUnit);
// console.log('Distance between second cities: ' + calculateDistance(5,1,2) + measureUnit);

// var secondDistance = calculateDistance(5,1,2);
// console.log(firstDistance,secondDistance);

/*var buySomeBread  = function(eggs){
//  if (eggs ) {
//     return 10;
//  } else {
//     return 1;
//  }

return eggs ? 10 : 1;
};
console.log(buySomeBread(false));*/

var washNextItem = function(itemsLeft) {
    itemsLeft--;
    console.log('Left in the sink ' + itemsLeft + 'things');

    if (itemsLeft > 0) {
        washNextItem(itemsLeft);
    }
};

washNextItem(10);






