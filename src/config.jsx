/**
 * GrievanceAI Configuration
 * Single source of truth for application configuration and WhatsApp link generation.
 */

// Default placeholder if environment variable is not defined
const DEFAULT_WHATSAPP_NUMBER = "919XXXXXXXXX";

/**
 * Returns the configured WhatsApp Business destination number.
 */
export const getWhatsAppNumber = () => {
  return import.meta.env.VITE_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;
};

/**
 * Generates the standard WhatsApp click-to-chat URL (https://wa.me/<NUMBER>).
 * Strips any non-digit characters to ensure reliable universal linking.
 *
 * @param {string} [customMessage] - Optional pre-filled text message
 * @returns {string} Formatted WhatsApp URL
 */
export const getWhatsAppUrl = (customMessage = "") => {
  const cleanNumber = getWhatsAppNumber().replace(/[^0-9]/g, "");
  const baseUrl = `https://wa.me/${cleanNumber}`;
  if (customMessage) {
    return `${baseUrl}?text=${encodeURIComponent(customMessage)}`;
  }
  return baseUrl;
};

// Exported constant for standard link binding across components
export const WHATSAPP_URL = getWhatsAppUrl();
