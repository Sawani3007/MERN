const title = document.getElementById("greetings");

const handleUsername = (e) => {
  const inputElem = e.target;
  const val = inputElem.value;
  title.innerHTML = `Hello <em>${val}</em> ! `;
}



const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(e);
  const inputs = e.target;
  const nameInput = inputs.username;
  console.log(nameInput.value);
  const emailInput = inputs.email;
  console.log(emailInput.value);
  const passwordInput = inputs.password;
  console.log(passwordInput.value);

  if(passwordInput.value.length < 8){
    alert("Needed Strong Password");
    return;
  }
  window.open("./thanku.html","_self");

}