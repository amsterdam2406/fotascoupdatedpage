// (function(){
//       emailjs.init("XIHhVxe2Cid5ZbQ2A");
//       })();

// function sendMail(e) {
//     if (e && typeof e.preventDefault === 'function') e.preventDefault();

//     const params = {
//         // match the variable names used in your EmailJS template
//         name: document.getElementById("name")?.value || '',
//         email: document.getElementById("email")?.value || '',
//         phone: document.getElementById("phone")?.value || '',
//         service: document.getElementById("service")?.value || '',
//         message: document.getElementById("message")?.value || ''
//     };

//     // UI: disable submit if present
//     const submitBtn = document.querySelector('button[type="submit"]');
//     if (submitBtn) submitBtn.disabled = true;

//     // EDIT: set the exact service/template IDs you use in EmailJS
//     const SERVICE_ID = 'service_o0csc3x';      // <-- replace if different
//     const TEMPLATE_ID = 'template_pstzh6f';    // <-- replace if different

//     // Send and handle response
//     emailjs.send(SERVICE_ID, TEMPLATE_ID, params)
//       .then(() => {
//         alert("Quote Sent!");
//         // optionally reset form:
//         document.getElementById("contactForm")?.reset();
//       })
//       .catch(err => {
//         console.error('EmailJS send error:', err);
//         alert("Failed to send. Check console and EmailJS logs.");
//       })
//       .finally(() => {
//         if (submitBtn) submitBtn.disabled = false;
//       });

//     return false;
// }


document.addEventListener('DOMContentLoaded', () => {

  const PUBLIC_KEY = "XIHhVxe2Cid5ZbQ2A";

  if (!window.emailjs || typeof emailjs.init !== 'function') {
    console.error('EmailJS SDK not found. Ensure SDK <script> is included before this file.');
    return;
  }
  emailjs.init(PUBLIC_KEY);

  const SERVICE_ID = 'service_o0csc3x';   
  const TEMPLATE_ID = "template_pstzh6f"; 

  const form = document.getElementById('contactForm') || document.forms['mainForm'];
  

    const statusEl = document.getElementById('formStatus');

  if (!form) {
    console.warn('Contact form not found (id="contactForm" or name="mainForm").');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // THIS prevents the page refresh

    const params = {
      name: (form.querySelector('[name="name"]')?.value || '').trim(),
      email: (form.querySelector('[name="email"]')?.value || '').trim(),
      phone: (form.querySelector('[name="phone"]')?.value || '').trim(),
      service: (form.querySelector('[name="service"]')?.value || '').trim(),
      message: (form.querySelector('[name="message"]')?.value || '').trim()
    };

    // basic validation
    if (!params.name || !params.email) {

      if (statusEl) { statusEl.style.color = 'red'; statusEl.textContent = 'Name and email required.'; }
      alert('Name and email required.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;


    if (statusEl) { statusEl.style.color = 'green'; statusEl.textContent = 'Sending...'; }


    try {
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);
      console.log('EmailJS success', res);


     if (statusEl) { statusEl.style.color = 'green'; statusEl.textContent = 'Message sent. Thank you.'; }
      alert('Message sent. Thank you.');
      form.reset();
    } catch (err) {
      console.error('EmailJS send error:', err);
      alert('Failed to send. Check console/EmailJS logs.');
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      setTimeout(() => { if (statusEl) statusEl.textContent = ''; }, 5000);
    }
  });
});

