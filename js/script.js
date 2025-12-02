document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ajanlat-form");
  const successMessage = document.getElementById("sikeres-uzenet");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Helper function to show error
    const showError = (input, message) => {
      const errorSpan = document.getElementById(`error-${input.id}`);
      if (errorSpan) {
        errorSpan.textContent = message;
      }
      input.classList.add("invalid");
      isValid = false;
    };

    // Helper function to clear error
    const clearError = (input) => {
      const errorSpan = document.getElementById(`error-${input.id}`);
      if (errorSpan) {
        errorSpan.textContent = "";
      }
      input.classList.remove("invalid");
    };

    // Validate Field
    const validateField = (input, condition, message) => {
      if (condition) {
        showError(input, message);
      } else {
        clearError(input);
      }
    };

    // 1. Vezetéknév
    const vezeteknev = document.getElementById("vezeteknev");
    validateField(
      vezeteknev,
      vezeteknev.value.trim() === "",
      "A vezetéknév megadása kötelező!"
    );

    // 2. Keresztnév
    const keresztnev = document.getElementById("keresztnev");
    validateField(
      keresztnev,
      keresztnev.value.trim() === "",
      "A keresztnév megadása kötelező!"
    );

    // 3. Email
    const email = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField(
      email,
      !emailPattern.test(email.value.trim()),
      "Kérlek, adj meg egy érvényes e-mail címet!"
    );

    // 4. Telefonszám
    const telefonszam = document.getElementById("telefonszam");
    validateField(
      telefonszam,
      telefonszam.value.trim().length < 10,
      "Kérlek, adj meg egy érvényes telefonszámot!"
    );

    // 5. Dátum
    const datum = document.getElementById("datum");
    validateField(datum, datum.value === "", "Kérlek, válassz egy dátumot!");

    // 6. Lakcím
    const lakcim = document.getElementById("lakcim");
    validateField(
      lakcim,
      lakcim.value.trim() === "",
      "A lakcím megadása kötelező!"
    );

    // 7. Helyszín
    const helyszin = document.getElementById("helyszin");
    validateField(
      helyszin,
      helyszin.value.trim() === "",
      "A helyszín megadása kötelező!"
    );

    // 8. Típus
    const tipus = document.getElementById("tipus");
    validateField(
      tipus,
      tipus.value === "",
      "Kérlek, válassz egy fotózási típust!"
    );

    // 9. Üzenet
    const uzenet = document.getElementById("uzenet");
    validateField(
      uzenet,
      uzenet.value.trim().length < 10,
      "Az üzenetnek legalább 10 karakter hosszúnak kell lennie!"
    );

    // 10. Adatkezelés
    const adatkezeles = document.getElementById("adatkezeles");
    validateField(
      adatkezeles,
      !adatkezeles.checked,
      "Az adatkezelési tájékoztató elfogadása kötelező!"
    );

    if (isValid) {
      // Sikeres validáció
      successMessage.style.display = "block";
      form.reset();

      // Opcionális: elrejteni a sikeres üzenetet pár másodperc után
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    } else {
      successMessage.style.display = "none";
    }
  });
});
