function getInputValue(inputid) {
    const balanceInput = document.getElementById(inputid);
    const balanceInputText = balanceInput.value;
    const balanceInputAmount = parseFloat(balanceInputText);
    // clear deposut input field.
    balanceInput.value = "";
    return balanceInputAmount;
};

function previousBalanceAdd(OldBalance, deposit) {
    const previousAmount = document.getElementById(OldBalance);
    const previousAmountText = previousAmount.innerText;
    const previousAmountTotal = parseFloat(previousAmountText);
    const newAmountTotal = previousAmountTotal + deposit;
    previousAmount.innerText = newAmountTotal.toFixed(2);
};

function getBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function balanceAmount(balance, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getBalance();
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + balance;
        balanceTotal.innerText = newBalanceTotal.toFixed(2);
    }
    else {
        const newBalanceTotal = previousBalanceTotal - balance;
        balanceTotal.innerText = newBalanceTotal.toFixed(2);
    }
};

// depositBalanceTotal("deposit-total");
document.getElementById("deposit-btn").addEventListener("click", function () {

    const depositInputAmount = getInputValue("deposit-input");
    if (depositInputAmount > 0) {
        previousBalanceAdd("deposit-total", depositInputAmount);
        balanceAmount(depositInputAmount, true);
    }

});

// Work withdraw amount.
document.getElementById("withdraw-btn").addEventListener("click", function () {

    const withdrawInputAmount = getInputValue("withdraw-input");
    const getBalanceTotal = getBalance();
    if (withdrawInputAmount > 0 && withdrawInputAmount < getBalanceTotal) {
        previousBalanceAdd("withdraw-total", withdrawInputAmount);
        balanceAmount(withdrawInputAmount, false);
    }

});