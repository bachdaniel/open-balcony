// ── PLANT DATA ────────────────────────────────────────────────
// Fill in your plants here tonight.
// Each plant needs: name, image path, description, and care info.
// botanical, emoji, and care.tips are all optional.
//
// Image paths are relative, e.g. "images/rose-garden/my-rose.jpg"
// Put your photos in the images/rose-garden/ and images/lounge/ folders.

const plants = {
  roseGarden: [
    {
      name: "TODO: Plant name",
      botanical: "TODO: Botanical name",   // remove line if not wanted
      emoji: "🌹",                          // shown if image is missing
      image: "images/rose-garden/plant1.jpg",
      description: "TODO: Write a sentence or two about this plant — where it came from, what makes it special, or something you noticed about it this spring.",
      care: {
        water: "TODO: e.g. Water twice a week in dry spells",
        sun: "TODO: e.g. Full sun, 6+ hours a day",
        tips: "TODO: e.g. Deadhead spent blooms to encourage new flowers"  // remove line if not wanted
      }
    },
    {
      name: "TODO: Plant name",
      botanical: "",
      emoji: "🌷",
      image: "images/rose-garden/plant2.jpg",
      description: "TODO: Description.",
      care: {
        water: "TODO:",
        sun: "TODO:",
        tips: ""
      }
    },
    {
      name: "TODO: Plant name",
      botanical: "",
      emoji: "🌸",
      image: "images/rose-garden/plant3.jpg",
      description: "TODO: Description.",
      care: {
        water: "TODO:",
        sun: "TODO:",
        tips: ""
      }
    }
    // Add more plants by copying the block above and pasting after this line
  ],

  lounge: [
    {
      name: "TODO: Plant name",
      botanical: "",
      emoji: "🌿",
      image: "images/lounge/plant1.jpg",
      description: "TODO: Description.",
      care: {
        water: "TODO:",
        sun: "TODO:",
        tips: ""
      }
    },
    {
      name: "TODO: Plant name",
      botanical: "",
      emoji: "🍃",
      image: "images/lounge/plant2.jpg",
      description: "TODO: Description.",
      care: {
        water: "TODO:",
        sun: "TODO:",
        tips: ""
      }
    },
    {
      name: "TODO: Plant name",
      botanical: "",
      emoji: "🌱",
      image: "images/lounge/plant3.jpg",
      description: "TODO: Description.",
      care: {
        water: "TODO:",
        sun: "TODO:",
        tips: ""
      }
    }
    // Add more plants by copying the block above and pasting after this line
  ]
};

// ── RENDER CARDS ───────────────────────────────────────────────
function renderCards(gridId, plantList) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  plantList.forEach((plant, index) => {
    const card = document.createElement('article');
    card.className = 'plant-card';
    card.dataset.index = index;
    card.dataset.section = gridId;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Learn about ${plant.name}`);

    card.innerHTML = `
      <div class="card-image-wrap">
        <img
          src="${plant.image}"
          alt="${plant.name}"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="card-placeholder" style="display:none">${plant.emoji || '🌿'}</div>
      </div>
      <div class="card-body">
        <p class="card-name">${plant.name}</p>
        ${plant.botanical ? `<p class="card-botanical">${plant.botanical}</p>` : ''}
        <p class="card-hint">Tap for care info →</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ── MODAL ─────────────────────────────────────────────────────
const overlay   = document.getElementById('modal-overlay');
const closeBtn  = document.getElementById('modal-close');
const imgEl     = document.getElementById('modal-image');
const placeholderEl = document.getElementById('modal-placeholder');
const nameEl    = document.getElementById('modal-name');
const botanicalEl = document.getElementById('modal-botanical');
const descEl    = document.getElementById('modal-desc');
const careList  = document.getElementById('modal-care-list');

function openModal(plant) {
  nameEl.textContent = plant.name;
  botanicalEl.textContent = plant.botanical || '';
  descEl.textContent = plant.description;

  // Image
  imgEl.src = plant.image;
  imgEl.alt = plant.name;
  imgEl.style.display = 'block';
  placeholderEl.textContent = plant.emoji || '🌿';
  placeholderEl.style.display = 'none';

  imgEl.onerror = () => {
    imgEl.style.display = 'none';
    placeholderEl.style.display = 'flex';
  };

  // Care items
  careList.innerHTML = '';
  const careMap = [
    { icon: '💧', label: 'Water', value: plant.care.water },
    { icon: '☀️', label: 'Sun',   value: plant.care.sun },
    { icon: '💡', label: 'Tips',  value: plant.care.tips }
  ];

  careMap.forEach(({ icon, label, value }) => {
    if (!value) return;
    const li = document.createElement('li');
    li.innerHTML = `<span class="care-icon">${icon}</span><span><strong>${label}:</strong> ${value}</span>`;
    careList.appendChild(li);
  });

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Focus trap
  closeBtn.focus();
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ── EVENT LISTENERS ────────────────────────────────────────────
document.addEventListener('click', (e) => {
  const card = e.target.closest('.plant-card');
  if (card) {
    const section = card.dataset.section === 'rose-garden-grid' ? 'roseGarden' : 'lounge';
    const plant = plants[section][card.dataset.index];
    openModal(plant);
    return;
  }

  if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Keyboard activation for cards
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('plant-card')) {
    e.preventDefault();
    e.target.click();
  }
});

closeBtn.addEventListener('click', closeModal);

// ── ACTIVE NAV HIGHLIGHT ───────────────────────────────────────
const navLinks = document.querySelectorAll('.section-nav a');
const sections = document.querySelectorAll('.plant-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// ── INIT ───────────────────────────────────────────────────────
renderCards('rose-garden-grid', plants.roseGarden);
renderCards('lounge-grid', plants.lounge);
