import type { Locale } from "./i18n";

/**
 * Identifying details published on the legal notice. Portuguese e-commerce law
 * (Decreto-Lei n.º 7/2004) requires a service provider to publish these, so
 * they live in one place rather than being scattered through the copy.
 *
 * `nif` and `city` are optional on purpose: filling them in is the correct end
 * state, but an empty string simply drops that clause from the sentence rather
 * than printing a placeholder at a visitor. Fill both when you are ready.
 */
export const ENTITY = {
  name: "Hector Waldman",
  trading: "Apps 369",
  nif: "", // Portuguese NIF, e.g. "123 456 789"
  city: "", // Locality published as the contact address, e.g. "Lisboa"
  country: {
    en: "Portugal",
    es: "Portugal",
    pt: "Portugal",
  },
  email: "hector@hectorwaldmann.site",
  site: "hectorwaldmann.site",
};

const NIF_LABEL: Record<Locale, string> = {
  en: "taxpayer number",
  es: "NIF",
  pt: "contribuinte n.º",
};

const BASED_IN: Record<Locale, string> = {
  en: "based in",
  es: "con domicilio en",
  pt: "com domicílio em",
};

/**
 * Builds the identifying clause — "<who>, taxpayer number X, based in Y,
 * Portugal" — skipping any part that has not been filled in, so the sentence
 * stays grammatical whether or not the NIF and locality are known.
 */
function identity(locale: Locale, who: string): string {
  const parts = [who];
  if (ENTITY.nif.trim()) parts.push(`${NIF_LABEL[locale]} ${ENTITY.nif.trim()}`);
  const where = ENTITY.city.trim() ? `${ENTITY.city.trim()}, ${ENTITY.country[locale]}` : ENTITY.country[locale];
  parts.push(`${BASED_IN[locale]} ${where}`);
  return parts.join(", ");
}

export type LegalItem = { h: string; p: string[] };
export type LegalSection = { id: string; title: string; lede: string; items: LegalItem[] };
export type LegalDoc = {
  eyebrow: string;
  h1: string;
  lede: string;
  updated: string;
  toc: string;
  sections: LegalSection[];
};

const en: LegalDoc = {
  eyebrow: "Legal",
  h1: "Privacy, legal notice and terms.",
  lede:
    "Everything you are entitled to know before you send me anything through this site, written to be read rather than to be survived.",
  updated: "Last updated: 2 August 2026",
  toc: "On this page",
  sections: [
    {
      id: "privacy",
      title: "Privacy policy",
      lede:
        "This site collects the minimum it needs to answer you, and nothing at all for advertising. There is no tracking pixel, no advertising network and no profile built about you.",
      items: [
        {
          h: "Who is responsible for your data",
          p: [
            `${identity("en", ENTITY.name)}, is the controller of the personal data collected through ${ENTITY.site}. You can reach me at ${ENTITY.email} about anything on this page.`,
          ],
        },
        {
          h: "What is collected, and why",
          p: [
            "The contact forms ask for your name, your email address and a description of your situation. The form on the services page also offers an optional indication of what kind of client you are and a rough budget range, both of which you can leave blank.",
            "That data is used for exactly one thing: to reply to you and, if it turns out we should work together, to prepare a proposal. The legal basis is Article 6(1)(b) of the GDPR, steps taken at your request before entering into a contract, together with Article 6(1)(f), my legitimate interest in answering someone who writes to me. Nothing you send is used for marketing, sold, or shared with anyone outside the processors listed below.",
            "Separately, the site records aggregated, anonymous visit statistics: which pages are opened, roughly where in the world from, and how quickly pages load. These figures cannot be traced back to you and are not linked to your form submission.",
          ],
        },
        {
          h: "Cookies and local storage",
          p: [
            "This site sets one cookie, named NEXT_LOCALE, which remembers whether you chose English, Spanish or Portuguese so you are not sent back to your browser's language on every visit. It lasts one year and contains nothing but a two-letter language code.",
            "Your light or dark theme preference is kept in your browser's local storage and never leaves your device.",
            "Both are strictly necessary to provide the functions you asked for, which is why you are not being shown a consent banner. There are no advertising, analytics or third-party tracking cookies on this site to consent to.",
          ],
        },
        {
          h: "Who else processes your data",
          p: [
            "The site is hosted and its aggregated, cookieless traffic statistics are produced by Vercel Inc. Contact form submissions are received and forwarded by Formspree, and email for the site's domain is handled by Hostinger. Search performance data comes from Google Search Console in aggregated form only.",
            "Vercel, Formspree and Google are established in the United States, so replying to you involves an international transfer. Those transfers rely on the European Commission's adequacy decision for the EU–US Data Privacy Framework and, where applicable, on Standard Contractual Clauses.",
          ],
        },
        {
          h: "How long it is kept",
          p: [
            "Enquiries that do not lead to work are kept for up to twenty-four months and then deleted, which is long enough for a conversation to be picked back up later. If we do work together, the correspondence is kept for the duration of the engagement and for the periods that Portuguese commercial and tax law require afterwards. Formspree's own submission history on the plan this site uses is limited to thirty days.",
          ],
        },
        {
          h: "Your rights",
          p: [
            "You can ask me for a copy of the data I hold about you, ask for it to be corrected or deleted, ask me to restrict what I do with it, ask for it in a portable format, or object to my processing it. Write to " +
              ENTITY.email +
              " and I will answer within a month, usually the same week.",
            "If you believe I have handled your data badly, you are entitled to complain to the Portuguese supervisory authority, the Comissão Nacional de Proteção de Dados (CNPD), or to the authority in the EU country where you live.",
          ],
        },
        {
          h: "What does not happen",
          p: [
            "No automated decision-making and no profiling take place. Nothing you submit is used to train a model. There is no newsletter and no mailing list, so writing to me does not subscribe you to anything.",
          ],
        },
      ],
    },
    {
      id: "notice",
      title: "Legal notice",
      lede: "Who is behind this site, as required of anyone offering services online from Portugal.",
      items: [
        {
          h: "Site owner",
          p: [
            `${identity("en", `${ENTITY.name}, working under the name ${ENTITY.trading}`)}. Contact: ${ENTITY.email}.`,
            "Activity: freelance software design, development and maintenance, mainly cross-platform mobile applications and the backends behind them.",
          ],
        },
        {
          h: "Hosting and infrastructure",
          p: [
            "The site is hosted by Vercel Inc. (United States). The domain is registered through Hostinger, which also provides email for the domain.",
          ],
        },
        {
          h: "Applicable law",
          p: [
            "This site is operated from Portugal and is subject to Portuguese law, including Decreto-Lei n.º 7/2004 on electronic commerce and information society services. Any dispute arising from the use of this site falls to the Portuguese courts, without prejudice to any mandatory consumer protection rule that may apply to you.",
          ],
        },
      ],
    },
    {
      id: "terms",
      title: "Terms of use",
      lede:
        "Short, and mostly about what this site is not: it is a description of services, not a contract.",
      items: [
        {
          h: "Prices and timelines are starting points",
          p: [
            "Every figure published on this site is a starting price, marked as such, and every timeline is a typical range. Neither is a binding offer under Article 232 of the Portuguese Civil Code. What binds either of us is the written proposal and contract signed for a specific project, which sets out the actual scope, the actual price and what happens when either changes.",
          ],
        },
        {
          h: "Writing to me does not create a relationship",
          p: [
            "Sending a form, an email or a message does not by itself create a professional relationship, a duty of confidentiality or any obligation on my part to take the work. Please do not send trade secrets, credentials or anything genuinely sensitive in a first message. If you need confidentiality before we talk, say so and we will sign an NDA first.",
          ],
        },
        {
          h: "Content and intellectual property",
          p: [
            "The text, layout, code and images on this site are mine, except for third-party names, logos and product screenshots, which belong to their respective owners and appear here to describe work I did. You are welcome to quote or link to this site with attribution; wholesale copying of the copy or the design is not permitted.",
            "Links to other sites are offered for reference and imply no endorsement or responsibility for their content.",
          ],
        },
        {
          h: "No warranty on the information",
          p: [
            "This site is informational. It is kept accurate and current to the best of my ability, but nothing on it is professional advice for your particular situation, and no result described here is a promise of the same result for you.",
          ],
        },
      ],
    },
  ],
};

const es: LegalDoc = {
  eyebrow: "Legal",
  h1: "Privacidad, aviso legal y términos.",
  lede:
    "Todo lo que tienes derecho a saber antes de enviarme algo por esta web, escrito para leerse y no para sobrevivirse.",
  updated: "Última actualización: 2 de agosto de 2026",
  toc: "En esta página",
  sections: [
    {
      id: "privacy",
      title: "Política de privacidad",
      lede:
        "Esta web recoge lo mínimo que necesita para responderte, y nada en absoluto con fines publicitarios. No hay píxeles de seguimiento, ni redes de anuncios, ni ningún perfil construido sobre ti.",
      items: [
        {
          h: "Quién responde de tus datos",
          p: [
            `${identity("es", ENTITY.name)}, es el responsable del tratamiento de los datos personales recogidos a través de ${ENTITY.site}. Puedes escribirme a ${ENTITY.email} sobre cualquier cosa de esta página.`,
          ],
        },
        {
          h: "Qué se recoge, y para qué",
          p: [
            "Los formularios de contacto piden tu nombre, tu correo electrónico y una descripción de tu situación. El de la página de servicios ofrece además indicar de forma opcional qué tipo de cliente eres y un rango aproximado de presupuesto, ambos campos se pueden dejar en blanco.",
            "Esos datos se usan exactamente para una cosa: responderte y, si resulta que deberíamos trabajar juntos, preparar una propuesta. La base legal es el artículo 6.1.b) del RGPD, actuaciones previas a un contrato a petición tuya, junto con el artículo 6.1.f), mi interés legítimo en contestar a quien me escribe. Nada de lo que envías se usa para marketing, ni se vende, ni se comparte con nadie fuera de los encargados que se listan más abajo.",
            "Aparte, la web registra estadísticas de visita agregadas y anónimas: qué páginas se abren, aproximadamente desde qué parte del mundo, y a qué velocidad cargan. Esas cifras no se pueden rastrear hasta ti ni se vinculan con lo que envías por el formulario.",
          ],
        },
        {
          h: "Cookies y almacenamiento local",
          p: [
            "Esta web instala una única cookie, llamada NEXT_LOCALE, que recuerda si elegiste inglés, español o portugués para no devolverte al idioma de tu navegador en cada visita. Dura un año y no contiene más que un código de idioma de dos letras.",
            "Tu preferencia de tema claro u oscuro se guarda en el almacenamiento local de tu navegador y nunca sale de tu dispositivo.",
            "Ambas son estrictamente necesarias para prestar las funciones que has pedido, y por eso no se te muestra un banner de consentimiento. En esta web no hay cookies publicitarias, analíticas ni de seguimiento de terceros que consentir.",
          ],
        },
        {
          h: "Quién más trata tus datos",
          p: [
            "El alojamiento y las estadísticas de tráfico agregadas y sin cookies los proporciona Vercel Inc. Los envíos del formulario de contacto los recibe y reenvía Formspree, y el correo del dominio lo gestiona Hostinger. Los datos de rendimiento en búsqueda proceden de Google Search Console, solo de forma agregada.",
            "Vercel, Formspree y Google están establecidas en Estados Unidos, de modo que responderte implica una transferencia internacional. Esas transferencias se amparan en la decisión de adecuación de la Comisión Europea para el Marco de Privacidad de Datos UE–EE. UU. y, cuando procede, en Cláusulas Contractuales Tipo.",
          ],
        },
        {
          h: "Cuánto tiempo se conservan",
          p: [
            "Las consultas que no derivan en trabajo se conservan hasta veinticuatro meses y después se eliminan, plazo suficiente para retomar una conversación más adelante. Si acabamos trabajando juntos, la correspondencia se conserva mientras dure el encargo y durante los plazos que la legislación mercantil y fiscal portuguesa exijan después. El historial de envíos del propio Formspree, en el plan que usa esta web, se limita a treinta días.",
          ],
        },
        {
          h: "Tus derechos",
          p: [
            "Puedes pedirme una copia de los datos que tengo sobre ti, pedir que se corrijan o se supriman, pedirme que limite lo que hago con ellos, solicitarlos en un formato portátil u oponerte a su tratamiento. Escribe a " +
              ENTITY.email +
              " y te contestaré en el plazo de un mes, normalmente la misma semana.",
            "Si consideras que he tratado mal tus datos, tienes derecho a reclamar ante la autoridad de control portuguesa, la Comissão Nacional de Proteção de Dados (CNPD), o ante la autoridad del país de la UE donde residas.",
          ],
        },
        {
          h: "Lo que no ocurre",
          p: [
            "No hay decisiones automatizadas ni elaboración de perfiles. Nada de lo que envías se usa para entrenar un modelo. No hay boletín ni lista de correo, así que escribirme no te suscribe a nada.",
          ],
        },
      ],
    },
    {
      id: "notice",
      title: "Aviso legal",
      lede: "Quién está detrás de esta web, como se exige a quien ofrece servicios en línea desde Portugal.",
      items: [
        {
          h: "Titular del sitio",
          p: [
            `${identity("es", `${ENTITY.name}, que opera bajo el nombre ${ENTITY.trading}`)}. Contacto: ${ENTITY.email}.`,
            "Actividad: diseño, desarrollo y mantenimiento de software como profesional independiente, principalmente aplicaciones móviles multiplataforma y los backends que las sostienen.",
          ],
        },
        {
          h: "Alojamiento e infraestructura",
          p: [
            "La web está alojada por Vercel Inc. (Estados Unidos). El dominio está registrado a través de Hostinger, que además presta el servicio de correo del dominio.",
          ],
        },
        {
          h: "Legislación aplicable",
          p: [
            "Esta web se opera desde Portugal y está sujeta a la legislación portuguesa, incluido el Decreto-Lei n.º 7/2004 sobre comercio electrónico y servicios de la sociedad de la información. Cualquier controversia derivada del uso de esta web corresponde a los tribunales portugueses, sin perjuicio de las normas imperativas de protección al consumidor que puedan resultarte aplicables.",
          ],
        },
      ],
    },
    {
      id: "terms",
      title: "Términos de uso",
      lede: "Breves, y sobre todo acerca de lo que esta web no es: una descripción de servicios, no un contrato.",
      items: [
        {
          h: "Los precios y los plazos son puntos de partida",
          p: [
            "Toda cifra publicada en esta web es un precio de partida, señalado como tal, y todo plazo es un rango habitual. Ni una cosa ni otra constituyen una oferta vinculante en el sentido del artículo 232 del Código Civil portugués. Lo que obliga a cualquiera de las dos partes es la propuesta escrita y el contrato firmados para un proyecto concreto, que fijan el alcance real, el precio real y qué ocurre cuando alguno de los dos cambia.",
          ],
        },
        {
          h: "Escribirme no crea una relación",
          p: [
            "Enviar un formulario, un correo o un mensaje no crea por sí mismo una relación profesional, ni un deber de confidencialidad, ni obligación alguna por mi parte de aceptar el trabajo. Por favor, no envíes secretos comerciales, credenciales ni nada realmente sensible en un primer mensaje. Si necesitas confidencialidad antes de hablar, dímelo y firmamos un acuerdo de confidencialidad primero.",
          ],
        },
        {
          h: "Contenidos y propiedad intelectual",
          p: [
            "Los textos, la maquetación, el código y las imágenes de esta web son míos, salvo los nombres, logotipos y capturas de producto de terceros, que pertenecen a sus respectivos titulares y aparecen aquí para describir trabajo que he realizado. Puedes citar o enlazar esta web con atribución; la copia íntegra de los textos o del diseño no está permitida.",
            "Los enlaces a otros sitios se ofrecen como referencia y no implican respaldo ni responsabilidad sobre su contenido.",
          ],
        },
        {
          h: "Sin garantía sobre la información",
          p: [
            "Esta web es informativa. Se mantiene exacta y actualizada en la medida de mis posibilidades, pero nada de lo que contiene es asesoramiento profesional para tu situación concreta, y ningún resultado descrito aquí es promesa del mismo resultado para ti.",
          ],
        },
      ],
    },
  ],
};

const pt: LegalDoc = {
  eyebrow: "Legal",
  h1: "Privacidade, aviso legal e termos.",
  lede:
    "Tudo o que tem direito a saber antes de me enviar seja o que for através deste site, escrito para ser lido e não para ser suportado.",
  updated: "Última atualização: 2 de agosto de 2026",
  toc: "Nesta página",
  sections: [
    {
      id: "privacy",
      title: "Política de privacidade",
      lede:
        "Este site recolhe o mínimo de que precisa para lhe responder, e absolutamente nada para fins publicitários. Não há píxeis de rastreio, nem redes de anúncios, nem qualquer perfil construído sobre si.",
      items: [
        {
          h: "Quem responde pelos seus dados",
          p: [
            `${identity("pt", ENTITY.name)}, é o responsável pelo tratamento dos dados pessoais recolhidos através de ${ENTITY.site}. Pode escrever-me para ${ENTITY.email} sobre qualquer ponto desta página.`,
          ],
        },
        {
          h: "O que é recolhido, e para quê",
          p: [
            "Os formulários de contacto pedem o seu nome, o seu endereço de correio eletrónico e uma descrição da sua situação. O da página de serviços permite ainda indicar, de forma opcional, que tipo de cliente é e um intervalo aproximado de orçamento, campos que pode deixar em branco.",
            "Esses dados servem exatamente para uma coisa: responder-lhe e, se se concluir que devemos trabalhar juntos, preparar uma proposta. O fundamento de licitude é o artigo 6.º, n.º 1, alínea b) do RGPD, diligências pré-contratuais a seu pedido, em conjunto com a alínea f), o meu interesse legítimo em responder a quem me escreve. Nada do que envia é usado para marketing, vendido ou partilhado com quem quer que seja fora dos subcontratantes indicados abaixo.",
            "À parte, o site regista estatísticas de visita agregadas e anónimas: que páginas são abertas, aproximadamente de que ponto do mundo, e com que rapidez carregam. Esses números não são rastreáveis até si nem são associados ao que envia pelo formulário.",
          ],
        },
        {
          h: "Cookies e armazenamento local",
          p: [
            "Este site instala um único cookie, chamado NEXT_LOCALE, que recorda se escolheu inglês, espanhol ou português para não o devolver ao idioma do seu navegador em cada visita. Dura um ano e contém apenas um código de idioma de duas letras.",
            "A sua preferência de tema claro ou escuro fica guardada no armazenamento local do seu navegador e nunca sai do seu dispositivo.",
            "Ambos são estritamente necessários para prestar as funções que pediu, razão pela qual não lhe é mostrado um banner de consentimento. Neste site não existem cookies publicitários, analíticos ou de rastreio de terceiros a consentir.",
          ],
        },
        {
          h: "Quem mais trata os seus dados",
          p: [
            "O alojamento e as estatísticas de tráfego agregadas e sem cookies são fornecidos pela Vercel Inc. Os envios do formulário de contacto são recebidos e reencaminhados pela Formspree, e o correio do domínio é gerido pela Hostinger. Os dados de desempenho na pesquisa provêm do Google Search Console, apenas de forma agregada.",
            "A Vercel, a Formspree e a Google estão estabelecidas nos Estados Unidos, pelo que responder-lhe implica uma transferência internacional. Essas transferências assentam na decisão de adequação da Comissão Europeia relativa ao Quadro de Privacidade de Dados UE–EUA e, quando aplicável, em Cláusulas Contratuais-Tipo.",
          ],
        },
        {
          h: "Durante quanto tempo são conservados",
          p: [
            "Os pedidos que não dão origem a trabalho são conservados até vinte e quatro meses e depois eliminados, prazo suficiente para retomar uma conversa mais tarde. Se acabarmos por trabalhar juntos, a correspondência é conservada durante o período do trabalho e pelos prazos que a legislação comercial e fiscal portuguesa exija depois. O histórico de envios da própria Formspree, no plano que este site utiliza, está limitado a trinta dias.",
          ],
        },
        {
          h: "Os seus direitos",
          p: [
            "Pode pedir-me uma cópia dos dados que tenho sobre si, pedir que sejam corrigidos ou apagados, pedir-me que limite o que faço com eles, solicitá-los num formato portátil ou opor-se ao seu tratamento. Escreva para " +
              ENTITY.email +
              " e responderei no prazo de um mês, normalmente na mesma semana.",
            "Se considerar que tratei mal os seus dados, tem direito a reclamar junto da autoridade de controlo portuguesa, a Comissão Nacional de Proteção de Dados (CNPD), ou junto da autoridade do país da UE onde reside.",
          ],
        },
        {
          h: "O que não acontece",
          p: [
            "Não há decisões automatizadas nem definição de perfis. Nada do que envia é usado para treinar um modelo. Não existe newsletter nem lista de distribuição, pelo que escrever-me não o subscreve a coisa alguma.",
          ],
        },
      ],
    },
    {
      id: "notice",
      title: "Aviso legal",
      lede: "Quem está por trás deste site, como se exige a quem oferece serviços em linha a partir de Portugal.",
      items: [
        {
          h: "Titular do site",
          p: [
            `${identity("pt", `${ENTITY.name}, que opera sob o nome ${ENTITY.trading}`)}. Contacto: ${ENTITY.email}.`,
            "Atividade: conceção, desenvolvimento e manutenção de software em regime independente, sobretudo aplicações móveis multiplataforma e os backends que as sustentam.",
          ],
        },
        {
          h: "Alojamento e infraestrutura",
          p: [
            "O site é alojado pela Vercel Inc. (Estados Unidos). O domínio está registado através da Hostinger, que presta também o serviço de correio do domínio.",
          ],
        },
        {
          h: "Legislação aplicável",
          p: [
            "Este site é operado a partir de Portugal e está sujeito à lei portuguesa, incluindo o Decreto-Lei n.º 7/2004 sobre comércio eletrónico e serviços da sociedade da informação. Qualquer litígio emergente da utilização deste site compete aos tribunais portugueses, sem prejuízo das normas imperativas de defesa do consumidor que lhe possam ser aplicáveis.",
          ],
        },
      ],
    },
    {
      id: "terms",
      title: "Termos de utilização",
      lede: "Breves, e sobretudo acerca daquilo que este site não é: uma descrição de serviços, não um contrato.",
      items: [
        {
          h: "Os preços e os prazos são pontos de partida",
          p: [
            "Todos os valores publicados neste site são preços de partida, assinalados como tal, e todos os prazos são intervalos habituais. Nem uns nem outros constituem proposta contratual vinculativa nos termos do artigo 232.º do Código Civil. O que vincula qualquer das partes é a proposta escrita e o contrato assinados para um projeto concreto, que fixam o âmbito real, o preço real e o que sucede quando algum deles muda.",
          ],
        },
        {
          h: "Escrever-me não cria uma relação",
          p: [
            "Enviar um formulário, um correio eletrónico ou uma mensagem não cria por si só uma relação profissional, um dever de confidencialidade ou qualquer obrigação da minha parte de aceitar o trabalho. Por favor, não envie segredos comerciais, credenciais ou algo verdadeiramente sensível numa primeira mensagem. Se precisar de confidencialidade antes de falarmos, diga-o e assinamos um acordo de confidencialidade primeiro.",
          ],
        },
        {
          h: "Conteúdos e propriedade intelectual",
          p: [
            "Os textos, a composição, o código e as imagens deste site são meus, salvo os nomes, logótipos e capturas de produto de terceiros, que pertencem aos respetivos titulares e aqui surgem para descrever trabalho que realizei. Pode citar ou ligar para este site com atribuição; a cópia integral dos textos ou do design não é permitida.",
            "As ligações para outros sites são oferecidas como referência e não implicam aprovação nem responsabilidade pelo seu conteúdo.",
          ],
        },
        {
          h: "Sem garantia sobre a informação",
          p: [
            "Este site é informativo. É mantido exato e atualizado na medida das minhas possibilidades, mas nada do que nele consta constitui aconselhamento profissional para a sua situação concreta, e nenhum resultado aqui descrito é promessa do mesmo resultado para si.",
          ],
        },
      ],
    },
  ],
};

const docs: Record<Locale, LegalDoc> = { en, es, pt };

export function getLegal(locale: Locale): LegalDoc {
  return docs[locale] ?? en;
}
