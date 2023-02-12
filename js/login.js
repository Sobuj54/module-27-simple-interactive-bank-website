// step 1 add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step 2 get the email address from the input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value ;
    
    // step 3 get password
    // step 3.a set id inside html element
    // step 3.b get the element
    // step 3.c get value form the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value ;
    console.log(email,password);
})
