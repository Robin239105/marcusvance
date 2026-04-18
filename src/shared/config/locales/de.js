import dynamicStats from '../../utils/dynamicStats';

export const baseDE = {
  marcus: {
    urgencyBar: `⚡ NUR NOCH ${dynamicStats.spotsRemaining} PLÄTZE FREI FÜR ${dynamicStats.currentMonth}`,
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
    heroTitle: 'BAUEN SIE IHREN ERSTEN HIGH-INCOME STREAM IN 7 TAGEN AUF.',
    heroSubtitle: 'DIE 7-TAGE-CHALLENGE ZU IHREM ERSTEN DIGITALEN EINKOMMEN — VON NULL ANFANGEND',
    heroStats: `${dynamicStats.startedThisMonth} HIGH-PERFORMER HABEN DIESEN MONAT GESTARTET`,
    heroCommunity: 'Treten Sie der Community mit 93% Erfolgsquote bei',
    heroScroll: 'SYSTEM OFFENLEGEN',
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
      popupTitle: 'IHR SITZ IM CLUB.',
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
      badge: 'GEWINNSPIEL: SO FUNKTIONIERT ES',
      title: 'GEWINNEN SIE DAS NEUESTE iPHONE & MACBOOK PRO',
      steps: [
        { title: 'CHALLENGE STARTEN', desc: 'Nehmen Sie an der kostenlosen 7-Tage-Challenge teil, um ein verifiziertes Kohortenmitglied zu werden.' },
        { title: 'PROTOKOLL ABSCHLIESSEN', desc: 'Führen Sie die täglichen Aufgaben aus. Ihr einzigartiges Teilnahmeportal wird an Tag 7 freigeschaltet.' },
        { title: 'TEILNAHME', desc: 'Anleitungs-Links befinden sich in Ihrem professionellen Dashboard.' }
      ],
      participationInstructions: "Direkte Zugangslinks werden exklusiv im Kohorten-Dashboard bereitgestellt, um die Integrität unserer High-Level-Community zu wahren.",
      disclaimer: "* DIE GEWINNER WERDEN AM 1. JEDES MONATS PER E-MAIL BEKANNT GEGEBEN.",
      privateLink: "WAR IHRE ERFAHRUNG ANDERS? HINTERLASSEN SIE STATTDESSEN EINE PRIVATE BEWERTUNG →",
      backLink: "← Zurück zu Alpha",
      form: {
        firstName: "VORNAME",
        email: "E-MAIL",
        submit: "BEWERBUNG EINREICHEN"
      }
    },
    roadmap: {
      badge: 'TEIL 1: DIE AUSFÜHRUNG',
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
      ]
    },
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
        { q: "Für wen ist dieses Programm gedacht?", a: "Angehende Unternehmer, Unternehmer, die neu im digitalen Bereich sind, und digitale Unternehmer, die zusätzliche Fähigkeiten entwickeln möchten." },
        { q: "Ist die Challenge wirklich kostenlos?", a: "Ja, die Challenge ist völlig kostenlos — keine Gebühren, keine Kreditkarte erforderlich." },
        { q: "Warum ist dieses Programm kostenlos?", a: "Der Grund ist einfach: Durch die Challenge erhalten Sie ein klares Bild Ihrer Situation, bevor Sie planlos in alle Richtungen starten. Eine klare Situation, eine klare Idee, ein vorgezeichneter Pfad — Sie organisieren Ihre Gedanken, Bedürfnisse und Ziele, damit Ihr Projekt die bestmögliche Erfolgschance hat. Zusätzlich erleben Sie die Qualität unserer Lehre und Methode, bevor Sie sich festlegen. ⚠️ Wichtig! Der Abschluss der Challenge gibt Ihnen Zugang zum Programm, aber der Zugang ist auch von Ihrem moralischen Engagement und Ihrer Entschlossenheit abhängig." },
        { q: "Wer steckt hinter diesem Programm?", a: "Unser pädagogisches Entwicklungsteam besteht aus 30 Personen in 5 Ländern (USA, UK, Frankreich u.a.), die seit 2020 auf die Erstellung von Bildungsinhalten für digitale Unternehmen spezialisiert sind." },
        { q: "Wie lange dauert die Challenge?", a: "Die Challenge läuft über 7 aufeinanderfolgende Kalendertage. Jede Sitzung erfordert eine Investition von 30 Minuten bis 1 Stunde pro Tag." },
        { q: "Kann ich jederzeit starten?", a: "Ja — in dem Moment, in dem Sie Ihre Daten absenden, beginnt die Challenge." },
        { q: "Gibt es eine Anmeldefrist?", a: "Keine Frist, aber die Anzahl der monatlichen Anmeldungen ist begrenzt. Es kann sein, dass Sie eine Seite finden, die Sie informiert, dass die Anmeldungen für den aktuellen Monat geschlossen sind — in diesem Fall können Sie sich auf die Warteliste setzen lassen oder bis zum nächsten Monat warten. Diese Begrenzung stellt sicher, dass wir jedes Profil mit hoher Qualität unterstützen können." },
        { q: "Ist das Programm für Anfänger geeignet?", a: "Absolut — wir fangen mit jedem ganz am Anfang an." },
        { q: "Benötige ich Geschäftserfahrung?", a: "Überhaupt nicht. Ein wenig gesunder Menschenverstand ist alles, was Sie brauchen, um die Lektionen zu verstehen und anzuwenden. Manchmal ist es sogar ein Vorteil, Anfänger zu sein — keine schlechten Gewohnheiten oder einschränkenden Glaubenssätze, die man verlernen muss." },
        { q: "Ist es auf Deutsch oder in anderen Sprachen verfügbar?", a: "Schriftliche Inhalte werden basierend auf Ihren Präferenzen übersetzt. Audioinhalte, Podcasts und Videos sind leider noch nicht in anderen Sprachen außer Englisch verfügbar." },
        { q: "Ist es auf Englisch verfügbar?", a: "Ja, alle Inhalte sind auf Englisch verfügbar." },
        { q: "Ist es mobil zugänglich?", a: "Ja, unsere Plattform ist voll responsive und von jedem mobilen Gerät aus zugänglich." },
        { q: "Kann ich dem Programm in meinem eigenen Tempo folgen?", a: "Ja — einmal angemeldet, können Sie dem Programm in Ihrem eigenen Tempo folgen, mit unbegrenztem Zugang, überall und jederzeit." },
        { q: "Was werde ich konkret lernen?", a: "Unser Programm umfasst über 900 Kurse, Vorlagen, Minikurse, Checklisten, Workbooks, Audioinhalte und Videos in über 47 Kategorien." },
        { q: "Ist das ein Kurs oder Coaching?", a: "Es ist ein Programm mit Hunderten von Kursen, Tools, Prompts, Podcasts, Videolektionen und Praxis-Fallstudien — plus personalisiertes Coaching durch unser Projekt-Entdeckungsteam im Rahmen unseres \"Destiny\"-Programms." },
        { q: "Werde ich unterstützt?", a: "\"Destiny\" ist ein Programm, das darauf ausgelegt ist, eine begrenzte Anzahl von Projektträgern auszuwählen und sie mit technischer Anleitung, Beratung und finanzieller Unterstützung zu begleiten. (Nur auf Einladung.)" }
      ],
      money: [
        { q: "Kann ich in 7 Tagen wirklich Geld verdienen?", a: "Möglich — nicht garantiert, aber sehr wohl möglich! Während der 7 Tage: 15 % generierten mehr als 1.000 $, 58 % generierten mehr als 500 $. ⚠️ Hinweis: Die Personen, die während des Programms am meisten verdienen, sind nicht unbedingt diejenigen, die während der Challenge selbst verdienen. Wir vermitteln Wissen, das Sie verstehen und auf Ihr eigenes Projekt anwenden müssen. Wir verpflichten uns, Ihnen so viele Werkzeuge und Techniken wie möglich für den Erfolg zu geben — aber keinen Gehaltsscheck!" },
        { q: "Wie viel kann man verdienen?", a: "Wenn Ihr Projekt ein Etsy-Shop für Muschelketten ist, können Sie realistisch gesehen einige hundert bis einige tausend Dollar pro Monat erwarten. Wenn Ihr Projekt der Start eines SaaS, einer mobilen App oder einer Krypto-/Aktienplattform in mehreren Ländern ist — sprechen wir von ganz anderen Umsatzzahlen. Die ehrliche Antwort: 1) es hängt alles vom Projekt ab, 2) von Ihrem Einsatz und 3) was haben Sie zu verlieren, wenn Sie es versuchen?" },
        { q: "Ist das Einkommen garantiert?", a: "Absolut nicht — es sei denn, Sie stehen auf unserer Gehaltsliste." },
        { q: "Gibt es versteckte Gebühren?", a: "Nein. Die Challenge ist völlig kostenlos. Das Gesamtprogramm hat einen Festpreis." },
        { q: "Sind kostenpflichtige Tools erforderlich?", a: "Software, Plattformen, Web-Tools, Hosting usw. außerhalb unserer Plattform können je nach den gewählten Kursen erforderlich sein und liegen in der Verantwortung des Lernenden." },
        { q: "Muss ich meine Einnahmen versteuern?", a: "Alle durch unsere Lehren oder anderweitig generierten Einnahmen müssen der Finanzbehörde in Ihrem Land gemeldet werden." },
        { q: "Wie viele Stunden pro Tag?", a: "Wir empfehlen Schülern, unseren Kursen mindestens 30 bis 45 Minuten pro Tag zu folgen, um ihre Fortschritte zu maximieren." },
        { q: "Kann ich das neben einem Job machen?", a: "Absolut — Sie können Ihren aktuellen Job fortsetzen, während Sie in aller Ruhe Ihren Wechsel vorbereiten." },
        { q: "Ist es möglich, anonym zu bleiben?", a: "Ja. Wir bieten Lehren zum Start Ihres digitalen Geschäfts im \"faceless\"-Format an. Wir sammeln ein Minimum an Informationen über Sie, die intern gespeichert werden — Ihr Nachname und Ihre Telefonnummer werden niemals an unser Personal weitergegeben. Sie haben auch die Möglichkeit, in Krypto für zusätzliche Privatsphäre zu bezahlen." },
        { q: "Ist es für jeden zugänglich?", a: "Ja, jeder kann beitreten — unabhängig vom sozialen Hintergrund, der sexuellen Orientierung oder Herkunft." }
      ],
      process: [
        { q: "Werde ich ein echtes Unternehmen aufbauen?", a: "Ja — aber das ist letztendlich Ihre Entscheidung. Sie können Ihre Idee testen oder voll einsteigen und Ihr echtes Business aufbauen, alleine oder mit Unterstützung." }
      ],
      after: [
        { q: "Was passiert nach den 7 Tagen?", a: "Nach erfolgreichem Abschluss der Challenge wird Ihnen das detaillierte Gesamtprogramm und Angebot (inklusive Preisgestaltung) vorgestellt. Sie können dann wählen, ob Sie uns beitreten oder nicht. Wenn Sie sich entscheiden zu gehen, werden Ihre Daten gelöscht und Sie müssten die Challenge bei einer späteren Planänderung erneut durchlaufen." },
        { q: "Werde ich kontaktiert?", a: "Sie werden nur kontaktiert, wenn Sie zum \"Destiny\"-Programm eingeladen werden und/oder von unseren Partner-Dienstleistern, falls Sie dies spezifisch angefordert haben." },
        { q: "Wie lange dauert der Zugang?", a: "Nach dem Beitritt gilt der Zugang entweder für 1 Jahr oder lebenslang, abhängig von der gewählten Option." },
        { q: "Gibt es eine private Community?", a: "Ja." },
        { q: "Kann ich netzwerken?", a: "Ja." },
        { q: "Gibt es Support?", a: "Ja — wir bieten zwei Stufen des Supports: eine KI-gestützte und eine zweite über ein Ticketsystem, das an menschliche Agenten gerichtet ist." },
        { q: "Gibt es Updates?", a: "Wir aktualisieren unsere Inhalte etwa alle drei Wochen mit neuen Kursen." }
      ],
      security: [
        { q: "Sind meine Daten geschützt?", a: "Wir hosten unsere Seite über Hostinger und wickeln Transaktionen über Stripe ab." }
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
      participationInstructions: 'Direkte Teilnahmelinks werden ausschließlich im Kohorten-Dashboard bereitgestellt, um die Integrität unserer High-Performer-Community zu wahren.',
      disclaimer: '* GEWINNER WERDEN AM 1. JEDEN MONATS PER E-MAIL BENACHRICHTIGT.',
      privateLink: 'WAR IHRE ERFAHRUNG ANDERS? GEBEN SIE STATTDESSEN PRIVATES FEEDBACK →',
      backLink: '← Zurück zum Tunnel'
    },
    philosophy: {
      returnLink: 'Zurück zu Alpha',
      badge: 'DIE PHILOSOPHIE',
      chapters: [
        { id: 'chapter-1', label: 'I. DIE OFFENLEGUNG', title: 'TRANSPARENZ IST DIE ULTIMATIVE AUTORITÄT.', content: ['Die meisten Programme begraben ihre Offenlegungen. Sie setzen die Rechtssprache in eine Fußzeile, in Sechs-Punkt-Schrift, auf eine Seite, die niemand liest. Sie führen mit der Persönlichkeit, der Geschichte, dem Streben — und heben sich die Realität für das Kleingedruckte auf.', 'Wir machen die Dinge anders. Wir glauben, dass Klarheit die Grundlage für Vertrauen ist, und Vertrauen ist die einzige Währung, die in der High-Performance-Bildung zählt. Diese Seite existiert, um genau zu definieren, was diese Plattform ist, wer Marcus Vance ist und wozu Sie sich verpflichten.'] },
        { id: 'chapter-2', label: 'II. DIE METHODIK', title: 'PERFORMANCE-FIRST BILDUNG', content: ['Die Marcus Vance Plattform ist eine Bildungsressource, die von einem Kollektiv digitaler Unternehmer und Systemarchitekten entwickelt wurde. Unsere Methodik baut auf binären Ergebnissen auf: Entweder das System funktioniert, oder es funktioniert nicht. Es gibt keinen Mittelweg.', 'Wir lehren keine "Theorie". Wir lehren Ausführungsprotokolle. Jeder Kurs, jede Checkliste und jedes Workbook in der vollständigen Bibliothek wurde aus realen Operationen extrahiert, die von unserem Entwicklungsteam in verschiedenen Branchen durchgeführt wurden.'] },
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
            'ÜBERBLICK: Lucky North Star LLC betreibt die Marcus Vance Method Plattform und bietet Zugang zu digitalen Bildungsinhalten, einschließlich der kostenlosen 7-Tage-Funnel-Challenge und dem kostenpflichtigen Gesamtprogramm (Bibliothek mit über 900 Kursen). Diese Bedingungen gelten für jeglichen Zugriff, unabhängig davon, ob der Nutzer ein zahlender Kunde ist. Marcus Vance ist eine KI-generierte Marken-Persona und keine reale Einzelperson.',
            'ZULÄSSIGE NUTZUNG: Sie dürfen die Plattform ausschließlich für rechtmäßige, persönliche, nicht-kommerzielle Bildungszwecke nutzen. Sie erklären sich damit einverstanden, nicht: (a) gegen geltende Gesetze zu verstoßen; (b) auf nicht-öffentliche Bereiche zuzugreifen; (c) Schwachstellen zu prüfen; (d) unaufgeforderte kommerzielle Mitteilungen zu senden; (e) die Systemintegrität zu beeinträchtigen; (f) unangemessene Lasten zu verursachen; (g) Viren oder Schadsoftware hochzuladen; (h) personenbezogene Daten ohne Genehmigung zu sammeln; (i) Scraper oder Roboter zu verwenden; (j) Schutzmaßnahmen zu umgehen; (k) Inhalte zu framen oder zu spiegeln; (l) die Software der Plattform zurückzuentwickeln.',
            'INHALTLICHE RICHTIGKEIT: Obwohl wir uns um die Richtigkeit der Informationen bemühen, geben wir keine Zusicherungen oder Garantien hinsichtlich der Zuverlässigkeit oder Vollständigkeit der Inhalte. Kursinhalte spiegeln methodische Prinzipien wider und stellen keine professionelle Beratung dar.',
            'VERFÜGBARKEIT DER SEITE: Wir garantieren keinen ununterbrochenen oder fehlerfreien Zugriff. Die Plattform kann für Wartungsarbeiten oder Updates ausgesetzt werden. Wir übernehmen keine Haftung für Verluste, die durch Nichtverfügbarkeit entstehen.',
            'ANWENDBARES RECHT: Diese Bedingungen unterliegen den Gesetzen des Bundesstaates Wyoming, USA. Zwingende Verbraucherschutzbestimmungen in Ihrem Wohnsitzland bleiben unberührt.'
          ] 
        },
        { 
          id: 'section-2', 
          label: '2. ELEKTRONISCHE KOMMUNIKATION', 
          content: [
            'EINWILLIGUNG: Wenn Sie ein Konto erstellen oder an einer Challenge teilnehmen, erklären Sie sich damit einverstanden, elektronische Mitteilungen von Lucky North Star LLC zu erhalten. Dies umfasst E-Mail, SMS und In-Platform-Benachrichtigungen.',
            'TRANSAKTIONSMITTEILUNGEN: Erforderlich für den Kontobetrieb, einschließlich Verifizierung, Belegen, Sicherheitswarnungen und rechtlichen Hinweisen. Diese können nicht abbestellt werden, solange das Konto aktiv ist.',
            'MARKETING-MITTEILUNGEN: Werbeangebote und Newsletter werden nur mit entsprechender Einwilligung versendet. Sie können sich jederzeit über die Kontoeinstellungen oder Abmeldelinks abmelden.',
            'KANÄLE: Alle E-Mails kommen von unserer offiziellen Domain. SMS-Marketing erfordert eine explizite Zustimmung; antworten Sie mit STOP, um abzubestellen. Wir halten uns an US CAN-SPAM, UK PECR und die EU ePrivacy-Richtlinie.',
            'EXKLUSIVER KANAL: Alle formalen rechtlichen Hinweise und Support-Anfragen MÜSSEN über das interne Support-Portal eingereicht werden. Lucky North Star LLC bearbeitet keine externen E-Mails für formale Zustellungszwecke.'
          ] 
        },
        { 
          id: 'section-3', 
          label: '3. URHEBERRECHT UND DATENBANKRECHTE', 
          content: [
            'EIGENTUM: Alle Inhalte — Kursmaterialien, Audio, Frameworks, Logos und die Markenidentität von Marcus Vance — sind ausschließliches Eigentum von Lucky North Star LLC oder seinen Lizenzgebern.',
            'SCHUTZ: Inhalte sind unter dem US Copyright Act, UK CDPA und EU-Richtlinien geschützt. Wir halten Sui-generis-Datenbankrechte an der Sammlung und Anordnung unserer Ressourcen.',
            'URHEBERPERSÖNLICHKEITSRECHTE: Soweit vorhanden, machen Urheber ihre Rechte auf Namensnennung und Integrität gemäß den geltenden Gesetzen geltend.',
            'ZULÄSSIGE NUTZUNG: Ihnen wird eine begrenzte Lizenz für die persönliche Nutzung zu Bildungszwecken gewährt. Vervielfältigung, Weiterverkauf, kommerzielle Verwertung oder die Erstellung abgeleiteter Werke sind strengstens untersagt.',
            'DMCA-COMPLIANCE: Wir reagieren auf Hinweise auf angebliche Urheberrechtsverletzungen gemäß dem Digital Millennium Copyright Act. Hinweise müssen über das interne Support-Portal eingereicht werden.'
          ] 
        },
        { 
          id: 'section-4', 
          label: '4. MARKENRICHTLINIE', 
          content: [
            'EIGENE MARKEN: "The Marcus Vance Method™", "Marcus Vance™", "Lucky North Star™" und "The 7-Day Funnel Challenge™" sind weltweit geschützte Marken.',
            'VERBOTE: Sie dürfen unsere Marken nicht im Zusammenhang mit Produkten oder Dienstleistungen verwenden, die nicht von uns stammen, in einer Weise, die Verwechslungen hervorrufen könnte oder die Marke herabsetzt.',
            'PERSONA-NUTZUNG: Sie dürfen nicht behaupten, dass Marcus Vance eine reale Person ist, oder die Persona in einer Weise verwenden, die unserer KI-Persona-Offenlegung widerspricht.',
            'ZULÄSSIGE REFERENZEN: Sachliche und genaue Referenzen sind erlaubt, sofern sie keine offizielle Zugehörigkeit, Befürwortung oder Sponsoring implizieren.'
          ] 
        },
        { 
          id: 'section-5', 
          label: '5. IHR KONTO', 
          content: [
            'REGISTRIERUNG: Der Zugriff auf kostenpflichtige Funktionen erfordert den vollständigen gesetzlichen Namen, eine gültige E-Mail-Adresse und ein sicheres Passwort. Sie sind für die Kontosicherheit und die Aktualität Ihrer Daten verantwortlich.',
            'NICHT-ÜBERTRAGBARKEIT: Ihr Konto ist streng persönlich. Es darf nicht geteilt, verliehen, abgetreten, verkauft oder von einer anderen Person als dem registrierten Inhaber verwendet werden. Verstöße führen zur sofortigen Kündigung.',
            'EIN KONTO PRO PERSON: Mehrere Konten pro Person sind untersagt. Wir behalten uns das Recht vor, doppelte Konten zusammenzuführen oder zu kündigen.',
            'VERIFIZIERUNG: Wir behalten uns das Recht vor, eine Identitätsprüfung (Ausweis, E-Mail-Bestätigung) zu verlangen, bevor wir bedeutende Transaktionen oder Rückerstattungsanträge bearbeiten.',
            'INAKTIVITÄT: Konten, die 24 Monate lang inaktiv sind, können nach vorheriger Ankündigung deaktiviert werden. Es gilt eine 6-monatige Kulanzfrist für die Reaktivierung vor der endgültigen Löschung.'
          ] 
        },
        { 
          id: 'section-6', 
          label: '6. ZAHLUNGSRICHTLINIEN', 
          content: [
            'KOSTENLOS VS. KOSTENPFLICHTIG: Die 7-Tage-Challenge ist kostenlos. Das Gesamtprogramm ist ein kostenpflichtiges Produkt. Die Preise sind in USD angegeben und können ohne Vorankündigung geändert werden.',
            'STRIPE: Kartenzahlungen werden über Stripe abgewickelt. Wir speichern keine vollständigen Kartendaten. Für alle Transaktionen wird eine SSL/TLS-Verschlüsselung verwendet.',
            'KRYPTOWÄHRUNG: BTC, ETH und USDC werden akzeptiert. KRYPTOWÄHRUNGSTRANSAKTIONEN SIND UNWIDERRUFLICH. Einmal gesendet, können sie nicht storniert werden. Sie tragen die volle Verantwortung für die Richtigkeit der Wallet-Adresse.',
            'KRYPTO-RÜCKERSTATTUNGEN: Falls berechtigt, werden Rückerstattungen für Krypto-Zahlungen in USD per Banküberweisung oder Kartengutschrift ausgestellt. Wir leisten keine Rückerstattungen in Kryptowährung.',
            'STEUERN: Geltende Verkaufssteuer, MwSt. oder GST werden beim Checkout basierend auf Ihrem Standort berechnet.'
          ] 
        },
        { 
          id: 'section-7', 
          label: '7. KÄUFERSCHUTZRICHTLINIE', 
          content: [
            'ABDECKUNG: Deckt die Nichtbereitstellung des digitalen Zugangs, anhaltende technische Nichterreichbarkeit (>72h), wesentliche Falschbeschreibungen, unbefugte Belastungen und doppelte Belastungen ab.',
            'AUSSCHLÜSSE: Deckt keine Unzufriedenheit mit der Inhaltsqualität, das Nichterreichen spezifischer Geschäftsergebnisse, Ansprüche nach 30 Tagen oder Fehler von Drittanbietern ab.',
            'RÜCKERSTATTUNGSGARANTIE: Ansprüche, bei denen auf mehr als fünf (5) Kursinhalte zugegriffen wurde, sind von der 30-tägigen Rückerstattungsgarantie ausgeschlossen.',
            'ANSPRÜCHE: Müssen innerhalb von 30 Tagen nach dem Kauf über das interne Support-Portal eingereicht werden. Ergebnisse sind Rückerstattungen, technische Behebung oder Neubereitstellung.',
            'CHARGEBACKS: Wir raten von Rückbuchungen (Chargebacks) ab, bevor das interne Streitbeilegungsverfahren abgeschlossen ist. Betrügerische Rückbuchungen können zur Kontokündigung und Meldung an Behörden führen.'
          ] 
        },
        { 
          id: 'section-8', 
          label: '8. DATENSCHUTZERKLÄRUNG', 
          content: [
            'ERHEBUNG: Wir erheben Identitätsdaten (Name, Benutzername), Kontaktdaten (E-Mail, Telefon), technische Daten (IP, Browser) und Nutzungsdaten, um die Plattformdienste bereitzustellen.',
            'RECHTSGRUNDLAGE: Wir verarbeiten Daten auf Basis der Vertragserfüllung (Kontoverwaltung), berechtigter Interessen (Sicherheit, Analyse) und rechtlicher Verpflichtungen (Steuern, Geldwäscheprävention).',
            'COOKIES: Notwendige Cookies ermöglichen die Authentifizierung. Analyse- und Marketing-Cookies erfordern Ihre explizite Zustimmung.',
            'WEITERGABE: Wir verkaufen Ihre Daten nicht. Wir teilen sie nur mit wesentlichen Auftragsverarbeitern (Stripe, E-Mail-Dienstleister) im Rahmen strenger Datenverarbeitungsvereinbarungen.',
            'IHRE RECHTE: Gemäß DSGVO (EU/UK) und CCPA (Kalifornien) haben Sie Rechte auf Auskunft, Berichtigung, Löschung und Portabilität. Reichen Sie alle Anfragen über das interne Support-Portal ein.'
          ] 
        },
        { 
          id: 'section-9', 
          label: '9. ANTI-PIRATERIE-RICHTLINIE', 
          content: [
            'VERBOT: Die unbefugte Vervielfältigung, Verbreitung oder Nachahmung von Inhalten, Markenidentifikatoren oder der Marcus Vance Method Methodik ist strengstens untersagt.',
            'DURCHSETZUNG: Wir überwachen aktiv Verstöße und veranlassen DMCA-Takedowns, versenden Unterlassungserklärungen und kündigen Konten, die an Fälschungen oder Piraterie beteiligt sind.',
            'AUTORISIERTE QUELLE: Nur die offizielle Plattform ist berechtigt, Zugang zu gewähren. Drittanbieter-Reseller oder Aggregate-Seiten sind betrügerisch.'
          ] 
        },
        { 
          id: 'section-10', 
          label: '10. KOMMUNIKATION MIT REPRÄSENTANTEN', 
          content: [
            'AUTORISIERTE KANÄLE: Die offizielle Kommunikation ist auf das interne Support-Portal, In-Platform-Benachrichtigungen und offizielle E-Mail-Domains des Unternehmens beschränkt.',
            'UNAUTORISIERTE KANÄLE: Mitarbeiter sind nicht berechtigt, über persönliche soziale Medien, WhatsApp oder Discord in Geschäftsangelegenheiten zu kommunizieren.',
            'BETRUGSWARNUNG: Wir werden Sie niemals nach Ihrem Passwort fragen oder Zahlungen außerhalb des offiziellen Platform-Checkouts anfordern. Melden Sie solche Anfragen sofort.'
          ] 
        },
        { 
          id: 'section-11', 
          label: '11. VERPFLICHTENDE OFFENLEGUNGEN', 
          content: [
            'KI-OFFENLEGUNG: Marcus Vance ist eine KI-generierte Marken-Persona und keine reale Person. Inhalte repräsentieren kollektive institutionelle Expertise, keine individuelle Autobiografie.',
            'KEINE PROFESSIONELLE BERATUNG: Nichts in diesem Programm stellt eine Finanz-, Rechts-, Anlage-, Steuer- oder medizinische Beratung dar. Die Umsetzung erfolgt auf eigenes Risiko.',
            'COMPLIANCE: Diese Dokumentation ist so konzipiert, dass sie den FTC-Richtlinien, der DSGVO, dem CCPA, dem TCPA und den geltenden Gesetzen in den USA, UK und der EU entspricht.'
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
        { q: "Was genau ist die 5-Tage-Challenge?", a: "Es ist eine einzigartige 5-tägige Gelegenheit, ein Bildungsprogramm zu erhalten, das darauf ausgelegt ist, die Teilnehmer zu auditieren — ihre aktuelle Situation zu bewerten, festzustellen, wo sie auf ihrer digitalen Geschäftsreise stehen, alle wesentlichen grundlegenden Werkzeuge zur Strukturierung ihrer Idee(n) bereitzustellen und konkrete nächste Schritte für die Umsetzung aufzuzeigen." },
        { q: "Für wen ist dieses Programm gedacht?", a: "Angehende Unternehmer, Unternehmer, die neu im digitalen Bereich sind, und digitale Unternehmer, die zusätzliche Fähigkeiten entwickeln möchten." },
        { q: "Ist die Challenge wirklich kostenlos?", a: "Ja, die Challenge ist völlig kostenlos — keine Gebühren, keine Kredikarte erforderlich." },
        { q: "Warum ist dieses Programm kostenlos?", a: "Der Grund ist einfach: Durch die Challenge erhalten Sie ein klares Bild Ihrer Situation, bevor Sie planlos in alle Richtungen starten. Eine klare Situation, eine klare Idee, ein vorgezeichneter Pfad — Sie organisieren Ihre Gedanken, Bedürfnisse und Ziele, damit Ihr Projekt die bestmögliche Erfolgschance hat. Zusätzlich erleben Sie die Qualität unserer Lehre und Methode, bevor Sie sich festlegen. ⚠️ Wichtig! Der Abschluss der Challenge gibt Ihnen Zugang zum Programm, aber der Zugang ist auch von Ihrem moralischen Engagement und Ihrer Entschlossenheit abhängig." },
        { q: "Wer steckt hinter diesem Programm?", a: "Unser pädagogisches Entwicklungsteam besteht aus 30 Personen in 5 Ländern (USA, UK, Frankreich u.a.), die seit 2020 auf die Erstellung von Bildungsinhalten für digitale Unternehmen spezialisiert sind." },
        { q: "Wie lange dauert die Challenge?", a: "Die Challenge läuft über 5 aufeinanderfolgende Kalendertage. Jede Sitzung erfordert eine Investition von 30 Minuten bis 1 Stunde pro Tag." },
        { q: "Kann ich jederzeit starten?", a: "Ja — in dem Moment, in dem Sie Ihre Daten absenden, beginnt die Challenge." },
        { q: "Gibt es eine Anmeldefrist?", a: "Keine Frist, aber die Anzahl der monatlichen Anmeldungen ist begrenzt. Es kann sein, dass Sie eine Seite finden, die Sie informiert, dass die Anmeldungen für den aktuellen Monat geschlossen sind — in diesem Fall können Sie sich auf die Warteliste setzen lassen oder bis zum nächsten Monat warten. Diese Begrenzung stellt sicher, dass wir jedes Profil mit hoher Qualität unterstützen können." },
        { q: "Ist das Programm für Anfänger geeignet?", a: "Absolut — wir fangen mit jedem ganz am Anfang an." },
        { q: "Benötige ich Geschäftserfahrung?", a: "Überhaupt nicht. Ein wenig gesunder Menschenverstand ist alles, was Sie brauchen, um die Lektionen zu verstehen und anzuwenden. Manchmal ist es sogar ein Vorteil, Anfänger zu sein — keine schlechten Gewohnheiten oder einschränkenden Glaubenssätze, die man verlernen muss." },
        { q: "Ist es auf Deutsch oder in anderen Sprachen verfügbar?", a: "Schriftliche Inhalte werden basierend auf Ihren Präferenzen übersetzt. Audioinhalte, Podcasts und Videos sind leider noch nicht in anderen Sprachen außer Englisch verfügbar." },
        { q: "Ist es auf Englisch verfügbar?", a: "Ja, alle Inhalte ist auf Englisch verfügbar." },
        { q: "Ist es mobil zugänglich?", a: "Ja, unsere Plattform ist voll responsive und von jedem mobilen Gerät aus zugänglich." },
        { q: "Kann ich dem Programm in meinem eigenen Tempo folgen?", a: "Ja — einmal angemeldet, können Sie dem Programm in Ihrem eigenen Tempo folgen, mit unbegrenztem Zugang, überall und jederzeit." },
        { q: "Was werde ich konkret lernen?", a: "Unser Programm umfasst über 900 Kurse, Vorlagen, Minikurse, Checklisten, Workbooks, Audioinhalte und Videos in über 47 Kategorien." },
        { q: "Ist das ein Kurs oder Coaching?", a: "Es ist ein Programm mit Hunderten von Kursen, Tools, Prompts, Podcasts, Videolektionen und Praxis-Fallstudien — plus personalisiertes Coaching durch unser Projekt-Entdeckungsteam im Rahmen unseres \"Destiny\"-Programms." },
        { q: "Werde ich unterstützt?", a: "\"Destiny\" ist ein Programm, das darauf ausgelegt ist, eine begrenzte Anzahl von Projektträgern auszuwählen und sie mit technischer Anleitung, Beratung und finanzieller Unterstützung zu begleiten. (Nur auf Einladung.)" }
      ],
      money: [
        { q: "Kann ich in 5 Tagen wirklich Geld verdienen?", a: "Möglich — nicht garantiert, aber sehr wohl möglich! Während der 5 Tage: 15 % generierten mehr als 1.000 $, 58 % generierten mehr als 500 $. ⚠️ Hinweis: Die Personen, die während des Programms am meisten verdienen, sind nicht unbedingt diejenigen, die während der Challenge selbst verdienen. Wir vermitteln Wissen, das Sie verstehen und auf Ihr eigenes Projekt anwenden müssen. Wir verpflichten uns, Ihnen so viele Werkzeuge und Techniken wie möglich für den Erfolg zu geben — aber keinen Gehaltsscheck!" },
        { q: "Wie viel kann man verdienen?", a: "Wenn Ihr Projekt ein Etsy-Shop für Muschelketten ist, können Sie realistisch gesehen einige hundert bis einige tausend Dollar pro Monat erwarten. Wenn Ihr Projekt der Start eines SaaS, einer mobilen App oder einer Krypto-/Aktienplattform in mehreren Ländern ist — sprechen wir von ganz anderen Umsatzzahlen. Die ehrliche Antwort: 1) es hängt alles vom Projekt ab, 2) von Ihrem Einsatz und 3) was haben Sie zu verlieren, wenn Sie es versuchen?" },
        { q: "Ist das Einkommen garantiert?", a: "Absolut nicht — es sei denn, Sie stehen auf unserer Gehaltsliste." },
        { q: "Gibt es versteckte Gebühren?", a: "Nein. Die Challenge ist völlig kostenlos. Das Gesamtprogramm hat einen Festpreis." },
        { q: "Sind kostenpflichtige Tools erforderlich?", a: "Software, Plattformen, Web-Tools, Hosting usw. außerhalb unserer Plattform können je nach den gewählten Kursen erforderlich sein und liegen in der Verantwortung des Lernenden." },
        { q: "Muss ich meine Einnahmen versteuern?", a: "Alle durch unsere Lehren oder anderweitig generierten Einnahmen müssen der Finanzbehörde in Ihrem Land gemeldet werden." },
        { q: "Wie viele Stunden pro Tag?", a: "Wir empfehlen Schülern, unseren Kursen mindestens 30 bis 45 Minuten pro Tag zu folgen, um ihre Fortschritte zu maximieren." },
        { q: "Kann ich das neben einem Job machen?", a: "Absolut — Sie können Ihren aktuellen Job fortsetzen, während Sie in aller Ruhe Ihren Wechsel vorbereiten." },
        { q: "Ist es möglich, anonym zu bleiben?", a: "Ja. Wir bieten Lehren zum Start Ihres digitalen Geschäfts im \"faceless\"-Format an. Wir sammeln ein Minimum an Informationen über Sie, die intern gespeichert werden — Ihr Nachname und Ihre Telefonnummer werden niemals an unser Personal weitergegeben. Sie haben auch die Möglichkeit, in Krypto für zusätzliche Privatsphäre zu bezahlen." },
        { q: "Ist es für jeden zugänglich?", a: "Ja, jeder kann beitreten — unabhängig vom sozialen Hintergrund, der sexuellen Orientierung oder Herkunft." }
      ],
      process: [
        { q: "Werde ich ein echtes Unternehmen aufbauen?", a: "Ja — aber das ist letztendlich Ihre Entscheidung. Sie können Ihre Idee testen oder voll einsteigen und Ihr echtes Business aufbauen, alleine oder mit Unterstützung." }
      ],
      after: [
        { q: "Was passiert nach den 5 Tagen?", a: "Nach erfolgreichem Abschluss der Challenge wird Ihnen das detaillierte Gesamtprogramm und Angebot (inklusive Preisgestaltung) vorgestellt. Sie können dann wählen, ob Sie uns beitreten oder nicht. Wenn Sie sich entscheiden zu gehen, werden Ihre Daten gelöscht und Sie müssten die Challenge bei einer späteren Planänderung erneut durchlaufen." },
        { q: "Werde ich kontaktiert?", a: "Sie werden nur kontaktiert, wenn Sie zum \"Destiny\"-Programm eingeladen werden und/oder von unseren Partner-Dienstleistern, falls Sie dies spezifisch angefordert haben." },
        { q: "Wie lange dauert der Zugang?", a: "Nach dem Beitritt gilt der Zugang entweder für 1 Jahr oder lebenslang, abhängig von der gewählten Option." },
        { q: "Gibt es eine private Community?", a: "Ja." },
        { q: "Kann ich netzwerken?", a: "Ja." },
        { q: "Gibt es Support?", a: "Ja — wir bieten zwei Stufen des Supports: eine KI-gestützte und eine zweite über ein Ticketsystem, das an menschliche Agenten gerichtet ist." },
        { q: "Gibt es Updates?", a: "Wir aktualisieren unsere Inhalte etwa alle drei Wochen mit neuen Kursen." }
      ],
      security: [
        { q: "Sind meine Daten geschützt?", a: "Wir hosten unsere Seite über Hostinger und wickeln Transaktionen über Stripe ab." }
      ]
    },
    paths: {
      pathATitle: 'WEG A: STÄNDIGER KAMPF',
      pathAContent: 'Machen Sie so weiter wie bisher und hoffen Sie auf ein anderes Ergebnis.',
      pathBTitle: 'WEG B: ENTSCHLOSSENES HANDELN',
      pathBContent: 'Schließen Sie sich über 12.000 Frauen an, die heute beginnen.'
    },
    finalCTA: {
      freePdfBtn: 'Gratis PDF'
    },
    enrollPopup: {
      firstName: 'VORNAME',
      email: 'IHRE BESTE E-MAIL',
      secure: 'VERSCHLÜSSELTE VERBINDUNG | KEINE KREDITKARTE ERFORDERLICH'
    },
    feedback: {
      badge: 'PRIVATE KOMMUNIKATION',
      title: 'Direktes',
      titleSuffix: 'Feedback.',
      subtitle: '"Ihre Erfahrung zählt. Wenn unser Qualitätsstandard nicht erfüllt wurde, möchte ich das direkt von Ihnen hören."',
      feedbackLabel: 'Detailliertes Feedback',
      placeholder: 'Was hätten wir besser machen können?',
      emailLabel: 'Private E-Mail',
      nameLabel: 'Vollständiger Name',
      submitBtn: 'Privates Feedback senden →',
      disclaimer: '* Trinity prüft alle kritischen Kommentare wöchentlich.',
      backToGiveaway: 'Zurück zur Verlosung →'
    },
    giveaway: {
      badge: 'GEWINNSPIEL: DER LETZTE SCHRITT',
      title: 'Sie sind',
      titleSuffix: 'einen Schritt',
      titleEnd: 'von der Auswahl entfernt.',
      subtitle: '"Unsere Community lebt von Integrität. Ihr exklusives Teilnehmer-Portal wird nach der Challenge bereitgestellt, um verifiziertes Feedback zu gewährleisten."',
      steps: [
        { n: '01', t: 'Schließen Sie unsere 5-Tage-Authority-Challenge erfolgreich ab' },
        { n: '02', t: 'Greifen Sie über Ihr Alumni-Dashboard auf das Ziehungsportal zu' },
        { n: '03', t: 'Folgen Sie den bereitgestellten sicheren Anweisungen zur Teilnahme' }
      ],
      participationInstructions: 'Der Zugang zum Link ist verifizierten Teilnehmern vorbehalten. Überprüfen Sie Ihre Willkommens-E-Mail auf Ihre Portal-Zugangsdaten.',
      disclaimer: '* Gewinner werden am 1. jeden Monats per E-Mail benachrichtigt.',
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
