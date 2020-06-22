// console.log('connected')

// Check the form validate
const formSelector = document.querySelector('form')

const throwError = (field) =>{
  document.getElementById("error-log").innerHTML = `Please check your ${field}`;
  return false;
}

function validate() {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if(formSelector.elements['first_name'].value == ""){
    throwError('First name')
  } else if(formSelector.elements['last_name'].value == ""){
    throwError('Last name')
  } else if(reg.test(formSelector.elements['email'].value) == false){
    throwError('Email')
  } else if(formSelector.elements['city'].value == ""){
    throwError('City')
  } else {
    formSelector.submit()
  }
}
