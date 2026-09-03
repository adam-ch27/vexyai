export const languages = [
  { code: "ar", label: "العربية", dir: "rtl", name: "Arabic" },
  { code: "fr", label: "Français", dir: "ltr", name: "French" },
  { code: "en", label: "English", dir: "ltr", name: "English" },
  { code: "de", label: "Deutsch", dir: "ltr", name: "German" },
  { code: "es", label: "Español", dir: "ltr", name: "Spanish" },
  { code: "pt", label: "Português", dir: "ltr", name: "Portuguese" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export type TranslationKey =
  | "home"
  | "login"
  | "start"
  | "studySpace"
  | "heroLead"
  | "heroAccent"
  | "heroTail"
  | "heroSub"
  | "perk1"
  | "perk2"
  | "perk3"
  | "account"
  | "support"
  | "about"
  | "faq"
  | "helpCenter"
  | "privacy"
  | "terms"
  | "openMenu"
  | "language"
  | "newSession"
  | "help"
  | "choose"
  | "send"
  | "addFile"
  | "newMessage"
  | "followup"
  | "edit"
  | "showMore"
  | "hide"
  | "you"
  | "assistant"
  | "thinking"
  | "regenerate"
  | "retry"
  | "placeholder"
  | "summaryTitle"
  | "summaryDesc"
  | "flashcardsTitle"
  | "flashcardsDesc"
  | "mindmapTitle"
  | "mindmapDesc"
  | "quiz"
  | "assessment"
  | "childExplain"
  | "terms2"
  | "pickFormat"
  | "tooShort"
  | "genError"
  | "fileTooLarge"
  | "fileLoaded"
  | "fileTextOnly"
  | "quickReview"
  | "question"
  | "answer";

type Dict = Record<TranslationKey, string>;

const ar: Dict = {
  home: "الرئيسية", login: "تسجيل الدخول", start: "ابدأ جلسة مذاكرة", studySpace: "مساحتك الهادئة للتعلم",
  heroLead: "اجعل مذاكرتك", heroAccent: "أسهل، أذكى", heroTail: "وأقرب لك.",
  heroSub: "أدخل درسك، ودع StudyWise يرتّب لك الأفكار ويحوّلها إلى طريقة مراجعة تناسبك.",
  perk1: "ملخصات واضحة", perk2: "بطاقات تفاعلية", perk3: "خرائط تربط الأفكار",
  account: "حسابي", support: "الدعم والتواصل", about: "معلومات عنا", faq: "الأسئلة الشائعة", helpCenter: "مركز المساعدة",
  privacy: "سياسة الخصوصية", terms: "شروط الاستخدام", openMenu: "فتح القائمة", language: "اللغة",
  newSession: "جلسة مذاكرة جديدة", help: "كيف أساعدك في مذاكرتك؟", choose: "اختر طريقة العمل، ثم أرسل الدرس وسأرتّبه لك.",
  send: "إرسال", addFile: "إضافة ملف", newMessage: "رسالتك الجديدة", followup: "هل ترغب في متابعة أخرى؟",
  edit: "تعديل الرسالة", showMore: "عرض المزيد", hide: "إخفاء التفاصيل", you: "أنت", assistant: "المساعد الدراسي",
  thinking: "جارٍ تحليل الدرس وترتيب الأفكار...", regenerate: "إعادة التوليد", retry: "إعادة المحاولة",
  placeholder: "اكتب طلبك أو الصق نص الدرس هنا...",
  summaryTitle: "لخّص لي هذا الدرس", summaryDesc: "نقاط واضحة وسريعة للمراجعة",
  flashcardsTitle: "أنشئ بطاقات فلاش", flashcardsDesc: "أسئلة وأجوبة لاختبار نفسك",
  mindmapTitle: "ارسم خريطة ذهنية", mindmapDesc: "اربط الأفكار والموضوعات",
  quiz: "اختبرني بأسئلة متعددة الخيارات", assessment: "أنشئ اختبار تقييم قصير",
  childExplain: "اشرحه لي كما لو كنت طفلًا", terms2: "استخرج أهم المصطلحات",
  pickFormat: "اختر نوع المورد أولًا", tooShort: "أضف نصًا أطول قليلًا لنحصل على نتيجة مفيدة",
  genError: "تعذر إنشاء الإجابة. يمكنك إعادة المحاولة.", fileTooLarge: "الحد الأقصى للملف 5 ميجابايت",
  fileLoaded: "تم تحميل محتوى الملف", fileTextOnly: "يمكنك حاليًا رفع ملفات نصية فقط",
  quickReview: "مراجعة سريعة", question: "السؤال", answer: "الإجابة",
};

const fr: Dict = {
  home: "Accueil", login: "Se connecter", start: "Commencer une session", studySpace: "Votre espace calme pour apprendre",
  heroLead: "Rendez vos révisions", heroAccent: "plus simples, plus malignes", heroTail: "et plus proches de vous.",
  heroSub: "Saisissez votre leçon et laissez StudyWise organiser les idées dans le format qui vous convient.",
  perk1: "Résumés clairs", perk2: "Cartes interactives", perk3: "Cartes mentales reliées",
  account: "Mon compte", support: "Assistance", about: "À propos", faq: "Questions fréquentes", helpCenter: "Centre d'aide",
  privacy: "Confidentialité", terms: "Conditions d'utilisation", openMenu: "Ouvrir le menu", language: "Langue",
  newSession: "Nouvelle session", help: "Comment puis-je vous aider à étudier ?", choose: "Choisissez un format, puis envoyez votre leçon.",
  send: "Envoyer", addFile: "Ajouter un fichier", newMessage: "Votre nouveau message", followup: "Souhaitez-vous continuer ?",
  edit: "Modifier le message", showMore: "Afficher plus", hide: "Masquer les détails", you: "Vous", assistant: "Assistant d'étude",
  thinking: "Analyse de la leçon en cours...", regenerate: "Régénérer", retry: "Réessayer",
  placeholder: "Écrivez votre demande ou collez votre leçon ici...",
  summaryTitle: "Résume cette leçon", summaryDesc: "Des points clairs pour réviser vite",
  flashcardsTitle: "Crée des cartes mémoire", flashcardsDesc: "Questions et réponses pour t'entraîner",
  mindmapTitle: "Dessine une carte mentale", mindmapDesc: "Relie les idées et les thèmes",
  quiz: "Teste-moi avec un QCM", assessment: "Crée une évaluation courte",
  childExplain: "Explique-le comme à un enfant", terms2: "Extrais les termes essentiels",
  pickFormat: "Choisissez d'abord un format", tooShort: "Ajoutez un texte un peu plus long pour un bon résultat",
  genError: "Impossible de générer la réponse. Réessayez.", fileTooLarge: "Taille maximale : 5 Mo",
  fileLoaded: "Contenu du fichier chargé", fileTextOnly: "Seuls les fichiers texte sont acceptés pour l'instant",
  quickReview: "Révision rapide", question: "Question", answer: "Réponse",
};

const en: Dict = {
  home: "Home", login: "Sign in", start: "Start a study session", studySpace: "Your calm space to learn",
  heroLead: "Make studying", heroAccent: "easier, smarter", heroTail: "and closer to you.",
  heroSub: "Paste your lesson and let StudyWise organise the ideas into the review format that fits you.",
  perk1: "Clear summaries", perk2: "Interactive cards", perk3: "Maps that connect ideas",
  account: "My account", support: "Support", about: "About us", faq: "FAQ", helpCenter: "Help center",
  privacy: "Privacy policy", terms: "Terms of use", openMenu: "Open menu", language: "Language",
  newSession: "New study session", help: "How can I help you study?", choose: "Pick a format, then send your lesson.",
  send: "Send", addFile: "Add file", newMessage: "Your new message", followup: "Want to keep going?",
  edit: "Edit message", showMore: "Show more", hide: "Hide details", you: "You", assistant: "Study assistant",
  thinking: "Analysing the lesson and organising ideas...", regenerate: "Regenerate", retry: "Try again",
  placeholder: "Write your request or paste the lesson text here...",
  summaryTitle: "Summarise this lesson", summaryDesc: "Clear points for fast review",
  flashcardsTitle: "Create flashcards", flashcardsDesc: "Questions and answers to test yourself",
  mindmapTitle: "Draw a mind map", mindmapDesc: "Connect ideas and topics",
  quiz: "Quiz me with multiple choice", assessment: "Create a short assessment",
  childExplain: "Explain it like I'm a child", terms2: "Extract the key terms",
  pickFormat: "Choose a format first", tooShort: "Add a little more text for a useful result",
  genError: "Could not generate the answer. Please try again.", fileTooLarge: "Maximum file size is 5 MB",
  fileLoaded: "File content loaded", fileTextOnly: "Only text files are supported for now",
  quickReview: "Quick review", question: "Question", answer: "Answer",
};

const de: Dict = {
  home: "Startseite", login: "Anmelden", start: "Lernsitzung starten", studySpace: "Dein ruhiger Lernraum",
  heroLead: "Mach dein Lernen", heroAccent: "einfacher und klüger", heroTail: "und näher an dir.",
  heroSub: "Füge deine Lektion ein und StudyWise ordnet die Inhalte in dein passendes Lernformat.",
  perk1: "Klare Zusammenfassungen", perk2: "Interaktive Karten", perk3: "Verknüpfte Ideenkarten",
  account: "Mein Konto", support: "Support", about: "Über uns", faq: "Häufige Fragen", helpCenter: "Hilfecenter",
  privacy: "Datenschutz", terms: "Nutzungsbedingungen", openMenu: "Menü öffnen", language: "Sprache",
  newSession: "Neue Lernsitzung", help: "Wie kann ich dir beim Lernen helfen?", choose: "Wähle ein Format und sende deine Lektion.",
  send: "Senden", addFile: "Datei hinzufügen", newMessage: "Deine neue Nachricht", followup: "Möchtest du weitermachen?",
  edit: "Nachricht bearbeiten", showMore: "Mehr anzeigen", hide: "Details ausblenden", you: "Du", assistant: "Lernassistent",
  thinking: "Lektion wird analysiert...", regenerate: "Neu erstellen", retry: "Erneut versuchen",
  placeholder: "Schreibe deine Anfrage oder füge den Lektionstext ein...",
  summaryTitle: "Fasse diese Lektion zusammen", summaryDesc: "Klare Punkte zum schnellen Wiederholen",
  flashcardsTitle: "Erstelle Lernkarten", flashcardsDesc: "Fragen und Antworten zum Selbsttest",
  mindmapTitle: "Zeichne eine Mindmap", mindmapDesc: "Verbinde Ideen und Themen",
  quiz: "Teste mich mit Multiple Choice", assessment: "Erstelle einen kurzen Test",
  childExplain: "Erkläre es wie einem Kind", terms2: "Extrahiere die wichtigsten Begriffe",
  pickFormat: "Wähle zuerst ein Format", tooShort: "Füge etwas mehr Text für ein gutes Ergebnis hinzu",
  genError: "Antwort konnte nicht erstellt werden. Bitte erneut versuchen.", fileTooLarge: "Maximale Dateigröße: 5 MB",
  fileLoaded: "Dateiinhalt geladen", fileTextOnly: "Derzeit werden nur Textdateien unterstützt",
  quickReview: "Schnelle Wiederholung", question: "Frage", answer: "Antwort",
};

const es: Dict = {
  home: "Inicio", login: "Iniciar sesión", start: "Comenzar sesión de estudio", studySpace: "Tu espacio tranquilo para aprender",
  heroLead: "Haz que estudiar sea", heroAccent: "más fácil y más listo", heroTail: "y más cercano a ti.",
  heroSub: "Pega tu lección y deja que StudyWise organice las ideas en el formato de repaso que prefieras.",
  perk1: "Resúmenes claros", perk2: "Tarjetas interactivas", perk3: "Mapas que conectan ideas",
  account: "Mi cuenta", support: "Soporte", about: "Sobre nosotros", faq: "Preguntas frecuentes", helpCenter: "Centro de ayuda",
  privacy: "Política de privacidad", terms: "Términos de uso", openMenu: "Abrir menú", language: "Idioma",
  newSession: "Nueva sesión", help: "¿Cómo puedo ayudarte a estudiar?", choose: "Elige un formato y envía tu lección.",
  send: "Enviar", addFile: "Añadir archivo", newMessage: "Tu nuevo mensaje", followup: "¿Quieres continuar?",
  edit: "Editar mensaje", showMore: "Mostrar más", hide: "Ocultar detalles", you: "Tú", assistant: "Asistente de estudio",
  thinking: "Analizando la lección...", regenerate: "Regenerar", retry: "Reintentar",
  placeholder: "Escribe tu petición o pega el texto de la lección aquí...",
  summaryTitle: "Resume esta lección", summaryDesc: "Puntos claros para repasar rápido",
  flashcardsTitle: "Crea tarjetas de memoria", flashcardsDesc: "Preguntas y respuestas para practicar",
  mindmapTitle: "Dibuja un mapa mental", mindmapDesc: "Conecta ideas y temas",
  quiz: "Ponme a prueba con opción múltiple", assessment: "Crea una evaluación corta",
  childExplain: "Explícamelo como a un niño", terms2: "Extrae los términos clave",
  pickFormat: "Elige primero un formato", tooShort: "Añade un texto algo más largo para un buen resultado",
  genError: "No se pudo generar la respuesta. Inténtalo de nuevo.", fileTooLarge: "Tamaño máximo: 5 MB",
  fileLoaded: "Contenido del archivo cargado", fileTextOnly: "Por ahora solo se admiten archivos de texto",
  quickReview: "Repaso rápido", question: "Pregunta", answer: "Respuesta",
};

const pt: Dict = {
  home: "Início", login: "Entrar", start: "Iniciar sessão de estudo", studySpace: "Seu espaço tranquilo para aprender",
  heroLead: "Torne seus estudos", heroAccent: "mais simples e mais espertos", heroTail: "e mais perto de você.",
  heroSub: "Cole sua lição e deixe o StudyWise organizar as ideias no formato de revisão ideal para você.",
  perk1: "Resumos claros", perk2: "Cartões interativos", perk3: "Mapas que ligam ideias",
  account: "Minha conta", support: "Suporte", about: "Sobre nós", faq: "Perguntas frequentes", helpCenter: "Central de ajuda",
  privacy: "Política de privacidade", terms: "Termos de uso", openMenu: "Abrir menu", language: "Idioma",
  newSession: "Nova sessão", help: "Como posso ajudar você a estudar?", choose: "Escolha um formato e envie sua lição.",
  send: "Enviar", addFile: "Adicionar arquivo", newMessage: "Sua nova mensagem", followup: "Deseja continuar?",
  edit: "Editar mensagem", showMore: "Mostrar mais", hide: "Ocultar detalhes", you: "Você", assistant: "Assistente de estudo",
  thinking: "Analisando a lição...", regenerate: "Gerar novamente", retry: "Tentar novamente",
  placeholder: "Escreva seu pedido ou cole o texto da lição aqui...",
  summaryTitle: "Resuma esta lição", summaryDesc: "Pontos claros para revisar rápido",
  flashcardsTitle: "Crie cartões de memória", flashcardsDesc: "Perguntas e respostas para testar você",
  mindmapTitle: "Desenhe um mapa mental", mindmapDesc: "Conecte ideias e temas",
  quiz: "Me teste com múltipla escolha", assessment: "Crie uma avaliação curta",
  childExplain: "Explique como para uma criança", terms2: "Extraia os termos principais",
  pickFormat: "Escolha um formato primeiro", tooShort: "Adicione um texto um pouco maior para um bom resultado",
  genError: "Não foi possível gerar a resposta. Tente novamente.", fileTooLarge: "Tamanho máximo: 5 MB",
  fileLoaded: "Conteúdo do arquivo carregado", fileTextOnly: "No momento, apenas arquivos de texto são aceitos",
  quickReview: "Revisão rápida", question: "Pergunta", answer: "Resposta",
};

export const translations: Record<LanguageCode, Dict> = { ar, fr, en, de, es, pt };

export function translate(language: LanguageCode, key: TranslationKey) {
  return translations[language]?.[key] ?? ar[key] ?? key;
}

export function languageInfo(code: LanguageCode) {
  return languages.find((language) => language.code === code) ?? languages[0];
}

export const studyQuotes: Record<LanguageCode, { text: string; author: string }[]> = {
  ar: [
    { text: "التعلّم كنز يتبع صاحبه أينما ذهب.", author: "مثل عربي" },
    { text: "لا يتوقف النجاح على القوة، بل على الاستمرار.", author: "صمويل جونسون" },
    { text: "من سار على الدرب وصل.", author: "حكمة عربية" },
    { text: "النجاح هو مجموع جهود صغيرة تتكرر كل يوم.", author: "روبرت كولير" },
  ],
  fr: [
    { text: "Le savoir est un trésor qui suit son maître partout.", author: "Proverbe" },
    { text: "Le succès ne dépend pas de la force, mais de la persévérance.", author: "Samuel Johnson" },
    { text: "Le succès est la somme de petits efforts répétés chaque jour.", author: "Robert Collier" },
    { text: "Qui avance sur le chemin finit par arriver.", author: "Sagesse arabe" },
  ],
  en: [
    { text: "Knowledge is a treasure that follows its owner everywhere.", author: "Proverb" },
    { text: "Success depends not on strength, but on perseverance.", author: "Samuel Johnson" },
    { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
    { text: "Whoever walks the path will arrive.", author: "Arabic wisdom" },
  ],
  de: [
    { text: "Wissen ist ein Schatz, der seinem Besitzer überallhin folgt.", author: "Sprichwort" },
    { text: "Erfolg hängt nicht von Stärke ab, sondern von Ausdauer.", author: "Samuel Johnson" },
    { text: "Erfolg ist die Summe kleiner Anstrengungen, Tag für Tag.", author: "Robert Collier" },
    { text: "Wer den Weg geht, kommt an.", author: "Arabische Weisheit" },
  ],
  es: [
    { text: "El saber es un tesoro que sigue a su dueño a todas partes.", author: "Proverbio" },
    { text: "El éxito no depende de la fuerza, sino de la constancia.", author: "Samuel Johnson" },
    { text: "El éxito es la suma de pequeños esfuerzos repetidos cada día.", author: "Robert Collier" },
    { text: "Quien anda el camino, llega.", author: "Sabiduría árabe" },
  ],
  pt: [
    { text: "O saber é um tesouro que acompanha o seu dono por toda parte.", author: "Provérbio" },
    { text: "O sucesso não depende da força, mas da persistência.", author: "Samuel Johnson" },
    { text: "O sucesso é a soma de pequenos esforços repetidos todos os dias.", author: "Robert Collier" },
    { text: "Quem segue o caminho, chega.", author: "Sabedoria árabe" },
  ],
};

export function nextQuoteIndex(current: number, total: number) {
  return (current + 1) % total;
}
