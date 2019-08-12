// shopping-list tests here


describe("The shopping list functions", function() {

    it("should return the added Item ", function() {
        var instance = shoppingList();
        assert.equal(instance.GroceryList('potatoes'), 'potatoes' );
    })
	});