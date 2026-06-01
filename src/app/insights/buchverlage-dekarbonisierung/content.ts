type Faq = { q: string; a: string };

type Content = {
  heroKicker: string;
  heroTitle: string;
  intro: string;

  section1Title: string;
  section1P1: string;
  section1P2: string;

  statNumber: string;
  statText: string;

  section2Title: string;
  section2P1: string;
  section2P2: string;
  section2P3: string;

  section3Title: string;
  section3P1: string;
  section3P2: string;

  pullQuote: string;

  section4Title: string;
  section4P1: string;
  section4P2: string;

  ctaTitle: string;
  ctaBody: string;
  ctaButtonLabel: string;

  authorBio: string;
  authorSectionLabel: string;
  authorSectionTitle: string;
  authorRole: string;
  authorCtaLabel: string;
  authorCtaDesc: string;

  faqIntro: string;
  faqs: Faq[];

  disclaimer: string;
};

export const content: Record<"de" | "en" | "pt", Content> = {
  de: {
    heroKicker: "Praxisbeobachtung · Buchverlage / Dekarbonisierung",
    heroTitle:
      "Eine Tonne Papier aus Frischfasern, eine Tonne Primärstahl: gleicher Energieverbrauch, ganz andere Geschichte",
    intro:
      "Wenn die meisten an energieintensive Industrien denken, kommen ihnen Stahl- und Chemiewerke in den Sinn. Nur wenige würden vermuten, dass das Papier auf ihrem Schreibtisch oder das Buch in ihrem Regal eine ähnliche Energiebilanz aufweist. Für Verlage, die Nachhaltigkeitsvorschriften und Kundenerwartungen ernst nehmen, ist das mehr als eine Randnotiz. Es ist ein strategischer Weckruf.",

    section1Title: "Eine Branche, die sich vor aller Augen verbirgt",
    section1P1:
      "Deutschland ist mit einer Jahresproduktion von rund 21,6 Millionen Tonnen der viertgrößte Papierproduzent der Welt. Hinter dieser Produktionsleistung verbirgt sich ein erheblicher ökologischer Fußabdruck. Die deutsche Papier- und Zellstoffindustrie verursachte 2022 etwa 11,8 Millionen Tonnen CO₂-Äquivalente. Das entspricht rund 7 Prozent der Emissionen des Industriesektors, der wiederum etwa 22 Prozent der gesamten Treibhausgasemissionen Deutschlands ausmacht.",
    section1P2:
      "Was den Energieverbrauch angeht, rangiert die Papierindustrie als fünftgrößter industrieller Energieverbraucher weltweit. Damit gehört Papier neben Stahl, Zement und Chemie eindeutig zur Kategorie der energieintensiven Grundstoffindustrien.",

    statNumber: "45 %",
    statText:
      "Emissionsreduktion bei einem unserer Verlagskunden zwischen 2022 und 2025. Erreicht durch konsequent angewandte Dekarbonisierungs-Hebel und Bilanzierung Jahr für Jahr.",

    section2Title: "Die Dekarbonisierung ist in greifbarer Nähe",
    section2P1:
      "Die gute Nachricht: Die Verlags- und Druckindustrie verfügt über praktikable und bewährte Wege, ihren CO₂-Fußabdruck zu verringern, ohne Abstriche bei Qualität oder Produktionsmenge. Zwei Hebel stechen dabei besonders hervor.",
    section2P2:
      "Die Umstellung von Frischfaser auf Recyclingpapier ist die Maßnahme mit der größten Wirkung. Die Verwendung von 100 Prozent Recyclingpapier spart im Vergleich zur Frischfaserproduktion 78 Prozent Wasser, 68 Prozent Energie und 15 Prozent CO₂-Emissionen ein. Für Verlage, die große Druckauflagen verwalten, bedeutet das eine direkte und messbare Reduzierung der Emissionen im Scope 3.",
    section2P3:
      "Auch die Investitionen in energieeffiziente Druckmaschinen senken den Energiebedarf in jeder Produktionsphase und reduzieren somit die Scope-1- und Scope-2-Emissionen auf Druckereiebene.",

    section3Title: "Von Tonnen zum Bücherregal",
    section3P1:
      "Abstrakte Tonnenzahlen sind oft schwer zu begreifen. Laut Öko-Institut entstehen bei der Produktion eines 200-Seiten-Buchs aus Frischfaserpapier rund 1,1 Kilogramm CO₂-Äquivalente. Wird stattdessen Recyclingpapier eingesetzt, sind es nur noch etwa 0,9 Kilogramm CO₂-Äquivalente pro Buch.",
    section3P2:
      "Auch unsere eigenen Berechnungen bestätigen diesen Bereich. Für einen Verlagskunden haben wir auf Basis der Gesamtemissionen (market-based) und der Gesamtanzahl der verkauften Bücher gerechnet. Das Ergebnis: 1,32 Kilogramm CO₂-Äquivalente pro durchschnittliches Buch im ersten bilanzierten Jahr. Durch die Umsetzung gezielter Dekarbonisierungs-Maßnahmen liegen die aktuellen Emissionen bei 0,97 Kilogramm CO₂-Äquivalenten pro Buch.",

    pullQuote:
      "Aus 1,32 Kilogramm CO₂ pro Buch wurden in drei Jahren 0,97 Kilogramm. Das sind 26 Prozent weniger pro Buch und 45 Prozent weniger an Gesamtemissionen.",

    section4Title: "Gemeinsam dekarbonisieren für eine zukunftsfähige Verlagsbranche",
    section4P1:
      "Wir unterstützen Buchverlage dabei, ihre Emissionen systematisch und nachhaltig zu reduzieren. Bei einem unserer Kunden konnten wir eine Emissionsreduktion von 45 Prozent zwischen der ersten Bilanz für das Jahr 2022 und der aktuellsten Bilanz für 2025 erreichen. Möglich war das, weil wir die Bilanz nicht als Pflicht, sondern als strategisches Steuerungsinstrument verstehen.",
    section4P2:
      "Unsere Ergebnisse zeigen: Wir haben das Know-how, um die Verlagsdekarbonisierung praktisch und messbar voranzubringen. Sprechen Sie uns an. Wir zeigen Ihnen, was in Ihrem Unternehmen möglich ist.",

    ctaTitle: "30-Minuten-Erstgespräch. Unverbindlich.",
    ctaBody:
      "Wir gehen Ihre Verlags-Klimabilanz gemeinsam durch und identifizieren, wo die größten Hebel für Reduktion in Ihrem Fall liegen.",
    ctaButtonLabel: "30-Minuten-Erstgespräch buchen",

    authorBio:
      "Erik Jakob ist einer der beiden Geschäftsführer der COzwei GmbH, einer auf Klimaschutzthemen spezialisierten Unternehmensberatung. Er begleitet Buchverlage seit mehreren Jahren bei der Erstellung von Klimabilanzen und der konkreten Umsetzung von Dekarbonisierungs-Maßnahmen.",
    authorSectionLabel: "Ihr Ansprechpartner",
    authorSectionTitle: "Im Erstgespräch klären wir Ihren Dekarbonisierungspfad",
    authorRole: "Geschäftsführer · Dekarbonisierung Buch- und Verlagsbranche",
    authorCtaLabel: "30-Minuten-Erstgespräch buchen",
    authorCtaDesc: "Kostenlos und unverbindlich. Wir ordnen Ihre Hotspots ein, skizzieren mögliche Reduktionspfade und klären die sinnvollen nächsten Schritte.",

    faqIntro: "Antworten auf die Fragen, die uns in Verlagsgesprächen am häufigsten gestellt werden.",
    faqs: [
      {
        q: "Wie viel CO₂ verursacht ein einzelnes Buch wirklich?",
        a: "Die Größenordnung liegt bei rund 1 Kilogramm CO₂-Äquivalenten pro 200-Seiten-Buch aus Frischfaserpapier (Öko-Institut). Mit Recyclingpapier sinkt der Wert auf etwa 0,9 Kilogramm. In unseren eigenen Berechnungen für einen Verlagskunden lagen die Werte zwischen 1,32 Kilogramm (Ausgangsbilanz) und 0,97 Kilogramm (aktuelle Bilanz) pro Buch. Die exakte Zahl hängt von Papierqualität, Druckverfahren, Auflagenhöhe und Vertriebsweg ab.",
      },
      {
        q: "Welche Hebel haben den größten Effekt für Buchverlage?",
        a: "Den größten Effekt hat die Umstellung von Frischfaser- auf Recyclingpapier (Scope 3.1). Sie spart rund 78 Prozent Wasser, 68 Prozent Energie und 15 Prozent CO₂-Emissionen pro Tonne. An zweiter Stelle stehen energieeffiziente Druckmaschinen und Prozessoptimierungen auf Druckereiebene (Scope 1 und 2). Weitere Hebel ergeben sich aus Auflagen-, Lager- und Logistikoptimierung.",
      },
      {
        q: "Lohnt sich ein Klimabilanz-Aufbau auch für mittelgroße Verlage?",
        a: "Ja. Auch wenn ein Verlag nicht direkt CSRD-pflichtig ist, fordern Vertriebspartner, Buchhandelsketten und institutionelle Kunden zunehmend belastbare Emissionsangaben entlang der Lieferkette. Eine saubere Klimabilanz schafft die Grundlage, um diese Anforderungen zu bedienen und die eigene Marktposition gegenüber nachhaltigkeitsorientierten Kunden zu stärken.",
      },
      {
        q: "Was sind realistische Reduktionspfade in den ersten Jahren?",
        a: "Bei unserem oben genannten Verlagskunden konnten wir innerhalb von drei Jahren rund 45 Prozent Reduktion bei den Gesamtemissionen erreichen. Solche Werte sind kein Selbstläufer, aber bei konsequenter Umsetzung der zwei Haupthebel realistisch. Eine Festpreis-Indikation und einen Vorschlag für den Reduktionspfad in Ihrem Unternehmen erhalten Sie nach dem 30-Minuten-Erstgespräch.",
      },
    ],

    disclaimer:
      "Hinweis: Die Kunden-Werte (1,32 / 0,97 Kilogramm CO₂ pro Buch, 45 Prozent Reduktion) stammen aus unseren eigenen Berechnungen auf Basis market-based Scope-2-Emissionen und gelten projektspezifisch.",
  },

  en: {
    heroKicker: "Practice observation · Publishers / Decarbonization",
    heroTitle:
      "A ton of virgin-fibre paper, a ton of primary steel: same energy use, very different story",
    intro:
      "When most people think of energy-intensive industries, steel mills and chemical plants come to mind. Few would guess that the paper on their desk or the book on their shelf carries a similar energy profile. For publishers who take sustainability regulation and customer expectations seriously, that is more than a footnote. It is a strategic wake-up call.",

    section1Title: "An industry hiding in plain sight",
    section1P1:
      "With annual production of around 21.6 million tons, Germany is the world's fourth-largest paper producer. Behind that output sits a substantial ecological footprint. The German pulp and paper industry emitted around 11.8 million tons of CO₂ equivalents in 2022, about 7 percent of industrial-sector emissions, which in turn account for roughly 22 percent of Germany's total greenhouse gas emissions.",
    section1P2:
      "On energy use, the paper industry ranks as the fifth-largest industrial energy consumer worldwide. That places paper firmly alongside steel, cement and chemicals among the energy-intensive base-material industries.",

    statNumber: "45 %",
    statText:
      "Emission reduction at one of our publishing clients between 2022 and 2025. Achieved through consistently applied decarbonization levers and a fresh inventory year after year.",

    section2Title: "Decarbonization is within reach",
    section2P1:
      "The good news: the publishing and printing industry has practical, proven ways to reduce its carbon footprint without compromising quality or volume. Two levers stand out in particular.",
    section2P2:
      "Switching from virgin to recycled paper is the single most impactful measure. Using 100 percent recycled paper saves 78 percent water, 68 percent energy and 15 percent CO₂ emissions per ton compared with virgin-fibre production. For publishers managing large print runs, that means a direct and measurable Scope 3 emission reduction.",
    section2P3:
      "Investments in energy-efficient printing presses also lower energy demand at every production stage, reducing Scope 1 and Scope 2 emissions on the printer's side.",

    section3Title: "From tons to the bookshelf",
    section3P1:
      "Abstract tonnage numbers can be hard to grasp. According to the Öko-Institut, producing a 200-page book on virgin-fibre paper releases roughly 1.1 kilograms of CO₂ equivalents. With recycled paper, that drops to about 0.9 kilograms per book.",
    section3P2:
      "Our own calculations confirm this range. For a publishing client, we worked from total emissions (market-based) and total books sold. Result: 1.32 kilograms of CO₂ equivalents per average book in the first inventory year. With targeted decarbonization measures, current emissions are 0.97 kilograms per book.",

    pullQuote:
      "1.32 kilograms of CO₂ per book became 0.97 kilograms in three years. That is 26 percent less per book and 45 percent less in total emissions.",

    section4Title: "Decarbonizing together for a future-fit publishing industry",
    section4P1:
      "We support book publishers in reducing their emissions systematically and sustainably. With one client, we achieved a 45 percent reduction in emissions between the first inventory for 2022 and the most recent one for 2025. That was possible because we treat the inventory not as an obligation but as a strategic steering tool.",
    section4P2:
      "Our results show: we have the know-how to move publisher decarbonization forward, practically and measurably. Talk to us. We will show you what is possible at your company.",

    ctaTitle: "30-minute intro call. Non-binding.",
    ctaBody:
      "We walk through your publishing-house climate inventory together and identify where the biggest reduction levers sit for your specific case.",
    ctaButtonLabel: "Book 30-minute intro call",

    authorBio:
      "Erik Jakob is one of the two managing directors of COzwei GmbH, a consultancy specialising in climate-protection topics. For several years he has guided book publishers in building climate inventories and implementing concrete decarbonization measures.",
    authorSectionLabel: "Your contact",
    authorSectionTitle: "In a first call we clarify your decarbonisation path",
    authorRole: "Managing Director · decarbonisation of the book and publishing industry",
    authorCtaLabel: "Book a 30-minute intro call",
    authorCtaDesc: "Free of charge, no obligation. We rank your hotspots, sketch out feasible reduction pathways and outline the sensible next steps.",

    faqIntro: "Answers to the questions we are most often asked in publisher conversations.",
    faqs: [
      {
        q: "How much CO₂ does a single book really cause?",
        a: "The ballpark is around 1 kilogram of CO₂ equivalents per 200-page book on virgin-fibre paper (Öko-Institut). With recycled paper, the value drops to about 0.9 kilograms. In our own calculations for a publishing client, values ranged from 1.32 kilograms (baseline) to 0.97 kilograms (current) per book. The exact figure depends on paper quality, printing method, run size and distribution path.",
      },
      {
        q: "Which levers have the biggest effect for book publishers?",
        a: "The biggest effect comes from switching from virgin to recycled paper (Scope 3.1). It saves about 78 percent water, 68 percent energy and 15 percent CO₂ emissions per ton. In second place are energy-efficient printing presses and process optimisation on the printer's side (Scope 1 and 2). Further levers come from run-size, warehousing and logistics optimisation.",
      },
      {
        q: "Is it worth building a climate inventory for mid-sized publishers too?",
        a: "Yes. Even if a publisher is not directly CSRD-obliged, distribution partners, book-trade chains and institutional customers increasingly demand robust emission data along the supply chain. A clean climate inventory creates the basis for meeting those demands and strengthens your market position with sustainability-minded customers.",
      },
      {
        q: "What are realistic reduction paths in the first few years?",
        a: "With the publishing client mentioned above, we achieved around 45 percent total emission reduction within three years. Numbers like that are not automatic, but realistic with consistent execution of the two main levers. You receive a fixed-price indication and a proposed reduction path for your company after a 30-minute intro call.",
      },
    ],

    disclaimer:
      "Note: the client figures (1.32 / 0.97 kilograms CO₂ per book, 45 percent reduction) come from our own calculations on a market-based Scope 2 basis and apply project-specifically.",
  },

  pt: {
    heroKicker: "Observação de prática · Editoras / Descarbonização",
    heroTitle:
      "Uma tonelada de papel de fibra virgem, uma tonelada de aço primário: mesmo consumo de energia, histórias muito diferentes",
    intro:
      "Quando a maioria pensa em indústrias intensivas em energia, vêm-lhe à mente siderúrgicas e fábricas químicas. Poucos imaginariam que o papel sobre a secretária ou o livro na estante apresenta um perfil energético semelhante. Para editoras que levam a sério a regulação de sustentabilidade e as expectativas dos clientes, isto é mais do que uma nota de rodapé. É um alerta estratégico.",

    section1Title: "Uma indústria que se esconde à vista de todos",
    section1P1:
      "Com uma produção anual de cerca de 21,6 milhões de toneladas, a Alemanha é o quarto maior produtor de papel do mundo. Por trás desse volume esconde-se uma pegada ecológica considerável. A indústria alemã de celulose e papel emitiu cerca de 11,8 milhões de toneladas de CO₂ equivalente em 2022, aproximadamente 7 por cento das emissões do setor industrial, que por sua vez representa cerca de 22 por cento das emissões totais de gases de efeito estufa da Alemanha.",
    section1P2:
      "Em consumo de energia, a indústria do papel ocupa o quinto lugar entre os maiores consumidores industriais a nível mundial. Isso coloca o papel claramente, ao lado do aço, cimento e químicos, entre as indústrias de matérias-primas intensivas em energia.",

    statNumber: "45 %",
    statText:
      "Redução de emissões num dos nossos clientes editores entre 2022 e 2025. Alcançada através de alavancas de descarbonização aplicadas de forma consistente e de um inventário ano após ano.",

    section2Title: "A descarbonização está ao alcance",
    section2P1:
      "A boa notícia: a indústria editorial e gráfica dispõe de caminhos práticos e comprovados para reduzir a sua pegada de CO₂, sem comprometer qualidade ou volume de produção. Duas alavancas destacam-se em particular.",
    section2P2:
      "A mudança de fibra virgem para papel reciclado é a medida com maior impacto. Utilizar 100 por cento de papel reciclado poupa cerca de 78 por cento de água, 68 por cento de energia e 15 por cento de emissões de CO₂ por tonelada em comparação com a produção em fibra virgem. Para editoras que gerem grandes tiragens, isso significa uma redução direta e mensurável das emissões de Escopo 3.",
    section2P3:
      "Os investimentos em máquinas de impressão mais eficientes em energia também reduzem o consumo em cada fase de produção, baixando assim as emissões de Escopo 1 e Escopo 2 ao nível da gráfica.",

    section3Title: "Das toneladas à estante",
    section3P1:
      "Números abstratos em toneladas são frequentemente difíceis de captar. Segundo o Öko-Institut, a produção de um livro de 200 páginas em papel de fibra virgem gera cerca de 1,1 quilogramas de CO₂ equivalente. Com papel reciclado, esse valor desce para cerca de 0,9 quilogramas por livro.",
    section3P2:
      "Os nossos próprios cálculos confirmam essa ordem de grandeza. Para um cliente editor, calculámos com base no total de emissões (market-based) e no total de livros vendidos. Resultado: 1,32 quilogramas de CO₂ equivalente por livro médio no primeiro ano inventariado. Com medidas de descarbonização direcionadas, as emissões atuais situam-se em 0,97 quilogramas por livro.",

    pullQuote:
      "1,32 quilogramas de CO₂ por livro passaram a 0,97 quilogramas em três anos. Isso são 26 por cento menos por livro e 45 por cento menos em emissões totais.",

    section4Title: "Descarbonizar em conjunto para um setor editorial à prova de futuro",
    section4P1:
      "Apoiamos editoras a reduzir as suas emissões de forma sistemática e sustentável. Com um dos nossos clientes alcançámos uma redução de 45 por cento entre o primeiro inventário para 2022 e o mais recente para 2025. Foi possível porque tratamos o inventário não como obrigação, mas como instrumento estratégico de gestão.",
    section4P2:
      "Os nossos resultados mostram: temos o know-how para avançar a descarbonização editorial de forma prática e mensurável. Fale connosco. Mostramos-lhe o que é possível na sua empresa.",

    ctaTitle: "Conversa inicial de 30 minutos. Sem compromisso.",
    ctaBody:
      "Percorremos consigo o seu inventário climático editorial e identificamos onde estão as maiores alavancas de redução no seu caso específico.",
    ctaButtonLabel: "Agendar conversa inicial de 30 min",

    authorBio:
      "Erik Jakob é um dos dois administradores da COzwei GmbH, uma consultoria especializada em proteção climática. Há vários anos acompanha editoras na elaboração de inventários climáticos e na implementação concreta de medidas de descarbonização.",
    authorSectionLabel: "O seu interlocutor",
    authorSectionTitle: "Numa primeira conversa esclarecemos o seu caminho de descarbonização",
    authorRole: "Administrador · descarbonização da indústria do livro e da edição",
    authorCtaLabel: "Agendar conversa inicial de 30 minutos",
    authorCtaDesc: "Gratuito e sem compromisso. Ordenamos os seus hotspots, esboçamos trajetórias de redução viáveis e definimos os próximos passos razoáveis.",

    faqIntro: "Respostas às perguntas que mais nos colocam em conversas com editoras.",
    faqs: [
      {
        q: "Quanto CO₂ causa realmente um único livro?",
        a: "A ordem de grandeza ronda 1 quilograma de CO₂ equivalente por livro de 200 páginas em papel de fibra virgem (Öko-Institut). Com papel reciclado, o valor desce para cerca de 0,9 quilogramas. Nos nossos cálculos para um cliente editor, os valores situaram-se entre 1,32 quilogramas (inventário inicial) e 0,97 quilogramas (inventário atual) por livro. O número exato depende da qualidade do papel, do método de impressão, do tamanho da tiragem e do canal de distribuição.",
      },
      {
        q: "Que alavancas têm maior efeito para editoras?",
        a: "O maior efeito vem da mudança de fibra virgem para papel reciclado (Escopo 3.1). Poupa cerca de 78 por cento de água, 68 por cento de energia e 15 por cento de emissões de CO₂ por tonelada. Em segundo lugar surgem máquinas de impressão eficientes em energia e otimização de processos ao nível da gráfica (Escopo 1 e 2). Mais alavancas resultam da otimização de tiragens, armazenamento e logística.",
      },
      {
        q: "Vale a pena construir um inventário climático também para editoras de média dimensão?",
        a: "Sim. Mesmo que uma editora não esteja diretamente obrigada à CSRD, parceiros de distribuição, cadeias de livrarias e clientes institucionais exigem cada vez mais dados de emissões fiáveis ao longo da cadeia de fornecimento. Um inventário climático bem feito cria a base para responder a esses requisitos e reforça a posição de mercado junto de clientes orientados para a sustentabilidade.",
      },
      {
        q: "Quais são caminhos de redução realistas nos primeiros anos?",
        a: "Com o cliente editor mencionado acima, alcançámos cerca de 45 por cento de redução nas emissões totais em três anos. Esses valores não são automáticos, mas são realistas com execução consistente das duas alavancas principais. Receberá uma indicação de preço fixo e uma proposta de caminho de redução para a sua empresa após a conversa inicial de 30 minutos.",
      },
    ],

    disclaimer:
      "Nota: os valores do cliente (1,32 / 0,97 quilogramas de CO₂ por livro, 45 por cento de redução) resultam dos nossos próprios cálculos com base em emissões market-based de Escopo 2 e aplicam-se ao projeto específico.",
  },
};
