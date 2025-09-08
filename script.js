// Scroll Animations with Intersection Observer
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Mobile Menu Toggle Functionality
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const body = document.body;

  // Toggle mobile menu
  function toggleMobileMenu() {
    const isActive = mobileMenuOverlay.classList.contains('active');
    
    if (isActive) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    mobileMenuOverlay.classList.add('active');
    mobileMenuBtn.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeMobileMenu() {
    mobileMenuOverlay.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    body.style.overflow = ''; // Restore scrolling
  }

  // Event listeners
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  // Close menu when clicking on overlay
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', (e) => {
      if (e.target === mobileMenuOverlay) {
        closeMobileMenu();
      }
    });
  }

  // Close menu when clicking on navigation links
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // Mobile language selector only (desktop removed)
}

// Initialize animations and mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initMobileMenu();
});

const translations = {
  ro: {
    brand: 'Move.md',
    language_label: 'Limbă',
    cta_call: 'Comanda acum',
    request_quote: 'Cere ofertă',
    tagline: 'Ridicăm mobila, ferestre, materiale de construcții.',
    hero_title: 'Transportăm tot ce ai nevoie, în siguranță',
    hero_subtitle: 'De la 600 lei. Sună acum: 060786666',
    services_title: 'Servicii',
    service_1: 'Evacuator auto și utilaje',
    service_2: 'Transport mărfuri voluminoase',
    service_3: 'Asistență rutieră și relocări',
    pricing_title: 'Tarife',
    pricing_desc: 'Prețuri de la 600 lei în Chișinău; în afara orașului — la kilometru. Cere ofertă.',
    contact_title: 'Contact',
    contact_desc: 'Suntem disponibili 24/7. Ne găsești la',
    phone_label: 'Telefon'
  },
  ru: {
    brand: 'Move.md',
    language_label: 'Язык',
    cta_call: 'Позвонить сейчас',
    request_quote: 'Запросить цену',
    tagline: 'Эвакуатор и перевозки, везде и в любое время.',
    hero_title: 'Перевезём всё, что нужно, безопасно',
    hero_subtitle: 'От 600 леев. Звоните: 060786666',
    services_title: 'Услуги',
    service_1: 'Эвакуатор авто и техники',
    service_2: 'Перевозка крупногабаритных грузов',
    service_3: 'Дорожная помощь и переезды',
    pricing_title: 'Тарифы',
    pricing_desc: 'Цены от 600 леев по Кишинёву; за городом — по километражу. Запросите цену.',
    contact_title: 'Контакт',
    contact_desc: 'Мы на связи 24/7. Наш номер',
    phone_label: 'Телефон'
  },
  en: {
    brand: 'Move.md',
    language_label: 'Language',
    cta_call: 'Call now',
    request_quote: 'Get a quote',
    tagline: 'Tow truck and transport, anywhere, anytime.',
    hero_title: 'We transport everything you need, safely',
    hero_subtitle: 'From 600 MDL. Call: 060786666',
    services_title: 'Services',
    service_1: 'Tow truck for cars and equipment',
    service_2: 'Large goods transportation',
    service_3: 'Roadside assistance and relocations',
    pricing_title: 'Pricing',
    pricing_desc: 'Prices from 600 MDL in Chișinău; outside the city — per km. Get a quote.',
    contact_title: 'Contact',
    contact_desc: 'We are available 24/7. Reach us at',
    phone_label: 'Phone'
  }
};

// Extra sections translations
translations.ro.about_title = 'Despre Move.md';
translations.ro.about_desc = 'Suntem o echipă specializată în ridicarea/coborârea materialelor de construcții,mobilă,deșeuri și transport în Republica Moldova.Intervenim 24/7.';
translations.ro.why_title = 'De ce noi';
translations.ro.why_1 = 'Răspuns rapid și disponibilitate 24/7';
translations.ro.why_2 = 'Prețuri clare — de la 600 lei';
translations.ro.why_3 = 'Echipamente profesioniste și șoferi experimentați';
translations.ro.steps_title = 'Cum lucrăm';
translations.ro.step_1 = 'Ne suni sau ne scrii pentru detalii';
translations.ro.step_2 = 'Primim locația și estimăm costul';
translations.ro.step_3 = 'Venim, încărcăm și transportăm în siguranță';
translations.ro.faq_title = 'Întrebări frecvente';
translations.ro.faq_q1 = 'Care este prețul?';
translations.ro.faq_a1 = 'În Chișinău — de la 600 lei. În afara orașului — la kilometru.';
translations.ro.faq_q2 = 'Lucrați non-stop?';
translations.ro.faq_a2 = 'Da, suntem disponibili 24/7, inclusiv în weekend și sărbători.';

translations.ru.about_title = 'О Move.md';
translations.ru.about_desc = 'Мы — команда, специализирующаяся на подъёме/спуске строительных материалов, мебели, отходов и перевозках в Республике Молдова. Мы работаем круглосуточно и без выходных.';
translations.ru.why_title = 'Почему мы';
translations.ru.why_1 = 'Быстрый выезд и доступность 24/7';
translations.ru.why_2 = 'Прозрачные цены — от 600 леев';
translations.ru.why_3 = 'Профессиональное оборудование и опытные водители';
translations.ru.steps_title = 'Как мы работаем';
translations.ru.step_1 = 'Звоните или пишите нам';
translations.ru.step_2 = 'Получаем локацию и оцениваем стоимость';
translations.ru.step_3 = 'Приезжаем, грузим и везём безопасно';
translations.ru.faq_title = 'Частые вопросы';
translations.ru.faq_q1 = 'Какая цена?';
translations.ru.faq_a1 = 'По Кишинёву — от 600 леев. За городом — по километражу.';
translations.ru.faq_q2 = 'Работаете круглосуточно?';
translations.ru.faq_a2 = 'Да, 24/7, включая выходные и праздники.';

translations.en.about_title = 'About Move.md';
translations.en.about_desc = 'We are a team specialized in lifting/lowering construction materials, furniture, waste and transport in the Republic of Moldova. We intervene 24/7.';
translations.en.why_title = 'Why choose us';
translations.en.why_1 = 'Fast response and 24/7 availability';
translations.en.why_2 = 'Transparent pricing — from 600 MDL';
translations.en.why_3 = 'Pro equipment and experienced drivers';
translations.en.steps_title = 'How we work';
translations.en.step_1 = 'Call or message us for details';
translations.en.step_2 = 'Share your location and get a cost estimate';
translations.en.step_3 = 'We arrive, load, and deliver safely';
translations.en.faq_title = 'FAQ';
translations.en.faq_q1 = 'What is the price?';
translations.en.faq_a1 = 'In Chișinău — from 600 MDL. Outside the city — per km.';
translations.en.faq_q2 = 'Do you work non-stop?';
translations.en.faq_a2 = 'Yes, we are available 24/7, including weekends and holidays.';

translations.ro.about_reason1 = 'Răspuns în 15 minute în Chișinău';
translations.ro.about_reason2 = 'Ridicare până la 30 m cu lift exterior';
translations.ro.about_reason3 = 'Prețuri de la 600 lei, transparență totală';

translations.ru.about_reason1 = 'Быстрый выезд и доступность за 15 минут в Кишинёве';
translations.ru.about_reason2 = 'Подъём до 30 м с внешним подъемником';
translations.ru.about_reason3 = 'Цены от 600 леев, полная прозрачность';

translations.en.about_reason1 = 'Response within 15 minutes in Chișinău';
translations.en.about_reason2 = 'Lift up to 30 m with exterior hoist';
translations.en.about_reason3 = 'Prices from 600 MDL, fully transparent';


// Hero lines and new sections i18n
translations.ro.hero_line1 = 'RIDICĂM ORICE';
translations.ro.hero_line2 = 'PÂNĂ LA 30 METRI';
translations.ro.hero_line3 = 'RAPID ȘI ÎN SIGURANȚĂ';
translations.ro.cta_order = 'Comandă';
translations.ro.benefits_title = 'Avantajele noastre';
translations.ro.benefit_1 = 'Mobilier Protejat';
translations.ro.benefit_2 = 'Fără Demontare';
translations.ro.benefit_3 = 'Eficiență';
translations.ro.benefit_4 = 'Fără Probleme';
translations.ro.gallery_title = 'Galerie lucrări';
translations.ro.gallery_cap1 = 'Încărcare materiale, etajul 6';
translations.ro.gallery_cap2 = 'Mutare mobilă, etajul 8';
translations.ro.gallery_cap3 = 'Ridicare ferestre, etajul 8';

translations.ru.hero_line1 = 'ПОДНИМАЕМ ЛЮБОЙ ГРУЗ';
translations.ru.hero_line2 = 'ДО 30 МЕТРОВ';
translations.ru.hero_line3 = 'БЫСТРО И БЕЗОПАСНО';
translations.ru.cta_order = 'Заказать';
translations.ru.benefits_title = 'Наши преимущества';
translations.ru.benefit_1 = 'Защищенная мебель';
translations.ru.benefit_2 = 'Без разборки';
translations.ru.benefit_3 = 'Эффективность';
translations.ru.benefit_4 = 'Без проблем';
translations.ru.gallery_title = 'Галерея работ';
translations.ru.gallery_cap1 = 'Погрузка стройматериалов, 6 этаж';
translations.ru.gallery_cap2 = 'Переезд мебели, 8 этаж';
translations.ru.gallery_cap3 = 'Подъём окон, 8 этаж';

translations.en.hero_line1 = 'LIFTING ANYTHING';
translations.en.hero_line2 = 'UP TO 30 METERS';
translations.en.hero_line3 = 'FAST AND SAFE';
translations.en.cta_order = 'Order';
translations.en.benefits_title = 'Our benefits';
translations.en.benefit_1 = 'Protected Furniture';
translations.en.benefit_2 = 'No Disassembly';
translations.en.benefit_3 = 'Efficiency';
translations.en.benefit_4 = 'No Problems';
translations.en.gallery_title = 'Work gallery';
translations.en.gallery_cap1 = 'Loading materials, 6th floor';
translations.en.gallery_cap2 = 'Moving furniture, 8th floor';
translations.en.gallery_cap3 = 'Window lifting, 8th floor';

function setLanguage(lang) {
  const dict = translations[lang] || translations.ro;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const key = node.getAttribute('data-i18n');
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });
}

function restoreLanguage() {
  const saved = 'ro'; // Always default to Romanian
  const select = document.getElementById('lang');
  const mobileSelect = document.getElementById('mobile-lang');
  if (select) select.value = saved;
  if (mobileSelect) mobileSelect.value = saved;
  setLanguage(saved);
}

function initLanguageSwitcher() {
  const select = document.getElementById('lang');
  const mobileSelect = document.getElementById('mobile-lang');
  
  // Desktop language selector
  if (select) {
    select.addEventListener('change', () => {
      const lang = select.value;
      localStorage.setItem('move_lang', lang);
      setLanguage(lang);
      // Sync mobile selector
      if (mobileSelect) mobileSelect.value = lang;
    });
  }
  
  // Mobile language selector
  if (mobileSelect) {
    mobileSelect.addEventListener('change', () => {
      const lang = mobileSelect.value;
      localStorage.setItem('move_lang', lang);
      setLanguage(lang);
      // Sync desktop selector
      if (select) select.value = lang;
    });
  }
}

function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', () => {
  initYear();
  restoreLanguage();
  initLanguageSwitcher();
  initHeroSlideshow();
  initGalleryToggle();
});

// One-liners i18n
translations.ro.one_services = 'Evacuator, transport și asistență — rapid și sigur.';
translations.ro.one_benefits = 'Ajungem rapid și lucrăm profesionist, 24/7.';
translations.ro.one_pricing = 'Tarife corecte — de la 600 lei în Chișinău.';
translations.ro.one_gallery = 'Câteva lucrări recente:';

translations.ru.one_services = 'Эвакуатор, перевозка и помощь — быстро и безопасно.';
translations.ru.one_benefits = 'Приезжаем быстро, работаем профессионально, 24/7.';
translations.ru.one_pricing = 'Честные цены — от 600 леев по Кишинёву.';
translations.ru.one_gallery = 'Недавние работы:';

translations.en.one_services = 'Towing, transport and assistance — fast and safe.';
translations.en.one_benefits = 'Fast arrival and professional work, 24/7.';
translations.en.one_pricing = 'Fair rates — from 600 MDL in Chișinău.';
translations.en.one_gallery = 'Some recent works:';

// Navbar i18n
translations.ro.nav_home = 'Acasă';
translations.ro.nav_services = 'Servicii';
translations.ro.nav_pricing = 'Tarife';
translations.ro.nav_about = 'Despre';
translations.ro.nav_why = 'De ce noi';
translations.ro.nav_steps = 'Pași';
translations.ro.nav_faq = 'Întrebări';
translations.ro.nav_contact = 'Contact';

translations.ru.nav_home = 'Главная';
translations.ru.nav_services = 'Услуги';
translations.ru.nav_pricing = 'Тарифы';
translations.ru.nav_about = 'О нас';
translations.ru.nav_why = 'Почему мы';
translations.ru.nav_steps = 'Этапы';
translations.ru.nav_faq = 'Вопросы';
translations.ru.nav_contact = 'Контакт';

translations.en.nav_home = 'Home';
translations.en.nav_services = 'Services';
translations.en.nav_pricing = 'Pricing';
translations.en.nav_about = 'About';
translations.en.nav_why = 'Why us';
translations.en.nav_steps = 'Steps';
translations.en.nav_faq = 'FAQ';
translations.en.nav_contact = 'Contact';


// Services bullet points i18n
// Services bullet points i18n
translations.ro.svc_point1 = 'Ridicăm și coborâm orice până la 30m';
translations.ro.svc_point2 = 'Ridicare, coborâre materiale de construcții, deșeuri';
translations.ro.svc_point3 = 'Evacuare deșeuri';
translations.ro.svc_point4 = 'Transport, container';
translations.ro.svc_point5 = 'Hamali';

translations.ru.svc_point1 = 'Поднимаем и опускаем любой груз до 30 м';
translations.ru.svc_point2 = 'Подъём и спуск стройматериалов, отходов';
translations.ru.svc_point3 = 'Вывоз строительного мусора';
translations.ru.svc_point4 = 'Транспортировка, контейнер';
translations.ru.svc_point5 = 'Грузчики';

translations.en.svc_point1 = 'We lift and lower anything up to 30m';
translations.en.svc_point2 = 'Lifting and lowering construction materials, debris';
translations.en.svc_point3 = 'Waste removal';
translations.en.svc_point4 = 'Transport, container';
translations.en.svc_point5 = 'Movers';


// Benefits i18n
translations.ro.benefit_1 = 'Mobilier Protejat';
translations.ro.benefit_1_desc = 'Protejarea mobilierului va fi mult mai bună (riscul de atingere pe scări fiind eliminat).';
translations.ro.benefit_2 = 'Fără Demontare';
translations.ro.benefit_2_desc = 'Posibilitatea ca anumite piese de mobilier să fie luate ca atare fără demontarea lor.';
translations.ro.benefit_3 = 'Eficiență';
translations.ro.benefit_3_desc = 'Suntem soluția cea mai eficientă pentru a ridica sau a coborî mobila de la domiciliul dumneavoastră.';
translations.ro.benefit_4 = 'Fără Probleme';
translations.ro.benefit_4_desc = 'Nu se vor deteriora scările, liftul blocului și pereții.';

// RU (traducere aproximativă)
translations.ru.benefit_1 = 'Защита мебели';
translations.ru.benefit_1_desc = 'Мебель будет лучше защищена (исключается риск задеть её на лестнице).';
translations.ru.benefit_2 = 'Без разборки';
translations.ru.benefit_2_desc = 'Некоторые предметы мебели можно переносить целиком без разборки.';
translations.ru.benefit_3 = 'Эффективность';
translations.ru.benefit_3_desc = 'Мы самое эффективное решение для подъёма или спуска мебели на ваш этаж.';
translations.ru.benefit_4 = 'Без проблем';
translations.ru.benefit_4_desc = 'Не будут повреждены лестницы, лифт или стены дома.';

// EN
translations.en.benefit_1 = 'Protected Furniture';
translations.en.benefit_1_desc = 'Your furniture will be better protected (no risk of hitting stairs).';
translations.en.benefit_2 = 'No Disassembly';
translations.en.benefit_2_desc = 'Some furniture can be carried as is, without disassembly.';
translations.en.benefit_3 = 'Efficiency';
translations.en.benefit_3_desc = 'We are the most efficient solution to lift or lower your furniture safely.';
translations.en.benefit_4 = 'No Problems';
translations.en.benefit_4_desc = 'Stairs, elevators and walls will not be damaged.';


// Hero background slideshow (images 1..5), changes every 3s with fade
function initHeroSlideshow() {
  const hero = document.querySelector('.hero-photo');
  if (!hero) return;

  const imageUrls = [
    'images/1.jpg',
    'images/12.jpg',
    'images/3.jpg',
    'images/11.jpg',
    'images/5.jpg'
  ];

  // Preload images
  imageUrls.forEach(src => { const img = new Image(); img.src = src; });

  let currentIndex = 0;

  // Initialize first background
  hero.style.setProperty('--hero-bg', `url('${imageUrls[currentIndex]}')`);

  const visibleDurationMs = 4000; // fully visible time per image (optimized)
  const fadeDurationMs = 800; // must match CSS transition (smoother)

  function cycleOnce() {
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % imageUrls.length;
      const currentUrl = imageUrls[currentIndex];
      const nextUrl = imageUrls[nextIndex];

      hero.style.setProperty('--hero-bg-next', `url('${nextUrl}')`);
      hero.classList.add('is-fading');

      setTimeout(() => {
        // Finalize swap: set main bg to next and hide overlay
        hero.style.setProperty('--hero-bg', `url('${nextUrl}')`);
        hero.classList.remove('is-fading');

        // Wait for overlay to fully reach opacity 0 before changing its image
        setTimeout(() => {
          hero.style.setProperty('--hero-bg-next', `url('${currentUrl}')`);
          currentIndex = nextIndex;
          cycleOnce(); // schedule next after overlay is fully hidden
        }, fadeDurationMs);
      }, fadeDurationMs);
    }, visibleDurationMs);
  }

  cycleOnce();
}

// Gallery mobile toggle: show only first 2 by default, expand/collapse
function initGalleryToggle() {
  const grid = document.querySelector('.gallery-grid');
  const btn = document.querySelector('.gallery-toggle');
  if (!grid || !btn) return;

  const labels = {
    ro: { more: 'Arată mai multe', less: 'Ascunde' },
    ru: { more: 'Показать ещё', less: 'Скрыть' },
    en: { more: 'Show more', less: 'Hide' }
  };

  function currentLang() {
    return document.documentElement.lang || 'ro';
  }

  function updateLabel(expanded) {
    const lang = currentLang();
    const dict = labels[lang] || labels.ro;
    btn.textContent = expanded ? dict.less : dict.more;
    btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  }

  // Update label on language change too
  const select = document.getElementById('lang');
  const mobileSelect = document.getElementById('mobile-lang');
  
  if (select) {
    select.addEventListener('change', () => {
      updateLabel(grid.classList.contains('is-expanded'));
    });
  }
  
  if (mobileSelect) {
    mobileSelect.addEventListener('change', () => {
      updateLabel(grid.classList.contains('is-expanded'));
    });
  }

  updateLabel(false);

  btn.addEventListener('click', () => {
    const expanded = grid.classList.toggle('is-expanded');
    updateLabel(expanded);
  });
}
