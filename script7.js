
var calculateDistance = function(time, speedOfFirstCyclist,speedOfSecondCyclist){
    var distanceOfFirstCyclist = speedOfFirstCyclist * time;
    var distanceOfSecondCyclist = speedOfSecondCyclist * time;
    
    var totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;
    
    return totalDistance;
};

var firstDistance = calculateDistance(3,12,14);
var secondDistance = calculateDistance(5,1,2);
console.log(firstDistance,secondDistance);
