// data.js

const vehicleData = {
// === SEDANES ===
  marchStd: {
    nombre: "Nissan March Estándar",
    motor: "1.6L 4 cilindros",
    potencia: "106 HP",
    transmision: "Manual de 5 velocidades",
    combustible: "Gasolina",
    largo: "4,000 mt",
    ancho: "1,665 mt",
    alto: "1,528 mt",
    capacidad: "5 pasajeros",
    diaria: "$1,360",
    semanal: "$9,198",
    mensual: "$19,450",
    imagenes: [
      "./assets/march1.jpg",
      "./assets/march2.jpg",
      "./assets/march3.jpg",
      "./assets/march4.jpg",
      "./assets/march5.jpg",
      "./assets/march6.jpg",
      "./assets/march7.jpg",
      "./assets/march8.jpg",
      "./assets/march9.jpg"
    ]
  },
  aveoEstandar: {
    nombre: "Chevrolet Aveo Estándar",
    motor: "1.6L 4 cilindros",
    potencia: "103 HP",
    transmision: "Manual de 5 velocidades",
    combustible: "Gasolina",
    largo: "4,475 mt",
    ancho: "1,750 mt",
    alto: "1,470 mt",
    capacidad: "5 pasajeros",
    diaria: "$1,360",
    semanal: "$9,198",
    mensual: "$21,400",
    imagenes: [
      "./assets/aveostd1.jpg",
      "./assets/aveostd2.jpg",
      "./assets/aveostd3.jpg",
      "./assets/aveostd4.jpg",
      "./assets/aveostd5.jpg"
     ]
  },
  aveoNuevo: {
    nombre: "Chevrolet Aveo Automático (Versión Nueva)",
    motor: "1.6L 4 cilindros",
    potencia: "103 HP",
    transmision: "Automática de 4 velocidades",
    combustible: "Gasolina",
    largo: "4,475 mt",
    ancho: "1,750 mt",
    alto: "1,470 mt",
    capacidad: "5 pasajeros",
    diaria: "$1,530",
    semanal: "$10,346",
    mensual: "$24,350",
    imagenes: [
      "./assets/aveo1.jpg",
      "./assets/aveo2.jpg",
      "./assets/aveo3.jpg",
      "./assets/aveo4.jpg",
      "./assets/aveo5.jpg"
    ]
  },
  onixAutomatico: {
    nombre: "Chevrolet Onix Automático",
    motor: "1.4L 4 cilindros",
    potencia: "98 HP",
    transmision: "Automática de 6 velocidades",
    combustible: "Gasolina",
    largo: "4,420 mt",
    ancho: "1,740 mt",
    alto: "1,480 mt",
    capacidad: "5 pasajeros",
    diaria: "$1,530",
    semanal: "$10,346",
    mensual: "$24,350",
    imagenes: [
      "./assets/onix1.png",
      "./assets/onix2.png",
      "./assets/onix3.png",
      "./assets/onix4.png",
      "./assets/onix5.png",
      "./assets/onix6.png"
    ]
  },
  vDriveEstandar: {
    nombre: "V Drive Estándar",
    motor: "1.6L 4 cilindros",
    potencia: "103 HP",
    transmision: "Manual de 5 velocidades",
    combustible: "Gasolina",
    largo: "4,475 mt",
    ancho: "1,750 mt",
    alto: "1,470 mt",
    capacidad: "5 pasajeros",
    diaria: "$1,364",
    semanal: "$9,226",
    mensual: "$21,200",
    imagenes: [
      "./assets/vdrive1.jpg",
      "./assets/vdrive2.jpg",
      "./assets/vdrive3.jpg",
      "./assets/vdrive4.jpg",
      "./assets/vdrive5.png"
    ]
  },
  versaSenseEstandar: {
    nombre: "Nissan Versa Sense Estándar",
    motor: "1.6L 4 cilindros",
    potencia: "122 HP",
    transmision: "Manual de 5 velocidades",
    combustible: "Gasolina",
    largo: "4,495 mt",
    ancho: "1,695 mt",
    alto: "1,467 mt",
    capacidad: "5 pasajeros",
    diaria: "$1,530",
    semanal: "$10,346",
    mensual: "$24,800",
    imagenes: [
      "./assets/versa1.jpg",
      "./assets/versa2.jpg",
      "./assets/versa3.jpg",
      "./assets/versa4.jpg",
      "./assets/versa5.jpg"
    ]
  },
  versaAdvanceAutomatico: {
    nombre: "Nissan Versa Advance Automático",
    motor: "1.6L 4 cilindros",
    potencia: "122 HP",
    transmision: "CVT Automática",
    combustible: "Gasolina",
    largo: "4,495 mt",
    ancho: "1,695 mt",
    alto: "1,467 mt",
    capacidad: "5 pasajeros",
    diaria: "$1,621",
    semanal: "$9,247",
    mensual: "$26,000",
    imagenes: [
      "./assets/versa1.jpg",
      "./assets/versa2.jpg",
      "./assets/versa3.jpg",
      "./assets/versa4.jpg",
      "./assets/versa5.jpg",
      "./assets/versa6.jpg",
      "./assets/versa7.jpg",
      "./assets/versa8.jpg"
 ]
  },
  sentraAdvanceAutomatico: {
    nombre: "Nissan Sentra Advance Automático",
    motor: "2.0L 4 cilindros",
    potencia: "149 HP",
    transmision: "CVT Automática",
    combustible: "Gasolina",
    largo: "4,640 mt",
    ancho: "1,815 mt",
    alto: "1,455 mt",
    capacidad: "5 pasajeros",
    diaria: "$1,987",
    semanal: "$13,412",
    mensual: "$29,950",
     imagenes: [
      "./assets/sentra1.jpg",
      "./assets/sentra2.jpg",
      "./assets/sentra3.jpg",
      "./assets/sentra4.jpg",
      "./assets/sentra5.jpg",
      "./assets/sentra6.jpg",
      "./assets/sentra7.jpg",
      "./assets/sentra8.jpg",
      "./assets/sentra9.jpg",
      "./assets/sentra10.jpg"
    ]
 },
  altimaAutomatico: {
    nombre: "Nissan Altima Automático",
    motor: "2.5L 4 cilindros",
    potencia: "188 HP",
    transmision: "Automática de Xtronic CVT",
    combustible: "Gasolina",
    largo: "4,900 mt",
    ancho: "1,850 mt",
    alto: "1,440 mt",
    capacidad: "5 pasajeros",
    diaria: "$2,183",
    semanal: "$14,588",
    mensual: "$36,150",
      imagenes: [
      "./assets/altima1.jpg",
      "./assets/altima2.jpg",
      "./assets/altima3.jpg",
      "./assets/altima4.jpg",
      "./assets/altima5.jpg",
      "./assets/altima6.jpg",
      "./assets/altima7.jpg"
    ]
  },
     //Carga
  frontiercs: {
    nombre: "Frontier Caja Seca",
    motor: "2.5L 4 cilindros",
    potencia: "158 HP",
    transmision: "Manual 6 velocidades",
    combustible: "Gasolina",
    largo: "2,30 mt",
    ancho: "1,73 mt",
    alto: "1,68 mt",
    capacidad: "2 pasajeros - 850kg - 6.7 m³",
    diaria: "$1,850",
    semanal: "$12,470",
    mensual: "$30,500",
      imagenes: [
      "./assets/frontiercs1.jpeg",
      "./assets/frontiercs2.jpeg",
      "./assets/frontiercs3.jpeg",
      "./assets/frontiercs4.jpeg",
      "./assets/frontiercs5.jpeg",
      "./assets/frontiercs6.jpeg",
      "./assets/frontiercs7.jpeg",
      "./assets/frontiercs8.jpeg"
    ]
  },
   s10cs: {
    nombre: "S10 Caja Seca",
    motor: "2.5L 4 cilindros",
    potencia: "194 HP",
    transmision: "Manual 5 velocidades",
    combustible: "Gasolina",
    largo: "2,30 mt",
    ancho: "1,73 mt",
    alto: "1,68 mt",
    capacidad: "2 pasajeros - 850kg - 6.7 m³",
    diaria: "$1,864",
    semanal: "$12,572",
    mensual: "$30,500",
      imagenes: [
      "./assets/s10cs1.jpeg",
      "./assets/s10cs2.jpeg",
      "./assets/s10cs3.jpeg",
      "./assets/s10cs4.jpeg",
      "./assets/s10cs5.jpeg"
    ]
  },
   s10re: {
    nombre: "s10 Redilas",
    motor: "2.5L 4 cilindros",
    potencia: "194 HP",
    transmision: "Manual 5 velocidades",
    combustible: "Gasolina",
    largo: "2.300 mt",
    ancho: "1.730 mt",
    alto: ".80 mt",
    capacidad: "2 pasajeros - 1,000 kg",
    diaria: "$1,821",
    semanal: "$11,900",
    mensual: "$28,050",
      imagenes: [
      "./assets/s10re1.jpeg",
      "./assets/s10re2.jpeg",
      "./assets/s10re3.jpeg",
      "./assets/s10re4.jpeg",
      "./assets/s10re5.jpeg"
    ]
  },
   tornado: {
    nombre: "Tornado",
    motor: "1.5L 4 cilindros",
    potencia: "103 HP",
    transmision: "Manual de 5 velocidades",
    combustible: "Gasolina",
    largo: "2,106 mt",
    ancho: "1.459 mt",
    alto: "1.273 mt",
    capacidad: "2 pasajeros - 650 kg - 3.3 m³",
    diaria: "$1,670",
    semanal: "$11,270",
    mensual: "$24,500",
      imagenes: [
      "./assets/tornado1.jpeg",
      "./assets/tornado2.jpeg",
      "./assets/tornado3.jpeg",
      "./assets/tornado4.jpeg",
      "./assets/tornado5.jpeg",
      "./assets/tornado6.jpeg"
    ]
  },
   courier: {
    nombre: "Courier",
    motor: "1.3L 3 cilindros",
    potencia: "98 HP",
    transmision: "Manual de 6 velocidades",
    combustible: "Gasolina",
    largo: "1.620 mt",
    ancho: "1.104 mt",
    alto: "1.244 mm",
    capacidad: "2 pasajeros - 550 kg - 2.3 m³",
    diaria: "$1,516",
    semanal: "$9,961",
    mensual: "$24,500",
      imagenes: [
      "./assets/courier1.jpeg",
      "./assets/courier2.jpeg",
      "./assets/courier3.jpeg",
      "./assets/courier4.jpeg",
      "./assets/courier5.jpeg",
      "./assets/courier6.jpeg",
      "./assets/courier7.jpeg",
      "./assets/courier8.jpeg",
      "./assets/courier9.jpeg"
    ]
  },
  urvan: {
    nombre: "Urvan Panel",
    motor: "2.5L 4 cilindros",
    potencia: "142 HP",
    transmision: "Manual de 5 velocidades",
    combustible: "Gasolina",
    largo: "3.395 mt",
    ancho: "1.555 mt",
    alto: "1.645 mt",
    capacidad: "2 pasajeros - 1,250 kg - 9.20 m³",
    diaria: "$2,210",
    semanal: "$14,476",
    mensual: "$36,300",
      imagenes: [
      "./assets/urvan1.jpeg",
      "./assets/urvan2.jpeg",
      "./assets/urvan3.jpeg",
      "./assets/urvan4.jpeg",
      "./assets/urvan5.jpeg",
      "./assets/urvan6.jpeg"
    ]
  },
  silvecs: {
    nombre: "Silverado Caja Seca 11 pies",
    motor: "v8 de 6.6L",
    potencia: "445 HP",
    transmision: "Automatica de 6 velocidades",
    combustible: "Gasolina",
    largo: "3.250 mt",
    ancho: "2.100 mt",
    alto: "2.000 mt",
    capacidad: "2 pasajeros - 3,400 kg - 17.16 m³ ",
    diaria: "$3,350",
    semanal: "$23,996",
    mensual: "$53,000",
      imagenes: [
      "./assets/silvecs1.jpeg",
      "./assets/silvecs2.jpg",
      "./assets/silvecs3.jpeg",
      "./assets/silvecs4.jpeg",
      "./assets/silvecs5.jpeg",
      "./assets/silvecs6.jpeg",
      "./assets/silvecs7.jpeg"

    ]
  },
  silvecsa: {
    nombre: "Silverado Caja Seca 10 pies",
    motor: "v8 de 6.6L",
    potencia: "445 HP",
    transmision: "Automatica de 6 velocidades",
    combustible: "Gasolina",
    largo: "3.200 mt",
    ancho: "2.100 mt",
    alto: "1.800 mt",
    capacidad: "2 pasajeros - 3,400 kg - 17.16 m³ ",
    diaria: "$4,002",
    semanal: "$27,006",
    mensual: "$53,650",
      imagenes: [
      "./assets/silvecsa1.jpeg",
      "./assets/silvecsa2.jpeg",
      "./assets/silvecsa3.jpeg",
      "./assets/silvecsa4.jpeg",
      "./assets/silvecsa5.jpeg",
      "./assets/silvecsa6.jpeg"
    ]
  },  
  silvere: {
    nombre: "Silverado Redilas 11 pies",
    motor: "v8 de 6.6L",
    potencia: "445 HP",
    transmision: "Automatica de 6 velocidades",
    combustible: "Gasolina",
    largo: "3.350 mt",
    ancho: "2.440 mt",
    alto: "1.000 mt",
    capacidad: "2 pasajeros - 3,400 kg",
    diaria: "$3,150",
    semanal: "$21,301",
    mensual: "$46,700",
      imagenes: [
      "./assets/silvere1.jpeg",
      "./assets/silvere2.jpeg",
      "./assets/silvere3.jpeg",
      "./assets/silvere4.jpeg",
      "./assets/silvere5.jpeg",
      "./assets/silvere6.jpeg"
    ]
  },  
    // Pickup
  frondc4x2: {
    nombre: "Frontier Doble Cabina 4x2",
    motor: "2.5L 4 cilindros",
    potencia: "166 HP",
    transmision: "Manual 6 velocidades",
    combustible: "Gasolina",
    largo: "1.509 mt",
    ancho: "1.560 mt",
    alto: ".519 mt",
    capacidad: "5 pasajeros - 950 kg",
    diaria: "$2,177",
    semanal: "$14,693",
    mensual: "$31,150",
      imagenes: [
      "./assets/frondc4x2-1.jpeg",
      "./assets/frondc4x2-2.jpeg",
      "./assets/frondc4x2-3.jpeg",
      "./assets/frondc4x2-4.jpeg",
      "./assets/frondc4x2-5.jpeg"
    ]
  },
  frondc4x4: {
    nombre: "Frontier Doble Cabina 4x4",
    motor: "2.5L 4 cilindros",
    potencia: "166 HP",
    transmision: "Manual 6 velocidades",
    combustible: "Gasolina",
    largo: "1.509 mt",
    ancho: "1.560 mt",
    alto: ".519 mt",
    capacidad: "5 pasajeros - 950 kg",
    diaria: "$2,709",
    semanal: "$18,270",
    mensual: "$37,400",
      imagenes: [
      "./assets/frondc4x4-1.jpeg",
      "./assets/frondc4x4-2.jpeg",
      "./assets/frondc4x4-3.jpeg",
      "./assets/frondc4x4-4.jpeg",
      "./assets/frondc4x4-5.jpeg",
      "./assets/frondc4x4-6.jpeg"
    ]
  },
  s10dc4x2: {
    nombre: "s10 Doble Cabina 4x2",
    motor: "2.7L 4 cilindros",
    potencia: "188 HP",
    transmision: "Manual 6 velocidades",
    combustible: "Gasolina",
    largo: "2.322 mt",
    ancho: "1.534 mt",
    alto: ".441 mt",
    capacidad: "5 pasajeros",
    diaria: "$2,177",
    semanal: "$14,693",
    mensual: "$31,150",
      imagenes: [
      "./assets/s10dc4x2-1.jpeg",
      "./assets/s10dc4x2-2.jpeg",
      "./assets/s10dc4x2-3.jpeg",
      "./assets/s10dc4x2-4.jpeg",
      "./assets/s10dc4x2-5.jpeg",
      "./assets/s10dc4x2-6.jpeg"
    ]
  },
  s10dc4x4: {
    nombre: "s10 Doble Cabina 4x4",
    motor: "2.7L 4 cilindros",
    potencia: "188 HP",
    transmision: "Manual 6 velocidades",
    combustible: "Gasolina",
    largo: "2.322 mt",
    ancho: "1.534 mt",
    alto: ".441 mt",
    capacidad: "5 pasajeros",
    diaria: "$2,759",
    semanal: "$18,620",
    mensual: "$40,200",
      imagenes: [
      "./assets/s10dc4x4-1.jpeg",
      "./assets/s10dc4x4-2.jpeg",
      "./assets/s10dc4x4-3.jpeg",
      "./assets/s10dc4x4-4.jpeg",
      "./assets/s10dc4x4-5.jpeg",
      "./assets/s10dc4x4-6.jpeg",
      "./assets/s10dc4x4-7.jpeg"
    ]
  },
     //Pasajeros
  hiace: {
    nombre: "Hiace 12 pasajeros",
    motor: "2.8L 4 cilindros",
    potencia: "174 HP",
    transmision: "Manual 6 velocidades",
    combustible: "Gasolina",
    largo: "5,915 mt",
    ancho: "1,950 mt",
    alto: "2,280 mt",
    capacidad: "12 pasajeros",
    diaria: "$4,135",
    semanal: "$27,762",
    mensual: "$44,500",
      imagenes: [
      "./assets/hiace1.jpeg",
      "./assets/hiace2.jpeg",
      "./assets/hiace3.jpeg",
      "./assets/hiace4.jpeg",
      "./assets/hiace5.jpeg",
      "./assets/hiace6.jpeg",
      "./assets/hiace7.jpeg",
      "./assets/hiace8.jpeg",
      "./assets/hiace9.png",
      "./assets/hiace10.png"
    ]
  },
   sienna: {
    nombre: "Sienna Hibrida",
    motor: "2.5L 4 cilindros",
    potencia: "244 HP",
    transmision: "Engranaje planetario 6 velocidades simuladas",
    combustible: "Gasolina",
    largo: "5,175 mt",
    ancho: "1,995 mt",
    alto: "1,755 mt",
    capacidad: "8 pasajeros",
    diaria: "$4,250",
    semanal: "$27,664",
    mensual: "$56,500",
      imagenes: [
      "./assets/sienna1.jpg",
      "./assets/sienna2.jpg",
      "./assets/sienna3.jpg",
      "./assets/sienna4.jpg",
      "./assets/sienna5.jpg",
      "./assets/sienna6.jpg",
      "./assets/sienna7.jpg",
      "./assets/sienna8.jpg",
      "./assets/sienna9.jpg",
      "./assets/sienna10.jpg",
      "./assets/sienna11.jpg",
      "./assets/sienna12.jpeg",
      "./assets/sienna13.jpeg",
      "./assets/sienna14.jpeg",
      "./assets/sienna15.jpeg",
      "./assets/sienna16.jpeg"
    ]
   },
   xtrail: {
    nombre: "xtrail",
    motor: "2.5L 4 cilindros",
    potencia: "181 HP",
    transmision: "Automatica CVT",
    combustible: "Gasolina",
    largo: "4.680 mt",
    ancho: "1.840 mt",
    alto: "1.695 mt",
    capacidad: "2 pasajeros - 1,000 kg",
    diaria: "$1,821",
    semanal: "$11,900",
    mensual: "$28,050",
      imagenes: [
      "./assets/xtrail1.jpg",
      "./assets/xtrail2.jpg",
      "./assets/xtrail3.jpg",
      "./assets/xtrail4.jpg",
      "./assets/xtrail5.jpg",
      "./assets/xtrail6.jpg"
    ]
  },
   avanza: {
    nombre: "Avazna",
    motor: "1.5L 4 cilindros",
    potencia: "105 HP",
    transmision: "Xtronic CVT",
    combustible: "Gasolina",
    largo: "4.395 mt",
    ancho: "1.730 mt",
    alto: "1.665 mt",
    capacidad: "7 pasajeros",
    diaria: "$1,753",
    semanal: "$11,466",
    mensual: "$28,500",
      imagenes: [
      "./assets/avanza1.jpeg",
      "./assets/avanza2.jpeg",
      "./assets/avanza3.jpeg",
      "./assets/avanza4.jpeg",
      "./assets/avanza5.jpeg",
      "./assets/avanza6.jpeg",
      "./assets/avanza7.jpeg",
      "./assets/avanza8.jpeg",
      "./assets/avanza9.jpeg",
      "./assets/avanza10.jpeg",
      "./assets/avanza11.jpeg"
    ]
  },
   kicks: {
    nombre: "Kicks",
    motor: "1.3L 3 cilindros",
    potencia: "98 HP",
    transmision: "Xtronic CVT",
    combustible: "Gasolina",
    largo: "4.309 mt",
    ancho: "1.961 mt",
    alto: "1.612 mm",
    capacidad: "5 pasajeros",
    diaria: "$1,516",
    semanal: "$9,961",
    mensual: "$24,500",
      imagenes: [
      "./assets/kicks1.jpg",
      "./assets/kicks2.jpg",
      "./assets/kicks3.jpg",
      "./assets/kicks4.jpg",
      "./assets/kicks5.jpg",
      "./assets/kicks6.jpg",
      "./assets/kicks7.png"
    ]
  },
};

function setFicha(modelo) {
  const data = vehicleData[modelo];
  if (!data) return;

  // Actualizar título del vehículo
  document.getElementById("vehicle-title").textContent = data.nombre;

  // Actualizar ficha técnica
  const specs = [
    data.motor,
    data.potencia,
    data.transmision,
    data.combustible,
    data.largo,
    data.ancho,
    data.alto,
    data.capacidad
  ];
  const specsElements = document.querySelectorAll("#ficha-view .space-y-3 div span.font-medium");
  specs.forEach((spec, i) => {
    if (specsElements[i]) specsElements[i].textContent = spec;
  });

  // Actualizar tarifas
  const tarifaElements = document.querySelectorAll('#tarifas-tab .text-3xl');
  if (tarifaElements[0]) tarifaElements[0].textContent = data.diaria;
  if (tarifaElements[1]) tarifaElements[1].textContent = data.semanal;
  if (tarifaElements[2]) tarifaElements[2].textContent = data.mensual;

  // Limpiar galería existente
  const galleryContainer = document.querySelector('#galeria-tab .grid');
  while (galleryContainer.firstChild) {
    galleryContainer.removeChild(galleryContainer.firstChild);
  }

  // Agregar imágenes a la galería
  if (data.imagenes && data.imagenes.length > 0) {
    data.imagenes.forEach(imageUrl => {
      const imageCard = document.createElement('div');
      imageCard.classList.add('aspect-square', 'bg-gray-100', 'rounded-lg', 'overflow-hidden');
      imageCard.innerHTML = `
        <img src="${imageUrl}" alt="${data.nombre}" class="w-full h-full object-cover">
      `;
      galleryContainer.appendChild(imageCard);
    });
  } else {
    // Mostrar botón "Agregar foto" si no hay imágenes
    const addImageCard = document.createElement('div');
    addImageCard.classList.add('aspect-square', 'bg-gray-100', 'rounded-lg', 'flex', 'items-center', 'justify-center');
    addImageCard.innerHTML = `
      <div class="text-center">
        <div class="w-8 h-8 flex items-center justify-center text-gray-400">Agregar foto</div>
      </div>
    `;
    galleryContainer.appendChild(addImageCard);
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.content-section');
  const categoryCards = document.querySelectorAll('.category-card');
  const backBtn = document.querySelector('.back-btn');
  const backToCategoryBtn = document.querySelector('.back-to-category');

  function showSection(sectionId) {
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId + '-section').classList.remove('hidden');
  }

  function updateNavigation(activeItem) {
    navItems.forEach(item => {
      item.classList.remove('text-primary', 'bg-blue-50');
      item.classList.add('text-gray-700');
    });
    activeItem.classList.add('text-primary', 'bg-blue-50');
    activeItem.classList.remove('text-gray-700');
  }

 // Navegación por menú lateral
  navItems.forEach(item => {
    item.addEventListener('click', function () {
      const section = this.dataset.section;
      showSection(section);
      updateNavigation(this);
      if (section !== 'inicio') {
        currentCategory = section;
      }
    });
  });

  // Ir a sección desde tarjetas de inicio
  categoryCards.forEach(card => {
    card.addEventListener('click', function () {
      const category = this.dataset.category;
      currentCategory = category;
      showSection(category);
      const navItem = document.querySelector(`[data-section="${category}"]`);
      if (navItem) updateNavigation(navItem);
    });
  });

  // Volver al inicio
  if (backBtn) {
    backBtn.addEventListener('click', function () {
      showSection('inicio');
      const navItem = document.querySelector('[data-section="inicio"]');
      if (navItem) updateNavigation(navItem);
    });
  }

  if (backToCategoryBtn) {
    backToCategoryBtn.addEventListener('click', function () {
      showSection(currentCategory);
      const navItem = document.querySelector(`[data-section="${currentCategory}"]`);
      if (navItem) updateNavigation(navItem);
    });
  }

  // Manejo de pestañas
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const tabId = this.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('bg-white', 'text-primary', 'shadow-sm'));
      this.classList.add('bg-white', 'text-primary', 'shadow-sm');
      tabContents.forEach(content => content.classList.add('hidden'));
      document.getElementById(tabId + '-tab').classList.remove('hidden');
    });
  });

  // Manejador de clic en vehículos
  const vehicleCards = document.querySelectorAll('.vehicle-card');
  vehicleCards.forEach(card => {
    card.addEventListener('click', function () {
      const model = this.dataset.model;
      showSection('vehicle-detail');
      setFicha(model);
    });
  });

  // Funcionalidad de edición de ficha técnica
  // const editBtn = document.getElementById('edit-ficha-btn');
  // const saveBtn = document.getElementById('save-ficha-btn');
  // const cancelBtn = document.getElementById('cancel-ficha-btn');
  // const fichaView = document.getElementById('ficha-view');
 // const fichaEdit = document.getElementById('ficha-edit');

  // if (editBtn && saveBtn && cancelBtn && fichaView && fichaEdit) {
  //   editBtn.addEventListener('click', function () {
  //    fichaView.classList.add('hidden');
  //    fichaEdit.classList.remove('hidden');
  //    this.classList.add('hidden');
  //  });

    cancelBtn.addEventListener('click', function () {
      fichaView.classList.remove('hidden');
      fichaEdit.classList.add('hidden');
      editBtn.classList.remove('hidden');
    });

    saveBtn.addEventListener('click', function () {
      fichaView.classList.remove('hidden');
      fichaEdit.classList.add('hidden');
      editBtn.classList.remove('hidden');
    });
  
});
