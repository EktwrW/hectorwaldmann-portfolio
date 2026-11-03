import type { Locale } from "./i18n";

/**
 * Everything the home page says about the work itself: the chapters, the
 * release ticker and the credits. Kept apart from the dictionaries because it
 * is structured data (versions, dates, links) more than UI copy, and because
 * it is the part that goes stale. When something ships, this is the only file
 * that needs to change.
 *
 * Every link here was checked by hand. Keel's platforms (app.npsn.org,
 * *.support-mind.com) no longer resolve, so that chapter has no links on
 * purpose — see `keel.note`.
 */

export const LINKS = {
  foodlyIos: "https://apps.apple.com/us/app/foodly-solutions-qr-menu/id6761689908",
  foodlyAndroid: "https://play.google.com/store/apps/details?id=com.foodlysolutions.app",
  foodlyWeb: "https://foodly.solutions/",
  wenekaton: "https://wenekaton.com/",
  votiva: "https://getvotiva.com/",
  votivaIos: "https://apps.apple.com/app/id6819710768",
  gotribeIos: "https://apps.apple.com/us/app/gotribe-fitness/id6747635444",
  gotribeAndroid: "https://play.google.com/store/apps/details?id=com.gotribe.app",
  bandOfCoders: "https://www.bandofcoders.com/",
  essentiel: "https://essentiel-outsourcing.com/",
  universo: "https://universodecreadores.com/",
  linkedin: "https://www.linkedin.com/in/ektwr/",
  linkedinRecs: "https://www.linkedin.com/in/ektwr/details/recommendations/",
  github: "https://github.com/EktwrW",
} as const;

export type Fact = { k: string; v: string };
export type CaseNote = { h: string; p: string };
export type Credit = { when: string; role: string; org: string; note?: string; link?: { label: string; href: string } };

export type Work = {
  ticker: string[];
  rail: string;
  open: string;
  foodly: {
    kicker: string; tagline: string; p1: string; p2: string; facts: Fact[];
    web: string; panelCap: string; phoneCap: string; stripCap: string;
  };
  wenekaton: { kicker: string; tagline: string; p1: string; p2: string; facts: Fact[]; visit: string };
  votiva: { kicker: string; tagline: string; p1: string; p2: string; facts: Fact[]; status: string; card: string; cardSub: string; visit: string; site: string; clipCap: string; stripCap: string };
  gotribe: { kicker: string; tagline: string; p1: string; p2: string; facts: Fact[]; agency: string };
  keel: { kicker: string; tagline: string; p1: string; notes: CaseNote[]; note: string; recs: string };
  credits: { eyebrow: string; h2: string; items: Credit[]; stackH: string; stack: { k: string; v: string }[] };
};

const STACK = [
  { k: "Mobile", v: "Flutter · Dart · BLoC · Riverpod · GoRouter · Shorebird · App Store & Google Play releases" },
  { k: "Web", v: "React · Next.js · Astro · TypeScript · Tailwind · Flutter Web" },
  { k: "Backend", v: "Laravel · FastAPI · Node.js · Fastify · Python · PostgreSQL · Redis · REST · GraphQL · WebSockets" },
  { k: "Cloud & AI", v: "GCP Cloud Run · AWS Bedrock · Cloudflare Workers & D1 · Firebase · Stripe · RevenueCat · Claude API · LLM evals · voice AI" },
];

const en: Work = {
  ticker: [
    "Foodly 2.3.0 — App Store & Google Play — 27 Oct 2026",
    "WenekaTón — live in 4 languages with an AI concierge",
    "Votiva 1.4 — live on the App Store since 2 Nov 2026 · Google Play next",
    "GoTribe Fitness 4.0 — App Store & Google Play",
    "Open to freelance, contract & full-time work",
  ],
  rail: "Chapters",
  open: "opens in a new tab",
  foodly: {
    kicker: "Own product · Apps 369 · 2024 — now",
    tagline: "Order at the table. Split the bill. Fill the room.",
    p1: "A platform for local food businesses that I designed, built and run on my own. A restaurant turns a photo of its menu into a QR menu, takes orders and bookings, quotes catering jobs and runs promotions. Diners order together from the same table, and each one pays their share.",
    p2: "One Flutter codebase for iOS, Android and the web, plus a web panel for the business, on a Laravel and PostgreSQL API on Google Cloud Run with Stripe Connect split payments. Simultaneous orders from one table merge under a database lock, and the restaurant panel went from 309 queries to 15.",
    facts: [
      { k: "Version", v: "2.3.0 · 27 Oct 2026" },
      { k: "Platforms", v: "iOS · Android · Web" },
      { k: "Languages", v: "EN · PT · ES" },
    ],
    web: "foodly.solutions",
    panelCap: "The business panel: live orders, then analytics. Real recording.",
    phoneCap: "QR menu → split the bill → order in the kitchen → stats. Real recording.",
    stripCap: "The current store listing",
  },
  wenekaton: {
    kicker: "Client · Tourism · Canaima, Venezuela · Sep — Oct 2026",
    tagline: "Sleep facing the world’s tallest waterfall — and book it in your own language.",
    p1: "A four-language booking site for a Pemón-community team that runs trips to Angel Falls — English, Spanish, Portuguese and German — built with Astro, TypeScript and Tailwind on Cloudflare Workers, so it is fast even on a traveller’s patchy connection.",
    p2: "Its AI assistant (Claude API) answers only from the site’s own catalogue, so it never contradicts a published price, and hands bookings, quotes and complaints to a person. Web chat and email land in one inbox with translation both ways, so an owner who speaks only Spanish answers every guest in their own language.",
    facts: [
      { k: "Stack", v: "Astro · Cloudflare Workers · Claude API" },
      { k: "Languages", v: "EN · ES · PT · DE" },
      { k: "Status", v: "Live" },
    ],
    visit: "Visit wenekaton.com",
  },
  votiva: {
    kicker: "Own product · Apps 369 · Sep 2026 — now",
    tagline: "A prayer for what you’re living through.",
    p1: "A Catholic prayer companion, live on the App Store since 2 November 2026. You tell it what you are living through, and Votiva writes a prayer for you with a real Bible passage chosen for that moment, to read or listen to — plus a guided rosary, novenas, the Angelus and the Way of the Cross. Flutter on a FastAPI backend on Cloud Run; I chose Claude Sonnet over Haiku by running an evaluation set (20 of 20 against 17 of 20).",
    p2: "Faith is special-category data under GDPR, so it is treated that way: what people write is never logged, and the person being prayed for is never sent to the model. Firebase App Check and daily quotas protect the paid AI service; RevenueCat subscriptions start after three free prayers.",
    facts: [
      { k: "Stack", v: "Flutter · FastAPI · Claude" },
      { k: "Version", v: "1.4.0 · 2 Nov 2026" },
      { k: "Languages", v: "ES · EN · PT" },
    ],
    status: "Google Play · coming soon",
    card: "“A prayer for what you’re living through.”",
    cardSub: "getvotiva.com · App Store · Google Play soon",
    visit: "getvotiva.com",
    site: "https://getvotiva.com/en",
    clipCap: "Mood footage from the launch campaign",
    stripCap: "The App Store listing",
  },
  gotribe: {
    kicker: "Agency · Band of Coders, Atlanta · 2021 — 2022",
    tagline: "Heart rate from the gym floor to the phone, in real time.",
    p1: "A fitness and coaching app I built from scratch for a US client of Band of Coders, in Flutter and BLoC. Athletes’ Bluetooth LE heart-rate sensors stream to their phones, and trainers follow the whole class live through GraphQL subscriptions — because Bluetooth alone cannot cover a room of twenty-plus devices.",
    p2: "Band of Coders is the Atlanta agency I delivered Flutter work for. In January 2022 it placed me full-time with the client that became Keel Mind — the next four and a half years.",
    facts: [
      { k: "Stack", v: "Flutter · BLoC · GraphQL · BLE" },
      { k: "Platforms", v: "iOS · Android" },
      { k: "Role", v: "Built from scratch" },
    ],
    agency: "Band of Coders",
  },
  keel: {
    kicker: "Contract · Keel Mind, Toronto (remote) · Jan 2022 — Jul 2026",
    tagline: "Four and a half years inside a mental-health platform.",
    p1: "Flutter architect and senior front-end developer on a multi-tenant mental-health platform — through Band of Coders until August 2024, then on a direct contract after Keel bought it out. Same product, same team, no break.",
    notes: [
      { h: "km_fl_common_ui", p: "The company-wide Flutter design system, built from scratch. Its override-ready colour architecture turns a white-label rebrand into configuration." },
      { h: "1.5 GB uploads on Flutter Web", p: "Bypassed the HTTP client for the browser’s native XHR and Blob APIs and staged bytes through IndexedDB, so the Dart heap never held the payload." },
      { h: "GuardianAI", p: "A real-time voice agent: gapless Web Audio playback, a typed WebSocket protocol, voice-activity detection for barge-in, AWS Bedrock behind it. Shipped as an embeddable SDK into the National Peer Support Network." },
      { h: "Pressio", p: "The complete MVP of a transcript-analysis product — React 19 and Fastify on AWS Bedrock, with OpenAPI docs and a Dockerised test suite — handed over production-ready." },
      { h: "−6,500 lines of generated code", p: "Led the migration of 126 models and about 217 BLoC files in a 100k+ line app from Freezed to Equatable and Dart 3 sealed classes, dropping the code-generation dependency." },
    ],
    note: "The platforms this work shipped into are no longer online, so there is nothing to link to. My former colleagues vouch for it instead.",
    recs: "Read the recommendations",
  },
  credits: {
    eyebrow: "Credits",
    h2: "Six years, in order.",
    items: [
      { when: "Sep 2026 — now · freelance", role: "IT support specialist", org: "Essentiel Outsourcing", note: "Barcelona. A multilingual call-centre and BPO company with sites in Spain, Portugal, Mexico and Tunisia: security hardening, UI/UX of internal tools, simpler processes, automations, and CRM and call-centre telephony.", link: { label: "essentiel-outsourcing.com", href: LINKS.essentiel } },
      { when: "2024 — now", role: "Founder & engineer", org: "Apps 369", note: "Foodly and Votiva, my own products, and client work such as WenekaTón." },
      { when: "Jan 2022 — Jul 2026", role: "Flutter architect & senior front-end", org: "Keel Mind", note: "Through Band of Coders until Aug 2024, then a direct contract." },
      { when: "Feb 2021 — Jan 2022", role: "Flutter developer", org: "Band of Coders LLC", note: "Atlanta, USA. GoTribe Fitness, built from scratch." },
      { when: "Jul 2020 — Jan 2021", role: "Flutter developer", org: "Native App", note: "Bogotá. The widget library behind a no-code app builder — my first design system.", link: { label: "universodecreadores.com", href: LINKS.universo } },
    ],
    stackH: "Working tools",
    stack: STACK,
  },
};

const es: Work = {
  ticker: [
    "Foodly 2.3.0 — App Store y Google Play — 27 oct 2026",
    "WenekaTón — en línea en 4 idiomas, con un conserje de IA",
    "Votiva 1.4 — en App Store desde el 2 nov 2026 · Google Play, lo siguiente",
    "GoTribe Fitness 4.0 — App Store y Google Play",
    "Disponible para freelance, contrato y tiempo completo",
  ],
  rail: "Capítulos",
  open: "se abre en una pestaña nueva",
  foodly: {
    kicker: "Producto propio · Apps 369 · 2024 — hoy",
    tagline: "Pide en la mesa. Divide la cuenta. Llena el local.",
    p1: "Una plataforma para negocios de comida que diseñé, construí y opero por mi cuenta. El restaurante convierte la foto de su carta en un menú QR, recibe pedidos y reservas, cotiza servicios de catering y publica promociones. Los comensales piden juntos desde la misma mesa y cada uno paga su parte.",
    p2: "Un solo código Flutter para iOS, Android y web, más un panel web para el negocio, sobre una API en Laravel y PostgreSQL en Google Cloud Run con pagos divididos de Stripe Connect. Los pedidos simultáneos de una mesa se fusionan bajo un bloqueo de base de datos, y el panel del restaurante pasó de 309 consultas a 15.",
    facts: [
      { k: "Versión", v: "2.3.0 · 27 oct 2026" },
      { k: "Plataformas", v: "iOS · Android · Web" },
      { k: "Idiomas", v: "EN · PT · ES" },
    ],
    web: "foodly.solutions",
    panelCap: "El panel del negocio: pedidos en vivo y luego analíticas. Grabación real.",
    phoneCap: "Menú QR → dividir la cuenta → pedido en cocina → estadísticas. Grabación real.",
    stripCap: "La ficha actual en las tiendas",
  },
  wenekaton: {
    kicker: "Cliente · Turismo · Canaima, Venezuela · sep — oct 2026",
    tagline: "Duerme frente al salto de agua más alto del mundo — y resérvalo en tu idioma.",
    p1: "Un sitio de reservas en cuatro idiomas para un equipo de la comunidad pemón que organiza viajes al Salto Ángel — inglés, español, portugués y alemán — hecho con Astro, TypeScript y Tailwind sobre Cloudflare Workers, para que cargue rápido incluso con la conexión irregular de un viajero.",
    p2: "Su asistente de IA (Claude API) responde solo con el catálogo del propio sitio, así que nunca contradice un precio publicado, y pasa reservas, cotizaciones y reclamos a una persona. El chat web y el correo llegan a una sola bandeja con traducción en ambos sentidos, para que un dueño que solo habla español atienda a cada huésped en su idioma.",
    facts: [
      { k: "Stack", v: "Astro · Cloudflare Workers · Claude API" },
      { k: "Idiomas", v: "EN · ES · PT · DE" },
      { k: "Estado", v: "En línea" },
    ],
    visit: "Visitar wenekaton.com",
  },
  votiva: {
    kicker: "Producto propio · Apps 369 · sep 2026 — hoy",
    tagline: "Una oración para lo que estás viviendo.",
    p1: "Un acompañante de oración católica, en App Store desde el 2 de noviembre de 2026. Le cuentas lo que estás viviendo y Votiva escribe una oración para ti, con un pasaje real de la Biblia elegido para ese momento, para leer o escuchar — además del rosario guiado, novenas, el Ángelus y el Vía Crucis. Flutter sobre un backend FastAPI en Cloud Run; elegí Claude Sonnet frente a Haiku con un set de evaluación (20 de 20 contra 17 de 20).",
    p2: "La fe es un dato de categoría especial según el RGPD, y se trata así: lo que la gente escribe nunca se registra, y la persona por la que se reza nunca se envía al modelo. Firebase App Check y cuotas diarias protegen el servicio de IA; las suscripciones con RevenueCat empiezan tras tres oraciones gratis.",
    facts: [
      { k: "Stack", v: "Flutter · FastAPI · Claude" },
      { k: "Versión", v: "1.4.0 · 2 nov 2026" },
      { k: "Idiomas", v: "ES · EN · PT" },
    ],
    status: "Google Play · muy pronto",
    card: "“Una oración para lo que estás viviendo.”",
    cardSub: "getvotiva.com · App Store · Google Play pronto",
    visit: "getvotiva.com",
    site: "https://getvotiva.com/",
    clipCap: "Imágenes de la campaña de lanzamiento",
    stripCap: "La ficha en App Store",
  },
  gotribe: {
    kicker: "Agencia · Band of Coders, Atlanta · 2021 — 2022",
    tagline: "El ritmo cardíaco, del gimnasio al teléfono, en tiempo real.",
    p1: "Una app de fitness y coaching que construí desde cero para un cliente estadounidense de Band of Coders, en Flutter y BLoC. Los sensores Bluetooth LE de ritmo cardíaco de cada atleta transmiten a su teléfono, y el entrenador sigue a toda la clase en vivo con suscripciones GraphQL — porque el Bluetooth solo no alcanza para una sala con más de veinte dispositivos.",
    p2: "Band of Coders es la agencia de Atlanta para la que entregué proyectos Flutter. En enero de 2022 me asignó a tiempo completo con el cliente que luego sería Keel Mind — los siguientes cuatro años y medio.",
    facts: [
      { k: "Stack", v: "Flutter · BLoC · GraphQL · BLE" },
      { k: "Plataformas", v: "iOS · Android" },
      { k: "Rol", v: "Construida desde cero" },
    ],
    agency: "Band of Coders",
  },
  keel: {
    kicker: "Contrato · Keel Mind, Toronto (remoto) · ene 2022 — jul 2026",
    tagline: "Cuatro años y medio dentro de una plataforma de salud mental.",
    p1: "Arquitecto Flutter y desarrollador front-end sénior en una plataforma multi-tenant de salud mental — a través de Band of Coders hasta agosto de 2024 y luego con contrato directo, cuando Keel compró el contrato. Mismo producto, mismo equipo, sin interrupción.",
    notes: [
      { h: "km_fl_common_ui", p: "El design system Flutter de toda la empresa, construido desde cero. Su arquitectura de color preparada para overrides convierte un rebranding white-label en configuración." },
      { h: "Subidas de 1,5 GB en Flutter Web", p: "Sorteé el cliente HTTP usando las APIs nativas XHR y Blob del navegador y pasé los bytes por IndexedDB, para que el heap de Dart nunca cargara el archivo." },
      { h: "GuardianAI", p: "Un agente de voz en tiempo real: reproducción Web Audio sin cortes, un protocolo WebSocket tipado, detección de actividad de voz para interrumpir, y AWS Bedrock detrás. Entregado como SDK embebible en la National Peer Support Network." },
      { h: "Pressio", p: "El MVP completo de un producto de análisis de transcripciones — React 19 y Fastify sobre AWS Bedrock, con documentación OpenAPI y tests en Docker — entregado listo para producción." },
      { h: "−6.500 líneas de código generado", p: "Lideré la migración de 126 modelos y unos 217 archivos BLoC, en una app de más de 100.000 líneas, de Freezed a Equatable y clases sealed de Dart 3, eliminando la dependencia de generación de código." },
    ],
    note: "Las plataformas donde se publicó este trabajo ya no están en línea, así que no hay nada que enlazar. En su lugar, lo respaldan mis antiguos compañeros.",
    recs: "Leer las recomendaciones",
  },
  credits: {
    eyebrow: "Créditos",
    h2: "Seis años, en orden.",
    items: [
      { when: "sep 2026 — hoy · freelance", role: "Especialista de soporte IT", org: "Essentiel Outsourcing", note: "Barcelona. Una empresa multilingüe de call center y BPO con sedes en España, Portugal, México y Túnez: refuerzo de la seguridad, UI/UX de herramientas internas, procesos más simples, automatizaciones, y CRM y telefonía del centro de llamadas.", link: { label: "essentiel-outsourcing.com", href: LINKS.essentiel } },
      { when: "2024 — hoy", role: "Fundador e ingeniero", org: "Apps 369", note: "Foodly y Votiva, mis productos propios, y trabajo para clientes como WenekaTón." },
      { when: "ene 2022 — jul 2026", role: "Arquitecto Flutter y front-end sénior", org: "Keel Mind", note: "A través de Band of Coders hasta ago 2024, luego contrato directo." },
      { when: "feb 2021 — ene 2022", role: "Desarrollador Flutter", org: "Band of Coders LLC", note: "Atlanta, EE. UU. GoTribe Fitness, construida desde cero." },
      { when: "jul 2020 — ene 2021", role: "Desarrollador Flutter", org: "Native App", note: "Bogotá. La librería de widgets de un constructor de apps no-code — mi primer design system.", link: { label: "universodecreadores.com", href: LINKS.universo } },
    ],
    stackH: "Herramientas de trabajo",
    stack: STACK,
  },
};

const pt: Work = {
  ticker: [
    "Foodly 2.3.0 — App Store e Google Play — 27 out 2026",
    "WenekaTón — online em 4 idiomas, com um concierge de IA",
    "Votiva 1.4 — na App Store desde 2 nov 2026 · Google Play a seguir",
    "GoTribe Fitness 4.0 — App Store e Google Play",
    "Disponível para freelance, contrato e tempo inteiro",
  ],
  rail: "Capítulos",
  open: "abre num novo separador",
  foodly: {
    kicker: "Produto próprio · Apps 369 · 2024 — hoje",
    tagline: "Peça na mesa. Divida a conta. Encha a sala.",
    p1: "Uma plataforma para negócios de restauração que desenhei, construí e opero sozinho. O restaurante transforma a fotografia da sua carta num menu QR, recebe pedidos e reservas, orçamenta serviços de catering e publica promoções. Os clientes pedem juntos na mesma mesa e cada um paga a sua parte.",
    p2: "Um único código Flutter para iOS, Android e web, mais um painel web para o negócio, sobre uma API em Laravel e PostgreSQL no Google Cloud Run com pagamentos divididos via Stripe Connect. Os pedidos simultâneos de uma mesa fundem-se sob um bloqueio na base de dados, e o painel do restaurante passou de 309 consultas para 15.",
    facts: [
      { k: "Versão", v: "2.3.0 · 27 out 2026" },
      { k: "Plataformas", v: "iOS · Android · Web" },
      { k: "Idiomas", v: "EN · PT · ES" },
    ],
    web: "foodly.solutions",
    panelCap: "O painel do negócio: pedidos ao vivo e depois analítica. Gravação real.",
    phoneCap: "Menu QR → dividir a conta → pedido na cozinha → estatísticas. Gravação real.",
    stripCap: "A ficha atual nas lojas",
  },
  wenekaton: {
    kicker: "Cliente · Turismo · Canaima, Venezuela · set — out 2026",
    tagline: "Durma em frente à queda de água mais alta do mundo — e reserve na sua língua.",
    p1: "Um site de reservas em quatro idiomas para uma equipa da comunidade pemón que organiza viagens ao Salto Ángel — inglês, espanhol, português e alemão — feito com Astro, TypeScript e Tailwind sobre Cloudflare Workers, para carregar depressa mesmo com a ligação irregular de quem viaja.",
    p2: "O assistente de IA (Claude API) responde apenas com o catálogo do próprio site, por isso nunca contradiz um preço publicado, e passa reservas, orçamentos e reclamações a uma pessoa. O chat web e o email chegam a uma única caixa com tradução nos dois sentidos, para que um dono que só fala espanhol responda a cada hóspede na sua língua.",
    facts: [
      { k: "Stack", v: "Astro · Cloudflare Workers · Claude API" },
      { k: "Idiomas", v: "EN · ES · PT · DE" },
      { k: "Estado", v: "Online" },
    ],
    visit: "Visitar wenekaton.com",
  },
  votiva: {
    kicker: "Produto próprio · Apps 369 · set 2026 — hoje",
    tagline: "Uma oração para o que está a viver.",
    p1: "Um companheiro de oração católica, na App Store desde 2 de novembro de 2026. Conta-lhe o que está a viver e a Votiva escreve uma oração para si, com uma passagem real da Bíblia escolhida para esse momento, para ler ou ouvir — além do terço guiado, novenas, o Angelus e a Via-Sacra. Flutter sobre um backend FastAPI no Cloud Run; escolhi o Claude Sonnet em vez do Haiku com um conjunto de avaliação (20 em 20 contra 17 em 20).",
    p2: "A fé é um dado de categoria especial segundo o RGPD, e é tratada assim: o que as pessoas escrevem nunca é registado, e a pessoa por quem se reza nunca é enviada ao modelo. O Firebase App Check e quotas diárias protegem o serviço de IA; as subscrições RevenueCat começam após três orações grátis.",
    facts: [
      { k: "Stack", v: "Flutter · FastAPI · Claude" },
      { k: "Versão", v: "1.4.0 · 2 nov 2026" },
      { k: "Idiomas", v: "ES · EN · PT" },
    ],
    status: "Google Play · brevemente",
    card: "“Uma oração para o que estás a viver.”",
    cardSub: "getvotiva.com · App Store · Google Play em breve",
    visit: "getvotiva.com",
    site: "https://getvotiva.com/pt",
    clipCap: "Imagens da campanha de lançamento",
    stripCap: "A ficha na App Store",
  },
  gotribe: {
    kicker: "Agência · Band of Coders, Atlanta · 2021 — 2022",
    tagline: "O ritmo cardíaco, do ginásio para o telemóvel, em tempo real.",
    p1: "Uma app de fitness e coaching que construí de raiz para um cliente norte-americano da Band of Coders, em Flutter e BLoC. Os sensores Bluetooth LE de ritmo cardíaco de cada atleta transmitem para o telemóvel, e o treinador acompanha a aula inteira ao vivo com subscrições GraphQL — porque o Bluetooth sozinho não chega para uma sala com mais de vinte dispositivos.",
    p2: "A Band of Coders é a agência de Atlanta para a qual entreguei projetos Flutter. Em janeiro de 2022 colocou-me a tempo inteiro no cliente que viria a ser a Keel Mind — os quatro anos e meio seguintes.",
    facts: [
      { k: "Stack", v: "Flutter · BLoC · GraphQL · BLE" },
      { k: "Plataformas", v: "iOS · Android" },
      { k: "Papel", v: "Construída de raiz" },
    ],
    agency: "Band of Coders",
  },
  keel: {
    kicker: "Contrato · Keel Mind, Toronto (remoto) · jan 2022 — jul 2026",
    tagline: "Quatro anos e meio dentro de uma plataforma de saúde mental.",
    p1: "Arquiteto Flutter e programador front-end sénior numa plataforma multi-tenant de saúde mental — através da Band of Coders até agosto de 2024 e depois com contrato direto, quando a Keel comprou o contrato. Mesmo produto, mesma equipa, sem interrupção.",
    notes: [
      { h: "km_fl_common_ui", p: "O design system Flutter de toda a empresa, construído de raiz. A sua arquitetura de cor preparada para overrides transforma um rebranding white-label em configuração." },
      { h: "Uploads de 1,5 GB em Flutter Web", p: "Contornei o cliente HTTP com as APIs nativas XHR e Blob do browser e passei os bytes pelo IndexedDB, para que o heap de Dart nunca carregasse o ficheiro." },
      { h: "GuardianAI", p: "Um agente de voz em tempo real: reprodução Web Audio sem cortes, um protocolo WebSocket tipado, deteção de atividade de voz para interromper, e AWS Bedrock por trás. Entregue como SDK embebível na National Peer Support Network." },
      { h: "Pressio", p: "O MVP completo de um produto de análise de transcrições — React 19 e Fastify sobre AWS Bedrock, com documentação OpenAPI e testes em Docker — entregue pronto para produção." },
      { h: "−6.500 linhas de código gerado", p: "Liderei a migração de 126 modelos e cerca de 217 ficheiros BLoC, numa app com mais de 100.000 linhas, de Freezed para Equatable e classes sealed de Dart 3, eliminando a dependência de geração de código." },
    ],
    note: "As plataformas onde este trabalho foi publicado já não estão online, por isso não há nada para ligar. Em vez disso, os meus antigos colegas confirmam-no.",
    recs: "Ler as recomendações",
  },
  credits: {
    eyebrow: "Créditos",
    h2: "Seis anos, por ordem.",
    items: [
      { when: "set 2026 — hoje · freelance", role: "Especialista de suporte IT", org: "Essentiel Outsourcing", note: "Barcelona. Uma empresa multilingue de call center e BPO com operações em Espanha, Portugal, México e Tunísia: reforço da segurança, UI/UX de ferramentas internas, processos mais simples, automatizações, e CRM e telefonia do call center.", link: { label: "essentiel-outsourcing.com", href: LINKS.essentiel } },
      { when: "2024 — hoje", role: "Fundador e engenheiro", org: "Apps 369", note: "Foodly e Votiva, os meus produtos próprios, e trabalho para clientes como a WenekaTón." },
      { when: "jan 2022 — jul 2026", role: "Arquiteto Flutter e front-end sénior", org: "Keel Mind", note: "Através da Band of Coders até ago 2024, depois contrato direto." },
      { when: "fev 2021 — jan 2022", role: "Programador Flutter", org: "Band of Coders LLC", note: "Atlanta, EUA. GoTribe Fitness, construída de raiz." },
      { when: "jul 2020 — jan 2021", role: "Programador Flutter", org: "Native App", note: "Bogotá. A biblioteca de widgets de um construtor de apps no-code — o meu primeiro design system.", link: { label: "universodecreadores.com", href: LINKS.universo } },
    ],
    stackH: "Ferramentas de trabalho",
    stack: STACK,
  },
};

const WORK: Record<Locale, Work> = { en, es, pt };

export function getWork(locale: Locale): Work {
  return WORK[locale] ?? en;
}
