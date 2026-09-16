/* ==========================================================================
   NEXUS TECH CATALOG - ENHANCED SEARCH ENGINE & AESTHETIC WHATSAPP MESSAGES
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  let state = {
    sellerPhone: '573106739836',
    selectedCategory: 'all',
    searchQuery: '',
    maxPrice: 1000000,
    sortOption: 'featured',
    activeProduct: null,
    activeImageIndex: 0,
    selectedColor: null
  };

  // DOM Elements - Navigation & Phone Config
  const activePhoneLabel = document.getElementById('activePhoneLabel');
  const openSettingsBtn = document.getElementById('openSettingsBtn');
  const settingsModal = document.getElementById('settingsModal');
  const closeSettingsModalBtn = document.getElementById('closeSettingsModalBtn');
  const cancelSettingsBtn = document.getElementById('cancelSettingsBtn');
  const savePhoneBtn = document.getElementById('savePhoneBtn');
  const sellerPhoneInput = document.getElementById('sellerPhoneInput');
  const floatingWhatsappBtn = document.getElementById('floatingWhatsappBtn');
  const heroGeneralContactBtn = document.getElementById('heroGeneralContactBtn');
  const footerWhatsappLink = document.getElementById('footerWhatsappLink');

  // DOM Elements - Catalog, Search & Filters
  const searchInput = document.getElementById('searchInput');
  const searchAutocompleteBox = document.getElementById('searchAutocompleteBox');
  const priceRangeInput = document.getElementById('priceRangeInput');
  const priceRangeLabel = document.getElementById('priceRangeLabel');
  const clearFiltersBtn = document.getElementById('clearFiltersBtn');
  const sortSelect = document.getElementById('sortSelect');
  const categoriesContainer = document.getElementById('categoriesContainer');
  const productsGrid = document.getElementById('productsGrid');
  const resultsCount = document.getElementById('resultsCount');

  // DOM Elements - Product Modal & Gallery
  const productModal = document.getElementById('productModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalMainImage = document.getElementById('modalMainImage');
  const modalThumbnails = document.getElementById('modalThumbnails');
  const prevImageBtn = document.getElementById('prevImageBtn');
  const nextImageBtn = document.getElementById('nextImageBtn');
  const modalStockText = document.getElementById('modalStockText');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategoryTag = document.getElementById('modalCategoryTag');
  const modalPrice = document.getElementById('modalPrice');
  const modalOriginalPrice = document.getElementById('modalOriginalPrice');
  const modalDescription = document.getElementById('modalDescription');
  const modalColorOptions = document.getElementById('modalColorOptions');
  const modalFeaturesList = document.getElementById('modalFeaturesList');
  const modalWhatsappMessagePreview = document.getElementById('modalWhatsappMessagePreview');
  const modalBuyWhatsappBtn = document.getElementById('modalBuyWhatsappBtn');

  // Initialize App
  init();

  function init() {
    updateSellerPhoneDisplay();
    renderProducts();
    setupEventListeners();
  }

  /* Helper to format currency in Colombian Pesos (COP) */
  function formatPrice(amount) {
    if (typeof amount !== 'number') return amount;
    return `$${amount.toLocaleString('es-CO')} COP`;
  }

  /* ==========================================================================
     ULTRA-AESTHETIC WHATSAPP FORMATTER
     ========================================================================== */

  function updateSellerPhoneDisplay() {
    activePhoneLabel.textContent = `WA: +${state.sellerPhone}`;
    sellerPhoneInput.value = state.sellerPhone;

    // General WhatsApp Inquiry URL
    const generalMessage = 
      `👋 *CONSULTA GENERAL - CATALOGO NEXUS TECH*\n` +
      `───────────────────────\n` +
      `¡Hola! Estuve viendo su tienda web y quisiera recibir atención personalizada y conocer sus promociones activas.\n` +
      `───────────────────────\n` +
      `🌐 _Enviado desde NexusTech Catalog_`;

    const waUrl = `https://wa.me/${state.sellerPhone}?text=${encodeURIComponent(generalMessage)}`;

    floatingWhatsappBtn.href = waUrl;
    floatingWhatsappBtn.target = "_blank";

    if (heroGeneralContactBtn) {
      heroGeneralContactBtn.onclick = () => window.open(waUrl, '_blank');
    }
    if (footerWhatsappLink) {
      footerWhatsappLink.href = waUrl;
      footerWhatsappLink.target = "_blank";
    }
  }

  function saveSellerPhone() {
    const rawInput = sellerPhoneInput.value.trim().replace(/[^0-9]/g, '');
    if (!rawInput || rawInput.length < 7) {
      alert("Por favor ingresa un número de teléfono válido con código de país (ejemplo: 573001234567).");
      return;
    }
    state.sellerPhone = rawInput;
    localStorage.setItem('nexus_seller_phone', rawInput);
    updateSellerPhoneDisplay();
    closeModal(settingsModal);
  }

  /**
   * Generates a beautifully formatted WhatsApp Markdown message with product photo link
   */
  function buildAestheticWhatsappUrl(product, colorName) {
    const cleanPrice = formatPrice(product.price);
    const colorFormatted = colorName ? `🎨 *Color Elegido:* ${colorName}\n` : '';
    const discountText = product.originalPrice 
      ? ` 🏷️ _(Precio anterior: ~${formatPrice(product.originalPrice)}~)_` 
      : '';
    
    // Convert local relative image path to absolute URL or HTTP preview link
    const mainPhotoUrl = product.images[0].startsWith('http') 
      ? product.images[0] 
      : `${window.location.origin}/${product.images[0]}`;

    const message = 
      `🛍️ *SOLICITUD DE COMPRA - NEXUS TECH*\n` +
      `───────────────────────\n` +
      `📌 *Producto:* ${product.name}\n` +
      `🏷️ *Categoría:* ${product.categoryLabel}\n` +
      `${colorFormatted}` +
      `💵 *Precio:* *${cleanPrice}*${discountText}\n` +
      `🔑 *Ref / SKU:* \`${product.sku}\` \n` +
      `⚡ *Disponibilidad:* ${product.stock}\n` +
      `🖼️ *Foto del Producto:* ${mainPhotoUrl}\n` +
      `───────────────────────\n` +
      `💬 *Mensaje del Cliente:*\n` +
      `"¡Hola! 👋 Quisiera realizar la compra de este equipo. ¿Me podrías brindar los medios de pago y confirmar la disponibilidad de entrega?"\n\n` +
      `🌐 _Catálogo Web NexusTech_`;

    const encodedText = encodeURIComponent(message);
    return `https://wa.me/${state.sellerPhone}?text=${encodedText}`;
  }

  /* ==========================================================================
     ADVANCED SEARCH ENGINE & MULTI-FIELD FILTERING
     ========================================================================== */

  function renderProducts() {
    const tokens = state.searchQuery.toLowerCase().split(' ').filter(t => t.length > 0);

    let filtered = PRODUCTS_DATA.filter(product => {
      // Category Filter
      const matchCategory = state.selectedCategory === 'all' || product.category === state.selectedCategory;

      // Price Range Filter
      const matchPrice = product.price <= state.maxPrice;

      // Tokenized Multi-field Search Index (Matches name, specs, category, SKU, description)
      const searchableText = `${product.name} ${product.categoryLabel} ${product.description} ${product.sku} ${product.shortSpecs.join(' ')} ${product.features.join(' ')}`.toLowerCase();
      
      const matchSearch = tokens.length === 0 || tokens.every(token => searchableText.includes(token));

      return matchCategory && matchPrice && matchSearch;
    });

    // Sorting Engine
    if (state.sortOption === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortOption === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (state.sortOption === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    // Update Counter
    if (resultsCount) {
      resultsCount.textContent = `${filtered.length} producto${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;
    }

    // Render Grid
    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="no-results">
          <i class="fa-solid fa-magnifying-glass"></i>
          <h3>No se encontraron coincidencias</h3>
          <p style="color: var(--text-muted); margin-top: 0.4rem; font-size: 0.9rem;">
            Intenta ajustar tu búsqueda o el rango de precio para encontrar lo que necesitas.
          </p>
          <button class="btn btn-outline btn-sm" id="resetFiltersInnerBtn" style="margin-top: 1rem;">
            <i class="fa-solid fa-rotate-left"></i> Limpiar Filtros
          </button>
        </div>
      `;

      const resetBtn = document.getElementById('resetFiltersInnerBtn');
      if (resetBtn) resetBtn.onclick = resetAllFilters;
      return;
    }

    productsGrid.innerHTML = filtered.map(product => {
      const isSold = product.badge === 'VENDIDO' || (product.stock && product.stock.includes('AGOTADO'));
      const badgeClass = getBadgeClass(product.badge);
      
      let badgeIcon = '<i class="fa-solid fa-tag"></i>';
      if (product.badge && product.badge.includes('NUEVO')) badgeIcon = '<i class="fa-solid fa-sparkles"></i>';
      else if (product.badge && product.badge.includes('USADO')) badgeIcon = '<i class="fa-solid fa-shield-check"></i>';
      else if (product.badge && product.badge.includes('VENDIDO')) badgeIcon = '<i class="fa-solid fa-ban"></i>';

      const originalPriceHtml = product.originalPrice 
        ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` 
        : '';
      
      const mainImg = product.images[0] || '';
      const photoCount = product.images.length;

      return `
        <div class="product-card ${isSold ? 'product-card-sold' : ''}">
          <div class="product-media" onclick="openProductModal('${product.id}')">
            <span class="product-badge ${badgeClass}">${badgeIcon} ${product.badge || 'Nuevo'}</span>
            ${isSold ? `
              <div class="sold-out-overlay">
                <div class="sold-out-stamp">
                  <i class="fa-solid fa-ban"></i> VENDIDO
                </div>
              </div>
            ` : ''}
            <div class="photo-count-pill">
              <i class="fa-solid fa-camera"></i> ${photoCount} fotos
            </div>
            <img src="${mainImg}" alt="${product.name}" loading="lazy">
          </div>

          <div class="product-content">
            <div class="product-category-tag">${product.categoryLabel}</div>
            <h3 class="product-title" onclick="openProductModal('${product.id}')" style="cursor: pointer;">${product.name}</h3>

            <div class="product-rating">
              <i class="fa-solid fa-star"></i>
              <strong>${product.rating}</strong>
              <span>(${product.reviewsCount} opiniones)</span>
            </div>

            <div class="specs-pills">
              ${product.shortSpecs.map(spec => `<span class="spec-pill">${spec}</span>`).join('')}
            </div>

            <div class="product-footer">
              <div class="price-container">
                <span class="current-price" style="${isSold ? 'color: #9ca3af; text-decoration: line-through;' : ''}">${formatPrice(product.price)}</span>
                ${originalPriceHtml}
              </div>

              <div class="card-actions">
                <button class="btn btn-outline btn-sm" onclick="openProductModal('${product.id}')">
                  <i class="fa-solid fa-layer-group"></i> Detalle
                </button>
                <button class="btn ${isSold ? 'btn-outline' : 'btn-whatsapp'} btn-sm" onclick="${isSold ? `openProductModal('${product.id}')` : `quickBuyWhatsapp('${product.id}')`}" title="${isSold ? 'Producto Vendido' : 'Comprar por WhatsApp'}">
                  <i class="fa-solid ${isSold ? 'fa-ban' : 'fa-brands fa-whatsapp'}"></i> ${isSold ? 'Vendido' : 'Comprar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  /* Autocomplete Dropdown Suggestions */
  function updateAutocompleteSuggestions(query) {
    if (!searchAutocompleteBox) return;
    const q = query.trim().toLowerCase();
    if (!q || q.length < 2) {
      searchAutocompleteBox.style.display = 'none';
      return;
    }

    const matches = PRODUCTS_DATA.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.categoryLabel.toLowerCase().includes(q) ||
      p.shortSpecs.some(s => s.toLowerCase().includes(q))
    ).slice(0, 5);

    if (matches.length === 0) {
      searchAutocompleteBox.style.display = 'none';
      return;
    }

    searchAutocompleteBox.innerHTML = matches.map(m => `
      <div class="autocomplete-item" onclick="selectAutocompleteProduct('${m.id}')">
        <img src="${m.images[0]}" alt="${m.name}">
        <div>
          <div style="font-weight: 700; font-size: 0.88rem; color: var(--text-main);">${m.name}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">$${m.price.toFixed(2)} USD — ${m.categoryLabel}</div>
        </div>
      </div>
    `).join('');

    searchAutocompleteBox.style.display = 'block';
  }

  window.selectAutocompleteProduct = function(id) {
    if (searchAutocompleteBox) searchAutocompleteBox.style.display = 'none';
    openProductModal(id);
  };

  function resetAllFilters() {
    state.searchQuery = '';
    state.selectedCategory = 'all';
    state.maxPrice = 2500;
    state.sortOption = 'featured';

    if (searchInput) searchInput.value = '';
    if (priceRangeInput) priceRangeInput.value = 2500;
    if (priceRangeLabel) priceRangeLabel.textContent = '$2,500 USD';
    if (sortSelect) sortSelect.value = 'featured';

    if (categoriesContainer) {
      categoriesContainer.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
      const allPill = categoriesContainer.querySelector('[data-category="all"]');
      if (allPill) allPill.classList.add('active');
    }

    renderProducts();
  }

  function getBadgeClass(badge) {
    if (!badge) return 'badge-default';
    const b = badge.toLowerCase();
    if (b.includes('vendido') || b.includes('agotado')) return 'badge-sold';
    if (b.includes('nuevo')) return 'badge-new';
    if (b.includes('usado')) return 'badge-used';
    if (b.includes('destacado')) return 'badge-featured';
    if (b.includes('oferta')) return 'badge-offer';
    return 'badge-default';
  }

  /* ==========================================================================
     PRODUCT MODAL & GALLERY LOGIC
     ========================================================================== */

  window.openProductModal = function(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    state.activeProduct = product;
    state.activeImageIndex = 0;
    state.selectedColor = product.colors && product.colors.length > 0 ? product.colors[0] : null;

    // Populate Details
    const isSold = product.badge === 'VENDIDO' || (product.stock && product.stock.includes('AGOTADO'));
    const modalSoldOverlay = document.getElementById('modalSoldOverlay');
    if (modalSoldOverlay) {
      modalSoldOverlay.style.display = isSold ? 'flex' : 'none';
    }

    modalTitle.textContent = product.name;
    modalCategoryTag.textContent = product.categoryLabel;
    modalStockText.textContent = product.stock;
    modalPrice.textContent = formatPrice(product.price);
    modalOriginalPrice.textContent = product.originalPrice ? formatPrice(product.originalPrice) : '';
    modalDescription.textContent = product.description;

    // Features List
    modalFeaturesList.innerHTML = product.features.map(f => `
      <li><i class="fa-solid fa-check"></i> ${f}</li>
    `).join('');

    // Color Options Selector
    if (product.colors && product.colors.length > 0) {
      modalColorOptions.innerHTML = product.colors.map((c, index) => `
        <button class="color-option-btn ${index === 0 ? 'active' : ''}" data-index="${index}">
          <span class="color-swatch" style="background-color: ${c.hex};"></span>
          <span>${c.name}</span>
        </button>
      `).join('');

      const colorBtns = modalColorOptions.querySelectorAll('.color-option-btn');
      colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          colorBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const idx = parseInt(btn.getAttribute('data-index'));
          state.selectedColor = product.colors[idx];
          updateWhatsappMessagePreview();
        });
      });
    } else {
      modalColorOptions.innerHTML = `<span style="font-size: 0.85rem; color: var(--text-muted);">Estándar</span>`;
    }

    renderModalGallery();
    updateWhatsappMessagePreview();

    openModal(productModal);
  };

  function renderModalGallery() {
    const images = state.activeProduct.images;
    if (!images || images.length === 0) return;

    modalMainImage.src = images[state.activeImageIndex];
    modalMainImage.alt = state.activeProduct.name;

    modalThumbnails.innerHTML = images.map((img, index) => `
      <div class="thumb-item ${index === state.activeImageIndex ? 'active' : ''}" data-index="${index}">
        <img src="${img}" alt="Thumbnail ${index + 1}">
      </div>
    `).join('');

    const thumbs = modalThumbnails.querySelectorAll('.thumb-item');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.getAttribute('data-index'));
        setGalleryImage(idx);
      });
    });
  }

  function setGalleryImage(index) {
    if (!state.activeProduct || !state.activeProduct.images) return;
    const images = state.activeProduct.images;
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;

    state.activeImageIndex = index;
    modalMainImage.src = images[index];

    const thumbs = modalThumbnails.querySelectorAll('.thumb-item');
    thumbs.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }

  function updateWhatsappMessagePreview() {
    if (!state.activeProduct) return;
    const colorName = state.selectedColor ? state.selectedColor.name : '';
    const product = state.activeProduct;
    const cleanPrice = formatPrice(product.price);
    
    // Web Preview HTML (Clean Human-Readable Formatting)
    const colorLine = colorName ? `<div>🎨 <strong>Color Elegido:</strong> ${colorName}</div>` : '';
    const discountLine = product.originalPrice 
      ? `<span style="font-size: 0.75rem; color: #047857; margin-left: 4px;">(Antes: ${formatPrice(product.originalPrice)})</span>` 
      : '';

    const mainPhotoUrl = product.images[0].startsWith('http') 
      ? product.images[0] 
      : `${window.location.origin}/${product.images[0]}`;

    const previewHtml = 
      `<div style="font-weight: 800; color: #047857; margin-bottom: 0.4rem; font-size: 0.88rem;">🛍️ SOLICITUD DE COMPRA — NEXUS TECH</div>` +
      `<div style="border-bottom: 1px dashed #a7f3d0; margin-bottom: 0.5rem; padding-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.3rem;">` +
      `  <div>📌 <strong>Producto:</strong> ${product.name}</div>` +
      `  <div>🏷️ <strong>Categoría:</strong> ${product.categoryLabel}</div>` +
      `  ${colorLine}` +
      `  <div>💵 <strong>Precio:</strong> <span style="color: #047857; font-weight: 800; font-family: var(--font-mono);">${cleanPrice}</span> ${discountLine}</div>` +
      `  <div>🔑 <strong>Ref / SKU:</strong> <code style="background: #d1fae5; border: 1px solid #6ee7b7; padding: 1px 6px; border-radius: 4px; color: #065f46; font-family: var(--font-mono);">${product.sku}</code></div>` +
      `  <div>⚡ <strong>Disponibilidad:</strong> ${product.stock}</div>` +
      `  <div>🖼️ <strong>Foto del Producto:</strong> <a href="${mainPhotoUrl}" target="_blank" style="color: #047857; font-weight: 700;">Ver Imagen HD ↗</a></div>` +
      `</div>` +
      `<div>💬 <strong>Mensaje del Cliente:</strong></div>` +
      `<div style="font-style: italic; margin-top: 0.2rem; color: #065f46;">"¡Hola! 👋 Quisiera realizar la compra de este equipo. ¿Me podrías brindar los medios de pago y confirmar la disponibilidad de entrega?"</div>`;

    modalWhatsappMessagePreview.innerHTML = previewHtml;

    // Actual WhatsApp URL (with WhatsApp markdown formatting)
    const url = buildAestheticWhatsappUrl(product, colorName);
    modalBuyWhatsappBtn.onclick = () => {
      window.open(url, '_blank');
    };
  }

  window.quickBuyWhatsapp = function(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;
    const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0].name : '';
    const url = buildAestheticWhatsappUrl(product, defaultColor);
    window.open(url, '_blank');
  };

  /* ==========================================================================
     EVENT LISTENERS & MODAL HANDLERS
     ========================================================================== */

  function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function setupEventListeners() {
    // Search Input & Autocomplete
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        updateAutocompleteSuggestions(state.searchQuery);
        renderProducts();
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-input-wrapper') && searchAutocompleteBox) {
          searchAutocompleteBox.style.display = 'none';
        }
      });
    }

    // Price Range Slider
    if (priceRangeInput) {
      priceRangeInput.addEventListener('input', (e) => {
        state.maxPrice = parseFloat(e.target.value);
        if (priceRangeLabel) priceRangeLabel.textContent = `$${state.maxPrice.toLocaleString('en-US')} USD`;
        renderProducts();
      });
    }

    // Clear Filters
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener('click', resetAllFilters);
    }

    // Sort Dropdown
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.sortOption = e.target.value;
        renderProducts();
      });
    }

    // Category Pills
    if (categoriesContainer) {
      categoriesContainer.addEventListener('click', (e) => {
        const pill = e.target.closest('.category-pill');
        if (!pill) return;

        categoriesContainer.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        state.selectedCategory = pill.getAttribute('data-category');
        renderProducts();
      });
    }

    // Modal Close
    closeModalBtn.addEventListener('click', () => closeModal(productModal));
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeModal(productModal);
    });

    // Gallery Prev / Next
    prevImageBtn.addEventListener('click', () => setGalleryImage(state.activeImageIndex - 1));
    nextImageBtn.addEventListener('click', () => setGalleryImage(state.activeImageIndex + 1));

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (!productModal.classList.contains('active')) return;
      if (e.key === 'ArrowLeft') setGalleryImage(state.activeImageIndex - 1);
      if (e.key === 'ArrowRight') setGalleryImage(state.activeImageIndex + 1);
      if (e.key === 'Escape') closeModal(productModal);
    });

    // Phone Settings Modal
    openSettingsBtn.addEventListener('click', () => openModal(settingsModal));
    closeSettingsModalBtn.addEventListener('click', () => closeModal(settingsModal));
    cancelSettingsBtn.addEventListener('click', () => closeModal(settingsModal));
    savePhoneBtn.addEventListener('click', saveSellerPhone);
    settingsModal.addEventListener('click', (e) => {
      if (e.target === settingsModal) closeModal(settingsModal);
    });
  }
});
