// console.log('connected')

// Check the form validate
const formSelector = document.querySelector('form')

function validate() {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  const firstName = formSelector.elements['first_name'].value;
  const lastName = formSelector.elements['last_name'].value;
  const email = formSelector.elements['email'].value;
  const city = formSelector.elements['city'].value;
  
  const throwError = (field) =>{
    document.getElementById("error-log").innerHTML = `Please check your ${field}`;
    return false;
  }

  if(firstName == "" || !isNaN(firstName)){
    throwError('First name')
  } else if(lastName == "" || !isNaN(lastName)){
    throwError('Last name')
  } else if(!reg.test(email)){
    throwError('Email')
  } else if(city == ""){
    throwError('City')
  } else {
    formSelector.submit()
  }
}
