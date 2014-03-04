describe("Module", function() {

	it("should concatenate each string from the array seperated by the given delimeter", function() {
    	expect(join(['one', 'two', 'three'], ' and ')).toEqual('one and two and three');
	});

	it("should not concatenate when the array contains only one string", function() {
		expect(join(['one'], ' and ')).toEqual('one');
	});

	it("should not concatenate when the array is empty", function() {
		expect(join([], ' and ')).toEqual('');
	});

	it("The original array should not change (pure function)", function() {
		var a =['one', 'two', 'three'];
		join(a, ' and ');
		expect(a).toEqual(['one', 'two', 'three']);
	});

});