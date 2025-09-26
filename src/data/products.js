// Produtos de exemplo para o catálogo
// Observação: substitua imagens por URLs reais (CDN, armazenamento próprio ou local na pasta /public)

export const products = [
  {
    id: 'kit-cftv-4ch',
    name: 'Kit CFTV 4 Câmeras Full HD',
    description: 'DVR 4 canais + 4 câmeras Full HD, fontes, conectores e cabos. Ideal para residências e pequenos comércios.',
    price: 1499.9,
    image: 'https://images.unsplash.com/photo-1580757468214-c73f7062a2ed?q=80&w=1200&auto=format&fit=crop',
    category: 'Câmeras de Segurança'
  },
  {
    id: 'camera-ip-ptz',
    name: 'Câmera IP Wi‑Fi PTZ 1080p',
    description: 'Movimento Pan/Tilt, visão noturna, detecção de movimento e acesso por app.',
    price: 399.9,
    image: 'https://images.unsplash.com/photo-1584291527935-456e8e2dd734?q=80&w=1200&auto=format&fit=crop',
    category: 'Câmeras de Segurança'
  },
  {
    id: 'hd-1tb-surveillance',
    name: 'HD 1TB Linha Surveillance',
    description: 'Disco rígido projetado para gravação contínua 24/7 em DVRs e NVRs.',
    price: 329.9,
    image: 'https://images.unsplash.com/photo-1548094967-e25ebad15189?q=80&w=1200&auto=format&fit=crop',
    category: 'Armazenamento'
  },
  {
    id: 'roteador-dualband',
    name: 'Roteador Dual Band AC1200',
    description: 'Wi‑Fi rápido e estável para casas e escritórios. 2.4/5 GHz, 4 portas LAN.',
    price: 290.0,
    image: 'https://images.unsplash.com/photo-1587825140400-5fc3d5c785dc?q=80&w=1200&auto=format&fit=crop',
    category: 'Redes'
  },
  {
    id: 'ssd-480gb',
    name: 'SSD 480GB',
    description: 'Acelere seu PC ou notebook com armazenamento em estado sólido.',
    price: 279.9,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    category: 'Armazenamento'
  },
  {
    id: 'servico-form-otimizacao',
    name: 'Formatação + Otimização',
    description: 'Backup básico, instalação limpa do sistema, drivers e otimizações de desempenho.',
    price: 100.0,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    category: 'Serviços'
  }
];

export function formatCurrency(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
