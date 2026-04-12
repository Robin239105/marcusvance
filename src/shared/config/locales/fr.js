import dynamicStats from '../../utils/dynamicStats';

export const baseFR = {
  marcus: {
    urgencyBar: `⚡ SEULEMENT ${dynamicStats.spotsRemaining} PLACES RESTANTES POUR ${dynamicStats.currentMonth}`,
    navAboutChallenge: 'À propos du défi de 7 jours',
    navAboutProgramme: 'À propos du programme complet',
    navStartBtn: 'DÉMARRER LE DÉFI GRATUIT',
    heroPreHeader: 'POUR LES PERSONNES À HAUT POTENTIEL UNIQUEMENT',
    heroTitle: 'CONSTRUISEZ VOTRE PREMIER FLUX DE REVENUS NUMÉRIQUE EN 7 JOURS.',
    heroSubtitle: 'LE DÉFI DE 7 JOURS POUR VOTRE PREMIER REVENU DIGITAL — EN PARTANT DE ZÉRO',
    heroStats: `${dynamicStats.startedThisMonth} PERSONNES À HAUT POTENTIEL ONT COMMENCÉ CE MOIS-CI`,
    heroCommunity: 'Rejoignez la communauté au taux de réussite de 93%',
    heroScroll: 'EXPOSER LE SYSTÈME',
    ctaPrimary: 'DÉMARRER MON DÉFI GRATUIT →',
    ctaInvestment: 'INVESTISSEMENT : {currency}0,00 / TOTALEMENT GRATUIT',
    valueStackHeader: 'VALEUR TOTALE DU DÉFI : {currency}806+',
    stats: {
      started: 'PERSONNES ONT COMMENCÉ CE MOIS-CI',
      joined: 'ONT REJOINT LE PROGRAMME',
      launched: 'ONT LANCÉ LEUR BUSINESS AU MOIS 1',
      rating: 'NOTE VÉRIFIÉE'
    },
    enroll: {
      giveawayBtn: 'PARTICIPER AU TIRAGE',
      agreement: 'En m\'inscrivant, j\'accepte de recevoir des communications stratégiques. Désinscription en 1 clic.',
      successTitle: 'ACCÈS ACCORDÉ.',
      successSubtitle: 'Vérifiez votre boîte de réception. Votre protocole de Jour 1 arrive.'
    },
    trust: {
      noSpam: 'ZÉRO SPAM',
      unsubscribe: 'DÉSINCRIPTION EN 1 CLIC',
      secureData: 'DONNÉES SÉCURISÉES',
      noCard: 'AUCUNE CARTE REQUISE'
    },
    footer: {
      giveaway: 'JEU CONCOURS',
      feedback: 'VOTRE AVIS',
      privacy: 'CONFIDENTIALITÉ',
      terms: 'CONDITIONS'
    },
    giveaway: {
      badge: 'JEU CONCOURS',
      title: 'DERNIER iPHONE'
    },
    roadmap: {
      badge: 'PARTIE 1 : L\'ÉXÉCUTION',
      title: 'LE PROTOCOLE DE 7 JOURS',
      subtitle: '"La plupart des hommes restent bloqués parce qu\'ils ne font jamais le premier pas. Nous résolvons cela en 168 heures."',
      joinCohort: `REJOIGNEZ LA COHORTE DE ${dynamicStats.startedThisMonth} CE MOIS-CI →`,
      items: [
        { d: '01', t: 'EXORCISME DE L\'EMPLOYÉ', v: '{currency}97', s: 'Mindset' },
        { d: '02', t: 'LE VÉHICULE ARGENT', v: '{currency}97', s: 'Core' },
        { d: '03', t: 'ARCHITECTURE DE L\'OFFRE', v: '{currency}97', s: 'Core' },
        { d: '04', t: 'LE TRAFIC FANTÔME', v: '{currency}97', s: 'Scale' },
        { d: '05', t: 'PREMIÈRE INJECTION DE CAPITAL', v: '{currency}97', s: 'Closing' },
        { d: '06', t: 'HÉRITAGE DE L\'AUTOMATISATION', v: '{currency}97', s: 'System' },
        { d: '07', t: 'LE PROTOCOLE DE SCALE', v: '{currency}97', s: 'Elite' }
      ]
    },
    programme: {
      badge: 'PARTIE 2 : L\'HÉRITAGE',
      title: 'CE QUI VOUS ATTEND APRÈS...',
      subtitle: 'Terminez les 7 jours. Gagnez votre invitation à la bibliothèque d\'éducation commerciale numérique la plus complète disponible.',
      categories: [
         { i: '💼', t: 'AFFAIRES & ENTREPRENEURIAT', n: '331 ressources', d: 'Startups · Business en ligne · Freelance · Solopreneur · Leadership · Mindset' },
         { i: '📈', t: 'MARKETING & VENTES', n: '600+ ressources', d: 'Marketing Digital · Ventes · Funnels · Ads · Email Marketing · SEO · Lead Gen' },
         { i: '🧠', t: 'CROISSANCE & MINDSET', n: '400+ ressources', d: 'Dév. Personnel · Productivité · Habitudes · Intelligence Émotionnelle · Systèmes' },
         { i: '🎨', t: 'BRANDING & CRÉATION', n: '280+ ressources', d: 'Branding · Copywriting · Création de Contenu · Produit · Creator Economy' },
         { i: '⚙️', t: 'TECH & OUTILS', n: '280+ ressources', d: 'IA · Automatisation · E-commerce · Outils Tech · Finance · Cybersécurité' }
      ],
      exclusivity: '"Ceci n\'est pas un cours. C\'est un système d\'exploitation complet pour business numérique. Révélé seulement après avoir terminé le défi."',
      stats: '980+ RESSOURCES · 47 CATÉGORIES',
      unlockStats: [
        { i: '📚', t: '250+', l: 'Livres' },
        { i: '✅', t: '225+', l: 'Checklists' },
        { i: '📖', t: '173+', l: 'Guides' },
        { i: '🎧', t: '105+', l: 'Audio' },
        { i: '🤖', t: '89+', l: 'Prompts IA' },
        { i: '💻', t: '64+', l: 'Cours' },
        { i: '📓', t: '46+', l: 'Workbooks' },
        { i: '🛠️', t: '45+', l: 'Toolstacks' },
        { i: '🎬', t: '61+', l: 'Vidéos' }
      ],
      cta: 'S\'INSCRIRE AU DÉFI GRATUIT DE 7 JOURS →',
      ctaDisclaimer: 'Terminez le défi pour débloquer tout ce qui précède'
    },
    faqCategories: {
      general: "Général",
      money: "Argent & Revenus",
      process: "Fonctionnement",
      after: "Après le Défi",
      security: "Sécurité & Confiance"
    },
    faq: {
      general: [
        { q: "Qu'est-ce que le Défi de 7 Jours exactement ?", a: "C'est une opportunité unique de 7 jours pour recevoir un programme éducatif conçu pour auditer les participants — évaluer leur situation actuelle, déterminer où ils en sont dans leur parcours de business digital, fournir tous les outils fondamentaux essentiels pour structurer leur(s) idée(s) et tracer les prochaines étapes concrètes pour passer à l'action." },
        { q: "À qui s'adresse ce programme ?", a: "Aux entrepreneurs débutants, aux entrepreneurs novices dans le monde du numérique et aux entrepreneurs digitaux souhaitant développer des compétences supplémentaires." },
        { q: "Le défi est-il vraiment gratuit ?", a: "Oui, le défi est complètement gratuit — aucun frais, aucune carte de crédit requise." },
        { q: "Pourquoi ce programme est-il gratuit ?", a: "La raison est simple : grâce au défi, vous obtenez une image claire de votre situation avant de partir dans toutes les directions. Une situation claire, une idée claire, un chemin tracé — vous organisez vos pensées, vos besoins et vos objectifs pour que votre projet ait les meilleures chances de succès. De plus, vous découvrez la qualité de notre enseignement et de notre méthode avant de vous engager. ⚠️ Important ! Réussir le défi vous donne accès au programme, mais l'accès est également conditionné par votre niveau d'engagement moral et de détermination." },
        { q: "Qui est derrière ce programme ?", a: "Notre équipe de développement pédagogique est composée de 30 personnes réparties dans 5 pays (USA, UK, France, etc.), spécialisées dans la création de contenu éducatif pour business digital depuis 2020." },
        { q: "Combien de temps dure le défi ?", a: "Le défi dure 7 jours calendaires consécutifs. Chaque session nécessite un investissement de 30 minutes à 1 heure par jour." },
        { q: "Puis-je commencer à tout moment ?", a: "Oui — dès que vous soumettez vos coordonnées, le défi commence." },
        { q: "Y a-t-il une date limite d'inscription ?", a: "Aucune date limite, mais le nombre d'entrées mensuelles est limité. Vous pourriez trouver une page vous informant que les inscriptions pour le mois en cours sont fermées — dans ce cas, vous pouvez rejoindre la liste d'attente ou attendre le mois suivant. Cette limite nous permet de soutenir chaque profil avec un haut niveau de qualité." },
        { q: "Le programme est-il adapté aux débutants ?", a: "Absolument — nous commençons avec tout le monde depuis le tout début." },
        { q: "Ai-je besoin d'une expérience en affaires ?", a: "Pas du tout. Un peu de bon sens est tout ce dont vous avez besoin pour comprendre et appliquer les leçons fournies. Parfois, être débutant est un avantage — pas de mauvaises habitudes ou de croyances limitantes à désapprendre." },
        { q: "Est-ce disponible en français ou dans d'autres langues ?", a: "Le contenu écrit est traduit selon vos préférences. Le contenu audio, les podcasts et les vidéos ne sont malheureusement pas encore disponibles dans d'autres langues que l'anglais." },
        { q: "Est-ce disponible en anglais ?", a: "Oui, tout le contenu est disponible en anglais." },
        { q: "Est-ce accessible sur mobile ?", a: "Oui, notre plateforme est entièrement responsive et accessible depuis n'importe quel appareil mobile." },
        { q: "Puis-je suivre le programme à mon propre rythme ?", a: "Oui — une fois inscrit, vous pouvez suivre le programme à votre rythme, avec un accès illimité, partout et à tout moment." },
        { q: "Qu'est-ce que je vais apprendre concrètement ?", a: "Notre programme comprend plus de 900 cours, modèles, mini-cours, checklists, cahiers d'exercices, contenus audio et vidéos répartis dans plus de 47 catégories dans divers domaines." },
        { q: "S'agit-il d'un cours ou d'un coaching ?", a: "C'est un programme avec des centaines de cours, d'outils, de prompts, de podcasts, de leçons vidéo et d'études de cas réels — plus un coaching personnalisé offert par notre équipe de découverte de projet via notre programme \"Destiny\"." },
        { q: "Serai-je accompagné ?", a: "\"Destiny\" est un programme conçu pour sélectionner un nombre limité de porteurs de projet et les accompagner avec des conseils techniques, des avis et un soutien financier. (Sur invitation uniquement.)" }
      ],
      money: [
        { q: "Puis-je vraiment gagner de l'argent en 7 jours ?", a: "Possible — pas garanti, mais tout à fait possible ! Pendant les 7 jours : 15 % ont généré plus de 1 000 $, 58 % ont généré plus de 500 $. ⚠️ Note : les personnes qui gagnent le plus pendant le programme ne sont pas nécessairement celles qui gagnent pendant le défi lui-même. Nous fournissons un enseignement que vous devez comprendre et appliquer de manière adaptée à votre propre projet. Nous nous engageons à vous donner le maximum d'outils et de techniques pour réussir — mais pas un chèque de paie !" },
        { q: "Combien peut-on gagner ?", a: "Si votre projet est une boutique Etsy vendant des colliers de coquillages, vous pouvez raisonnablement espérer quelques centaines à quelques milliers de dollars par mois. Si votre projet est de lancer un SaaS, une application mobile ou une plateforme crypto/boursière dans plusieurs pays — on parle de chiffres de revenus très différents. La réponse honnête : 1) tout dépend du projet, 2) de votre investissement, et 3) qu'avez-vous à perdre en essayant ?" },
        { q: "Le revenu est-il garanti ?", a: "Absolument pas — à moins d'être sur notre liste de paie." },
        { q: "Y a-t-il des frais cachés ?", a: "Non. Le défi est totalement gratuit. Le programme complet a un prix unique." },
        { q: "Des outils payants sont-ils requis ?", a: "Tous les logiciels, plateformes, outils web, hébergement, etc. en dehors de notre plateforme peuvent être requis selon les cours que vous choisissez et restent à la charge de l'apprenant." },
        { q: "Dois-je déclarer mes revenus ?", a: "Tout revenu généré par nos enseignements ou autrement doit être déclaré à l'administration fiscale de votre pays." },
        { q: "Combien d'heures par jour ?", a: "Nous recommandons aux étudiants de suivre nos cours pendant au moins 30 à 45 minutes par jour pour maximiser leur progression." },
        { q: "Puis-je faire cela parallèlement à un emploi ?", a: "Absolument — vous pouvez continuer votre emploi actuel tout en préparant tranquillement votre transition." },
        { q: "Est-il possible de rester anonyme ?", a: "Oui. Nous proposons des enseignements sur le lancement de votre business digital dans un format sans visage. Nous collectons le minimum d'informations sur vous, stockées en interne — votre nom de famille et votre numéro de téléphone ne sont jamais partagés avec notre personnel. Vous avez également la possibilité de payer en crypto pour plus de confidentialité." },
        { q: "Est-ce accessible à tout le monde ?", a: "Oui, n'importe qui peut nous rejoindre — peu importe le milieu social, l'orientation sexuelle ou l'origine." }
      ],
      process: [
        { q: "Est-ce que je vais construire un vrai business ?", a: "Oui — mais c'est ultimement votre choix. Vous pouvez tester votre idée ou vous lancer à fond et construire votre véritable entreprise, seul ou accompagné." }
      ],
      after: [
        { q: "Que se passe-t-il après les 7 jours ?", a: "Après avoir réussi le défi, le programme complet détaillé et l'offre (y compris le prix) vous seront présentés. Vous pourrez alors choisir de nous rejoindre ou non. Si vous choisissez de partir, vos données seront supprimées et vous devrez recommencer le défi si vous changez d'avis plus tard." },
        { q: "Serai-je contacté ?", a: "Vous ne serez contacté que si vous êtes invité au programme \"Destiny\" et/ou par nos partenaires prestataires de services si vous en avez fait la demande spécifique." },
        { q: "Quelle est la durée de l'accès ?", a: "Une fois inscrit, l'accès est soit d'un an, soit à vie, selon l'option choisie." },
        { q: "Existe-t-il une communauté privée ?", a: "Oui." },
        { q: "Puis-je faire du réseautage ?", a: "Oui." },
        { q: "Y a-t-il un support ?", a: "Oui — nous proposons deux niveaux de support : l'un propulsé par l'IA, et un second via un système de tickets dirigés vers des agents humains." },
        { q: "Y a-t-il des mises à jour ?", a: "Nous mettons à jour notre contenu environ toutes les trois semaines avec de nouveaux cours." }
      ],
      security: [
        { q: "Mes données sont-elles protégées ?", a: "Nous hébergeons notre site via Hostinger et traitons les transactions via Stripe." }
      ]
    },
    finalCTA: {
      title: 'LE MOMENT D\'AGIR EST MAINTENANT.',
      community: 'REJOIGNEZ LA COMMUNAUTÉ DE 12,024+ ALUMNI',
      successRate: '93% DE TAUX DE RÉUSSITE DÈS LE MOIS 1'
    },
    feedback: {
      badge: 'NOUS VOUS ÉCOUTONS',
      title: 'COMMENT POUVONS-NOUS NOUS AMÉLIORER ?',
      subtitle: 'Votre expérience nous tient à cœur. Veuillez partager vos commentaires privés ci-dessous afin que nous puissions continuer à affiner le protocole. Vous êtes toujours inscrit à notre tirage au sort mensuel.',
      nameLabel: 'VOTRE NOM',
      feedbackLabel: 'VOTRE COMMENTAIRE',
      placeholder: 'Qu\'est-ce qui aurait pu être mieux ?',
      submitBtn: 'SOUMETTRE LE COMMENTAIRE ET PARTICIPER AU TIRAGE →',
      successTitle: 'MERCI POUR VOTRE COMMENTAIRE.',
      successDesc: 'Nous avons reçu vos commentaires et votre participation au tirage au sort mensuel. Notre équipe examine cela pour nous assurer de fournir la meilleure expérience possible.',
      returnBtn: 'RETOUR AU TABLEAU DE BORD'
    },
    giveaway: {
      badge: 'JEU CONCOURS : COMMENT ÇA MARCHE',
      title: 'GAGNEZ LE DERNIER iPHONE & MACBOOK PRO',
      steps: [
        { title: 'DÉMARREZ LE DÉFI', desc: 'Rejoignez le défi gratuit de 7 jours pour devenir un membre vérifié de la cohorte.' },
        { title: 'TERMINEZ LE PROTOCOLE', desc: 'Exécutez les tâches quotidiennes. Votre portail d\'entrée unique se débloque au Jour 7.' },
        { title: 'PARTICIPEZ AU TIRAGE', desc: 'Les liens d\'instruction sont fournis dans votre tableau de bord professionnel.' }
      ],
      participationInstructions: 'Les liens d\'entrée directs sont fournis exclusivement dans le tableau de bord de la cohorte pour maintenir l\'intégrité de notre communauté.',
      disclaimer: '* LES GAGNANTS SONT ANNONCÉS LE 1ER DE CHAQUE MOIS PAR EMAIL.',
      privateLink: 'VOTRE EXPÉRIENCE ÉTAIT DIFFÉRENTE ? LAISSEZ UN COMMENTAIRE PRIVÉ À LA PLACE →',
      backLink: '← Retour au tunnel'
    }
  },
  trinity: {
    urgencyBar: `🔥 Seulement ${dynamicStats.spotsRemaining} places restantes — Le défi se remplit vite`,
    hero: {
      title: 'VOTRE PREMIER REVENU DIGITAL EN 5 JOURS.',
      subtitle: 'Le défi pour créer une offre irrésistible et attirer vos premiers clients.',
    },
    nav: {
      challenge: 'Le défi de 5 jours',
      programme: 'À propos du programme complet',
      freePdfBtn: 'PDF Gratuit',
    },
    giveawayBadge: {
      line1: 'DERNIÈRE ÉTAPE : SÉLECTION DU GAGNANT',
      line2: 'TIRAGE EN COURS'
    },
    ctaPrimary: 'REJOINDRE LE DÉFI GRATUIT →',
    ctaInvestment: 'INVESTISSEMENT : {currency}0,00 / TOTALEMENT GRATUIT',
    valueStackHeader: 'VALEUR TOTALE DU DÉFI : {currency}599+',
    programmeTitle: 'LA SUITE DU PROGRAMME...',
    faqCategories: {
      general: "Général",
      money: "Argent & Revenus",
      process: "Fonctionnement",
      after: "Après le Défi",
      security: "Sécurité & Confiance"
    },
    faq: {
      general: [
        { q: "Qu'est-ce que le Défi de 5 Jours exactement ?", a: "C'est une opportunité unique de 5 jours pour recevoir un programme éducatif conçu pour auditer les participants — évaluer leur situation actuelle, déterminer où ils en sont dans leur parcours de business digital, fournir tous les outils fondamentaux essentiels pour structurer leur(s) idée(s) et tracer les prochaines étapes concrètes pour passer à l'action." },
        { q: "À qui s'adresse ce programme ?", a: "Aux entrepreneurs débutants, aux entrepreneurs novices dans le monde du numérique et aux entrepreneurs digitaux souhaitant développer des compétences supplémentaires." },
        { q: "Le défi est-il vraiment gratuit ?", a: "Oui, le défi est complètement gratuit — aucun frais, aucune carte de crédit requise." },
        { q: "Pourquoi ce programme est-il gratuit ?", a: "La raison est simple : grâce au défi, vous obtenez une image claire de votre situation avant de partir dans toutes les directions. Une situation claire, une idée claire, un chemin tracé — vous organisez vos pensées, vos besoins et vos objectifs pour que votre projet ait les meilleures chances de succès. De plus, vous découvrez la qualité de notre enseignement et de notre méthode avant de vous engager. ⚠️ Important ! Réussir le défi vous donne accès au programme, mais l'accès est également conditionné par votre niveau d'engagement moral et de détermination." },
        { q: "Qui est derrière ce programme ?", a: "Notre équipe de développement pédagogique est composée de 30 personnes réparties dans 5 pays (USA, UK, France, etc.), spécialisées dans la création de contenu éducatif pour business digital depuis 2020." },
        { q: "Combien de temps dure le défi ?", a: "Le défi dure 5 jours calendaires consécutifs. Chaque session nécessite un investissement de 30 minutes à 1 heure par jour." },
        { q: "Puis-je commencer à tout moment ?", a: "Oui — dès que vous soumettez vos coordonnées, le défi commence." },
        { q: "Y a-t-il une date limite d'inscription ?", a: "Aucune date limite, mais le nombre d'entrées mensuelles est limité. Vous pourriez trouver une page vous informant que les inscriptions pour le mois en cours sont fermées — dans ce cas, vous pouvez rejoindre la liste d'attente ou attendre le mois suivant. Cette limite nous permet de soutenir chaque profil avec un haut niveau de qualité." },
        { q: "Le programme est-il adapté aux débutants ?", a: "Absolument — nous commençons avec tout le monde depuis le tout début." },
        { q: "Ai-je besoin d'une expérience en affaires ?", a: "Pas du tout. Un peu de bon sens est tout ce dont vous avez besoin pour comprendre et appliquer les leçons fournies. Parfois, être débutant est un avantage — pas de mauvaises habitudes ou de croyances limitantes à désapprendre." },
        { q: "Est-ce disponible en français ou dans d'autres langues ?", a: "Le contenu écrit est traduit selon vos préférences. Le contenu audio, les podcasts et les vidéos ne sont malheureusement pas encore disponibles dans d'autres langues que l'anglais." },
        { q: "Est-ce disponible en anglais ?", a: "Oui, tout le contenu est disponible en anglais." },
        { q: "Est-ce accessible sur mobile ?", a: "Oui, notre plateforme est entièrement responsive et accessible depuis n'importe quel appareil mobile." },
        { q: "Puis-je suivre le programme à mon propre rythme ?", a: "Oui — une fois inscrit, vous pouvez suivre le programme à votre rythme, avec un accès illimité, partout et à tout moment." },
        { q: "Qu'est-ce que je vais apprendre concrètement ?", a: "Notre programme comprend plus de 900 cours, modèles, mini-cours, checklists, cahiers d'exercices, contenus audio et vidéos répartis dans plus de 47 catégories dans divers domaines." },
        { q: "S'agit-il d'un cours ou d'un coaching ?", a: "C'est un programme avec des centaines de cours, d'outils, de prompts, de podcasts, de leçons vidéo et d'études de cas réels — plus un coaching personnalisé offert par notre équipe de découverte de projet via notre programme \"Destiny\"." },
        { q: "Serai-je accompagné ?", a: "\"Destiny\" est un programme conçu pour sélectionner un nombre limité de porteurs de projet et les accompagner avec des conseils techniques, des avis et un soutien financier. (Sur invitation uniquement.)" }
      ],
      money: [
        { q: "Puis-je vraiment gagner de l'argent en 5 jours ?", a: "Possible — pas garanti, mais tout à fait possible ! Pendant les 5 jours : 15 % ont généré plus de 1 000 $, 58 % ont généré plus de 500 $. ⚠️ Note : les personnes qui gagnent le plus pendant le programme ne sont pas nécessairement celles qui gagnent pendant le défi lui-même. Nous fournissons un enseignement que vous devez comprendre et appliquer de manière adaptée à votre propre projet. Nous nous engageons à vous donner le maximum d'outils et de techniques pour réussir — mais pas un chèque de paie !" },
        { q: "Combien peut-on gagner ?", a: "Si votre projet est une boutique Etsy vendant des colliers de coquillages, vous pouvez raisonnablement espérer quelques centaines à quelques milliers de dollars par mois. Si votre projet est de lancer un SaaS, une application mobile ou une plateforme crypto/boursière dans plusieurs pays — on parle de chiffres de revenus très différents. La réponse honnête : 1) tout dépend du projet, 2) de votre investissement, et 3) qu'avez-vous à perdre en essayant ?" },
        { q: "Le revenu est-il garanti ?", a: "Absolument pas — à moins d'être sur notre liste de paie." },
        { q: "Y a-t-il des frais cachés ?", a: "Non. Le défi est totalement gratuit. Le programme complet a un prix unique." },
        { q: "Des outils payants sont-ils requis ?", a: "Tous les logiciels, plateformes, outils web, hébergement, etc. en dehors de notre plateforme peuvent être requis selon les cours que vous choisissez et restent à la charge de l'apprenant." },
        { q: "Dois-je déclarer mes revenus ?", a: "Tout revenu généré par nos enseignements ou autrement doit être déclaré à l'administration fiscale de votre pays." },
        { q: "Combien d'heures par jour ?", a: "Nous recommandons aux étudiants de suivre nos cours pendant au moins 30 à 45 minutes par jour pour maximiser leur progression." },
        { q: "Puis-je faire cela parallèlement à un emploi ?", a: "Absolument — vous pouvez continuer votre emploi actuel tout en préparant tranquillement votre transition." },
        { q: "Est-il possible de rester anonyme ?", a: "Oui. Nous proposons des enseignements sur le lancement de votre business digital dans un format sans visage. Nous collectons le minimum d'informations sur vous, stockées en interne — votre nom de famille et votre numéro de téléphone ne sont jamais partagés avec notre personnel. Vous avez également la possibilité de payer en crypto pour plus de confidentialité." },
        { q: "Est-ce accessible à tout le monde ?", a: "Oui, n'importe qui peut nous rejoindre — peu importe le milieu social, l'orientation sexuelle ou l'origine." }
      ],
      process: [
        { q: "Est-ce que je vais construire un vrai business ?", a: "Oui — mais c'est ultimement votre choix. Vous pouvez tester votre idée ou vous lancer à fond et construire votre véritable entreprise, seul ou accompagné." }
      ],
      after: [
        { q: "Que se passe-t-il après les 5 jours ?", a: "Après avoir réussi le défi, le programme complet détaillé et l'offre (y compris le prix) vous seront présentés. Vous pourrez alors choisir de nous rejoindre ou non. Si vous choisissez de partir, vos données seront supprimées et vous devrez recommencer le défi si vous changez d'avis plus tard." },
        { q: "Serai-je contacté ?", a: "Vous ne serez contacté que si vous êtes invité au programme \"Destiny\" et/ou par nos partenaires prestataires de services si vous en avez fait la demande spécifique." },
        { q: "Quelle est la durée de l'accès ?", a: "Une fois inscrit, l'accès est soit d'un an, soit à vie, selon l'option choisie." },
        { q: "Existe-t-il une communauté privée ?", a: "Oui." },
        { q: "Puis-je faire du réseautage ?", a: "Oui." },
        { q: "Y a-t-il un support ?", a: "Oui — nous proposons deux niveaux de support : l'un propulsé par l'IA, et un second via un système de tickets dirigés vers des agents humains." },
        { q: "Y a-t-il des mises à jour ?", a: "Nous mettons à jour notre contenu environ toutes les trois semaines avec de nouveaux cours." }
      ],
      security: [
        { q: "Mes données sont-elles protégées ?", a: "Nous hébergeons notre site via Hostinger et traitons les transactions via Stripe." }
      ]
    },
    paths: {
      pathATitle: 'VOIE A : LA LUTTE CONSTANTE',
      pathAContent: 'Continuez ce que vous faites, en espérant un résultat différent.',
      pathBTitle: 'VOIE B : ACTION DÉCISIVE',
      pathBContent: 'Rejoignez plus de 12,024 femmes qui ont décidé de réécrire leur futur digital.'
    },
    finalCTA: {
      freePdfBtn: 'PDF Gratuit'
    },
    enrollPopup: {
      firstName: 'PRÉNOM',
      email: 'VOTRE MEILLEUR EMAIL',
      secure: 'CONNEXION SÉCURISÉE | AUCUNE CARTE REQUISE'
    },
    feedback: {
      badge: 'COMMUNICATIONS PRIVÉES',
      title: 'Feedback',
      titleSuffix: 'direct.',
      subtitle: '"Votre expérience compte. Si notre standard d\'excellence n\'a pas été atteint, je veux l\'entendre directement de votre part. Ce feedback reste entre nous."',
      feedbackLabel: 'Commentaire Détaillé',
      placeholder: 'Que pourrions-nous avoir fait de mieux ?',
      emailLabel: 'Email Privé',
      nameLabel: 'Nom Complet',
      submitBtn: 'Envoyer le Feedback Privé →',
      disclaimer: '* Trinity examine personnellement tous les commentaires critiques chaque semaine.',
      backToGiveaway: 'Retour au tirage au sort →'
    },
    giveaway: {
      badge: 'JEU CONCOURS : ÉTAPE FINALE',
      title: 'Vous êtes à',
      titleSuffix: 'un pas',
      titleEnd: 'de la sélection.',
      subtitle: '"Notre communauté prospère grâce à l\'intégrité. Votre portail d\'entrée unique est fourni après le défi pour garantir des avis vérifiés."',
      steps: [
        { n: '01', t: 'Terminez avec succès notre défi d\'autorité de 5 jours' },
        { n: '02', t: 'Accédez au portail de tirage via votre tableau de bord Alumni' },
        { n: '03', t: 'Suivez les instructions sécurisées fournies pour participer' }
      ],
      participationInstructions: 'L\'accès au lien est réservé aux participants vérifiés. Consultez votre e-mail de bienvenue pour vos identifiants.',
      disclaimer: '* Les gagnants sont annoncés le 1er de chaque mois via email privé.',
      privateLink: 'Laissez un commentaire privé à la place →',
      backLink: '← Retour au tunnel'
    }
  },
  common: {
    startedThisMonth: 'ONT COMMENCÉ CE MOIS-CI',
    joinedProgramme: 'ONT REJOINT LE PROGRAMME',
    backToHome: 'Retour à l\'accueil',
  }
};
