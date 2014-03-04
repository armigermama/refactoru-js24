// Returns a string that concatenates each string from the array separated by 
// the given delimeter.
// e.g. join(['one', 'two', 'three'], ' and ') 
// returns: 'one and two and three'
var join = function(arr, delimeter) {
 
	var output = '';
	var endIndex = arr.length - 1;

	if (endIndex >= 0) {

		for(var i=0; i<endIndex; i++) {
			output += arr[i] + delimeter;
		}
		output += arr[endIndex]
	}

	return output;
};