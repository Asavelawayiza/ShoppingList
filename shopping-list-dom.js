// shopping-list dom code here
var topicListElem = document.querySelector(".topicList")
var totalBudgetElem = document.querySelector(".totalBudget")
var ListElem = document.querySelector(".List")
var PriceElem = document.querySelector(".Price")
var addBtnElem = document.querySelector(".addButton")
var showListElem = document.querySelector(".showList")
var errorMessage = document.querySelector(".error");
var totalPriceElem = document.querySelector(".totalPrice")

var total = 0;
var instance = shoppingList();

function ErrorText() {
   errorMessage.innerHTML = "";
}

addBtnElem.addEventListener("click", function () {

	if (topicListElem.value === "" || totalBudgetElem.value === "") {
		errorMessage.innerHTML = "Write TopicList and a Budget";
		ErrorText();
		return;
	}


    instance.Budget(ListElem.value);

    var newList = document.createElement("div");
   newList.textContent = ListElem.value;
   newList.classList.add("showListElem");
   showListElem.appendChild(newList);
})

   function total() {

    if (totalPriceElem.value === "price") {
        total += Number(totalPriceElem.value);
    }
   totals = total;
   totalPriceElem.innerHTML = totals.toFixed(2);
   }

