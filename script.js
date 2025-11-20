//adding event listener will make the code excute without issues
document.addEventListener('DOMContentLoaded', function() {
  const form = document.forms['mainForm'];
  form.addEventListener('submit', function(e) {
    const firstname = form.name.value;
    const mail = form.email.value;
    const number = form.phone.value;

    const fname_err = document.querySelector('.name_err');
    const mailer_err = document.querySelector('.email_err');
    const number_err = document.querySelector('.phone_err');

    let valid = true;

    // Name validation
    if (firstname === "") {
      fname_err.innerHTML = "This space cannot be empty";
      valid = false;
    } else {
      fname_err.innerHTML = "";
    }

    // Email validation
    if (mail === "") {
      mailer_err.innerHTML = "This space cannot be empty";
      valid = false;
    } else if (!mail.includes("@") || !mail.includes(".com")) {
      mailer_err.innerHTML = "Invalid Email address";
      valid = false;
    } else {
      mailer_err.innerHTML = "";
    }

    // Phone validation
    if (number === "") {
      number_err.innerHTML = "This space cannot be empty";
      valid = false;
    } else if (number.length !== 11 || !/^\d{11}$/.test(number)) {
      number_err.innerHTML = "Number must be exactly 11 digits";
      valid = false;
    } else {
      number_err.innerHTML = "";
    }

    if (!valid) {
      e.preventDefault();
    }
  });
});

const end = document.querySelector(".close");
const nav = document.querySelector('.nav-menu');
const burg = document.querySelector('.hamburger');

burg.onclick =()=>{
    nav.style.display = 'block';
    end.style.display = 'block';
    burg.style.display = 'none';

}

end.onclick =()=>{
    nav.style.display = 'none';
    end.style.display = 'none';
    burg.style.display = 'flex';
}