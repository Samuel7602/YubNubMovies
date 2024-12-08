document.getElementById("subscribe-form").addEventListener("submit", function (event) {
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;

  if (!emailValue || !/\S+@\S+\.\S+/.test(emailValue)) {
    alert("Por favor, ingresa un correo válido.");
    event.preventDefault();  
  } else {
    alert("Correo enviado correctamente!");
  }
});
