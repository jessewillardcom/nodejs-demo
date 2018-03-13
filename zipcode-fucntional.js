
var zipcodeSets = [
	[94200,94224], 
	[94226,94399], 
	[94133,94133],
];

//Sort the array of arrays in the correct orders
var finalArray = zipcodeSets.sort( (a, b) => {
  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  return 0;
}).reduce( (accumulator, current, index ) => {

	console.log( index, current[0], current[1] );

	//Handles singular zipcode value by simply adding it to the accumulator
	if (current[0] === current[1]) {
		accumulator.push( current );
		return accumulator;
	}

	// Handles merge case only in the event that there is a value in the accumulator
	var lastCollected = accumulator[accumulator.length-1];
	if ( lastCollected !== undefined) {
		if ( lastCollected[1] < current[0]) {
			accumulator.push( current );
			return accumulator;
		} else {
			//Merge case removes the previous range and adds a merged item instead
			var mergeValue = [ lastCollected[0],current[1] ];
			accumulator.pop();
			accumulator.push( mergeValue );
			return accumulator;
		}
	} else {

		//Handles regular range case and is first value, no values in accumulator
		if (current[0] < current[1]) {
			accumulator.push( current );
			return accumulator;
		}	
	}

}, [])

console.log( finalArray )




