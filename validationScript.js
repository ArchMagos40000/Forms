    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message
       // validationScript.js
// Form Validation with Regular Expressions (Alphanumeric only)

// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // 1) Retrieve form & input field element (15 pts)
  const form  = document.getElementById("myForm");
  const input = document.getElementById("inputField");

  if (!form || !input) {
    console.warn("[validationScript] Required elements not found.");
    return;
  }

  // Create message area (for both error + confirmation) and insert after input
  const msg = document.createElement("div");
  msg.id = "message";
  msg.style.marginTop = "10px";
  msg.setAttribute("aria-live", "polite");
  input.insertAdjacentElement("afterend", msg);

  // Utility: show error/confirmation messages
  function showError(text) {
    msg.textContent = text;
    msg.style.color = "#c00";
  }
  function showOK(text) {
    msg.textContent = text;
    msg.style.color = "#0a0";
  }

  // 2) Add an event listener to the form that submits an event
  form.addEventListener("submit", (e) => {
    // Always prevent actual submission (server not configured)
    e.preventDefault();

    // 3) Validate with regex for alphanumeric (30 pts)
    const value = (input.value || "").trim();
    const alnumPattern = /^[a-z0-9]+$/i; // letters & digits only, no spaces/symbols

    if (!alnumPattern.test(value)) {
      // 4) Display error message & 5) Prevent submit (20 + 15 pts)
      showError("Please enter letters and numbers only (no spaces or symbols).");
      input.focus();
      return; // stay on page; do not 'submit'
    }

    // 6) Display confirmation (15 pts) and 'submit' (simulated)
    showOK(`✅ Input is valid. Simulated submit with value: "${value}"`);
    // If you later have a server endpoint, replace the above with: form.submit();
  });

  // Clear message as user types
  input.addEventListener("input", () => {
    msg.textContent = "";
  });
});
