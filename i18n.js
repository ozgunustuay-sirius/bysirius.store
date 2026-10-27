/* TR / EN dil geçişi. Türkçe metin HTML'de kalır; İngilizce karşılıklar burada. */
(function () {
  'use strict';

  var EN = {
    // nav + ortak
    'Markalar': 'Brands',
    'Hızlı Erişim': 'Quick Access',
    'Projeler': 'Projects',
    'Sektörler': 'Sectors',
    'Özel Projeler & Demolar': 'Custom Projects & Demos',
    'İletişim': 'Contact',
    'Siteyi aç →': 'Visit site →',
    "Yakında →": "Coming soon →",
    "Her sektöre özel akıllı randevu yönetimi: randevu, müşteri, stok ve kasa tek panelde.": "Smart appointment management for every industry: bookings, customers, stock and cash in one panel.",
    "Web, WhatsApp, Instagram ve QR ile randevu": "Bookings via web, WhatsApp, Instagram and QR",
    "7/24 AI mesaj asistanı": "24/7 AI messaging assistant",
    "iOS ve Android uygulama": "iOS and Android apps",
    "Masaya QR koy, menü telefonda açılsın. Fiyat ve ürünleri anında güncelle.": "Put a QR code on the table and the menu opens on the phone. Update prices and items instantly.",
    "Uygulama gerektirmeyen QR menü": "QR menu, no app required",
    "WhatsApp ile anlık menü güncelleme": "Instant menu updates via WhatsApp",
    "6 tema ve AI fotoğraf araçları": "6 themes and AI photo tools",
    "Yerleşimi koruyan stil dönüşümü": "Style transformation that keeps the layout",
    "QR menü ve WhatsApp ile anlık güncelleme": "QR menu and instant WhatsApp updates",
    "App Store'dan İndir": "Download on the App Store",
    "SiriPlan · iPhone ve iPad": "SiriPlan · iPhone and iPad",
    "Google Play'den İndir": "Get it on Google Play",
    "SiriPlan · Android": "SiriPlan · Android",
    "Yayında": "Live",
    "Demoyu Aç": "Open Demo",
    "Sunumu Aç (PDF)": "Open Presentation (PDF)",
    "Halı Saha Rezervasyon Demo": "Football Pitch Booking Demo",
    "Halı saha randevu ve rezervasyon sistemi; canlı demoyu deneyin, sunumu inceleyin.": "Pitch booking and reservation system; try the live demo and view the presentation.",
    "QR menü örnekleri: kafe, restoran, bar ve daha fazlası.": "QR menu samples: cafe, restaurant, bar and more.",
    "Oda fotoğrafından yeni stil önizlemesi. kosmoyra.com yapım aşamasında.": "New style preview from a room photo. kosmoyra.com is under construction.",
    "Yeni demolar hazır oldukça burada yayınlanır.": "New demos will be published here as they become ready.",
    "Müşterilerimiz için hazırladığımız özel çözümler ve denemeye açık demolar. Yeni demolar hazır oldukça burada yayınlanır.": "Custom solutions we build for our customers and demos open to try. New demos will be published here as they become ready.",
    "Danışmanlık": "Consulting",
    "Stratejik Teknoloji Danışmanlığı": "Strategic Technology Consulting",
    "İş modelinizi analiz eder, süreçlerinizi dijitalleştirir, yapay zeka destekli büyüme stratejisi kurarız.": "We analyse your business model, digitise your processes and build AI-powered growth strategies.",
    "Otomasyon": "Automation",
    "Yapay Zeka & Akıllı Otomasyon": "AI & Smart Automation",
    "GPT tabanlı chatbotlar, CRM akışları ve satış otomasyonları geliştiririz.": "We build GPT-based chatbots, CRM flows and sales automations.",
    "Ölçeklenebilir Dijital Ürün": "Scalable Digital Products",
    "KOBİ'lerden kurumsal firmalara sürdürülebilir teknoloji altyapıları tasarlarız.": "We design sustainable technology infrastructure for SMEs through to enterprises.",
    "İncele →": "View →",
    '← Ana sayfaya dön': '← Back to home',
    '© 2026 BY Sirius Group · bysirius.store': '© 2026 BY Sirius Group · bysirius.store',

    // hero
    'BY Sirius Ekosistemi': 'BY Sirius Ecosystem',
    'Menüden randevuya, iç mekan tasarımından otomasyona — sektörünüze hazır çözümler.': 'From menus to appointments, from interior design to automation — solutions ready for your industry.',
    'Markaları Keşfet': 'Explore Brands',

    // markalar
    'Markalarımız, tek ekosistem': 'Our brands, one ecosystem',
    'Her ürün kendi alanında uzman; hepsi aynı yapay zeka altyapısı üzerinde çalışır.': 'Each product is an expert in its field; all of them run on the same AI infrastructure.',
    'İşletmelere özel yapay zeka ve otomasyon çözümleri geliştiren ana çatı.': 'The parent brand building custom AI and automation solutions for businesses.',
    'AI chatbot & asistanlar': 'AI chatbots & assistants',
    'CRM ve satış otomasyonu': 'CRM and sales automation',
    'Özel yazılım geliştirme': 'Custom software development',
    'Akıllı randevu yönetimi: takvim, hatırlatma ve müşteri takibi bir arada.': 'Smart appointment management: calendar, reminders and customer tracking in one place.',
    'Online randevu takvimi': 'Online booking calendar',
    'Otomatik hatırlatmalar': 'Automatic reminders',
    'Mobil uygulama': 'Mobile app',
    'Restoran ve kafeler için QR menü ve WhatsApp sipariş otomasyonu.': 'QR menu and WhatsApp ordering automation for restaurants and cafes.',
    'QR kodlu dijital menü': 'QR-code digital menu',
    'WhatsApp otomasyonu': 'WhatsApp automation',
    'Çoklu dil desteği': 'Multi-language support',
    'Odanın fotoğrafını çek, stili seç; aynı oda yeni stilde yeniden çizilsin.': 'Take a photo of your room, pick a style, and see the same room redrawn in a new look.',
    'AI iç mekan yenileme': 'AI interior redesign',
    'Önce/sonra karşılaştırma': 'Before/after comparison',
    'Aylık abonelik': 'Monthly subscription',

    // hızlı erişim
    'Hızlı erişim': 'Quick access',
    'Aradığınız ürüne tek dokunuşla ulaşın.': 'Reach the product you are looking for in one tap.',
    "SiriPlan'i Dene": 'Try SiriPlan',
    'Akıllı randevu yönetimi · 14 gün ücretsiz': 'Smart appointment management · 14 days free',
    'QR menü ve WhatsApp otomasyonu': 'QR menu and WhatsApp automation',
    'AI ile iç mekan yenileme': 'AI interior redesign',
    'AI otomasyon ve özel yazılım': 'AI automation and custom software',
    'WhatsApp ile Ulaşın': 'Reach us on WhatsApp',
    'Sorularınızı yanıtlayalım': "Let's answer your questions",
    'Canlı demoları keşfedin': 'Explore the live demos',

    // genel projeler
    'Genel projeler': 'Featured projects',
    "BY Sirius'un hayata geçirdiği çözümlerden seçmeler.": 'A selection of solutions delivered by BY Sirius.',
    'Chatbot': 'Chatbot',
    'AI Chatbot & Asistanlar': 'AI Chatbots & Assistants',
    '7/24 müşteri sorularını yanıtlayan, randevu ve satışa yönlendiren asistanlar.': 'Assistants that answer customer questions 24/7 and guide them to bookings and sales.',
    'Randevu': 'Booking',
    'AI Randevu & Rezervasyon': 'AI Booking & Reservations',
    'Telefon ve mesajla gelen talepleri otomatik takvime işleyen sistem.': 'A system that automatically logs phone and message requests into the calendar.',
    'CRM': 'CRM',
    'Akıllı CRM & Lead Yönetimi': 'Smart CRM & Lead Management',
    'Potansiyel müşterileri toplayan, puanlayan ve takip eden akışlar.': 'Flows that collect, score and follow up with potential customers.',
    'İçerik': 'Content',
    'AI Görsel & Video Üretimi': 'AI Image & Video Production',
    'Ürün görselleri ve reklam videoları için yapay zeka üretim hattı.': 'An AI production line for product visuals and ad videos.',
    'Finans': 'Finance',
    'Otomatik Fatura': 'Automatic Invoicing',
    'Fatura oluşturma ve gönderim süreçlerini sıfır eforla yöneten sistem.': 'A system that handles invoice creation and delivery with zero effort.',
    'Yazılım': 'Software',
    'Özel AI Yazılım Geliştirme': 'Custom AI Software Development',
    'İşletmenize özel panel, entegrasyon ve ürün geliştirme.': 'Custom dashboards, integrations and product development for your business.',

    // sektörler
    'Hizmet verdiğimiz sektörler': 'Sectors we serve',
    'Her sektörün iş akışına uyarlanmış hazır çözümler.': 'Ready-made solutions adapted to the workflow of every sector.',
    'Otel & Konaklama': 'Hotels & Hospitality',
    'Diş Klinikleri & Sağlık': 'Dental Clinics & Healthcare',
    'Gayrimenkul': 'Real Estate',
    'Güzellik & Estetik': 'Beauty & Aesthetics',
    'Spor Salonları': 'Gyms & Fitness',
    'Finans & Muhasebe': 'Finance & Accounting',
    'Hukuk Büroları': 'Law Firms',
    'E-Ticaret & Perakende': 'E-Commerce & Retail',

    // projeler.html
    'Demo bağlantıları hazır oldukça burada yayınlanır.': 'Demo links will be published here as they become ready.',
    'Müşterilerimiz için hazırladığımız özel çözümler ve denemeye açık demolar. Demo bağlantıları hazır oldukça burada yayınlanır.': 'Custom solutions we build for our customers and demos open to try. Demo links will be published here as they become ready.',
    'Özel Projeler & Demolar ': 'Custom Projects & Demos',
    'Hazır demolar': 'Ready demos',
    'SiriPlan Demo': 'SiriPlan Demo',
    'Randevu takvimi, hatırlatma ve müşteri yönetimi akışı.': 'Booking calendar, reminders and customer management flow.',
    'SiriusMenu Demo': 'SiriusMenu Demo',
    'QR menü ve WhatsApp sipariş deneyimi.': 'QR menu and WhatsApp ordering experience.',
    'KosMoyra Demo': 'KosMoyra Demo',
    'Oda fotoğrafından yeni stil önizlemesi (demo modunda önce/sonra örneği).': 'New style preview from a room photo (before/after sample in demo mode).',
    'AI Chatbot Demo': 'AI Chatbot Demo',
    'Sektörünüze göre eğitilmiş asistanla konuşun.': 'Talk to an assistant trained for your industry.',
    'Yakında': 'Coming soon',
    'Özel projeler': 'Custom projects',
    'Size özel bir sistem mi gerekiyor? Ücretsiz analiz için bize yazın.': 'Need a system built just for you? Write to us for a free analysis.',
    'Ücretsiz Analiz Talep Edin': 'Request a Free Analysis'
  };

  var HTML = {
    h1: {
      'index': 'Grow your business with <em>AI products</em> in one showcase',
      'projeler': 'Try the systems <em style="font-style:normal;color:var(--gold)">live</em>'
    }
  };

  var TITLE = {
    index: ['BY Sirius Store — AI Ürünler ve Dijital Çözümler', 'BY Sirius Store — AI Products and Digital Solutions'],
    projeler: ['Özel Projeler & Demolar — BY Sirius Store', 'Custom Projects & Demos — BY Sirius Store']
  };
  var DESC = {
    index: ['BY Sirius ekosistemi: SiriusMenu, SiriPlan, KosMoyra ve BY Sirius AI otomasyon çözümleri tek çatı altında.', 'The BY Sirius ecosystem: SiriusMenu, SiriPlan, KosMoyra and BY Sirius AI automation solutions under one roof.'],
    projeler: ['BY Sirius özel proje çalışmaları ve canlı demolar.', 'BY Sirius custom project work and live demos.']
  };

  var page = /projeler\.html$/.test(location.pathname) ? 'projeler' : 'index';
  var KEY = 'bysirius-store-lang';

  var nodes = []; // { n: Text, tr: orijinal }
  function collect() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.nodeName)) return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest('[data-i18n-html],.lang')) return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = w.nextNode())) nodes.push({ n: n, tr: n.nodeValue });
  }

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

  function translateRead(tr) {
    var key = norm(tr);
    var lead = tr.match(/^\s*/)[0], tail = tr.match(/\s*$/)[0];
    if (EN[key] !== undefined) return lead + EN[key] + tail;
    var m = key.match(/^(.*) · (\d+) dk okuma$/);
    if (m) return lead + m[1] + ' · ' + m[2] + ' min read' + tail;
    return tr;
  }

  var htmlEls = [];
  function collectHtml() {
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      htmlEls.push({ el: el, tr: el.innerHTML, key: el.getAttribute('data-i18n-html') });
    });
  }

  var metaDesc = document.querySelector('meta[name="description"]');
  var contactBtn = document.querySelector('.nav-r .btn');

  function apply(lang) {
    var en = lang === 'en';
    nodes.forEach(function (o) { o.n.nodeValue = en ? translateRead(o.tr) : o.tr; });
    htmlEls.forEach(function (o) { o.el.innerHTML = en ? (HTML[o.key] && HTML[o.key][page]) || o.tr : o.tr; });
    document.title = TITLE[page][en ? 1 : 0];
    if (metaDesc) metaDesc.setAttribute('content', DESC[page][en ? 1 : 0]);
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  collect();
  collectHtml();

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
  });

  var saved = 'tr';
  try { saved = localStorage.getItem(KEY) || ''; } catch (e) {}
  if (!saved) saved = /^tr\b/i.test(navigator.language || '') ? 'tr' : 'en';
  if (saved === 'en') apply('en');
})();
