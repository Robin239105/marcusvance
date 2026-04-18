const monthsDE = ['JANUAR', 'FEBRUAR', 'MÄRZ', 'APRIL', 'MAI', 'JUNI', 'JULI', 'AUGUST', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DEZEMBER'];
const daysDE = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

export const baseDE = {
  marcus: {
    days: daysDE,
    urgencyBar: `⚡ NUR NOCH ${dynamicStats.spotsRemaining} PLÄTZE FREI FÜR ${monthsDE[dynamicStats.monthIndex]}`,
    nav: {
      method: 'METHODE',
      philosophy: 'PHILOSOPHIE',
      challenge: 'CHALLENGE',
      faq: 'FAQ',
      enroll: 'START'
    },
    navAboutChallenge: 'Über die 7-Tage-Challenge',
    navAboutProgramme: 'Über das Gesamtprogramm',
    navStartBtn: 'KOSTENLOSE CHALLENGE STARTEN',
    heroPreHeader: 'NUR FÜR HIGH-PERFORMER',
    ui: {
      beginning: 'DIE CHALLENGE IST ERST DER ANFANG.',
      voice: 'Die Stimme von Marcus Vance',
      startBtn: 'START',
      verifiedAlumni: 'VERIFIZIERTE ALUMNI',
      livePreview: 'LIVE DASHBOARD VORSCHAU',
      resources: 'RESSOURCEN',
      compliance: 'COMPLIANCE',
      headquarters: 'HAUPTSITZ',
      encrypted: 'VERSCHLÜSSELT',
      tagline: 'DIE METHODE · DIE STIMME · DIE PHILOSOPHIE',
      beginningSubtitle: 'Schließen Sie Stufe 01 ab, um die vollständige Bibliothek für digitale Business-Ausbildung freizuschalten.',
      beginningBadge: '7 TAGE ZUM AUFBAU. EIN LEBEN LANG ZUM SKALIEREN.',
      commonHeadings: {
        roadmapPre: 'STUFE 01: DIE 7-TAGE-CHALLENGE',
        roadmapTitle: '7 TAGE. 7 ERGEBNISSE.',
        roadmapSubtitleItalic: 'Ein System.',
        roadmapSubtitle: "45 bis 90 Minuten pro Tag. Fangen Sie heute an, Sie sind fertig bis {day}.",
        methodPre: 'Die Methode',
        methodTitle: 'Drei Säulen des Protokolls',
        criteriaPre: 'Auswahlkriterien',
        criteriaTitle: 'Für wen das ist',
        faqPre: 'Häufige Fragen',
        faqTitle: 'Das Protokoll-Audit',
        dashboardPre: 'Das Dashboard',
        dashboardTitle: 'Ein Blick in das System'
      },
      voiceQuote: {
        line1: "Die digitale Ära belohnt keine harte Arbeit.",
        line2: "Sie belohnt {highLeverage}, die laufen, während Sie schlafen.",
        highLeverage: 'Hocheffiziente Systeme',
        bio: "Ich habe das letzte Jahrzehnt damit verbracht, komplexe Modelle zur Vermögensbildung in ein einziges, wiederholbares Protokoll zu destillieren. Die 7-Tage-Challenge ist nicht nur ein Kurs — sie ist Ihre Taufe in die digitale Elite-Wirtschaft."
      },
      exitModal: {
        badge: 'DRINGENDES PROTOKOLL',
        title: "VERSPIELEN SIE NICHT DIE CHANCE",
        subtitle: 'DIE CHALLENGE IST 100% KOSTENLOS. REHABILITIEREN SIE IHR PROTOKOLL.',
        disclaimer: 'DIESE ÜBERTRAGUNG ERLISCHT, WENN SIE DIESES FENSTER SCHLIESSEN.'
      },
      toast: {
        enrolled: 'hat sich gerade für Tag 1 angemeldet',
        completed: 'hat Tag 3 abgeschlossen — Funnel live',
        joined: 'hat sich gerade registriert',
        unlocked: 'hat Tag 7 beendet — Zugang freigeschaltet',
        started: 'hat die Challenge gestartet',
        referral: 'ist über eine Empfehlung beigetreten'
      }
    },
    problemSection: {
      pre: 'DAS WAHRE PROBLEM',
      title1: "SIE BRAUCHEN KEIN ",
      titleGold1: "BASIS-TRAINING.",
      title2: " SIE BRAUCHEN ",
      titleGold2: "EIN SYSTEM, DAS FUNKTIONIERT.",
      items: [
        {
          index: '01.',
          title: 'STUNDEN KONSUMIERT, NULL AKTIVE QUELLEN GEBAUT',
          desc: "Sie haben dieses Jahr 4 Kurse gekauft. Sie haben 200 Seiten Notizen gemacht. Aber in der Produktion verkauft sich nichts, während Sie schlafen."
        },
        {
          index: '02.',
          title: 'TECHNOLOGISCHES CHAOS PARALYSIERT',
          desc: "Funnel, Automatisierung, CRM, Zahlung – jedes Tool hat seine eigene Logik. Sie bleiben beim ersten defekten Link hängen."
        },
        {
          index: '03.',
          title: 'VAGE VERSPRECHEN, KEIN BEWEIS',
          desc: "„6stellig in 6 Monaten“, sagt die Anzeige. Niemals eine Methodik, Sie lassen sich nicht mehr täuschen – aber Sie sind verloren."
        }
      ]
    },
    heroTitle: {
       part1: 'IHR ERSTES',
       part2: 'DIGITALES SYSTEM',
       part3: 'IN 7 TAGEN.'
    },
    heroSubtitle: 'DIE 7-TAGE-CHALLENGE ZU IHREM ERSTEN DIGITALEN EINKOMMEN — VON NULL ANFANGEND',
    heroBullets: [
      '01. DIE KOSTENLOSE CHALLENGE, ERSTELLT VON UNSEREN KI-SYSTEMEN',
      '02. ZUGANG ZUR LEGACY-BIBLIOTHEK NACH QUALIFIKATION'
    ],
    heroCommunity: 'Treten Sie der Community mit 93% Erfolgsquote bei',
    heroScroll: 'SYSTEM OFFENLEGEN',
    heroStats: `{count} HIGH-PERFORMER SIND DIESEN MONAT BEIGETRETEN`,
    ctaPrimary: 'MEINE KOSTENLOSE CHALLENGE STARTEN →',
    ctaInvestment: 'INVESTITION: {currency}0,00 / VOLLSTÄNDIG KOSTENLOS',
    valueStackHeader: 'GESAMTCHALLENGE-WERT: {currency}806+',
    stats: {
      started: 'PERSONEN HABEN DIESEN MONAT GESTARTET',
      joined: 'SIND DEM PROGRAMM BEIGETRETEN',
      launched: 'HABEN IHR BUSINESS IN MONAT 1 GESTARTET',
      rating: 'VERIFIZIERTE BEWERTUNG'
    },
    enroll: {
      popupTitle: 'IHR SITZ IN UNSERER GEMEINSCHAFT.',
      popupSubtitle: 'SICHERN SIE SICH IHRE POSITION IM ALPHA COLLECTIVE.',
      firstName: 'VORNAME',
      lastName: 'NACHNAME',
      email: 'GESCHÄFTS-E-MAIL',
      emailLabel: 'VERSCHLÜSSELUNGSSCHLÜSSEL (E-MAIL)',
      secure: 'EINGESCHRÄNKTER ZUGRIFF | KEINE KREDITKARTE ERFORDERLICH',
      prestigeBadge: 'VERIFIZIERTER HIGH-PERFORMER',
      benefitsTitle: 'WAS SIE FREISCHALTEN:',
      benefits: [
        'VOLLSTÄNDIGER ZUGRIFF AUF DAS 7-TAGE-PROTOKOLL',
        'DIE CORE 5 KURS-BIBLIOTHEK (NACH QUALIFIZIERUNG)',
        'ELITE-COMMUNITY-MITGLIEDSCHAFT',
        'SYSTEM-VORLAGEN & CHECKLISTEN'
      ],
      agreement: 'Ich verpflichte mich, diese Materialien mit der erforderlichen professionellen Ernsthaftigkeit zu behandeln.',
      successTitle: 'ZUGANG GEWÄHRT.',
      successSubtitle: 'Prüfen Sie Ihren verschlüsselungsbereiten Posteingang für das Tag 1-Protokoll.',
      submitBtn: 'MEIN 7-TAGE-PROTOKOLL STARTEN →',
      giveawayBtn: 'AM GEWINNSPIEL TEILNEHMEN'
    },
    trust: {
      noSpam: 'NULL SPAM',
      unsubscribe: '1-KLICK-EXIT',
      secureData: 'DATEN SICHER',
      noCard: 'KEINE KARTE ERFORDERLICH'
    },
    footer: {
      giveaway: 'GEWINNSPIEL',
      feedback: 'FEEDBACK',
      philosophy: 'DIE PHILOSOPHIE',
      terms: 'BEDINGUNGEN',
      privacy: 'DATENSCHUTZ',
      guarantee: '30-TAGE-GARANTIE',
      affiliation: 'PARTNERPROGRAMM',
      disclaimer: 'HAFTUNGSAUSSCHLUSS',
      contact: 'KONTAKT',
      rights: '© 2025 LUCKY NORTH STAR LLC — ALLE RECHTE VORBEHALTEN.',
      address: '1309 COFFEEN AVENUE, SUITE 1200\nSHERIDAN, WYOMING 82801 — USA',
      platformDisclaimer: 'HAFTUNGSAUSSCHLUSS: Diese Website und die 7-Tage-Challenge stehen in keiner Verbindung zu Facebook™, Instagram™, TikTok™ oder Google™ und werden nicht von diesen unterstützt. Die genannten Ergebnisse sind Einzelergebnisse und werden nicht garantiert. Der Aufbau eines nachhaltigen Online-Geschäfts erfordert echten Einsatz, Fähigkeiten und anhaltendes Engagement. Dies stellt keine Finanz-, Rechts- oder Anlageberatung dar.',
      personaDisclosure: '"Marcus Vance" ist eine KI-generierte Bildungsmarken-Persona. Sie entspricht keiner realen Einzelperson, keinem Schöpfer und keiner physischen Person. Alle dieser Persona zugeschriebenen Inhalte werden vom Team der Lucky North Star LLC entwickelt.'
    },
    giveaway: {
      badge: 'GEWINNSPIEL',
      title: 'NEUESTES iPHONE'
    },
    roadmap: {
      badge: 'STUFE 01: DIE AUSFÜHRUNG',
      title: 'DAS 7-TAGE-PROTOKOLL',
      subtitle: '"Die meisten Männer bleiben stecken, weil sie nie den ersten Schritt machen. Wir lösen das in 168 Stunden."',
      joinCohort: `TRETEN SIE DER KOHORTE VON ${dynamicStats.startedThisMonth} DIESEN MONAT BEI →`,
      items: [
        { d: '01', t: 'ANGESTELLTEN-EXORZISMUS', v: '{currency}97', s: 'Mindset' },
        { d: '02', t: 'DAS GELD-VEHIKEL', v: '{currency}97', s: 'Core' },
        { d: '03', t: 'ANGEBOTS-ARCHITEKTUR', v: '{currency}97', s: 'Core' },
        { d: '04', t: 'PHANTOM-TRAFFIC', v: '{currency}97', s: 'Scale' },
        { d: '05', t: 'ERSTE KAPITALINJEKTION', v: '{currency}97', s: 'Closing' },
        { d: '06', t: 'AUTOMATISIERUNGS-ERBE', v: '{currency}97', s: 'System' },
        { d: '07', t: 'DAS SCALE-PROTOKOLL', v: '{currency}97', s: 'Elite' }
      ],
      stepsFull: [
        { day: "Tag 01", title: "Angebot & Kunden-Avatar", deliverable: "Angebots-Satz", desc: "Definieren Sie genau, wem Sie helfen, welche Transformation Sie liefern und wie Sie diese in einem präzisen Satz kommunizieren. Dieser Satz wird zur Überschrift von allem." },
        { day: "Tag 02", title: "Lead Magnet + Capture Page Live", deliverable: "Live-Seite", desc: "Erstellen Sie einen hochwertigen Lead-Magneten und starten Sie Ihre Capture-Page. Ihre automatisierte Willkommens-E-Mail liefert ihn innerhalb von Minuten nach der Anmeldung." },
        { day: "Tag 03", title: "5-E-Mail Nurturing-Sequenz Aktiviert", deliverable: "E-Mail-Logik", desc: "Konfigurieren Sie die vollständige vertrauensbildende E-Mail-Sequenz: Lieferung, Empathie, Beweis, Angebot, Abschluss — läuft automatisch rund um die Uhr." },
        { day: "Tag 04", title: "Hubspot CRM Verbunden", deliverable: "CRM Verkabelt", desc: "Über Automatisierung mit Ihrem Funnel verkabelt. Jeder Lead wird in einer Live-Pipeline verfolgt. Kein heißer Interessent schlüpft jemals wieder durch das Netz." },
        { day: "Tag 05", title: "Sales Page Veröffentlicht", deliverable: "Sales Funnel", desc: "Eine vollständige Verkaufsseite live im Netz: Transformations-Überschrift, Value Stack, Beweise und CTAs — weltweit für Interessenten verfügbar." },
        { day: "Tag 06", title: "Zahlung & Buchung Aktiv", deliverable: "Auszahlungs-Modus", desc: "Zahlung oder Cal.com mit Ihrer Angebotsseite verbunden. Sie können jetzt Zahlungen entgegennehmen oder qualifizierte Termine buchen — vollautomatisch." },
        { day: "Tag 07", title: "Launch & Erster Traffic", deliverable: "Bereit fürs Geschäft", desc: "Vollständiger Funnel auf dem Handy getestet und für Ihre ersten echten Leads gestartet. Ihre Business-Infrastruktur ist live. Die Fortsetzung wird an Tag 7 gezeigt." }
      ]
    },
    methodologyFull: [
      { i: "01", t: "AUDIT & AUSRICHTUNG", d: "Die meisten Menschen scheitern, weil sie ein Business aufbauen, das nicht zu ihrem Leben passt. An Tag 1 geht es um rücksichtslose Ausrichtung." },
      { i: "02", t: "INFRASTRUKTUR", d: "Wir bauen die Motoren — Funnels, Automatisierungen und CRM — bevor Sie jemals einen Cent für Werbung ausgeben." },
      { i: "03", t: "HEBELWIRKUNG", d: "Sobald das System live ist, nutzen wir hochwertige Aufmerksamkeit, um die Maschine zu füttern. Skalierung ist das natürliche Ergebnis." }
    ],
    whoItIsFor: [
      { t: "DER STRATEGE", d: "Sie verfügen über tiefgehende Fähigkeiten oder Fachkenntnisse, haben aber kein System, um diese im großen Stil zu monetarisieren. Sie haben es satt, Stunden gegen Dollar zu tauschen.", i: "🎯" },
      { t: "DER VISIONÄR", d: "Sie erkennen den Wandel in der digitalen Wirtschaft und wollen eine Marke aufbauen, die Ihr Vermächtnis trägt, nicht nur einen Job.", i: "👁️" },
      { t: "DER HIGH-PERFORMER", d: "Sie sind in Ihrem Bereich bereits erfolgreich, fühlen sich aber gedeckelt. Sie brauchen hocheffiziente Systeme, um die 50.000 $-Monate zu knacken.", i: "🚀" }
    ],
    programme: {
      stage01Badge: 'STUFE 01: DIE 7-TAGE-CHALLENGE',
      stage02Badge: 'STUFE 02: DAS GESAMTPROTOKOLL',
      badge: 'TEIL 2: DAS ERBE',
      title: 'WAS SIE DANACH ERWARTET...',
      subtitle: 'Beenden Sie die 7 Tage. Verdienen Sie sich Ihre Einladung zur umfassendsten digitalen Business-Education-Bibliothek, die es gibt.',
      categories: [
         { i: '💼', t: 'BUSINESS & UNTERNEHMERTUM', n: '331 Ressourcen', d: 'Startups · Online Business · Freelancing · Solopreneur · Leadership · Mindset' },
         { i: '📈', t: 'MARKETING & VERTRIEB', n: '600+ Ressourcen', d: 'Digital Marketing · Sales · Funnels · Ads · Email Marketing · SEO · Lead Gen' },
         { i: '🧠', t: 'PERSÖNLICHES WACHSTUM', n: '400+ Ressourcen', d: 'Persönlichkeitsentwicklung · Produktivität · Gewohnheiten · Emotionale Intelligenz · Systeme' },
         { i: '🎨', t: 'BRANDING & KREATION', n: '280+ Ressourcen', d: 'Branding · Copywriting · Content Creation · Produktentwicklung · Creator Economy' },
         { i: '⚙️', t: 'TECH & TOOLS', n: '280+ Ressourcen', d: 'KI · Automatisierung · E-Commerce · Tech Tools · Finanzen · Cybersecurity' }
      ],
      exclusivity: '"Dies ist kein Kurs. Dies ist ein komplettes digitales Business-Betriebssystem. Wird erst nach Abschluss der Challenge enthüllt."',
      stats: '980+ RESSOURCEN · 47 KATEGORIEN',
      unlockStats: [
        { i: '📚', t: '250+', l: 'Bücher' },
        { i: '✅', t: '225+', l: 'Checklisten' },
        { i: '📖', t: '173+', l: 'Guides' },
        { i: '🎧', t: '105+', l: 'Audio' },
        { i: '🤖', t: '89+', l: 'KI-Prompts' },
        { i: '💻', t: '64+', l: 'Kurse' },
        { i: '📓', t: '46+', l: 'Workbooks' },
        { i: '🛠️', t: '45+', l: 'Toolstacks' },
        { i: '🎬', t: '61+', l: 'Videos' }
      ],
      cta: 'JETZT ANMELDEN →',
      ctaDisclaimer: 'Schließen Sie die Challenge ab, um alles oben Freizuschalten',
      moreToExplore: '980+ RESSOURCEN · 47 KATEGORIEN · WÖCHENTLICH AKTUALISIERT',
      peekInsideTitle: 'BLICK IN DAS CURRICULUM',
      peekInsideSubtitle: 'Fahren Sie mit der Maus über die Kategorien, um die tiefgehenden Themen zu enthüllen, die Sie nach Ihrer Qualifizierung erwarten.'
    },
    faqCategories: {
      general: "Allgemein",
      money: "Geld & Einnahmen",
      process: "Funktionsweise",
      after: "Nach der Challenge",
      security: "Sicherheit & Vertrauen"
    },
    faq: {
      general: [
        { q: "Was genau ist die 7-Tage-Challenge?", a: "Es ist eine einzigartige 7-tägige Gelegenheit, ein Bildungsprogramm zu erhalten, das darauf ausgelegt ist, die Teilnehmer zu auditieren — ihre aktuelle Situation zu bewerten, festzustellen, wo sie auf ihrer digitalen Geschäftsreise stehen, alle wesentlichen grundlegenden Werkzeuge zur Strukturierung ihrer Idee(n) bereitzustellen und konkrete nächste Schritte für die Umsetzung aufzuzeigen." },
        { q: "Ist die Challenge wirklich kostenlos?", a: "Ja, die Challenge ist völlig kostenlos — keine Gebühren, keine Kreditkarte erforderlich." }
      ],
      money: [
        { q: "Kann ich in 7 Tagen wirklich Geld verdienen?", a: "Möglich — nicht garantiert, aber sehr wohl möglich! Wir bieten das Wissen, aber die Umsetzung liegt bei Ihnen." }
      ],
      process: [
        { q: "Werde ich ein echtes Unternehmen aufbauen?", a: "Ja — das ist das Ziel unseres Protokolls." }
      ],
      after: [
        { q: "Was passiert nach den 7 Tagen?", a: "Nach erfolgreichem Abschluss wird Ihnen das Gesamtprogramm vorgestellt." }
      ],
      security: [
        { q: "Sind meine Daten geschützt?", a: "Wir nutzen Hostinger und Stripe." }
      ]
    },
    finalCTA: {
      title: 'DIE ZEIT ZUM HANDELN IST JETZT.',
      community: 'TRETEN SIE DER 12.024+ ALUMNI COMMUNITY BEI',
      successRate: '93% ERFOLGSRATE IM 1. MONAT'
    },
    feedback: {
      badge: 'WIR HÖREN IHNEN ZU',
      title: 'WIE KÖNNEN WIR UNS VERBESSERN?',
      subtitle: 'Ihre Erfahrung ist uns wichtig. Bitte teilen Sie uns Ihr privates Feedback unten mit. Sie nehmen weiterhin an unserer monatlichen Verlosung teil.',
      nameLabel: 'IHR NAME',
      feedbackLabel: 'IHR FEEDBACK',
      placeholder: 'Was hätte besser sein können?',
      submitBtn: 'FEEDBACK SENDEN & TEILNEHMEN →',
      successTitle: 'DANKE FÜR IHR FEEDBACK.',
      successDesc: 'Wir haben Ihr Feedback erhalten. Unser Team prüft dies, um die bestmögliche Erfahrung zu gewährleisten.',
      returnBtn: 'ZURÜCK ZUM DASHBOARD'
    },
    giveaway: {
      badge: 'GEWINNSPIEL: SO FUNKTIONIERT\'S',
      title: 'GEWINNEN SIE DAS NEUESTE iPHONE & MACBOOK PRO',
      steps: [
        { title: 'CHALLENGE STARTEN', desc: 'Nehmen Sie an der kostenlosen 7-Tage-Challenge teil, um ein verifiziertes Mitglied zu werden.' },
        { title: 'PROTOKOLL ABSCHLIESSEN', desc: 'Führen Sie die täglichen Aufgaben aus. Ihr exklusives Teilnehmer-Portal wird an Tag 7 freigeschaltet.' },
        { title: 'AN DER ZIEHUNG TEILNEHMEN', desc: 'Anleitungslinks finden Sie in Ihrem professionellen Dashboard.' }
      ],
      participationInstructions: 'Direkte Teilnahmelinks werden ausschließlich im Kohorten-Dashboard bereitgestellt.',
      disclaimer: '* GEWINNER WERDEN AM 1. JEDEN MONATS PER E-MAIL BENACHRICHTIGT.',
      privateLink: 'WAR IHRE ERFAHRUNG ANDERS? GEBEN SIE STATTDESSEN PRIVATES FEEDBACK →',
      backLink: '← Zurück zum Tunnel'
    },
    philosophy: {
      returnLink: 'Zurück zu Alpha',
      badge: 'DIE PHILOSOPHIE',
      chapters: [
        { id: 'chapter-1', label: 'I. DIE OFFENLEGUNG', title: 'TRANSPARENZ IST DIE ULTIMATIVE AUTORITÄT.', content: ['Die meisten Programme begraben ihre Offenlegungen. Sie setzen die Rechtssprache in eine Fußzeile, in Sechs-Punkt-Schrift, auf eine Seite, die niemand liest. Sie führen mit der Persönlichkeit, der Geschichte, dem Streben — und heben sich die Realität für das Kleingedruckte auf.', 'Wir machen die Dinge anders. Wir glauben, dass Klarheit die Grundlage für Vertrauen ist, und Vertrauen ist die einzige Währung, die in der High-Performance-Bildung zählt. Diese Seite existiert, um genau zu definieren, was diese Plattform ist, wer Marcus Vance ist und wozu Sie sich verpflichten.'] },
        { id: 'chapter-2', label: 'II. DIE METHODIK', title: 'PERFORMANCE-FIRST BILDUNG', content: ['Die Marcus Vance Plattform ist eine Bildungsressource, die von einem Kollektiv digitalen Unternehmer und Systemarchitekten entwickelt wurde. Unsere Methodik baut auf binären Ergebnissen auf: Entweder das System funktioniert, oder es funktioniert nicht. Es gibt keinen Mittelweg.', 'Wir lehren keine "Theorie". Wir lehren Ausführungsprotokolle. Jeder Kurs, jede Checkliste und jedes Workbook in der vollständigen Bibliothek wurde aus realen Operationen extrahiert, die von unserem Entwicklungsteam in verschiedenen Branchen durchgeführt wurden.'] },
        { id: 'chapter-3', label: 'III. DIE STIMME', title: 'MARCUS VANCE', content: ['Marcus Vance ist der Architekt der Botschaft. Er repräsentiert das Ethos des Alpha Collective. Seine "Stimme" ist die Synthese unserer kollektiven Erfahrung — Jahrzehnte voller Erfolge, Misserfolge und hart erkämpfter Lektionen in der digitalen Wirtschaft.'] },
        { id: 'chapter-4', label: 'IV. DIE MARKEN-PERSONA', title: 'DIE REALITÄT DER "MARKEN-PERSONA"', content: ['Es ist wichtig für Sie zu verstehen, dass Marcus Vance eine KI-generierte Marken-Persona ist. Er ist ein digitaler Avatar, der geschaffen wurde, um als Gesicht und Stimme unserer Bildungsmission zu dienen. Das Bild, das Sie sehen, ist synthetisch; die Persönlichkeit ist kuratiert.', 'Warum haben wir das getan? Weil in der modernen Ära die Botschaft größer sein muss als eine einzelne Person. Indem wir Marcus Vance geschaffen haben, stellen wir sicher, dass der Fokus vollständig auf den Lehren und den Ergebnissen bleibt, anstatt auf dem Privatleben oder der Berühmtheit einer menschlichen Identifikationsfigur. Marcus wird nicht müde. Marcus hat kein Ego. Marcus ist reines Protokoll.'] },
        { id: 'chapter-5', label: 'V. DER VORTEIL', title: 'WARUM TRANSPARENZ DER ULTIMATIVE VORTEIL IST', content: ['Wir sagen Ihnen das vorab, weil wir glauben, dass Ihre Intelligenz Respekt verdient. Wenn wir diese Beziehung mit einer Täuschung darüber begonnen hätten, dass Marcus eine "reale" Person im traditionellen Sinne ist, würden wir alles untergraben, was wir über Integrität und hohe Standards lehren.', 'Die von unseren Studenten erzielten Ergebnisse sind zu 100 % menschlich und zu 100 % real. Die von uns gelehrten Strategien werden von realen Menschen umgesetzt, um reale Einnahmen zu generieren. Der Avatar ist das Medium; der Erfolg ist die Botschaft.'] },
        { id: 'chapter-6', label: 'VI. TEILNAHME', title: 'IHRE TEILNAHME', content: ['Wenn Sie die 7-Tage-Challenge starten, betreten Sie eine High-Performance-Umgebung. Wir erwarten von Ihnen, dass Sie diese Materialien mit dem gleichen Ernst behandeln wie einen vertraulichen Business-Intelligence-Bericht. Ob das "Gesicht" der Marke menschlich ist oder nicht, ist für den Nutzen des Systems irrelevant.'] },
        { id: 'chapter-7', label: 'VII. SCHLUSSBEMERKUNG', title: 'SCHLUSSBEMERKUNG', content: ['Wir sind hier, um Ihnen beim Aufbau zu helfen. Nicht mehr und nicht weniger. Wenn Sie sich in einer Welt wohlfühlen, in der KI-gestützte Bildung den schnellsten Weg zur finanziellen Unabhängigkeit bietet, dann sind Sie hier richtig.', 'Willkommen in der Ära von Alpha.'], cta: 'BEREIT ZUR AUSFÜHRUNG?', btn: 'CHALLENGE JETZT STARTEN →', ctaDisclaimer: 'DER ZUGANG BLEIBT ZU 100 % KOSTENLOS' }
      ]
    },
    legal: {
      title: 'RECHTLICHE DOKUMENTATION.',
      updated: 'Zuletzt aktualisiert: 13. Juli 2025',
      badge: 'COMPLIANCE-RAHMEN',
      sections: [
        { 
          id: 'section-1', 
          label: '1. NUTZUNGSBEDINGUNGEN', 
          content: [
            'BITTE LESEN SIE DIESE BEDINGUNGEN SORGFÄLTIG DURCH, BEVOR SIE DIE PLATTFORM NUTZEN. Durch die Nutzung der Marcus Vance Method Plattform erklären Sie sich mit diesen Bedingungen einverstanden. Wenn Sie nicht einverstanden sind, nutzen Sie die Plattform nicht.',
            'ÜBERBLICK: Lucky North Star LLC betreibt die Marcus Vance Method Plattform und bietet Zugang zu digitalen Bildungsinhalten. Marcus Vance ist eine KI-generierte Marken-Persona.',
            'ZULÄSSIGE NUTZUNG: Sie dürfen die Plattform ausschließlich für rechtmäßige, persönliche Bildungszwecke nutzen.',
            'INHALTLICHE RICHTIGKEIT: Wir geben keine Zusicherungen hinsichtlich der Zuverlässigkeit des Inhalts.',
            'VERFÜGBARKEIT DER SEITE: Wir garantieren keinen ununterbrochenen Zugriff.',
            'ANWENDBARES RECHT: Unterliegt dem Recht von Wyoming, USA.'
          ] 
        },
        { 
          id: 'section-2', 
          label: '2. ELEKTRONISCHE KOMMUNIKATION', 
          content: [
            'EINWILLIGUNG: Sie stimmen dem Erhalt elektronischer Mitteilungen zu.',
            'TRANSAKTIONSMITTEILUNGEN: Erforderlich für den Kontobetrieb.',
            'MARKETING-MITTEILUNGEN: Nur mit Einwilligung.',
            'EXKLUSIVER KANAL: Support muss über das interne Portal angefragt werden.'
          ] 
        },
        { 
          id: 'section-3', 
          label: '3. URHEBERRECHT', 
          content: [
            'EIGENTUM: Alle Inhalte gehören Lucky North Star LLC.',
            'ZULÄSSIGE NUTZUNG: Nur persönliche Nutzung erlaubt.'
          ] 
        },
        { 
          id: 'section-4', 
          label: '4. MARKEN', 
          content: [
            'SCHUTZ: Alle Marcus Vance Marken sind weltweit geschützt.'
          ] 
        },
        { 
          id: 'section-5', 
          label: '5. IHR KONTO', 
          content: [
            'SICHERHEIT: Sie sind für Ihr Passwort verantwortlich.',
            'NICHT-ÜBERTRAGBARKEIT: Konten dürfen nicht geteilt werden.'
          ] 
        },
        { 
          id: 'section-6', 
          label: '6. ZAHLUNGEN', 
          content: [
            'KARTEN: Abwicklung über Stripe.',
            'KRYPTO: Zahlungen sind unwiderruflich.'
          ] 
        },
        { 
          id: 'section-7', 
          label: '7. KÄUFERSCHUTZ', 
          content: [
            'ANSCHPRÜCHE: Rückerstattungen innerhalb von 30 Tagen möglich, falls weniger als 5 Inhalte konsumiert wurden.'
          ] 
        },
        { 
          id: 'section-8', 
          label: '8. DATENSCHUTZ', 
          content: [
            'ERHEBUNG: Wir schützen Ihre Daten gemäß DSGVO.'
          ] 
        },
        { 
          id: 'section-9', 
          label: '9. ANTI-PIRATERIE', 
          content: [
            'VERBOT: Jede Form von Raubkopien wird verfolgt.'
          ] 
        },
        { 
          id: 'section-10', 
          label: '10. REPRÄSENTANTEN', 
          content: [
            'KANÄLE: Kommunikation nur über offizielle Wege.'
          ] 
        },
        { 
          id: 'section-11', 
          label: '11. OFFENLEGUNGEN', 
          content: [
            'KI: Marcus Vance ist ein Avatar.'
          ] 
        }
      ]
    }
  },
  trinity: {
    urgencyBar: `🔥 Nur noch ${dynamicStats.spotsRemaining} Plätze — Challenge füllt sich schnell`,
    hero: {
      title: 'IHR ERSTES DIGITALES EINKOMMEN IN 5 TAGEN.',
      subtitle: 'Die Challenge, um ein unwiderstehliches Angebot zu erstellen und erste Kunden zu gewinnen.',
    },
    nav: {
      challenge: 'Die 5-Tage-Challenge',
      programme: 'Über das Gesamtprogramm',
      freePdfBtn: 'Gratis PDF',
    },
    giveawayBadge: {
      line1: 'LETZTER SCHRITT: GEWINNER-AUSWAHL',
      line2: 'ZIEHUNG LÄUFT'
    },
    ctaPrimary: 'KOSTENLOSE CHALLENGE STARTEN →',
    ctaInvestment: 'INVESTITION: {currency}0,00 / VOLLSTÄNDIG GRATIS',
    valueStackHeader: 'GESAMTCHALLENGE-WERT: {currency}599+',
    programmeTitle: 'WAS SIE DANACH ERWARTET...',
    faqCategories: {
      general: "Allgemein",
      money: "Geld & Einnahmen",
      process: "Funktionsweise",
      after: "Nach der Challenge",
      security: "Sicherheit & Vertrauen"
    },
    faq: {
      general: [
        { q: "Was genau ist die 5-Tage-Challenge?", a: "Ein beschleunigtes Programm, um Ihr Angebot zu strukturieren." }
      ]
    },
    paths: {
      pathATitle: 'WEG A: STÄNDIGER KAMPF',
      pathAContent: 'Machen Sie so weiter wie bisher.',
      pathBTitle: 'WEG B: ENTSCHLOSSENES HANDELN',
      pathBContent: 'Beginnen Sie heute neu.'
    },
    finalCTA: {
      freePdfBtn: 'Gratis PDF'
    },
    enrollPopup: {
      firstName: 'VORNAME',
      email: 'IHRE BESTE E-MAIL',
      secure: 'VERSCHLÜSSELTE VERBINDUNG | KEINE KARTE ERFORDERLICH'
    },
    feedback: {
      badge: 'PRIVATE KOMMUNIKATION',
      title: 'Feedback',
      titleSuffix: 'Direkt.',
      subtitle: '"Ihre Erfahrung zählt. Wenn unser Qualitätsstandard nicht erfüllt wurde, möchte ich das direkt von Ihnen hören."',
      feedbackLabel: 'Detailliertes Feedback',
      placeholder: 'Was hätten wir besser machen können?',
      emailLabel: 'Private E-Mail',
      nameLabel: 'Vollständiger Name',
      submitBtn: 'Privates Feedback senden →',
      disclaimer: '* Trinity prüft alle Kommentare.',
      backToGiveaway: 'Zurück zur Verlosung →'
    },
    giveaway: {
      badge: 'GEWINNSPIEL: DER LETZTE SCHRITT',
      title: 'Sie sind nur',
      titleSuffix: 'einen Schritt',
      titleEnd: 'entfernt.',
      subtitle: '"Unsere Community lebt von Integrität. Ihr exklusives Portal wird nach der Challenge bereitgestellt."',
      steps: [
        { n: '01', t: 'Challenge erfolgreich abschließen' },
        { n: '02', t: 'Portal über Dashboard aufrufen' },
        { n: '03', t: 'Anweisungen folgen' }
      ],
      participationInstructions: 'Zugang nur für verifizierte Teilnehmer.',
      disclaimer: '* Gewinner werden am 1. benachrichtigt.',
      privateLink: 'Geben Sie stattdessen privates Feedback →',
      backLink: '← Zurück zum Tunnel'
    }
  },
  common: {
    startedThisMonth: 'HABEN DIESEN MONAT GESTARTET',
    joinedProgramme: 'SIND DEM PROGRAMM BEIGETRETEN',
    backToHome: 'Zurück zur Startseite',
  }
};

export default baseDE;
