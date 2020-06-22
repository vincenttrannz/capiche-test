// console.log('connected')

// Check the form validate
const formSelector = document.querySelector('form')

const throwError = (field) =>{
  document.getElementById("error-log").innerHTML = `Please check your ${field}`;
  return false;
}

function validate() {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  const firstName = formSelector.elements['first_name'].value;
  const lastName = formSelector.elements['last_name'].value;
  const email = formSelector.elements['email'].value;
  const city = formSelector.elements['city'].value;

  if(firstName == ""){
    throwError('First name')
  } else if(lastName == ""){
    throwError('Last name')
  } else if(!reg.test(email)){
    throwError('Email')
  } else if(city == ""){
    throwError('City')
  } else {
    formSelector.submit()
  }
}
