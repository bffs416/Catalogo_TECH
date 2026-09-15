/* ==========================================================================
   CATÁLOGO DE PRODUCTOS TECNOLÓGICOS - PRODUCTOS REALES
   ========================================================================== */

const PRODUCTS_DATA = [
  {
    id: "docking-hp-120w",
    name: "Docking Station HP Thunderbolt USB-C + Cargador 120W",
    category: "laptops",
    categoryLabel: "Laptops & Accesorios",
    price: 120.00,
    originalPrice: 160.00,
    badge: "Destacado",
    stock: "En Stock (Envío Inmediato)",
    sku: "HP-DOCK-120W-TB",
    rating: 5.0,
    reviewsCount: 18,
    shortSpecs: ["USB-C Thunderbolt", "Cargador HP 120W Incluido", "Dual DisplayPort + HDMI", "3x USB 3.0 + LAN Gigabit"],
    description: "Estación de acoplamiento HP profesional USB-C / Thunderbolt de alto rendimiento. Incluye cargador original HP de 120W (PPP016L-E / 18.5V - 6.5A). Permite conectar múltiples monitores en 4K, red Ethernet Gigabit, periféricos USB y cargar la laptop simultáneamente a través de un solo cable.",
    features: [
      "Incluye Adaptador de Corriente Original HP de 120W (PPP016L-E / 18.5V - 6.5A)",
      "Salidas de Vídeo: 2x DisplayPort (DP) + 1x HDMI 4K UHD",
      "Puertos USB: 3x USB 3.0 Type-A SuperSpeed + 1x USB-C Thunderbolt",
      "Conexión de Red Gigabit Ethernet RJ-45 + Conector Audio Combo 3.5mm",
      "Compatible con Laptops HP, MacBook, Dell, Lenovo y computadores con USB-C / Thunderbolt",
      "Carga de batería y transferencia de datos ultrarrápida en un solo cable"
    ],
    colors: [
      { name: "Negro HP Studio", hex: "#18181b" }
    ],
    images: [
      "images/docking-hp-120w/foto1.png",
      "images/docking-hp-120w/foto2.png",
      "images/docking-hp-120w/foto3.png"
    ]
  },
  {
    id: "docking-dell-wd19s",
    name: "Docking Station Dell WD19S USB-C + Cargador Dell",
    category: "laptops",
    categoryLabel: "Laptops & Accesorios",
    price: 135.00,
    originalPrice: 185.00,
    badge: "Destacado",
    stock: "En Stock (Envío Inmediato)",
    sku: "DELL-WD19S-K20A",
    rating: 5.0,
    reviewsCount: 24,
    shortSpecs: ["Dell WD19S K20A", "Cargador Dell Incluido", "Dual DisplayPort 1.4 + HDMI 2.0", "3x USB 3.1 + LAN Gigabit"],
    description: "Estación de acoplamiento profesional Dell WD19S (Modelo K20A001 / SVC TAG: 5Y1H3R3). Incluye adaptador de corriente original Dell. Proporciona conectividad de alta velocidad a través de un solo cable USB-C con soporte para múltiples monitores 4K UHD, red por cable Gigabit, puertos USB 3.1 con PowerShare y carga continua de la laptop.",
    features: [
      "Modelo Oficial Dell WD19S (Reg Type: K20A001 / Reg Model: K20A / SVC TAG: 5Y1H3R3)",
      "Incluye Adaptador de Corriente Original Dell (19.5V ⎓ 6.7A / 9.23A)",
      "Salidas de Vídeo: 2x DisplayPort 1.4 + 1x HDMI 2.0 + 1x USB-C DisplayPort Multifunción",
      "Puertos USB: 3x USB 3.1 Gen 1 Type-A (1 con PowerShare) + 2x USB-C 3.1 Gen 2",
      "Puerto de Red Gigabit Ethernet RJ-45 de alta velocidad (MAC: 60-5B-30-34-36-FE)",
      "Compatibilidad Total con Laptops Dell XPS, Latitude, Inspiron, Precision, MacBook y Windows con USB-C"
    ],
    colors: [
      { name: "Negro Mate Dell", hex: "#18181b" }
    ],
    images: [
      "images/docking-dell-wd19s/foto1.png",
      "images/docking-dell-wd19s/foto2.png",
      "images/docking-dell-wd19s/foto3.png",
      "images/docking-dell-wd19s/foto4.png"
    ]
  },
  {
    id: "minipc-lenovo-m72e",
    name: "Mini PC Lenovo ThinkCentre M72e Tiny Core i5 12GB RAM",
    category: "laptops",
    categoryLabel: "Laptops & Computadores",
    price: 180.00,
    originalPrice: 240.00,
    badge: "Destacado",
    stock: "En Stock (Envío Inmediato)",
    sku: "LNV-M72E-TINY-I5",
    rating: 5.0,
    reviewsCount: 31,
    shortSpecs: ["Intel Core i5-3470T 2.9GHz", "12GB RAM DDR3", "240GB SSD Sólido", "Wi-Fi 2 Antenas + DisplayPort"],
    description: "Computador ultra compacto de escritorio Lenovo ThinkCentre M72e Tiny (Modelo 3264-1N2 / S/N: MJ090F1). Equipado con procesador Intel Core i5 de 2.90GHz (hasta 3.60GHz en Turbo), 12GB de memoria RAM DDR3 y disco de estado sólido SSD de 240GB para encendido e inicio de programas instantáneo. Incluye conectividad inalámbrica Wi-Fi con doble antena orientable, salida de vídeo digital DisplayPort y VGA.",
    features: [
      "Procesador Intel Core i5-3470T @ 2.90GHz (Turbo Boost hasta 3.60GHz)",
      "Memoria RAM instalada de 12GB DDR3 (11.8GB utilizables de alto rendimiento)",
      "Unidad de Almacenamiento SSD de 240GB (Disco de Estado Sólido SATA)",
      "Conectividad Inalámbrica Wi-Fi de alta ganancia con 2 Antenas externas orientables",
      "Puertos de Vídeo: 1x DisplayPort Digital + 1x VGA D-Sub (Soporte doble monitor)",
      "Puertos USB & Red: 5x USB 2.0 + Ethernet Gigabit RJ-45 + Entradas Frontales de Micrófono y Audífonos 3.5mm"
    ],
    colors: [
      { name: "Negro Lenovo Business", hex: "#18181b" }
    ],
    images: [
      "images/minipc-lenovo-m72e/foto1.png",
      "images/minipc-lenovo-m72e/foto2.png",
      "images/minipc-lenovo-m72e/foto3.png",
      "images/minipc-lenovo-m72e/foto4.png",
      "images/minipc-lenovo-m72e/foto5.png"
    ]
  },
  {
    id: "pc-lenovo-thinkcentre-a8",
    name: "Computador Desktop Lenovo ThinkCentre SFF AMD PRO A8 8GB RAM 256GB SSD",
    category: "laptops",
    categoryLabel: "Laptops & Computadores",
    price: 195.00,
    originalPrice: 260.00,
    badge: "Destacado",
    stock: "En Stock (Envío Inmediato)",
    sku: "LNV-TC-SFF-A8-9600",
    rating: 5.0,
    reviewsCount: 28,
    shortSpecs: ["AMD PRO A8-9600 3.10GHz (10 Cores)", "8GB RAM DDR4 2400MT/s", "256GB SSD Sólido", "Gráficos Radeon R7 + Dual DP"],
    description: "Computador de escritorio torre formato SFF Lenovo ThinkCentre de alto rendimiento corporativo. Equipado con procesador AMD PRO A8-9600 (10 Compute Cores 4C+6G @ 3.10GHz), 8GB de memoria RAM DDR4 a 2400 MT/s, tarjeta de vídeo integrada AMD Radeon R7 Graphics (998 MB) y disco de estado sólido SSD de 256GB para velocidad extrema. Excelente conectividad con doble salida digital DisplayPort 4K, VGA, puerto serial COM, 8 puertos USB totales y red Gigabit Ethernet.",
    features: [
      "Procesador AMD PRO A8-9600 R7 (10 Compute Cores: 4 CPU + 6 GPU @ 3.10GHz Turbo)",
      "Memoria RAM instalada de 8GB DDR4 a 2400 MT/s de alta velocidad",
      "Unidad de Almacenamiento SSD de 256GB (Disco de Estado Sólido SATA de encendido ultra rápido)",
      "Tarjeta de Vídeo Integrada AMD Radeon R7 Graphics (998 MB dedicados)",
      "Salidas de Vídeo: 2x DisplayPort Digitales + 1x VGA D-Sub (Soporta múltiples monitores)",
      "Puertos USB: 8x Puertos USB totales (4x USB Frontales + 4x USB Traseros)",
      "Conexión de Red Gigabit Ethernet RJ-45 + Puerto Serial COM DB9 + Puertos PS/2 Teclado/Mouse + Audio/Mic 3.5mm"
    ],
    colors: [
      { name: "Negro Lenovo Business", hex: "#18181b" }
    ],
    images: [
      "images/pc-lenovo-thinkcentre-a8/foto1.png",
      "images/pc-lenovo-thinkcentre-a8/foto2.png",
      "images/pc-lenovo-thinkcentre-a8/foto3.png",
      "images/pc-lenovo-thinkcentre-a8/foto4.png"
    ]
  },
  {
    id: "radio-baofeng-bf888s",
    name: "Kit de Radios Walkie Talkie Baofeng BF-888S Completo",
    category: "camaras",
    categoryLabel: "Radios & Comunicaciones",
    price: 45.00,
    originalPrice: 65.00,
    badge: "VENDIDO",
    stock: "AGOTADO (Vendido)",
    sku: "BAOFENG-BF888S-KIT",
    rating: 5.0,
    reviewsCount: 42,
    shortSpecs: ["Baofeng BF-888S UHF", "16 Canales Programables", "Alcance Largo Rango", "Incluye Base Carga + Audífonos"],
    description: "Kit completo de radiocomunicadores profesionales Baofeng BF-888S UHF (400-470MHz). Diseñados para comunicación clara en seguridad, eventos, trabajo de campo, deportes y logística. Incluye base de carga inteligente de escritorio, batería recargable de Li-ion de larga duración, antena de alta ganancia, clip de cinturón y audífonos manos libres con micrófono PTT.",
    features: [
      "Modelo Oficial Baofeng BF-888S VHF/UHF FM Transceiver con DSP integrado",
      "16 Canales Frecuencia Programables con reducción de ruido activa y encriptación Scrambler",
      "Incluye Base de Carga Inteligente de Escritorio + Batería Recargable Li-ion",
      "Incluye Audífonos Manos Libres con Micrófono PTT + Clip para Cinturón + Correa",
      "Linterna LED de alta iluminación integrada para situaciones de emergencia nocturna",
      "Construcción robusta resistente a caídas e intemperie para uso profesional e industrial"
    ],
    colors: [
      { name: "Negro Táctico Baofeng", hex: "#18181b" }
    ],
    images: [
      "images/radio-baofeng-bf888s/foto1.png",
      "images/radio-baofeng-bf888s/foto2.png"
    ]
  },
  {
    id: "laptop-lenovo-g40-45",
    name: "Portátil Lenovo G40-45 AMD A4 Pantalla 14.0\" HD + Cargador Original",
    category: "laptops",
    categoryLabel: "Laptops & Computadores",
    price: 165.00,
    originalPrice: 220.00,
    badge: "Destacado",
    stock: "En Stock (Envío Inmediato)",
    sku: "LNV-G40-45-AMD",
    rating: 5.0,
    reviewsCount: 36,
    shortSpecs: ["AMD A4 APU Dual-Core", "Pantalla 14.0\" HD LED", "Cargador Lenovo 20V 3.25A", "Teclado AccuType Lenovo"],
    description: "Computador portátil Lenovo G40-45 (Modelo 80E1 / S/N: PF08GLTR / MTM: 80E1005RLM). Equipado con procesador AMD A4, pantalla panorámica de 14.0 pulgadas HD, tarjeta gráfica AMD Radeon integrada y cargador original Lenovo de 20V 3.25A. Diseño portátil y resistente con teclado ergonómico AccuType, puertos HDMI, VGA, USB 3.0 SuperSpeed, lector de tarjetas SD y red Ethernet.",
    features: [
      "Modelo Oficial Lenovo G40-45 (Type 80E1 / S/N: PF08GLTR / MTM: 80E1005RLM)",
      "Procesador AMD A4 APU de alta eficiencia con gráficos Radeon integrados",
      "Incluye Adaptador de Corriente / Cargador Original Lenovo (20V ⎓ 3.25A)",
      "Pantalla Slim de 14.0 pulgadas HD (1366x768) panorámica con acabado brillante",
      "Teclado ergonómico Lenovo AccuType para escritura fluida y ágil + Touchpad multitáctil",
      "Conectividad Completa: 1x HDMI + 1x VGA D-Sub + 1x USB 3.0 + 2x USB 2.0 + Lector Tarjetas SD + LAN RJ-45 + Audio 3.5mm"
    ],
    colors: [
      { name: "Negro Lenovo Textured", hex: "#18181b" }
    ],
    images: [
      "images/laptop-lenovo-g40-45/foto1.png",
      "images/laptop-lenovo-g40-45/foto2.png",
      "images/laptop-lenovo-g40-45/foto3.png"
    ]
  }
];
