describe("The apple seller functions", function() {

	const applesSoldList1 = [{
		color : "red",
		qty: 2,
		price: 4.25
	},
	{
		color : "red",
		qty: 4,
		price: 5.50
	},
	{
		color : "yellow",
		qty: 4,
		price: 5.73
	},
	{
		color : "green",
		qty: 4,
		price: 7.45
	},
	{
		color : "green",
		qty: 3,
		price: 6.45
	},
	{
		color : "yellow",
		qty: 3,
		price: 4.80
	},
	{
		color : "green",
		qty: 3,
		price: 6.45
	}];

	const applesSoldList2 = [{
		color : "red",
		qty: 3,
		price: 5.25
	},
	{
		color : "red",
		qty: 5,
		price: 7.75
	},
	{
		color : "yellow",
		qty: 7,
		price: 10.25
	},
	{
		color : "yellow",
		qty: 7,
		price: 12.58
	},
	{
		color : "green",
		qty: 4,
		price: 7.50
	},
	{
		color : "yellow",
		qty: 7,
		price: 8.43
	},
	{
		color : "green",
		qty: 7,
		price: 11.56
	}];

	const applePrices1 = {
		red: 1.75,
		yellow: 2.25,
		green: 1.35
	};

	const applePrices2 = {
		red: 1.55,
		yellow: 2.05,
		green: 1.10
	};

	it("should be able to calculate the total number of apples sold", function() {
		assert.equal(0, totalNumberSold(applesSoldList1));
		assert.equal(0, totalNumberSold(applesSoldList2));
	});

	it("should be able to calculate the total income from all the apples sold", function() {
		assert.equal(0, totalIncome(applesSoldList1));
		assert.equal(0, totalIncome(applesSoldList2));
	});

	it("should be able to calculate the total income from all the green apples sold", function() {
		assert.equal(0, totalIncomeGreenApples(applesSoldList1));
		assert.equal(0, totalIncomeGreenApples(applesSoldList2));
	});

	it("should be able to calculate the total profit from apples sold", function() {
		
		assert.equal(0, totalProfit(applesSoldList1, applePrices1));
		assert.equal(0, totalProfit(applesSoldList2, applePrices2));

	});

	it("should be able to calculate the total number of each color sold", function() {
		
		assert.equal(0, totalPerColorSold(applesSoldList1, 'red'));
		assert.equal(0, totalPerColorSold(applesSoldList1, 'yellow'));
		assert.equal(0, totalPerColorSold(applesSoldList1, 'green'));

		assert.equal(0, totalPerColorSold(applesSoldList2, 'red'));
		assert.equal(0, totalPerColorSold(applesSoldList2, 'yellow'));
		assert.equal(0, totalPerColorSold(applesSoldList2, 'green'));

	});

	it("should be able to calculate the total income per color sold", function() {
		
		assert.equal(0, totalIncomePerColor(applesSoldList1, 'red'));
		assert.equal(0, totalIncomePerColor(applesSoldList1, 'yellow'));
		assert.equal(0, totalIncomePerColor(applesSoldList1, 'green'));

		assert.equal(0, totalIncomePerColor(applesSoldList2, 'red'));
		assert.equal(0, totalIncomePerColor(applesSoldList2, 'yellow'));
		assert.equal(0, totalIncomePerColor(applesSoldList2, 'green'));

	});

	it("should be able to calculate the total profit per color sold", function() {
		
		assert.equal(0, totalProfitPerColor(applesSoldList1, 'red', applePrices1));
		assert.equal(0, totalProfitPerColor(applesSoldList1, 'yellow', applePrices1));
		assert.equal(0, totalProfitPerColor(applesSoldList1, 'green', applePrices1));

		assert.equal(0, totalProfitPerColor(applesSoldList2, 'red', applePrices2));
		assert.equal(0, totalProfitPerColor(applesSoldList2, 'yellow', applePrices2));
		assert.equal(0, totalProfitPerColor(applesSoldList2, 'green', applePrices2));

	});

	it("should be able to find the most profitable apple color", function() {
		
		assert.equal('0', mostProfitableColor(applesSoldList1, 'green', applePrices1));
		assert.equal('0', mostProfitableColor(applesSoldList2, 'yellow', applePrices2));

	});

});

