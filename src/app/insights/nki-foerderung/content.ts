type Faq = { q: string; a: string };

type Content = {
  heroKicker: string;
  heroTitle: string;
  intro: string;

  section1Title: string;
  section1P1: string;
  section1P2: string;
  section1P3: string;

  statNumber: string;
  statText: string;

  section2Title: string;
  section2P1: string;
  section2P2: string;

  pullQuote: string;

  section2P3: string;

  section3Title: string;
  section3Intro: string;

  factor1Title: string;
  factor1P1: string;
  factor1P2: string;
  factor1P3: string;

  factor2Title: string;
  factor2P1: string;
  factor2P2: string;

  factor3Title: string;
  factor3P1: string;
  factor3P2: string;

  section4Title: string;
  section4P1: string;
  section4P2: string;
  section4P3: string;

  ctaTitle: string;
  ctaBody: string;
  ctaButtonLabel: string;

  authorBio: string;

  faqIntro: string;
  faqs: Faq[];

  disclaimer: string;
};

export const content: Record<"de" | "en" | "pt", Content> = {
  de: {
    heroKicker: "Praxisbeobachtung · NKI-Förderung / Klimaschutzkonzepte",
    heroTitle:
      "NKI-Förderungen erfolgreich umsetzen: Unsere Erfahrungen aus abgeschlossenen Klimaschutzprojekten",
    intro:
      "Ein Klimaschutzkonzept kann der Startpunkt einer echten Transformation sein. Oder es kann im Aktenordner enden. Den Unterschied machen drei organisatorische Themen, die wir aus der erfolgreichen Umsetzung von über zehn geförderten NKI-Projekten kennen.",

    section1Title: "Worum es bei geförderten Klimaschutzkonzepten der NKI geht",
    section1P1:
      "Die Anforderungen an den Klimaschutz steigen, gleichzeitig wächst der Druck auf öffentliche und gemeinnützige Einrichtungen, konkrete Maßnahmen umzusetzen und Fördermittel sinnvoll einzusetzen. Genau hier setzt die Nationale Klimaschutzinitiative (NKI) des Bundes an: Sie unterstützt Kommunen sowie zahlreiche Einrichtungen aus Bildung, Gesundheit, Pflege, Kultur und Religionsgemeinschaften bei der Erstellung integrierter Klimaschutzkonzepte.",
    section1P2:
      "Verwaltet werden die NKI-Förderprogramme durch die Zukunft – Umwelt – Gesellschaft (ZUG) gGmbH. Die zentrale Förderlinie für unsere Zielgruppen ist die Kommunalrichtlinie des BMUV.",
    section1P3:
      "Besonders spannend: Viele Einrichtungen wissen gar nicht, dass sie grundsätzlich antragsberechtigt sind. Dazu zählen unter anderem kommunale Betriebe, Schulen, Hochschulen, Krankenhäuser, kirchliche Träger, soziale Einrichtungen sowie Religionsgemeinschaften mit Körperschaftsstatus. Gerade diese Vielfalt macht die Projekte anspruchsvoll, und genau darin liegt unsere Stärke.",

    statNumber: "10+",
    statText:
      "abgeschlossene NKI-Klimaschutzkonzepte in den letzten zwei Jahren, mit Schwerpunkt im Hochschulbereich.",

    section2Title: "Erfahrung, die über klassische Fördermittelberatung hinausgeht",
    section2P1:
      "Wir begleiten NKI-Projekte nicht nur inhaltlich, sondern unterstützen Einrichtungen auch strategisch und operativ bei der Entwicklung tragfähiger Klimaschutzmaßnahmen. Besonders umfangreiche Erfahrungen konnten wir dabei im Hochschulbereich sammeln, wo komplexe Entscheidungswege, unterschiedliche Stakeholder und anspruchsvolle Verwaltungsstrukturen zum Alltag gehören.",
    section2P2:
      "Gerade diese Erfahrungen sind für die Umsetzung von Klimaschutzkonzepten besonders wertvoll, denn viele Herausforderungen ähneln sich in anderen Organisationsformen wie Schulen, Krankenhäusern oder kirchlichen Einrichtungen. Unterschiedliche Zuständigkeiten, dezentrale Strukturen, Mittelengpässe und vielfältige Interessen müssen frühzeitig berücksichtigt werden, damit Maßnahmen später tatsächlich umgesetzt werden können, oder zumindest eine Chance darauf haben.",

    pullQuote:
      "Erfolgreiche Klimaschutzkonzepte scheitern selten an der Technik. Sie scheitern an fehlender Abstimmung, unklaren Verantwortlichkeiten oder unrealistischen Maßnahmenplanungen.",

    section2P3:
      "Deshalb legen wir besonderen Wert darauf, organisatorische Rahmenbedingungen von Beginn an mitzudenken und daraus praxisnahe, förderfähige und umsetzbare Lösungen zu entwickeln. Durch unsere Erfahrung im Hochschulumfeld bringen wir das notwendige Verständnis für komplexe Organisationsstrukturen mit. Diese Grundlage lässt sich auch erfolgreich auf Schulen, Krankenhäuser, Kirchen und andere öffentliche oder gemeinnützige Einrichtungen übertragen.",

    section3Title: "Die drei NKI-Erfolgsfaktoren",
    section3Intro:
      "Aus unseren abgeschlossenen NKI-Projekten lassen sich drei Erfolgsfaktoren ableiten, die in der Praxis immer wieder den Unterschied machen, unabhängig davon, ob es sich um eine Hochschule, eine kirchliche Einrichtung oder ein Krankenhaus handelt.",

    factor1Title: "1. Excel, BISKO oder Landes-Tool stoßen immer an Grenzen",
    factor1P1:
      "Viele Einrichtungen starten mit vorhandenen Energie- oder Verbrauchstabellen der Länder oder Trägerorganisationen. In der Praxis zeigt sich jedoch schnell: Für eine belastbare BISKO-konforme Treibhausgasbilanz sind die Daten häufig nicht ausreichend strukturiert oder nicht konsistent genug.",
    factor1P2:
      "BISKO (Bilanzierungs-Systematik Kommunal) ist das in der Umsetzung von NKI-Projekten etablierte Excel-Tool für Kommunen und vergleichbare Einrichtungen. Es wurde vom ifeu (Institut für Energie- und Umweltforschung Heidelberg) gemeinsam mit dem Klima-Bündnis im Rahmen eines NKI-Projekts entwickelt und legt fest, welche Energieträger zu erfassen sind, welche Emissionsfaktoren anzusetzen sind und wie die Bilanz zu konsolidieren ist. Für leitungsgebundene Energieträger ist die Verwendung von Primärdaten verbindlich.",
    factor1P3:
      "Wir wissen aus Erfahrung, welche Daten als Eingabe wirklich in welcher Form benötigt werden, wie sie sinnvoll aufbereitet werden und wie sich daraus eine förderfähige Bilanz entwickeln lässt, ohne monatelange Datennachforderungen.",

    factor2Title: "2. Die Maßnahmen ähneln sich, die Umsetzung aber nie",
    factor2P1:
      "LED-Umrüstung, Heizungsoptimierung, PV-Ausbau, Mobilitätskonzepte oder Sensibilisierung der Nutzerinnen und Nutzer: Die Maßnahmenkataloge vieler Einrichtungen ähneln sich stark. Der Unterschied liegt jedoch in der praktischen Umsetzbarkeit.",
    factor2P2:
      "Eine Maßnahme, die in einer Hochschule problemlos funktioniert, kann in einer anderen Einrichtung völlig unmöglich sein oder in einem Krankenhaus aufgrund regulatorischer Anforderungen deutlich komplexer werden. In kirchlichen Strukturen wiederum sind Abstimmungen oft dezentral organisiert. Deshalb entwickeln wir keine Standardkonzepte, sondern Lösungen, die zur jeweiligen Organisation passen. Unser Spektrum reicht von Treibhausgasbilanzen mit 800 t CO₂e bis hin zu 130.000 t CO₂e pro Jahr, und wir haben bereits Maßnahmen in jedem Feld entwickelt und ihre Umsetzung begleitet.",

    factor3Title: "3. Die Umsetzungshoheit liegt oft nicht bei der Einrichtung selbst",
    factor3P1:
      "Ein entscheidender Punkt, der in vielen Förderprojekten unterschätzt wird: Die Einrichtung selbst entscheidet häufig gar nicht selbstständig über Gebäude, Investitionen oder technische Maßnahmen.",
    factor3P2:
      "Gerade bei Schulen, Hochschulen oder Krankenhäusern liegen Zuständigkeiten häufig bei Trägern, Bauämtern oder externen Betreibergesellschaften. Wer diese Strukturen nicht versteht, plant Maßnahmen, die später nicht umgesetzt werden können. Unsere Erfahrung hilft dabei, diese Stakeholder frühzeitig einzubinden und realistische Umsetzungswege zu entwickeln, auch wenn das bei dem ein oder anderen Klimaschutzmanager regelmäßig für Frustrationen sorgt.",

    section4Title: "Warum Klimaschutzkonzepte für Einrichtungen heute entscheidend sind",
    section4P1:
      "Die NKI-Förderung bietet enormes Potenzial, nicht nur finanziell, sondern auch strategisch. Ein professionelles Klimaschutzkonzept schafft Transparenz, priorisiert Investitionen, ermöglicht langfristige Transformationsprozesse und kann zur Reputationssteigerung beitragen. Gleichzeitig steigen die Anforderungen an Nachweisführung, Datenqualität und Umsetzbarkeit kontinuierlich.",
    section4P2:
      "Deshalb braucht es Partner, die sowohl die Anforderungen der Fördermittelgeber als auch die Realität öffentlicher und gemeinnütziger Einrichtungen verstehen. Genau diese Verbindung aus Förderkompetenz, Praxiserfahrung und sektorenspezifischem Know-how bringen wir mit.",
    section4P3:
      "Ob Hochschule, kirchlicher Träger, Krankenhaus oder Schule: Wir wissen, wie NKI-Projekte erfolgreich beantragt, strukturiert und umgesetzt werden, und worauf es in der Praxis wirklich ankommt.",

    ctaTitle: "30-Minuten-Erstgespräch. Unverbindlich.",
    ctaBody:
      "Wir gehen Ihr NKI-Vorhaben gemeinsam durch und identifizieren, an welchen der drei Erfolgsfaktoren Sie bereits stehen und wo Nachholbedarf besteht, bevor der Antrag gestellt wird. Auf Wunsch nehmen wir auch an Ihren Ausschreibungen teil.",
    ctaButtonLabel: "30-Minuten-Erstgespräch buchen",

    authorBio:
      "Marie Bruns ist Energieberaterin und betreut bei der COzwei GmbH neben Unternehmenskunden schwerpunktmäßig Klimaschutzkonzepte der NKI. Sie trägt als Umweltingenieurin der RWTH Aachen zudem maßgeblich zur Bewertung von Maßnahmen zur CO₂-Reduktion bei.",

    faqIntro: "Antworten auf die Fragen, die uns in NKI-Erstgesprächen am häufigsten gestellt werden.",
    faqs: [
      {
        q: "Wer ist für die NKI-Kommunalrichtlinie antragsberechtigt?",
        a: "Antragsberechtigt sind Kommunen, kommunale Betriebe sowie öffentliche, gemeinnützige, kirchliche und religiöse Einrichtungen, darunter Schulen, Hochschulen, Krankenhäuser, kirchliche Träger, soziale Einrichtungen und Religionsgemeinschaften mit Körperschaftsstatus. Die jeweils aktuelle Kommunalrichtlinie des BMUV definiert die zugelassenen Antragsteller pro Förderaufruf.",
      },
      {
        q: "Was bedeutet „BISKO-konform\"?",
        a: "BISKO steht für Bilanzierungs-Systematik Kommunal, das vom ifeu (Institut für Energie- und Umweltforschung Heidelberg) gemeinsam mit dem Klima-Bündnis im Rahmen eines NKI-Projekts entwickelte territoriale Bilanzierungssystem. Es legt fest, welche Energieträger zu erfassen sind, welche Emissionsfaktoren anzusetzen sind und wie konsolidiert wird. Für leitungsgebundene Energieträger ist die Verwendung von Primärdaten verbindlich; für nicht-leitungsgebundene Energieträger sind Hochrechnungen zulässig.",
      },
      {
        q: "Wer verwaltet die NKI-Förderung?",
        a: "Die NKI-Förderprogramme werden weitgehend durch die Zukunft – Umwelt – Gesellschaft (ZUG) gGmbH als Projektträger umgesetzt. Förderaufrufe und Richtlinien werden auf klimaschutz.de und z-u-g.org veröffentlicht. Die jeweils aktuelle Kommunalrichtlinie und die ergänzenden Förderaufrufe sind verbindlich.",
      },
      {
        q: "Welche Maßnahmen werden über die Kommunalrichtlinie typischerweise gefördert?",
        a: "Die Kommunalrichtlinie deckt ein breites Spektrum ab: von der Erstellung von Klimaschutzkonzepten und der Förderung von Klimaschutzmanagement-Personalstellen über investive Maßnahmen in Mobilität, Abfall- und Abwasserwirtschaft sowie Trinkwasserversorgung. Die konkrete Förderfähigkeit hängt vom jeweiligen Förderaufruf ab.",
      },
      {
        q: "Welche Unterlagen brauchen wir für den Start?",
        a: "Für die Vorprüfung benötigen wir eine Übersicht der relevanten Liegenschaften und Einheiten, vorhandene Energie- und Verbrauchsdaten (Strom, Wärme, Mobilität), eine grobe Skizze der Trägerstruktur und Zuständigkeiten (Bauamt, Betreibergesellschaften, Trägerorganisation) sowie, sofern vorhanden, die aktuelle Strategie- oder Leitbilddokumentation.",
      },
      {
        q: "Sind private gemeinnützige Hochschulen und kirchliche Träger antragsberechtigt?",
        a: "Öffentliche, gemeinnützige und religiöse Bildungseinrichtungen sowie Hochschulen und ihre Träger sind in der Regel antragsberechtigt. Religionsgemeinschaften mit Körperschaftsstatus und kirchliche Träger fallen ebenfalls in den Kreis der Antragsberechtigten. Die jeweils aktuelle Förderrichtlinie ist verbindlich; wir prüfen die Antragsberechtigung im Erstgespräch konkret für Ihren Fall.",
      },
    ],

    disclaimer:
      "Hinweis: Dieser Beitrag gibt unsere Praxiserfahrung sowie den Stand der genannten Förderprogramme wieder. Die jeweils aktuelle NKI-Kommunalrichtlinie und ergänzende Förderaufrufe sind verbindlich. Vor Antragstellung empfehlen wir, den aktuellen Stand bei BMUV / ZUG gGmbH zu prüfen.",
  },

  en: {
    heroKicker: "Practice observation · NKI funding / Climate protection concepts",
    heroTitle:
      "Delivering NKI funding successfully: our experience from completed climate protection projects",
    intro:
      "A climate protection concept can be the starting point of real transformation, or it can end up in a filing cabinet. The difference comes down to three organisational themes that we know from delivering over ten NKI-funded projects.",

    section1Title: "What NKI-funded climate protection concepts are about",
    section1P1:
      "Climate protection demands keep rising; at the same time, pressure grows on public and non-profit institutions to implement concrete measures and to use funding meaningfully. This is exactly where the National Climate Protection Initiative (NKI) of the German federal government comes in: it supports municipalities and many institutions from education, health care, social care, culture and religious communities in building integrated climate protection concepts.",
    section1P2:
      "The NKI funding programmes are administered by Zukunft – Umwelt – Gesellschaft (ZUG) gGmbH. The central funding stream for our target groups is the BMUV's Kommunalrichtlinie (municipal funding directive).",
    section1P3:
      "Particularly interesting: many institutions don't realise they are eligible to apply. This includes municipal entities, schools, universities, hospitals, church bodies, social institutions and religious communities with public-law status. It is precisely this diversity that makes the projects demanding, and that is where our strength lies.",

    statNumber: "10+",
    statText:
      "completed NKI climate protection concepts in the past two years, with a focus on the higher-education sector.",

    section2Title: "Experience that goes beyond classic funding consulting",
    section2P1:
      "We support NKI projects not only on content but also strategically and operationally in developing viable climate protection measures. We have built particularly broad experience in higher education, where complex decision paths, varied stakeholders and demanding administrative structures are part of everyday life.",
    section2P2:
      "These experiences are especially valuable for implementing climate protection concepts, because many challenges recur in other organisational settings such as schools, hospitals or church bodies. Different responsibilities, decentralised structures, budget constraints and varied interests must be addressed early so measures can actually be implemented later, or at least have a chance to be.",

    pullQuote:
      "Successful climate protection concepts rarely fail on the technology. They fail on missing alignment, unclear responsibilities or unrealistic measure planning.",

    section2P3:
      "That is why we place particular value on factoring in organisational conditions from the start and turning them into practical, fundable and implementable solutions. Our experience in higher education brings the necessary understanding for complex organisational structures, and that foundation also transfers successfully to schools, hospitals, church bodies and other public or non-profit institutions.",

    section3Title: "The three NKI success factors",
    section3Intro:
      "Across our completed NKI projects, three success factors emerge that make the difference in practice, whether the client is a university, a church body or a hospital.",

    factor1Title: "1. Excel, BISKO or state-level tools always hit a wall",
    factor1P1:
      "Many institutions start with existing energy or consumption tables from state authorities or umbrella organisations. In practice, however, it quickly becomes clear: the data is often not structured or consistent enough to support a robust, BISKO-compliant greenhouse gas inventory.",
    factor1P2:
      "BISKO (Bilanzierungs-Systematik Kommunal) is the Excel tool established for NKI projects in municipalities and comparable institutions. It was developed by ifeu (Institute for Energy and Environmental Research Heidelberg) together with the Klima-Bündnis under an NKI project and defines which energy carriers must be captured, which emission factors apply and how the inventory is consolidated. For grid-bound energy carriers, primary data is mandatory.",
    factor1P3:
      "We know from experience what data is really needed as input, in what form, how it is best prepared, and how a fundable inventory can be built from it without months of data follow-up.",

    factor2Title: "2. The measures look similar, the implementation never does",
    factor2P1:
      "LED retrofits, heating optimisation, PV roll-out, mobility concepts, user awareness campaigns: the measure catalogues of many institutions look strikingly similar. The difference lies in actual implementability.",
    factor2P2:
      "A measure that works smoothly at one university can be entirely impossible at another, or in a hospital it can become significantly more complex due to regulatory requirements. In church structures, coordination is often decentralised. That is why we do not develop standard concepts, but solutions that fit each organisation. Our portfolio ranges from inventories of 800 t CO₂e to 130,000 t CO₂e per year, and we have developed and accompanied the implementation of measures in every field.",

    factor3Title: "3. The authority to implement often does not sit with the institution itself",
    factor3P1:
      "A decisive point often underestimated in funded projects: the institution itself often does not decide independently on buildings, investments or technical measures.",
    factor3P2:
      "Especially with schools, universities and hospitals, responsibilities frequently sit with sponsoring bodies, building authorities or external operators. Those who do not understand these structures plan measures that cannot later be implemented. Our experience helps to engage these stakeholders early and to develop realistic implementation paths, even if that sometimes frustrates the occasional climate protection manager.",

    section4Title: "Why climate protection concepts matter for institutions today",
    section4P1:
      "NKI funding offers enormous potential, not only financially but also strategically. A professional climate protection concept creates transparency, prioritises investments, enables long-term transformation processes and can strengthen reputation. At the same time, requirements on evidence, data quality and implementability continue to rise.",
    section4P2:
      "That is why partners are needed who understand both the requirements of the funding bodies and the reality of public and non-profit institutions. This combination of funding expertise, practical experience and sector-specific know-how is exactly what we bring.",
    section4P3:
      "Whether university, church body, hospital or school: we know how NKI projects are successfully applied for, structured and delivered, and what really matters in practice.",

    ctaTitle: "30-minute intro call. Non-binding.",
    ctaBody:
      "We walk through your NKI plan together and identify where you already stand on the three success factors and where you still need to catch up before submitting the application. On request, we also take part in your tenders.",
    ctaButtonLabel: "Book 30-minute intro call",

    authorBio:
      "Marie Bruns is an energy consultant at COzwei GmbH and, alongside corporate clients, focuses on NKI climate protection concepts. As an environmental engineer graduating from RWTH Aachen, she also contributes substantially to the assessment of CO₂ reduction measures.",

    faqIntro: "Answers to the questions we are most often asked in NKI intro calls.",
    faqs: [
      {
        q: "Who is eligible to apply under the NKI Kommunalrichtlinie?",
        a: "Eligible applicants include municipalities, municipal entities and public, non-profit, church and religious institutions, among them schools, universities, hospitals, church bodies, social institutions and religious communities with public-law status. The current BMUV Kommunalrichtlinie defines the eligible applicants per funding call.",
      },
      {
        q: "What does „BISKO-compliant\" mean?",
        a: "BISKO stands for Bilanzierungs-Systematik Kommunal, the territorial accounting system developed by ifeu (Institute for Energy and Environmental Research Heidelberg) together with the Klima-Bündnis under an NKI project. It defines which energy carriers must be captured, which emission factors apply and how consolidation is performed. For grid-bound energy carriers, primary data is mandatory; for non-grid-bound carriers, estimates are permitted.",
      },
      {
        q: "Who administers NKI funding?",
        a: "NKI funding programmes are largely delivered by Zukunft – Umwelt – Gesellschaft (ZUG) gGmbH as project agency. Funding calls and guidelines are published at klimaschutz.de and z-u-g.org. The current Kommunalrichtlinie and supplementary calls are binding.",
      },
      {
        q: "Which measures does the Kommunalrichtlinie typically fund?",
        a: "The Kommunalrichtlinie covers a broad range: from drawing up climate protection concepts and funding climate protection management staff positions to investive measures in mobility, waste and wastewater management as well as drinking-water supply. Concrete eligibility depends on the specific funding call.",
      },
      {
        q: "Which documents do we need to start?",
        a: "For the pre-check we need an overview of relevant properties and units, existing energy and consumption data (electricity, heating, mobility), a rough sketch of the sponsoring structure and responsibilities (building authority, operators, sponsor) and, if available, the current strategy or mission documentation.",
      },
      {
        q: "Are private non-profit universities and church bodies eligible to apply?",
        a: "Public, non-profit and religious education institutions and universities and their sponsors are generally eligible. Religious communities with public-law status and church bodies also fall within the circle of eligible applicants. The current funding directive is binding; we check eligibility specifically for your case in the intro call.",
      },
    ],

    disclaimer:
      "Note: this article reflects our practical experience and the status of the funding programmes mentioned. The current NKI Kommunalrichtlinie and supplementary calls are binding. Before submitting, we recommend checking the latest status with BMUV / ZUG gGmbH.",
  },

  pt: {
    heroKicker: "Observação de prática · Financiamento NKI / Conceitos de proteção climática",
    heroTitle:
      "Concretizar financiamentos NKI com sucesso: a nossa experiência em projetos de proteção climática concluídos",
    intro:
      "Um conceito de proteção climática pode ser o ponto de partida de uma verdadeira transformação, ou pode acabar arquivado. A diferença está em três temas organizacionais que conhecemos da implementação bem-sucedida de mais de dez projetos NKI financiados.",

    section1Title: "Sobre o que são os conceitos de proteção climática financiados pela NKI",
    section1P1:
      "As exigências em torno da proteção climática aumentam; ao mesmo tempo, cresce a pressão sobre instituições públicas e sem fins lucrativos para implementar medidas concretas e aplicar fundos de forma sensata. É precisamente aqui que entra a Iniciativa Nacional de Proteção Climática (NKI) do governo federal alemão: apoia municípios e numerosas instituições de educação, saúde, cuidados sociais, cultura e comunidades religiosas na elaboração de conceitos integrados de proteção climática.",
    section1P2:
      "Os programas de financiamento NKI são geridos pela Zukunft – Umwelt – Gesellschaft (ZUG) gGmbH. A linha de financiamento central para os nossos públicos-alvo é a Kommunalrichtlinie (diretiva municipal) do BMUV.",
    section1P3:
      "Particularmente interessante: muitas instituições não sabem que são, em princípio, elegíveis para se candidatar. Entre elas contam-se entidades municipais, escolas, universidades, hospitais, entidades eclesiásticas, instituições sociais e comunidades religiosas com estatuto de direito público. É justamente esta diversidade que torna os projetos exigentes, e é aí que reside a nossa força.",

    statNumber: "10+",
    statText:
      "conceitos NKI de proteção climática concluídos nos últimos dois anos, com foco no ensino superior.",

    section2Title: "Experiência que vai além da consultoria clássica de financiamento",
    section2P1:
      "Apoiamos projetos NKI não apenas no plano dos conteúdos, mas também estratégica e operacionalmente no desenvolvimento de medidas viáveis de proteção climática. Reunimos experiência particularmente ampla no ensino superior, onde processos de decisão complexos, stakeholders diversos e estruturas administrativas exigentes fazem parte do dia a dia.",
    section2P2:
      "Estas experiências são especialmente valiosas para a implementação de conceitos de proteção climática, porque muitos desafios repetem-se noutras formas organizacionais, como escolas, hospitais ou entidades eclesiásticas. Diferentes competências, estruturas descentralizadas, restrições orçamentais e interesses variados têm de ser considerados cedo, para que as medidas possam de facto ser implementadas mais tarde, ou pelo menos ter uma hipótese de o ser.",

    pullQuote:
      "Os conceitos de proteção climática bem-sucedidos raramente falham por causa da técnica. Falham por falta de alinhamento, responsabilidades pouco claras ou planeamento de medidas irrealista.",

    section2P3:
      "Por isso damos especial atenção a integrar as condições organizacionais desde o início e a transformá-las em soluções práticas, elegíveis e implementáveis. Através da nossa experiência no ensino superior trazemos o entendimento necessário das estruturas organizacionais complexas, e essa base também se transfere com sucesso para escolas, hospitais, entidades eclesiásticas e outras instituições públicas ou sem fins lucrativos.",

    section3Title: "Os três fatores de sucesso NKI",
    section3Intro:
      "Dos nossos projetos NKI concluídos extraem-se três fatores de sucesso que, na prática, fazem a diferença, independentemente de se tratar de uma universidade, uma entidade eclesiástica ou um hospital.",

    factor1Title: "1. Excel, BISKO ou ferramentas regionais sempre atingem limites",
    factor1P1:
      "Muitas instituições começam com tabelas de energia ou consumo já existentes dos estados federados ou das organizações tutelares. Na prática, porém, depressa se vê: os dados não estão suficientemente estruturados nem são consistentes o bastante para sustentar um inventário robusto de gases de efeito estufa em conformidade com a BISKO.",
    factor1P2:
      "BISKO (Bilanzierungs-Systematik Kommunal) é a ferramenta Excel estabelecida nos projetos NKI para municípios e instituições equiparáveis. Foi desenvolvida pelo ifeu (Instituto para Investigação em Energia e Ambiente, Heidelberg) em conjunto com a Klima-Bündnis no âmbito de um projeto NKI e define que portadores de energia devem ser registados, que fatores de emissão devem ser aplicados e como o inventário deve ser consolidado. Para portadores ligados à rede, é obrigatório o uso de dados primários.",
    factor1P3:
      "Sabemos por experiência quais os dados realmente necessários como entrada, em que forma, como devem ser preparados de maneira útil e como deles se constrói um inventário elegível a financiamento, sem meses de pedidos de dados.",

    factor2Title: "2. As medidas parecem-se, a implementação nunca",
    factor2P1:
      "Conversão para LED, otimização de aquecimento, expansão fotovoltaica, conceitos de mobilidade ou sensibilização dos utilizadores: os catálogos de medidas de muitas instituições assemelham-se fortemente. A diferença está, no entanto, na implementação prática.",
    factor2P2:
      "Uma medida que funciona sem dificuldade numa universidade pode ser completamente impossível noutra, ou num hospital tornar-se claramente mais complexa devido a requisitos regulatórios. Em estruturas eclesiásticas, por sua vez, a coordenação é frequentemente descentralizada. Por isso, não desenvolvemos conceitos padronizados, mas soluções adequadas a cada organização. O nosso espetro vai de inventários com 800 t CO₂e até 130.000 t CO₂e por ano, e já desenvolvemos medidas em cada campo e acompanhámos a sua implementação.",

    factor3Title: "3. A autonomia de implementação muitas vezes não está na própria instituição",
    factor3P1:
      "Um ponto decisivo, frequentemente subestimado em projetos financiados: a própria instituição muitas vezes não decide autonomamente sobre edifícios, investimentos ou medidas técnicas.",
    factor3P2:
      "Em particular em escolas, universidades ou hospitais, as competências situam-se frequentemente em entidades tutelares, gabinetes de obras ou empresas operadoras externas. Quem não compreende estas estruturas planeia medidas que mais tarde não podem ser implementadas. A nossa experiência ajuda a envolver estes stakeholders cedo e a desenvolver caminhos de implementação realistas, mesmo que isso, por vezes, frustre algum responsável de proteção climática.",

    section4Title: "Por que os conceitos de proteção climática são hoje decisivos para as instituições",
    section4P1:
      "O financiamento NKI oferece um enorme potencial, não apenas financeiro mas também estratégico. Um conceito profissional de proteção climática cria transparência, prioriza investimentos, possibilita processos de transformação a longo prazo e pode contribuir para o reforço da reputação. Ao mesmo tempo, sobem continuamente as exigências de comprovação, qualidade dos dados e exequibilidade.",
    section4P2:
      "Por isso são necessários parceiros que compreendam tanto os requisitos dos financiadores como a realidade das instituições públicas e sem fins lucrativos. É justamente esta combinação de competência em financiamento, experiência prática e know-how setorial que trazemos.",
    section4P3:
      "Seja universidade, entidade eclesiástica, hospital ou escola: sabemos como os projetos NKI são candidatados, estruturados e implementados com sucesso, e o que realmente importa na prática.",

    ctaTitle: "Conversa inicial de 30 minutos. Sem compromisso.",
    ctaBody:
      "Percorremos consigo o seu projeto NKI e identificamos em quais dos três fatores de sucesso já se encontra e onde ainda há necessidade de recuperar terreno antes de apresentar a candidatura. A pedido, participamos também nos seus concursos.",
    ctaButtonLabel: "Agendar conversa inicial de 30 min",

    authorBio:
      "Marie Bruns é consultora de energia e, na COzwei GmbH, acompanha, além de clientes empresariais, sobretudo conceitos NKI de proteção climática. Como engenheira ambiental formada na RWTH Aachen, contribui decisivamente para a avaliação de medidas de redução de CO₂.",

    faqIntro: "Respostas às perguntas que mais nos colocam em conversas iniciais NKI.",
    faqs: [
      {
        q: "Quem pode candidatar-se à NKI Kommunalrichtlinie?",
        a: "Podem candidatar-se municípios, entidades municipais e instituições públicas, sem fins lucrativos, eclesiásticas e religiosas, incluindo escolas, universidades, hospitais, entidades eclesiásticas, instituições sociais e comunidades religiosas com estatuto de direito público. A Kommunalrichtlinie do BMUV em vigor define os candidatos admissíveis para cada convocatória.",
      },
      {
        q: "O que significa „conforme BISKO\"?",
        a: "BISKO significa Bilanzierungs-Systematik Kommunal, o sistema territorial de contabilidade desenvolvido pelo ifeu (Instituto para Investigação em Energia e Ambiente, Heidelberg) em conjunto com a Klima-Bündnis no âmbito de um projeto NKI. Define que portadores de energia devem ser registados, que fatores de emissão se aplicam e como se procede à consolidação. Para portadores ligados à rede, é obrigatório o uso de dados primários; para portadores não ligados à rede, são admissíveis estimativas.",
      },
      {
        q: "Quem administra o financiamento NKI?",
        a: "Os programas de financiamento NKI são em grande medida executados pela Zukunft – Umwelt – Gesellschaft (ZUG) gGmbH como entidade gestora. As convocatórias e diretivas são publicadas em klimaschutz.de e z-u-g.org. A Kommunalrichtlinie em vigor e as convocatórias complementares são vinculativas.",
      },
      {
        q: "Que medidas são tipicamente apoiadas pela Kommunalrichtlinie?",
        a: "A Kommunalrichtlinie cobre um amplo espetro: desde a elaboração de conceitos de proteção climática e o financiamento de postos de gestão da proteção climática até medidas de investimento em mobilidade, gestão de resíduos e águas residuais, bem como abastecimento de água potável. A elegibilidade concreta depende da respetiva convocatória.",
      },
      {
        q: "Que documentos precisamos para começar?",
        a: "Para a pré-análise precisamos de uma visão geral dos edifícios e unidades relevantes, dos dados de energia e consumo existentes (eletricidade, calor, mobilidade), de um esboço da estrutura tutelar e das competências (gabinete de obras, operadoras, entidade tutelar) e, se existir, da documentação atual de estratégia ou de missão.",
      },
      {
        q: "Universidades privadas sem fins lucrativos e entidades eclesiásticas podem candidatar-se?",
        a: "As instituições públicas, sem fins lucrativos e religiosas de ensino, bem como universidades e os seus tutelares, são, em regra, elegíveis. Comunidades religiosas com estatuto de direito público e entidades eclesiásticas também integram o círculo de candidatos admissíveis. A diretiva de financiamento em vigor é vinculativa; verificamos a elegibilidade em concreto para o seu caso na conversa inicial.",
      },
    ],

    disclaimer:
      "Nota: este artigo reflete a nossa experiência prática e o estado dos programas de financiamento mencionados. A NKI Kommunalrichtlinie em vigor e as convocatórias complementares são vinculativas. Antes de submeter a candidatura, recomendamos verificar o estado atual junto do BMUV / ZUG gGmbH.",
  },
};
