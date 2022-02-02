// Returns a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = drivers => { return drivers.slice(0, 2); }

// Returns a new array containing the first two drivers from the passed-in array
const returnLastTwoDrivers = drivers => { return drivers.slice(-2); }

// selectingDrivers has the `returnFirstTwoDrivers` function to as its first element and `returnLastTwoDrivers` function to as its last element
let selectingDrivers = [
	returnFirstTwoDrivers, 
	returnLastTwoDrivers
];

// createFareMultiplier()returns a function that should multiply a given value using the created multiplier
let createFareMultiplier = multiplier => {
	return function(fare) {
		return multiplier * fare;
	}
}

// Declared a variable with const and assign a function returned by createFareMultiplier() to it. fareDoubler() is a function that doubles fare
const fareDoubler = createFareMultiplier(2);

// fareTripler()is a function that triples fare
const fareTripler = createFareMultiplier(3);

/* This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. 
Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers. */
let selectDifferentDrivers = (arrayOfDrivers, selectedDrivers) => {
	return selectedDrivers(arrayOfDrivers)
}