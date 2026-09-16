/* ==========================================================================
   CATÁLOGO DE PRODUCTOS TECNOLÓGICOS - PRODUCTOS REALES
   ========================================================================== */

const PRODUCTS_DATA = [
  {
    id: "sopladora-violent-fan",
    name: "Sopladora Turbo Inalámbrica 48V Brushless Violent Fan + 2 Baterías + Cargador",
    category: "accesorios",
    categoryLabel: "Periféricos & Accesorios",
    price: 70000,
    originalPrice: 110000,
    badge: "NUEVO",
    condition: "NUEVO",
    conditionLabel: "Nuevo (En Caja)",
    stock: "En Stock (Envío Inmediato)",
    sku: "FAN-48V-BRUSHLESS",
    rating: 5.0,
    reviewsCount: 16,
    shortSpecs: ["Producto 100% NUEVO", "Motor Brushless 48V", "2x Baterías Recargables 48V", "Cargador Incluido"],
    description: "Sopladora Turbo portátil inalámbrica de máxima potencia (Violent Fan 48V Brushless / Max Power Link System 9.9\"). Equipo 100% NUEVO en caja. Incluye 2 baterías de litio de 48V recargables y cargador de pared. Diseñada para mantenimiento técnico de computadores, limpieza de servidores, teclados, soplado de hojas, secado de vehículos y talleres.",
    features: [
      "ESTADO: NUEVO (En Caja Sellada)",
      "Precio Oficial: $70.000 COP",
      "Motor Brushless sin escobillas de altísima velocidad y flujo de aire turbo concentrado",
      "Incluye 2x Baterías de Litio 48V (Max Power Link System)",
      "Incluye Adaptador de Corriente / Cargador de Pared",
      "Gatillo ergonómico con velocidad de soplado progresiva y de fácil control",
      "Ideal para limpieza profunda de PC, electrónica, secado de autos y uso en taller u hogar"
    ],
    colors: [
      { name: "Negro Matte Violent Fan", hex: "#18181b" }
    ],
    images: [
      "images/sopladora-violent-fan/foto1.png",
      "images/sopladora-violent-fan/foto2.png"
    ]
  },
  {
    id: "memoria-ram-8gb-ddr3",
    name: "Memoria RAM 8GB DDR3 / DDR3L 1600MHz para PC de Escritorio (Kingston / SK Hynix / HP / XUE)",
    category: "almacenamiento",
    categoryLabel: "Componentes, Discos & RAM",
    price: 70000,
    originalPrice: 100000,
    badge: "USADO - EXCELENTE ESTADO",
    condition: "USADO",
    conditionLabel: "Usado (Excelente Estado - Probadas 100%)",
    stock: "En Stock (Envío Inmediato)",
    sku: "RAM-8GB-DDR3-1600",
    rating: 5.0,
    reviewsCount: 22,
    shortSpecs: ["Usado (Excelente Estado)", "Capacidad 8GB DDR3 / DDR3L", "Frecuencia 1600MHz PC3L-12800U", "Kingston / SK Hynix / HP / XUE"],
    description: "Módulos de memoria RAM de 8GB DDR3 / DDR3L a 1600MHz (PC3L-12800U) para computadores de escritorio (PC Torre / SFF). Equipos USADOS en impecable estado estético y operativo, verificados al 100% con MemTest86 sin errores. Disponibles en marcas de primer nivel original como Kingston, SK Hynix (HP Original) y XUE. Voltaje dual 1.35V / 1.5V compatible con tarjetas madre Intel y AMD.",
    features: [
      "ESTADO: USADO (Excelente Estado - 100% Funcional y Probado con MemTest86)",
      "Precio Oficial: $70.000 COP por unidad de 8GB",
      "Capacidad: Módulos de 8GB individuales a 1600 MHz (PC3L-12800U / PC3-12800)",
      "Formato: DIMM de 240 Pines para Chasis de Computador de Escritorio (Desktop PC)",
      "Voltaje: Soporte Dual 1.35V (DDR3L Low Voltage) / 1.5V (DDR3 Estándar)",
      "Marcas Certificadas: SK Hynix (HP P/N 898881-164), Kingston HyperX/ValueRAM y XUE",
      "Compatible con Dual Channel en tarjetas madre Intel (LGA 1155, 1150) y AMD (AM3, AM3+)"
    ],
    colors: [
      { name: "SK Hynix / HP Original 8GB ($70.000)", hex: "#1d4ed8" },
      { name: "Kingston / XUE 8GB ($70.000)", hex: "#047857" }
    ],
    images: [
      "images/memoria-ram-8gb-ddr3/foto1.png",
      "images/memoria-ram-8gb-ddr3/foto2.jpg"
    ]
  },
  {
    id: "memoria-ram-2gb-laptop-ddr3",
    name: "Memoria RAM 2GB DDR3 1333MHz SO-DIMM para Portátil (Samsung / Elpida)",
    category: "almacenamiento",
    categoryLabel: "Componentes, Discos & RAM",
    price: 10000,
    originalPrice: 25000,
    badge: "USADO - EXCELENTE ESTADO",
    condition: "USADO",
    conditionLabel: "Usado (Excelente Estado - Probadas 100%)",
    stock: "En Stock (Envío Inmediato)",
    sku: "RAM-2GB-DDR3-SO-DIMM",
    rating: 5.0,
    reviewsCount: 18,
    shortSpecs: ["Usado (Excelente Estado)", "Capacidad 2GB DDR3 SO-DIMM", "Frecuencia 1333MHz / PC3-10600S", "Samsung / Elpida Original"],
    description: "Módulos de memoria RAM de 2GB DDR3 a 1333MHz (PC3-10600S) en formato SO-DIMM compacto de 204 pines para computadores portátiles y laptops. Equipos USADOS en excelente estado físico y 100% funcionales (probados con MemTest86 sin errores). Disponibles en marcas líderes como Samsung (M471B5773DH0-CH9) y Elpida. Ideales para mantenimiento, ampliación o repuesto de laptops.",
    features: [
      "ESTADO: USADO (Excelente Estado - 100% Funcional y Probado)",
      "Super Oferta: $10.000 COP por unidad de 2GB",
      "Capacidad: Módulos de 2GB individuales a 1333 MHz (PC3-10600S)",
      "Formato: SO-DIMM de 204 Pines para Portátiles / Laptops",
      "Marcas Líderes: Samsung Original (M471B5773DH0) y Elpida Japan",
      "Compatible con Laptops HP, Lenovo, Dell, ASUS, Acer, Toshiba y Apple MacBook que soporten DDR3",
      "Excelentes para repuesto, repotenciación económica o mantenimiento técnico"
    ],
    colors: [
      { name: "Samsung Original 2GB ($10.000)", hex: "#047857" },
      { name: "Elpida 2GB ($10.000)", hex: "#1d4ed8" }
    ],
    images: [
      "images/memoria-ram-2gb-laptop-ddr3/foto1.jpg",
      "images/memoria-ram-2gb-laptop-ddr3/foto2.jpg"
    ]
  },
  {
    id: "radio-baofeng-bf888s",
    name: "Kit de Radios Walkie Talkie Baofeng BF-888S Completo",
    category: "accesorios",
    categoryLabel: "Periféricos & Accesorios",
    price: 70000,
    originalPrice: 95000,
    badge: "NUEVO",
    condition: "NUEVO",
    conditionLabel: "Nuevo (En Caja)",
    stock: "En Stock (Envío Inmediato)",
    sku: "BAOFENG-BF888S-KIT",
    rating: 5.0,
    reviewsCount: 42,
    shortSpecs: ["Producto 100% NUEVO", "Kit Completo $70.000", "Sincronizado $15.000", "UHF + Base Carga + Audífonos"],
    description: "Kit completo de radiocomunicadores profesionales Baofeng BF-888S UHF (400-470MHz). Productos 100% NUEVOS en caja. Disponibles sin sincronizar o con servicio de sincronizado de línea única en una frecuencia fija por $15.000 adicionales. Incluye base de carga inteligente de escritorio, batería recargable de Li-ion de larga duración, antena de alta ganancia, clip de cinturón y audífonos manos libres con micrófono PTT.",
    features: [
      "ESTADO: NUEVO (En Caja Sellada)",
      "Kit Completo Baofeng BF-888S: $70.000 COP",
      "Opción Sincronizado de Línea Única (Frecuencia Fija): $15.000 COP por unidad",
      "16 Canales Frecuencia Programables con reducción de ruido activa y encriptación Scrambler",
      "Incluye Base de Carga Inteligente de Escritorio + Batería Recargable Li-ion",
      "Incluye Audífonos Manos Libres con Micrófono PTT + Clip para Cinturón + Correa",
      "Linterna LED de alta iluminación integrada para situaciones de emergencia nocturna"
    ],
    colors: [
      { name: "Sin Sincronizar (Estándar $70.000)", hex: "#18181b" },
      { name: "Sincronizado Línea Única ($15.000)", hex: "#047857" }
    ],
    images: [
      "images/radio-baofeng-bf888s/foto1.png",
      "images/radio-baofeng-bf888s/foto2.png"
    ]
  },
  {
    id: "disco-duro-1tb-laptop",
    name: "Disco Duro 1TB Western Digital 2.5\" SATA para Portátil (WD Black / Blue)",
    category: "almacenamiento",
    categoryLabel: "Almacenamiento & Discos",
    price: 80000,
    originalPrice: 120000,
    badge: "USADO - EXCELENTE ESTADO",
    condition: "USADO",
    conditionLabel: "Usado (Excelente Estado - 100% Salud)",
    stock: "En Stock (Envío Inmediato)",
    sku: "HDD-2.5-1TB-LNV",
    rating: 5.0,
    reviewsCount: 25,
    shortSpecs: ["Usado (Excelente Estado)", "1TB (1000GB) Capacidad", "Formato Slim 2.5\" Portátil", "WD Black 7200 RPM / WD Blue 5400 RPM"],
    description: "Discos duros mecánicos Western Digital de 1TB (1000GB) en formato Slim de 2.5 pulgadas diseñados para computadores portátiles y consolas. Equipos USADOS en excelente estado físico y técnico (probados al 100% en salud con CrystalDiskInfo sin sectores defectuosos). Disponibles en versiones WD Black de alto rendimiento a 7200 RPM (WD10SPSX) y WD Blue silencioso a 5400 RPM (WD10SPZX).",
    features: [
      "ESTADO: USADO (Excelente Estado - 100% Funcional y Verificado)",
      "Precio Oficial: $80.000 COP por unidad",
      "Capacidad: 1 Terabyte (1000 GB) en formato 2.5\" Slim para Laptops",
      "Versión WD Black 7200 RPM (Modelo WD10SPSX-08A6WT0 / Rendimiento Máximo)",
      "Versión WD Blue 5400 RPM (Modelo WD10SPZX-08Z10T1 / Eficiencia y Bajo Consumo)",
      "Interfaz de conexión SATA III @ 6Gb/s con tasa de transferencia ultra constante",
      "Compatible con Laptops Lenovo, HP, Dell, ASUS, Acer, Apple MacBook y consolas PS3 / PS4 / Cajas externas USB",
      "Verificados con salud al 100% y cero sectores defectuosos"
    ],
    colors: [
      { name: "WD Black 7200 RPM ($80.000)", hex: "#18181b" },
      { name: "WD Blue 5400 RPM ($80.000)", hex: "#2563eb" }
    ],
    images: [
      "images/disco-duro-1tb-laptop/foto1.jpg"
    ]
  },
  {
    id: "disco-duro-1tb-pc",
    name: "Disco Duro 1TB SATA 3.5\" para PC de Escritorio (WD / Toshiba / Seagate)",
    category: "almacenamiento",
    categoryLabel: "Almacenamiento & Discos",
    price: 90000,
    originalPrice: 130000,
    badge: "USADO - EXCELENTE ESTADO",
    condition: "USADO",
    conditionLabel: "Usado (Excelente Estado - 100% Salud)",
    stock: "En Stock (Envío Inmediato)",
    sku: "HDD-3.5-1TB-PC",
    rating: 5.0,
    reviewsCount: 19,
    shortSpecs: ["Usado (Excelente Estado)", "1TB (1000GB) Capacidad", "Formato 3.5\" PC Torre", "WD / Toshiba / Seagate"],
    description: "Discos duros mecánicos de 1TB (1000GB) de capacidad en formato de 3.5 pulgadas para computadores de escritorio (PC Torre / SFF). Equipos USADOS en excelente estado físico y técnico. Disponibles en marcas líderes como Western Digital (WD Blue), Toshiba y Seagate Barracuda. Probados al 100% en salud con CrystalDiskInfo, ideales para almacenamiento masivo de archivos, juegos, respaldos y sistemas operativos.",
    features: [
      "ESTADO: USADO (Excelente Estado - 100% Funcional y Verificado)",
      "Precio Oficial: $90.000 COP por unidad",
      "Capacidad de Almacenamiento: 1 Terabyte (1.000 GB reales)",
      "Formato estándar de 3.5 Pulgadas para Chasis de Computador de Escritorio (PC)",
      "Interfaz de alta velocidad SATA III @ 6Gb/s (Retrocompatible con SATA II)",
      "Salud comprobada al 100% sin sectores defectuosos (CrystalDiskInfo / HD Tune)",
      "Marcas reconocidas: Western Digital WD Blue (WD10EZEX), Toshiba, Seagate Barracuda",
      "Garantía directa y envío inmediato a nivel nacional"
    ],
    colors: [
      { name: "WD Blue 3.5\" PC ($90.000)", hex: "#1d4ed8" },
      { name: "Seagate / Toshiba 3.5\" PC ($90.000)", hex: "#047857" }
    ],
    images: [
      "images/disco-duro-1tb-pc/foto1.jpg"
    ]
  },
  {
    id: "docking-hp-120w",
    name: "Docking Station HP Thunderbolt USB-C + Cargador 120W",
    category: "dockings",
    categoryLabel: "Docking Stations",
    price: 200000,
    originalPrice: 260000,
    badge: "USADO - EXCELENTE ESTADO",
    condition: "USADO",
    conditionLabel: "Usado (Excelente Estado)",
    stock: "En Stock (Envío Inmediato)",
    sku: "HP-DOCK-120W-TB",
    rating: 5.0,
    reviewsCount: 18,
    shortSpecs: ["Usado (Excelente Estado)", "USB-C Thunderbolt", "Cargador HP 120W Incluido", "Dual DP + HDMI"],
    description: "Estación de acoplamiento HP profesional USB-C / Thunderbolt de alto rendimiento. Equipo USADO en excelente estado estético y 100% funcional. Incluye cargador original HP de 120W (PPP016L-E / 18.5V - 6.5A). Permite conectar múltiples monitores en 4K, red Ethernet Gigabit, periféricos USB y cargar la laptop simultáneamente a través de un solo cable.",
    features: [
      "ESTADO: USADO (Excelente Estado - 100% Funcional y Verificado)",
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
    category: "dockings",
    categoryLabel: "Docking Stations",
    price: 200000,
    originalPrice: 280000,
    badge: "USADO - EXCELENTE ESTADO",
    condition: "USADO",
    conditionLabel: "Usado (Excelente Estado)",
    stock: "En Stock (Envío Inmediato)",
    sku: "DELL-WD19S-K20A",
    rating: 5.0,
    reviewsCount: 24,
    shortSpecs: ["Usado (Excelente Estado)", "Dell WD19S K20A", "Cargador Dell Incluido", "Dual DP 1.4 + HDMI 2.0"],
    description: "Estación de acoplamiento profesional Dell WD19S (Modelo K20A001 / SVC TAG: 5Y1H3R3). Equipo USADO en excelente condición operativa y estética. Incluye adaptador de corriente original Dell. Proporciona conectividad de alta velocidad a través de un solo cable USB-C con soporte para múltiples monitores 4K UHD, red por cable Gigabit, puertos USB 3.1 con PowerShare y carga continua de la laptop.",
    features: [
      "ESTADO: USADO (Excelente Estado - 100% Funcional y Verificado)",
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
    category: "computadores",
    categoryLabel: "Computadores & Laptops",
    price: 300000,
    originalPrice: 400000,
    badge: "USADO - EXCELENTE ESTADO",
    condition: "USADO",
    conditionLabel: "Usado (Excelente Estado)",
    stock: "En Stock (Envío Inmediato)",
    sku: "LNV-M72E-TINY-I5",
    rating: 5.0,
    reviewsCount: 31,
    shortSpecs: ["Usado (Excelente Estado)", "Intel Core i5-3470T", "12GB RAM DDR3", "240GB SSD Sólido"],
    description: "Computador ultra compacto de escritorio Lenovo ThinkCentre M72e Tiny (Modelo 3264-1N2 / S/N: MJ090F1). Equipo USADO en excelente estado. Equipado con procesador Intel Core i5 de 2.90GHz (hasta 3.60GHz en Turbo), 12GB de memoria RAM DDR3 y disco de estado sólido SSD de 240GB para encendido e inicio de programas instantáneo. Incluye conectividad inalámbrica Wi-Fi con doble antena orientable, salida de vídeo digital DisplayPort y VGA.",
    features: [
      "ESTADO: USADO (Excelente Estado - 100% Funcional y Verificado)",
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
    category: "computadores",
    categoryLabel: "Computadores & Laptops",
    price: 400000,
    originalPrice: 500000,
    badge: "USADO - EXCELENTE ESTADO",
    condition: "USADO",
    conditionLabel: "Usado (Excelente Estado)",
    stock: "En Stock (Envío Inmediato)",
    sku: "LNV-TC-SFF-A8-9600",
    rating: 5.0,
    reviewsCount: 28,
    shortSpecs: ["Usado (Excelente Estado)", "AMD PRO A8-9600 3.10GHz", "8GB RAM DDR4", "256GB SSD Sólido"],
    description: "Computador de escritorio torre formato SFF Lenovo ThinkCentre de alto rendimiento corporativo. Equipo USADO en excelente condición física y funcional. Equipado con procesador AMD PRO A8-9600 (10 Compute Cores 4C+6G @ 3.10GHz), 8GB de memoria RAM DDR4 a 2400 MT/s, tarjeta de vídeo integrada AMD Radeon R7 Graphics (998 MB) y disco de estado sólido SSD de 256GB para velocidad extrema. Excelente conectividad con doble salida digital DisplayPort 4K, VGA, puerto serial COM, 8 puertos USB totales y red Gigabit Ethernet.",
    features: [
      "ESTADO: USADO (Excelente Estado - 100% Funcional y Verificado)",
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
    id: "laptop-lenovo-g40-45",
    name: "Portátil Lenovo G40-45 AMD A4 Pantalla 14.0\" HD + Cargador Original",
    category: "computadores",
    categoryLabel: "Computadores & Laptops",
    price: 600000,
    originalPrice: 750000,
    badge: "VENDIDO",
    condition: "USADO",
    conditionLabel: "Usado (Vendido)",
    stock: "AGOTADO (Vendido)",
    sku: "LNV-G40-45-AMD",
    rating: 5.0,
    reviewsCount: 36,
    shortSpecs: ["Usado (VENDIDO)", "AMD A4 APU Dual-Core", "Pantalla 14.0\" HD LED", "Cargador Lenovo Original"],
    description: "Computador portátil Lenovo G40-45 (Modelo 80E1 / S/N: PF08GLTR / MTM: 80E1005RLM). Equipo USADO. Equipado con procesador AMD A4, pantalla panorámica de 14.0 pulgadas HD, tarjeta gráfica AMD Radeon integrada y cargador original Lenovo de 20V 3.25A. Diseño portátil y resistente con teclado ergonómico AccuType, puertos HDMI, VGA, USB 3.0 SuperSpeed, lector de tarjetas SD y red Ethernet.",
    features: [
      "ESTADO: USADO (Excelente Estado - Producto VENDIDO)",
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
