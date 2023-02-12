// step 1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
// step 2 get the deposit amount from the depsit field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value ;
// step 3 get the current total depsit
    const depositTotalAmount = document.getElementById('deposit-total');
    depositTotalAmount.innerText = depositAmount;
    
})