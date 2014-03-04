describe("Map Function", function() {

	it("The original array should not change (pure function)", function() {
		var arr = [1,2,3,4,5];
		map(arr, function(n) {
			return n + 1;
		});
		expect(arr).toEqual([1,2,3,4,5]);
	});

	it("should apply the function to every strings in the array", function() {
		
		expect(map(["a","b","c","d","e"], function(n) {
			return 1 + n; 
		}))
		.toEqual(["1a","1b","1c","1d","1e"]);
		
		expect(map(["a"], function(n) { 
			return n + 23; 
		}))
		.toEqual(["a23"]);
	});

	it("should apply the function to every numbers in the array", function() {
		expect(map([5,6,7,8,9], function(n) {
			return n * 2;
		}))
		.toEqual([10,12,14,16,18]);
	});

	it("should apply the function to a single value array", function() {
		expect(map(["cat"], function(n) {
			return n + "s";
		}))
		.toEqual(["cats"]);
	});

	it("should return an empty array if the given array is empty", function() {
		expect(map([], function(n) {
			return n + "s";
		}))
		.toEqual([]);
	});

});

describe("Filter Function", function() {

	it("The original array should not change (pure function)", function() {
		var arr = [1,2,3,4,5];
		filter(arr, function(n) {
			return n > 2;
		});
		expect(arr).toEqual([1,2,3,4,5]);
	});

	it("should apply the function to every strings in the array", function() {
		
		expect(filter(["cat","bat","ckoockoo","door","bee"], function(n) {
			return n.length > 3; 
		}))
		.toEqual(["ckoockoo","door"]);
		
		expect(filter(["environment"], function(n) { 
			return n.match(/[aeiou]/gi); 
		}))
		.toEqual(["environment"]);
	});

	it("should apply the function to every numbers in the array", function() {
		expect(filter([5,6,7,8,9], function(n) {
			return n > 6;
		}))
		.toEqual([7,8,9]);
	});

	it("should apply the function to a single value array", function() {
		expect(filter(["cat"], function(n) {
			return n.length > 5 ;
		}))
		.toEqual([]);
	});

	it("should return an empty array if the given array is empty", function() {
		expect(filter([], function(n) {
			return n > 0;
		}))
		.toEqual([]);
	});

});