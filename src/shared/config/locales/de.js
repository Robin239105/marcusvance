import dynamicStats from '../../utils/dynamicStats';

export const baseDE = {
  marcus: {
    urgencyBar: `⚡ NUR NOCH ${dynamicStats.spotsRemaining} PLÄTZE FREI FÜR ${dynamicStats.currentMonth}`,
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
      giveawayBtn: 'AM GEWINNSPIEL TEILNEHMEN',
      agreement: 'Mit der Anmeldung stimme ich dem Erhalt strategischer Kommunikation zu. Abmeldung mit 1 Klick.',
      successTitle: 'ZUGANG GEWÄHRT.',
      successSubtitle: 'Prüfen Sie Ihren Posteingang. Ihr Tag 1-Protokoll trifft ein.'
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
      privacy: 'DATENSCHUTZ',
      terms: 'BEDINGUNGEN'
    },
    giveaway: {
      badge: 'GEWINNSPIEL',
      title: 'NEUESTES iPHONE'
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
      ctaDisclaimer: 'Schließen Sie die Challenge ab, um alles oben Freizuschalten'
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
