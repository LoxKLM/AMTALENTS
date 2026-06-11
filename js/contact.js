/* =========================================================
   AM TALENTS — contact.js
   Gestion formulaire EmailJS
========================================================= */

(function() {
  emailjs.init({
    publicKey: 'Dg0qBJT1pGgfLfaxn',
  });
})();

export function initContact() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    /* Honeypot anti-spam */
    const honeypot = form.querySelector('[name="website"]');
    if (honeypot && honeypot.value) return;

    const btn = form.querySelector('button[type="submit"]');
    const errorEl = document.getElementById('form-error');
    const sentEl = document.getElementById('form-sent');

    /* État loading */
    btn.disabled = true;
    btn.textContent = 'Envoi en cours...';
    if (errorEl) errorEl.textContent = '';

    const templateParams = {
      nom:      form.querySelector('[name="nom"]')?.value || '',
      email:    form.querySelector('[name="email"]')?.value || '',
      activite: form.querySelector('[name="activite"]')?.value || '',
      message:  form.querySelector('[name="message"]')?.value || '',
    };

    try {
      await emailjs.send(
        'service_8j4sr98',
        'template_q5u5rmv',
        templateParams
      );

      /* Succès — afficher confirmation */
      if (sentEl) {
        document.getElementById('form-fields')?.style
          && (document.getElementById('form-fields').style.display = 'none');
        sentEl.style.display = 'block';
      }
      form.reset();

    } catch (error) {
      console.error('EmailJS error:', JSON.stringify(error));
      if (errorEl) {
        errorEl.textContent = 'Une erreur est survenue. Réessayez ou contactez-nous directement.';
      }
      btn.disabled = false;
      btn.textContent = 'Envoyer →';
    }
  });
}
