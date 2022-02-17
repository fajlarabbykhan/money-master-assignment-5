const calculateButton = document.getElementById("click-buttom");
calculateButton.addEventListener('click', function () {

    //  Total Expenses start here

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
    //  Total Expenses end here


    // Balance start here
    const afterRemaing = document.getElementById("remaning");
    afterRemaing.innerText = remainingBalance;
    // Balance end here
});



const saveTaka = document.getElementById("smoney");
saveTaka.addEventListener('click', function () {
    const totalIncomes = document.getElementById("totalincome").value;
    const getSave = document.getElementById("savetaka").value;
    // console.log(getSave);
    const calculateSavings = (parseInt(getSave) * parseInt(totalIncomes)) / 100;
    // console.log(calculateSavings);



    // Saving Amount start here
    const savingParcentage = document.getElementById("updateSavings");
    savingParcentage.innerText = calculateSavings;
    // Saving Amount end here



    // Remaining Balance start here
    const totalFood = document.getElementById("food").value;
    // console.log(totalFood);

    const totalRent = document.getElementById("rent").value;
    // console.log(totalRent);

    const totalCloth = document.getElementById("cloth").value;
    // console.log(totalCloth);

    const totalExpenses = parseInt(totalFood) + parseInt(totalRent) + parseInt(totalCloth);
    // console.log(totalExpenses);
    const remainingBalance = parseInt(totalIncomes) - totalExpenses;

    const remainingBalanceAfterSavings = parseInt(remainingBalance) - parseInt(savingParcentage);
    const lastRemaing = document.getElementById("last");
    lastRemaing.innerText = remainingBalanceAfterSavings;
    // Remaining Balance end here





})