const submitButton = document.getElementById("submit");
const nameInput = document.getElementById("name");
const dateInput = document.getElementById("date");
const emailInput = document.getElementById("email");
const websiteInput = document.getElementById("website");
const phoneInput = document.getElementById("phone");
const form = document.getElementById("form");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
        alert("All inputs are valid");
    } else {
        const invalidFields = Array.from(
            form.querySelectorAll(".was-validated .form-control:invalid"),
        );
        const invalidFieldsText = invalidFields
            .map((field) => field.id)
            .join(", ");
        alert(`The following fields are invalid: ${invalidFieldsText}`);
    }
});
