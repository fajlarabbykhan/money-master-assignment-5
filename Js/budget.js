const calculateButton = document.getElementById("click-buttom");
calculateButton.addEventListener('click', function () {

    const totalIncomes = document.getElementById("totalincome").value;
    // console.log(totalIncomes);

    const totalFood = document.getElementById("food").value;
    // console.log(totalFood);

    const totalRent = document.getElementById("rent").value;
    // console.log(totalRent);

    const totalCloth = document.getElementById("cloth").value;
    // console.log(totalCloth);

    const totalExpenses = parseInt(totalFood) + parseInt(totalRent) + parseInt(totalCloth);
    // console.log(totalExpenses);
    const remainingBalance = parseInt(totalIncomes) - totalExpenses;
    // console.log(remainingBalance);

    const totalExp = document.getElementById("expenses");
    totalExp.innerText = totalExpenses;

    const afterRemaing = document.getElementById("remaning");
    afterRemaing.innerText = remainingBalance;

});

const saveButton = document.getElementById("save-money");
saveButton.addEventListener('click', function () {
    console.log(clicked);
})

function clear(id) {
    document.getElementById("id").value = "";
}