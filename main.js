const formInputs = document.querySelectorAll(".form-input");

formInputs.forEach((formInput) => {
  let thisLabel = formInput.nextElementSibling;

  formInput.addEventListener("focus", () => {
    thisLabel.classList.add("active");
  });

  formInput.addEventListener("blur", () => {
    if (formInput.value === "") {
      thisLabel.classList.remove("active");
    }
  });
});
