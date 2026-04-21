
const PRODUCTS = [
  {
    id: "capemay",
    name: "Cape May",
    categories: ["ledgestone", "square-rectangle"],
    cover: "images/capemay/CapeMayhouse.png",
    images: [
      "images/capemay/CapeMay.jpg",
      "images/capemay/CapeMayhouse.png",
      "images/capemay/CapeMayhouse2.png"
    ],
    description: "Cape May's fairly monochromatic light gray palette is offset by subtle sparkle, resulting from mica inclusions.  This is an excellent material for clients who want a clean, linear look.",
    specs: {
      "Stone Type": "Ledgestone / Square & Rectangle",
      "Colors": "Blended grays, tans, and browns"
    }
  },

  {
    id: "castlerock",
    name: "Castle Rock",
    categories: ["square-rectangle"],
    cover: "images/castlerock/CastleRockPanel.png",
    images: [
      "images/castlerock/CastleRockEntryWall.png",
      "images/castlerock/CastleRockHouse007.jpg",
      "images/castlerock/CastleRockHouse009.jpg",
      "images/castlerock/CastleRockHouseFront.png",
      "images/castlerock/CastleRockPorch.png",
      "images/castlerock/CastleRockWall.png"
    ],
    description: "This stone offers a rich, warm, natural look, with shades of brown, tan, rust and gray which is perfect for rustic, country manor and casual settings.",
    specs: {
      "Stone Type": "Square & Rectangle",
      "Colors": "Blended browns, tans, rusts and grays"
    }
  },
  {
    id: "cedarfield",
    name: "Cedarfield",
    categories: ["ledgestone"],
    cover: "images/cedarfield/Cedarfieldledge1.webp",
    images:[
      "images/cedarfield/Cedarfield-Storefront.webp",
      "images/cedarfield/Cedarfield.jpg",
      "images/cedarfield/Cedarfieldledge.jpg",
      "images/cedarfield/Cedarfieldledge2.webp"
    ],
    description: "",
    specs: {
      "Stone Type": "Ledgestone",
      "Colors": "Brown, buff, gray, plum, red and rust"
    }
  },
  {
    id: "coldriverrounds",
    name: "Cold River Rounds",
    categories: ["mosaic"],
    cover: "images/coldriverrounds/ColdRiverRound.jpg",
    images: [
      "images/coldriverrounds/ColdRiverRound.jpg",
      "images/coldriverrounds/ColdRiverRoundFireplace.jpg",
      "images/coldriverrounds/ColdRiverDoor.jpeg",
      "images/coldriverrounds/ColdRiverWall.jpeg",
      "images/coldriverrounds/ColdRiverWall2.jpeg"
    ],
    description: "",
    specs: {
      "Stone Type": "Mosaic",
      "Colors": "Browns, buff, red, gray, cream and black"
    }
  },
  {
    id: "hydepark",
    name: "Hyde Park",
    categories: ["ledgestone","square-rectangle","mosaic","mini-ledgestone"],
    cover: "images/hydepark/HydeParkPanel.png",
    images:[
      "images/hydepark/HydeParkchimney.jpg",
      "images/hydepark/HydeParkHouse.jpg",
      "images/hydepark/HydeParkLedge.png",
      "images/hydepark/HydeParkLedge1.webp",
      "images/hydepark/HydeParkMosaic.webp",
      "images/hydepark/HydeParkRR.webp",
      "images/hydepark/HydeParkRR1.webp",
      "images/hydepark/HydeParkRR2.webp",
      "images/hydepark/HydeParkRR3.webp",
      "images/hydepark/HydeParkSR.jpg"
    ],
    description: "This stone offers a rich, natural, weathered look in toness of brown, tan, green and gray, which is perfect for rustic, country manor, contemporary and casual settings.  ",
    specs: {
      "Stone Type": "Ledgestone, Square & Rectangle, Mosaic, Mini Ledgestone",
      "Colors": "Blended browns, tans, greens and grays"
    }
  },
  {
    id: "pinehurst",
    name: "Pinehurst",
    categories: ["ledgestone","square-rectangle","mosaic"],
    cover: "images/pinehurst/PinehurstPanel.jpg",
    images:[
      "images/pinehurst/PinehurstFront.webp",
      "images/pinehurst/PinehurstInstall.jpg",
      "images/pinehurst/PinehurstLedge.webp",
      "images/pinehurst/PinehurstLedge2.webp",
      "images/pinehurst/PinehurstLedge3.webp",
      "images/pinehurst/PinehurstSR.jpg"
    ],
    description: "",
    specs: {
      "Stone Type": "Ledgestone, Square & Rectangle, Mosaic",
      "Colors": "Shades of buff, yellow, gray and green"
    }
  },
  {
    id: "brindle",
    name: "Brindle",
    categories: [""],
    cover: "images/brindle/BrindlePanelMortar.jpg",
    images:[
      "images/brindle/BrindlePanelMortar.jpg",
      "images/brindle/BrindlePanelDry.jpg",
      "images/brindle/Brindle.jpg"
    ],
    description: "",
    specs: {
      "Stone Type": "",
      "Colors": ""
    }

  },
  {
    id: "countrywine",
    name: "Country Wine",
    categories: ["ledgestone"],
    cover: "images/countrywine/CountryWinePanel.jpg",
    images:[
      "images/countrywine/CountryWineDoor.jpg",
      "images/countrywine/CountryWineHouse.jpg",
      "images/countrywine/CountryWineWall.jpg"
    ],
    description: "Country Wine is a limestone that offers exquisite coloration with its weathered, split face.",
    specs: {
      "Stone Type": "Ledgestone",
      "Colors": "Soft tones of Gray, Peach, Lavender, Yellow"
    }
  },
  {
    id: "poconobrown",
    name: "Pocono Brown",
    categories: ["ledgestone"],
    cover: "images/poconobrown/PoconoBrownLoose.jpg",
    images:[
      "images/poconobrown/PoconoBrown1.jpg",
      "images/poconobrown/PoconoBrown2.jpg",
      
      "images/poconobrown/PoconoBrown4.jpg",
      "images/poconobrown/PoconoBrownFireplace.JPG",
      "images/poconobrown/PoconoBrownFireplace2.JPG",
      "images/poconobrown/PoconoBrownFireplace3.JPG",
      "images/poconobrown/PoconoBrownFireplace4.JPG",
      "images/poconobrown/PoconoBrownFireplace5.JPG",
      "images/poconobrown/PoconoBrownHouse.JPG",
      "images/poconobrown/PoconoBrownHouse2.JPG",
      "images/poconobrown/PoconoBrownLedge.jpg",
      "images/poconobrown/PoconoBrownWall.JPG",
      "images/poconobrown/PoconoBrownWall2.jpg"
    ],
    description: "Pocono Brown offers a range of colors from rich browns to neutral creams and tans, with a blend of natural weathered face and split face on the exposed face surface.  This stone offers a rich, warm, natural look, which is perfect for rustic, country manor and casual settings.",
    specs: {
      "Stone Type": "Ledgestone",
      "Colors": "Antique tones – rich browns, creams, black"
    }
  },
  {
    id: "ravenwood",
    name: "Ravenwood",
    categories: ["square-rectangle","mosaic"],
    cover: "images/ravenwood/RavenwoodSR.jpg",
    images:[ 
      "images/ravenwood/RavenwoodChimney.jpg",
      "images/ravenwood/RavenwoodChimney2.jpg",
      "images/ravenwood/RavenwoodFS1.jpg",
      "images/ravenwood/RavenwoodFS3.jpg",
      "images/ravenwood/RavenwoodFS4.jpg",
      "images/ravenwood/RavenwoodFS5.jpg",
      "images/ravenwood/RavenwoodMosaic.jpg",
      "images/ravenwood/RavenwoodSq1.jpg",
      "images/ravenwood/RavenwoodSq2.jpg",
      "images/ravenwood/RavenwoodSquare.jpg",
      "images/ravenwood/RavenwoodSR.jpg",
      "images/ravenwood/RavenwoodWindows.jpg"
    ],
    description: "Ravenwood Blend is a sandstone found in North Central Pennsylvania.",
    specs: {
      "Stone Type": "Square & Rectangle, Mosaic",
      "Colors": "Browns, grays, tans, and plums"
    }
  },
  {
    id: "shimmeringdiamonds",
    name: "Shimmering Diamonds",
    categories: ["square-rectangle"],
    cover: "images/shimmeringdiamonds/SDBlock.jpg",
    images: [
      "images/shimmeringdiamonds/SDHouse1.jpg",
      "images/shimmeringdiamonds/SDHouse2.jpg",
      "images/shimmeringdiamonds/SDHouse3.jpg"
    ],
    description: "",
    specs: {
      "Stone Type": "Square & Rectangle",
      "Colors": "Light Gray with small amounts of Yellowish Gray"
    }
  },
  {
    id: "bluestone",
    name: "Bluestone",
    categories: [""],
    cover: "images/bluestone/BluestoneBlend.jpg",
    images:[
      "images/bluestone/BluestoneBlend.jpg",
      "images/bluestone/BluestoneLedge.jpg",
      "images/bluestone/BluestoneLedge2.jpg",
    ],
    description: "",
    specs: {
      "Stone Type": "",
      "Colors": ""
    }
  },
  {
    id: "celedon",
    name: "Celedon",
    categories: [""],
    cover: "images/celedon/CeledonPanel.jpg",
    images:[
      "images/celedon/CeledonPanel.jpg",
      "images/celedon/CeledonStack.jpg"
    ],
    description: "",
    specs: {
      "Stone Type": "",
      "Colors": ""
    }
  },
  {
    id: "crystaldark",
    name: "Crystal Dark",
    categories: [""],
    cover: "images/crystaldark/CrystalDarkPanel.jpg",
    images:[
      "images/crystaldark/CrystalDarkPanel.jpg",
    ],
    description: "",
    specs: {
      "Stone Type": "",
      "Colors": ""
    }
  },
  {
    id: "crystallite",
    name: "Crystal Lite",
    categories: [""],
    cover: "images/crystallite/CrystalLitePanel.jpg",
    images:[
      "images/crystallite/CrystalLitePanel.jpg",
      "images/crystallite/CrystalLite1.jpg",
    ],
    description: "",
    specs: {
      "Stone Type": "",
      "Colors": ""
    }
  },
  {
    id: "desertsunburst",
    name: "Desert Sunburst",
    categories: [""],
    cover: "images/desertsunburst/DesertSunburstPanel.jpg",
    images:[
      "images/desertsunburst/DesertSunburstPanel.jpg",
      "images/desertsunburst/DesertSunburst1.jpg",
      "images/desertsunburst/DesertSunburst2.jpg",
    ],
    description: "",
    specs: {
      "Stone Type": "",
      "Colors": ""
    }
  },
  {
    id: "earthblend",
    name: "Earth Blend",
    categories: ["mosaic"],
    cover: "images/earthblend/EarthBlendMosaic.jpg",
    images:[
      "images/earthblend/EarthBlendMosaic.jpg",
    ],
    description: "",
    specs: {
      "Stone Type": "",
      "Colors": ""
    }
  },
  {
    id: "nittany",
    name: "Nittany",
    categories: [""],
    cover: "images/nittany/NittanyPanel.jpg",
    images:[
      "images/nittany/NittanyBuff.jpg",
      "images/nittany/NittanyFireplace.jpg",
      "images/nittany/NittanyLedgeInstall.jpg"
    ],
    description: "",
    specs: {
      "Stone Type": "",
      "Colors": ""
    }
  },
  {
    id: "silverbay",
    name: "Silver Bay",
    categories: [""],
    cover: "images/silverbay/SilverBayPanel.jpg",
    images:[
      "images/silverbay/SilverBay1.jpg",
      "images/silverbay/SilverBay2.jpg",
      "images/silverbay/SilverBay3.jpg",
      "images/silverbay/SilverBayFireplace.jpg"
    ],
    description: "",
    specs: {
      "Stone Type": "",
      "Colors": ""
    }
  },
  {
    id: "timberridge",
    name: "Timber Ridge",
    categories: ["mosaic","ledgestone"],
    cover: "images/timberridge/TimberRidgePanel.webp",
    images:[
      "images/timberridge/TimberRidgePanel.webp",
      "images/timberridge/TimberRidgeMosaic.jpg",
      "images/timberridge/TimberRidgeKitchen.jpg",
      "images/timberridge/TimberRidgeWall.png"
    ],
    description: "",
    specs: {
      "Stone Type": "Mosaic, Ledgestone",
      "Colors": ""
    }
  },
  {
    id: "wildginger",
    name: "Wild Ginger",
    categories: [""],
    cover: "images/wildginger/WildGinger.jpg",
    images:[
      "images/wildginger/WildGinger.jpg",
    ],
    description: "",
    specs: {
      "Stone Type": "",
      "Colors": ""
    }
  },

];

const gridEl = document.getElementById("productsGrid");
const modalEl = document.getElementById("productModal");
const modalTitleEl = document.getElementById("modalTitle");
const modalDescriptionEl = document.getElementById("modalDescription");
const modalMainImageEl = document.getElementById("modalMainImage");
const modalThumbsEl = document.getElementById("modalThumbs");
const modalSpecsEl = document.getElementById("modalSpecs");
const filterButtons = Array.from(document.querySelectorAll(".filter-pill"));

let activeFilter = "all";

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function prettyCategory(cat) {
  const map = {
    "mini-ledgestone": "Mini Ledgestone",
    ledgestone: "Ledgestone",
    "square-rectangle": "Square + Rectangle",
    mosaic: "Mosaic",
    "building-stone": "Building Stone"
  };
  return map[cat] || cat;
}

function getVisibleProducts() {
  if (activeFilter === "all") return PRODUCTS;
  return PRODUCTS.filter(p => (p.categories || []).includes(activeFilter));
}

function applyFilterFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");
  if (!filter) return;

  const allowed = new Set(["all", "mini-ledgestone", "ledgestone", "square-rectangle", "mosaic", "building-stone"]);
  if (!allowed.has(filter)) return;

  activeFilter = filter;

  for (const b of filterButtons) b.classList.remove("is-active");
  const match = filterButtons.find(b => b.dataset.filter === filter);
  if (match) match.classList.add("is-active");
}

function renderGrid() {
  const visible = getVisibleProducts();

  if (!gridEl) {
    console.error('Missing element: #productsGrid');
    return;
  }

  if (visible.length === 0) {
    gridEl.innerHTML = `
      <div style="width:100%; text-align:center; padding: 1.5rem; color:#6d645c;">
        No products found for this filter.
      </div>
    `;
    return;
  }

  gridEl.innerHTML = visible.map(p => `
    <article class="product-card" data-product-id="${escapeHtml(p.id)}" tabindex="0" role="button"
      aria-label="Open ${escapeHtml(p.name)} details">
      <img src="${escapeHtml(p.cover)}" alt="${escapeHtml(p.name)} stone veneer" loading="lazy" />
      <div class="card-body">
        <h3>${escapeHtml(p.name)}</h3>
        <div class="card-meta">${(p.categories || []).map(prettyCategory).join(" • ")}</div>
      </div>
    </article>
  `).join("");

  Array.from(gridEl.querySelectorAll(".product-card")).forEach(card => {
    const id = card.dataset.productId;
    card.addEventListener("click", () => openModal(id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(id);
      }
    });
  });
}

function openModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p || !modalEl) return;

  if (modalTitleEl) modalTitleEl.textContent = p.name || "";
  if (modalDescriptionEl) modalDescriptionEl.textContent = p.description || "";

  const mainSrc = (p.images && p.images[0]) ? p.images[0] : p.cover;
  if (modalMainImageEl) {
    modalMainImageEl.src = mainSrc;
    modalMainImageEl.alt = `${p.name} stone veneer`;
  }

  const imgs = (p.images && p.images.length) ? p.images : [p.cover];
  if (modalThumbsEl) {
    modalThumbsEl.innerHTML = imgs.map((src, idx) => `
      <button class="modal-thumb" type="button" data-src="${escapeHtml(src)}" aria-label="View photo ${idx + 1}">
        <img src="${escapeHtml(src)}" alt="" loading="lazy" />
      </button>
    `).join("");

    Array.from(modalThumbsEl.querySelectorAll("button")).forEach(btn => {
      btn.addEventListener("click", () => {
        if (modalMainImageEl) modalMainImageEl.src = btn.dataset.src;
      });
    });
  }

  if (modalSpecsEl) {
    modalSpecsEl.innerHTML = "";
    if (p.specs && typeof p.specs === "object") {
      for (const [k, v] of Object.entries(p.specs)) {
        modalSpecsEl.insertAdjacentHTML("beforeend", `
          <dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd>
        `);
      }
    }
  }

  modalEl.classList.add("is-open");
  modalEl.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modalEl) return;
  modalEl.classList.remove("is-open");
  modalEl.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter;

    for (const b of filterButtons) b.classList.remove("is-active");
    btn.classList.add("is-active");

    const url = new URL(window.location.href);
    url.searchParams.set("filter", activeFilter);
    window.history.replaceState({}, "", url);

    renderGrid();
  });
});

if (modalEl) {
  modalEl.addEventListener("click", (e) => {
    if (e.target && e.target.dataset && e.target.dataset.close === "true") {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalEl && modalEl.classList.contains("is-open")) {
    closeModal();
  }
});

applyFilterFromUrl();
renderGrid();
