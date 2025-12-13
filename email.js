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

