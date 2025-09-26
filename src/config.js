// Configurações globais do site
export const WHATSAPP_NUMBER = '5545999609853'; // Número com DDI e DDD, ex: 55{DDD}{NUMERO}

export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
