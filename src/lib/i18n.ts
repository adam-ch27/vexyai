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

export type AnyKey = TranslationKey | ExtraKey;

export function translateAny(language: LanguageCode, key: AnyKey) {
  const base = translations[language] as Record<string, string> | undefined;
  if (base && key in base) return base[key] as string;
  return translateExtra(language, key as ExtraKey);
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

/* ---------------- extended keys (v2 features) ---------------- */
export type ExtraKey =
  | "soon"
  | "history"
  | "newChat"
  | "noHistory"
  | "deleteChat"
  | "untitled"
  | "openHistory"
  | "record"
  | "recordingNow"
  | "stopRecord"
  | "transcribing"
  | "micDenied"
  | "attachHint"
  | "reading"
  | "extracted"
  | "fileKindError"
  | "otherFormats"
  | "mapImageBtn"
  | "mapImageLoading"
  | "mapImageError"
  | "downloadMap"
  | "accountLead"
  | "sessionsCount"
  | "savedResources"
  | "localOnly"
  | "clearAll"
  | "cleared"
  | "emailUs"
  | "responseTime"
  | "backHome"
  | "suggestions"
  | "moreIdeas"
  | "quizHard"
  | "trueFalse"
  | "examples"
  | "mistakes"
  | "analogy"
  | "studyPlan"
  | "connections"
  | "shortNote"
  | "exam"
  | "vocab"
  | "builtBy"
  | "footerLine"
  | "openSidebar"
  | "closeSidebar";

type Extra = Record<ExtraKey, string>;

const extras: Record<LanguageCode, Extra> = {
  ar: {
    soon: "قريبًا", history: "سجل المحادثات", newChat: "محادثة جديدة", noHistory: "لا توجد محادثات بعد",
    deleteChat: "حذف المحادثة", untitled: "محادثة بدون عنوان", openHistory: "فتح سجل المحادثات",
    record: "تسجيل صوتي", recordingNow: "جارٍ التسجيل…", stopRecord: "إيقاف وإرسال",
    transcribing: "جارٍ تحويل الصوت إلى نص…", micDenied: "تعذر الوصول إلى الميكروفون",
    attachHint: "PDF أو صورة أو نص", reading: "جارٍ قراءة الملف…", extracted: "تم استخراج نص الدرس",
    fileKindError: "الملفات المدعومة: PDF وصور ونصوص",
    otherFormats: "جرّب صيغة أخرى لنفس الدرس",
    mapImageBtn: "أنشئ صورة للخريطة الذهنية", mapImageLoading: "جارٍ رسم الخريطة…",
    mapImageError: "تعذر إنشاء صورة الخريطة", downloadMap: "تحميل الصورة",
    accountLead: "كل ما يخص حسابك ومحادثاتك المحفوظة على هذا الجهاز.",
    sessionsCount: "عدد المحادثات", savedResources: "الموارد المولّدة",
    localOnly: "بياناتك محفوظة محليًا على جهازك فقط، ولا تُرسل إلى أي خادم.",
    clearAll: "حذف كل السجل", cleared: "تم حذف السجل",
    emailUs: "راسلنا", responseTime: "نرد عادة خلال 24 ساعة.", backHome: "العودة للرئيسية",
    suggestions: "اقتراحات للمتابعة", moreIdeas: "أفكار أخرى", quizHard: "أسئلة صعبة تتحداني",
    trueFalse: "أسئلة صح أو خطأ", examples: "أعطني أمثلة واقعية", mistakes: "الأخطاء الشائعة في هذا الدرس",
    analogy: "اشرحه بتشبيه بسيط", studyPlan: "ضع لي خطة مذاكرة", connections: "اربطه بدروس أخرى",
    shortNote: "لخّصه في خمس أسطر", exam: "أسئلة على نمط الامتحان", vocab: "قائمة مصطلحات مع تعريفات",
    builtBy: "من إنشاء", footerLine: "StudyWise AI — مساحتك الذكية للمذاكرة بست لغات.",
    openSidebar: "إظهار المحادثات", closeSidebar: "إخفاء المحادثات",
  },
  fr: {
    soon: "Bientôt", history: "Historique", newChat: "Nouvelle conversation", noHistory: "Aucune conversation",
    deleteChat: "Supprimer", untitled: "Conversation sans titre", openHistory: "Ouvrir l'historique",
    record: "Enregistrement vocal", recordingNow: "Enregistrement…", stopRecord: "Arrêter et envoyer",
    transcribing: "Transcription en cours…", micDenied: "Accès au micro refusé",
    attachHint: "PDF, image ou texte", reading: "Lecture du fichier…", extracted: "Texte de la leçon extrait",
    fileKindError: "Formats acceptés : PDF, images et texte",
    otherFormats: "Essayez un autre format pour la même leçon",
    mapImageBtn: "Générer l'image de la carte", mapImageLoading: "Dessin de la carte…",
    mapImageError: "Impossible de générer l'image", downloadMap: "Télécharger l'image",
    accountLead: "Tout sur votre compte et vos conversations enregistrées sur cet appareil.",
    sessionsCount: "Conversations", savedResources: "Ressources générées",
    localOnly: "Vos données restent en local sur votre appareil.",
    clearAll: "Effacer l'historique", cleared: "Historique effacé",
    emailUs: "Écrivez-nous", responseTime: "Réponse sous 24 h en général.", backHome: "Retour à l'accueil",
    suggestions: "Suggestions", moreIdeas: "Autres idées", quizHard: "Des questions difficiles",
    trueFalse: "Questions vrai ou faux", examples: "Donne des exemples concrets", mistakes: "Les erreurs fréquentes",
    analogy: "Explique avec une analogie", studyPlan: "Propose un plan de révision", connections: "Relie à d'autres leçons",
    shortNote: "Résume en cinq lignes", exam: "Questions type examen", vocab: "Glossaire des termes",
    builtBy: "Créé par", footerLine: "StudyWise AI — votre espace intelligent de révision en six langues.",
    openSidebar: "Afficher les conversations", closeSidebar: "Masquer les conversations",
  },
  en: {
    soon: "Coming soon", history: "Chat history", newChat: "New chat", noHistory: "No conversations yet",
    deleteChat: "Delete", untitled: "Untitled chat", openHistory: "Open chat history",
    record: "Voice recording", recordingNow: "Recording…", stopRecord: "Stop and send",
    transcribing: "Transcribing audio…", micDenied: "Microphone access denied",
    attachHint: "PDF, image or text", reading: "Reading file…", extracted: "Lesson text extracted",
    fileKindError: "Supported files: PDF, images and text",
    otherFormats: "Try another format for the same lesson",
    mapImageBtn: "Generate mind map image", mapImageLoading: "Drawing the map…",
    mapImageError: "Could not generate the image", downloadMap: "Download image",
    accountLead: "Everything about your account and the chats saved on this device.",
    sessionsCount: "Conversations", savedResources: "Generated resources",
    localOnly: "Your data stays local on this device only.",
    clearAll: "Clear history", cleared: "History cleared",
    emailUs: "Email us", responseTime: "We usually reply within 24 hours.", backHome: "Back home",
    suggestions: "Suggestions", moreIdeas: "More ideas", quizHard: "Challenge me with hard questions",
    trueFalse: "True or false questions", examples: "Give me real-world examples", mistakes: "Common mistakes here",
    analogy: "Explain it with an analogy", studyPlan: "Build me a study plan", connections: "Link it to other topics",
    shortNote: "Summarise it in five lines", exam: "Exam-style questions", vocab: "Glossary of key terms",
    builtBy: "Built by", footerLine: "StudyWise AI — your smart study space in six languages.",
    openSidebar: "Show conversations", closeSidebar: "Hide conversations",
  },
  de: {
    soon: "Demnächst", history: "Chatverlauf", newChat: "Neuer Chat", noHistory: "Noch keine Unterhaltungen",
    deleteChat: "Löschen", untitled: "Chat ohne Titel", openHistory: "Chatverlauf öffnen",
    record: "Sprachaufnahme", recordingNow: "Aufnahme…", stopRecord: "Stoppen und senden",
    transcribing: "Audio wird transkribiert…", micDenied: "Kein Zugriff auf das Mikrofon",
    attachHint: "PDF, Bild oder Text", reading: "Datei wird gelesen…", extracted: "Lektionstext extrahiert",
    fileKindError: "Unterstützt: PDF, Bilder und Text",
    otherFormats: "Anderes Format für dieselbe Lektion",
    mapImageBtn: "Mindmap-Bild erstellen", mapImageLoading: "Karte wird gezeichnet…",
    mapImageError: "Bild konnte nicht erstellt werden", downloadMap: "Bild herunterladen",
    accountLead: "Alles zu deinem Konto und den auf diesem Gerät gespeicherten Chats.",
    sessionsCount: "Unterhaltungen", savedResources: "Erstellte Ressourcen",
    localOnly: "Deine Daten bleiben lokal auf diesem Gerät.",
    clearAll: "Verlauf löschen", cleared: "Verlauf gelöscht",
    emailUs: "Schreib uns", responseTime: "Antwort meist innerhalb von 24 Stunden.", backHome: "Zur Startseite",
    suggestions: "Vorschläge", moreIdeas: "Weitere Ideen", quizHard: "Stelle mir schwere Fragen",
    trueFalse: "Richtig-oder-falsch-Fragen", examples: "Gib mir echte Beispiele", mistakes: "Häufige Fehler dazu",
    analogy: "Erkläre es mit einem Vergleich", studyPlan: "Erstelle einen Lernplan", connections: "Verbinde es mit anderen Themen",
    shortNote: "Fasse es in fünf Zeilen", exam: "Prüfungsähnliche Fragen", vocab: "Glossar der Fachbegriffe",
    builtBy: "Erstellt von", footerLine: "StudyWise AI — dein smarter Lernraum in sechs Sprachen.",
    openSidebar: "Unterhaltungen zeigen", closeSidebar: "Unterhaltungen ausblenden",
  },
  es: {
    soon: "Próximamente", history: "Historial", newChat: "Nueva conversación", noHistory: "Aún no hay conversaciones",
    deleteChat: "Eliminar", untitled: "Conversación sin título", openHistory: "Abrir historial",
    record: "Grabación de voz", recordingNow: "Grabando…", stopRecord: "Detener y enviar",
    transcribing: "Transcribiendo audio…", micDenied: "Sin acceso al micrófono",
    attachHint: "PDF, imagen o texto", reading: "Leyendo archivo…", extracted: "Texto de la lección extraído",
    fileKindError: "Formatos admitidos: PDF, imágenes y texto",
    otherFormats: "Prueba otro formato con la misma lección",
    mapImageBtn: "Generar imagen del mapa", mapImageLoading: "Dibujando el mapa…",
    mapImageError: "No se pudo generar la imagen", downloadMap: "Descargar imagen",
    accountLead: "Todo sobre tu cuenta y las conversaciones guardadas en este dispositivo.",
    sessionsCount: "Conversaciones", savedResources: "Recursos generados",
    localOnly: "Tus datos se guardan solo en este dispositivo.",
    clearAll: "Borrar historial", cleared: "Historial borrado",
    emailUs: "Escríbenos", responseTime: "Solemos responder en 24 horas.", backHome: "Volver al inicio",
    suggestions: "Sugerencias", moreIdeas: "Más ideas", quizHard: "Ponme preguntas difíciles",
    trueFalse: "Preguntas de verdadero o falso", examples: "Dame ejemplos reales", mistakes: "Errores comunes aquí",
    analogy: "Explícalo con una analogía", studyPlan: "Créame un plan de estudio", connections: "Relaciónalo con otros temas",
    shortNote: "Resúmelo en cinco líneas", exam: "Preguntas tipo examen", vocab: "Glosario de términos clave",
    builtBy: "Creado por", footerLine: "StudyWise AI — tu espacio inteligente de estudio en seis idiomas.",
    openSidebar: "Mostrar conversaciones", closeSidebar: "Ocultar conversaciones",
  },
  pt: {
    soon: "Em breve", history: "Histórico", newChat: "Nova conversa", noHistory: "Ainda sem conversas",
    deleteChat: "Excluir", untitled: "Conversa sem título", openHistory: "Abrir histórico",
    record: "Gravação de voz", recordingNow: "Gravando…", stopRecord: "Parar e enviar",
    transcribing: "Transcrevendo áudio…", micDenied: "Sem acesso ao microfone",
    attachHint: "PDF, imagem ou texto", reading: "Lendo arquivo…", extracted: "Texto da lição extraído",
    fileKindError: "Formatos aceitos: PDF, imagens e texto",
    otherFormats: "Experimente outro formato para a mesma lição",
    mapImageBtn: "Gerar imagem do mapa", mapImageLoading: "Desenhando o mapa…",
    mapImageError: "Não foi possível gerar a imagem", downloadMap: "Baixar imagem",
    accountLead: "Tudo sobre sua conta e as conversas salvas neste dispositivo.",
    sessionsCount: "Conversas", savedResources: "Recursos gerados",
    localOnly: "Seus dados ficam apenas neste dispositivo.",
    clearAll: "Limpar histórico", cleared: "Histórico limpo",
    emailUs: "Fale conosco", responseTime: "Respondemos em até 24 horas.", backHome: "Voltar ao início",
    suggestions: "Sugestões", moreIdeas: "Mais ideias", quizHard: "Faça perguntas difíceis",
    trueFalse: "Perguntas de verdadeiro ou falso", examples: "Dê exemplos reais", mistakes: "Erros comuns aqui",
    analogy: "Explique com uma analogia", studyPlan: "Crie um plano de estudo", connections: "Ligue a outros temas",
    shortNote: "Resuma em cinco linhas", exam: "Perguntas estilo prova", vocab: "Glossário de termos",
    builtBy: "Criado por", footerLine: "StudyWise AI — seu espaço inteligente de estudo em seis idiomas.",
    openSidebar: "Mostrar conversas", closeSidebar: "Ocultar conversas",
  },
};

export function translateExtra(language: LanguageCode, key: ExtraKey) {
  return extras[language]?.[key] ?? extras.ar[key] ?? key;
}
