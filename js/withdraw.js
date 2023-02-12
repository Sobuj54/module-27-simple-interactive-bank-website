// step 1
document.getElementById('btn-withdraw').addEventListener('click',function(){
// step 2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawField.value ;
// step 3
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmount = withdrawTotal.innerText;
// step 4
    const currentTotalWithdraw = parseFloat(withdrawAmount) + 
    parseFloat(withdrawTotalAmount);
    withdrawTotal.innerText = currentTotalWithdraw;
// step 5
    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalance = totalBalance.innerText;
// step 6
    const currentTotalBalance = parseFloat(previousTotalBalance) - parseFloat(withdrawAmount);
    totalBalance.innerText = currentTotalBalance;
// clearing the input field
    withdrawField.value = '';
})