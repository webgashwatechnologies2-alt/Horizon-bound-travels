// Central email configuration for Horizon Bound Travels leads.
// Supported services:
// - 'php': Sends lead details to the local /send-lead.php endpoint (recommended for cPanel/PHP hosts)
// - 'web3forms': Client-side submission using Web3Forms API (requires WEB3FORMS_ACCESS_KEY)
// - 'emailjs': Client-side submission using EmailJS SDK (requires EMAILJS credentials)
// - 'simulated': Logs the submission to console (ideal for testing locally)

export const EMAIL_CONFIG = {
  // Service to use. We default to 'php' since the project includes a PHPMailer setup.
  // Switch to 'web3forms' or 'emailjs' if hosting on serverless platforms (Vercel, Netlify).
  PREFERRED_SERVICE: 'php' as 'php' | 'web3forms' | 'emailjs' | 'simulated',

  // Recipient Emails
  RECIPIENT_EMAILS: ['info@horizonboundtravels.com', 'sales@horizonboundtravels.com'],

  // Web3Forms configuration (if PREFERRED_SERVICE is 'web3forms')
  // Get a free key at https://web3forms.com/
  WEB3FORMS_ACCESS_KEY: 'YOUR_WEB3FORMS_ACCESS_KEY',

  // EmailJS configuration (if PREFERRED_SERVICE is 'emailjs')
  EMAILJS_SERVICE_ID: 'themedox',
  EMAILJS_TEMPLATE_ID: 'template_vvhaqp9',
  EMAILJS_PUBLIC_KEY: 'QOBCxT0bzNKEs-CwW',
};
