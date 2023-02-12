// step 1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
// step 2 get the deposit amount from the depsit field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value ;
    
// step 3 get the current total depsit
    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDeposit = depositTotalAmount.innerText;
    // gettin sum of previous deposit and current deposit
    const totalDeposit = parseFloat(previousDeposit) + parseFloat(depositAmount);
    depositTotalAmount.innerText = totalDeposit ;

    // step 4 adding total balance
    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalance = totalBalance.innerText;
    // adding previous and current balance
    const currentTotalBalance = parseFloat(previousTotalBalance) + parseFloat(depositAmount);
    // setting current total balance
    totalBalance.innerText = currentTotalBalance;
    
    // clearing the input field
    depositField.value = '';
})