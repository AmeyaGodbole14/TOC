console.log("This is project 4");
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const user = document.getElementById('user');
let validEmail = false;
let validPhone = false;
let validUser = false;
let validPassword = false;
let validuser = false;
$('#failure').hide();
$('#success').hide();

// console.log(name, email, phone);
user.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate employee name here
    let regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let str = user.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        user.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        user.classList.add('is-invalid');
        validUser = false;

    }
})



name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate username here
    let regex = /^[A-Za-z0-9_]{4,20}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your username is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;

    }
})

password.addEventListener('blur', ()=>{
    console.log("password is blurred");
    // Validate name here
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    let str = password.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your Password is valid');
        password.classList.remove('is-invalid');
        validpassword = true;
    }
    else{
        console.log('Your Password is not valid');
        password.classList.add('is-invalid');
        validpassword = false;

    }
})


email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('You have entered an invalid email address!');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);

    // Submit your form here
    if(validEmail && validUser && validPhone){
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();

    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }



})
