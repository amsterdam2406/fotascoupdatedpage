// Run JS only after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

  /* ========= FORM VALIDATION ========= */
  const form = document.forms['mainForm'];
  if (form) {
    form.addEventListener('submit', function (e) {
      const firstname = form.name.value.trim();
      const mail = form.email.value.trim();
      const number = form.phone.value.trim();

      const fname_err = document.querySelector('.name_err');
      const mailer_err = document.querySelector('.email_err');
      const number_err = document.querySelector('.phone_err');

      let valid = true;

      // Name validation
      if (firstname === "") {
        fname_err.textContent = "This space cannot be empty";
        valid = false;
      } else {
        fname_err.textContent = "";
      }

      // Email validation
      if (mail === "") {
        mailer_err.textContent = "This space cannot be empty";
        valid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(mail)) {
        mailer_err.textContent = "Invalid email address";
        valid = false;
      } else {
        mailer_err.textContent = "";
      }

      // Phone validation
      if (number === "") {
        number_err.textContent = "This space cannot be empty";
        valid = false;
      } else if (!/^\d{11}$/.test(number)) {
        number_err.textContent = "Number must be exactly 11 digits";
        valid = false;
      } else {
        number_err.textContent = "";
      }

      if (!valid) {
        e.preventDefault();
      }
    });
  }

  /* ========= MOBILE NAV TOGGLE ========= */
  const end = document.querySelector(".close");
  const nav = document.querySelector('.nav-menu');
  const burg = document.querySelector('.hamburger');

  if (burg && end && nav) {
    burg.addEventListener('click', () => {
      nav.style.display = 'block';
      end.style.display = 'block';
      burg.style.display = 'none';
    });

    end.addEventListener('click', () => {
      nav.style.display = 'none';
      end.style.display = 'none';
      burg.style.display = 'flex';
    });
  }

});
