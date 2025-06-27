// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


function returnFirstTwoDrivers(drivers) {
  return [drivers[0], drivers[1]];
}

function returnLastTwoDrivers(drivers) {
    return [drivers[2], drivers[3]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function fareDoubler(fare){
        return fare * multiplier;
    }
}
function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}