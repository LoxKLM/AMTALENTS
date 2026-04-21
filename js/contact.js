/* =========================================================
   AM TALENTS — contact.js
   Formulaire de contact via EmailJS
   SDK chargé via <script> dans index.html
========================================================= */

/* [À CONFIGURER] — Remplacer avant la mise en production */
const EMAILJS_PUBLIC_KEY  = 'VOTRE_PUBLIC_KEY';   /* [À CONFIGURER] */
const EMAILJS_SERVICE_ID  = 'VOTRE_SERVICE_ID';   /* [À CONFIGURER] */
const EMAILJS_TEMPLATE_ID = 'VOTRE_TEMPLATE_ID';  /* [À CONFIGURER] */

export function initContact() {
  const form        = document.getElementById('contact-form');
  const formFields  = document.getElementById('form-fields');
  const formSent    = document.getElementById('form-sent');
  const formError   = document.getElementById('form-error');
  const submitBtn   = form?.querySelector('.am-contact__submit');

  if (!form) return;

  /* Initialisation EmailJS */
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    /* Protection honeypot anti-spam */
    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot?.value) return;

    setLoading(true);
    hideError();

    const params = {
      nom:      form.querySelector('[name="nom"]')?.value,
      email:    form.querySelector('[name="email"]')?.value,
      activite: form.querySelector('[name="activite"]')?.value,
      message:  form.querySelector('[name="message"]')?.value,
    };

    try {
      if (typeof emailjs !== 'undefined') {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
      }
      showSuccess();
    } catch {
      showError("Une erreur est survenue. Merci de réessayer ou d'écrire à hello@amtalents.fr");
    } finally {
      setLoading(false);
    }
  });

  function setLoading(active) {
    if (!submitBtn) return;
    submitBtn.disabled = active;
    form.classList.toggle('am-contact__form--loading', active);
    submitBtn.textContent = active ? 'Envoi en cours…' : 'Envoyer →';
  }

  function showSuccess() {
    formFields.style.display = 'none';
    formSent.style.display   = 'block';
  }

  function showError(msg) {
    if (!formError) return;
    formError.textContent    = msg;
    formError.style.display  = 'block';
  }

  function hideError() {
    if (!formError) return;
    formError.style.display = 'none';
  }
}
