// shopping list factory function here
function shoppingList(){
    var addedList = [];
    var grocer;

function Budget(list){
    grocer = list
    if (!addedList.includes(list)){
        addedList.push(list)
    }

}

function GroceryList(grocery){
    // console.log(addedList);

    var shopList = [];
    for (var i=0; i<addedList.length; i++){
        if (addedList[i] === grocery)
        shopList.push(grocery)

    }
    return  shopList;
    
}


function getList(){
    return addedList;
}
   function getGrocer(){
       return grocer;
   }

return {
    GroceryList,
    getList,
    Budget,
    getGrocer
}

}