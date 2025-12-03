document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ajanlat-form");
  const successMessage = document.getElementById("sikeres-uzenet");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const showError = (input, message) => {
      const errorSpan = document.getElementById(`error-${input.id}`);
      if (errorSpan) {
        errorSpan.textContent = message;
      }
      input.classList.add("invalid");
      isValid = false;
    };

    const clearError = (input) => {
      const errorSpan = document.getElementById(`error-${input.id}`);
      if (errorSpan) {
        errorSpan.textContent = "";
      }
      input.classList.remove("invalid");
    };

    const validateField = (input, condition, message) => {
      if (condition) {
        showError(input, message);
      } else {
        clearError(input);
      }
    };

    const vezeteknev = document.getElementById("vezeteknev");
    validateField(
      vezeteknev,
      vezeteknev.value.trim() === "",
      "A vezetéknév megadása kötelező!"
    );

    const keresztnev = document.getElementById("keresztnev");
    validateField(
      keresztnev,
      keresztnev.value.trim() === "",
      "A keresztnév megadása kötelező!"
    );

    const email = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField(
      email,
      !emailPattern.test(email.value.trim()),
      "Kérlek, adj meg egy érvényes e-mail címet!"
    );

    const telefonszam = document.getElementById("telefonszam");
    validateField(
      telefonszam,
      telefonszam.value.trim().length < 10,
      "Kérlek, adj meg egy érvényes telefonszámot!"
    );

    const datum = document.getElementById("datum");
    validateField(datum, datum.value === "", "Kérlek, válassz egy dátumot!");

    const lakcim = document.getElementById("lakcim");
    validateField(
      lakcim,
      lakcim.value.trim() === "",
      "A lakcím megadása kötelező!"
    );

    const helyszin = document.getElementById("helyszin");
    validateField(
      helyszin,
      helyszin.value.trim() === "",
      "A helyszín megadása kötelező!"
    );

    const tipus = document.getElementById("tipus");
    validateField(
      tipus,
      tipus.value === "",
      "Kérlek, válassz egy fotózási típust!"
    );

    const uzenet = document.getElementById("uzenet");
    validateField(
      uzenet,
      uzenet.value.trim().length < 10,
      "Az üzenetnek legalább 10 karakter hosszúnak kell lennie!"
    );

    const adatkezeles = document.getElementById("adatkezeles");
    validateField(
      adatkezeles,
      !adatkezeles.checked,
      "Az adatkezelési tájékoztató elfogadása kötelező!"
    );

    if (isValid) {
      successMessage.style.display = "block";
      form.reset();

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    } else {
      successMessage.style.display = "none";
    }
  });
});
